#!/usr/bin/env python3
"""
EXE Analyzer - A tool for analyzing Windows PE executables.
Select an .exe file and see what it does: metadata, imports, sections, behavior analysis, and strings.
"""

import hashlib
import os
import struct
import tkinter as tk
from datetime import datetime, timezone
from tkinter import filedialog, messagebox, ttk

try:
    import pefile
except ImportError:
    pefile = None


# ---------------------------------------------------------------------------
# Behavior detection mappings
# ---------------------------------------------------------------------------

BEHAVIOR_CATEGORIES = {
    "Networking / Internet": {
        "dlls": [
            "ws2_32.dll", "wsock32.dll", "wininet.dll", "winhttp.dll",
            "urlmon.dll", "dnsapi.dll", "mswsock.dll", "iphlpapi.dll",
        ],
        "apis": [
            "WSAStartup", "socket", "connect", "send", "recv", "bind",
            "listen", "accept", "InternetOpenA", "InternetOpenW",
            "InternetOpenUrlA", "InternetOpenUrlW", "InternetReadFile",
            "HttpOpenRequestA", "HttpOpenRequestW", "HttpSendRequestA",
            "HttpSendRequestW", "URLDownloadToFileA", "URLDownloadToFileW",
            "WinHttpOpen", "WinHttpConnect", "WinHttpOpenRequest",
            "WinHttpSendRequest", "WinHttpReceiveResponse",
            "getaddrinfo", "gethostbyname", "inet_addr",
        ],
        "description": "Performs network operations (connects to servers, downloads files, sends/receives data)",
    },
    "File System Operations": {
        "dlls": [],
        "apis": [
            "CreateFileA", "CreateFileW", "ReadFile", "WriteFile",
            "DeleteFileA", "DeleteFileW", "CopyFileA", "CopyFileW",
            "MoveFileA", "MoveFileW", "MoveFileExA", "MoveFileExW",
            "FindFirstFileA", "FindFirstFileW", "FindNextFileA", "FindNextFileW",
            "GetFileAttributesA", "GetFileAttributesW",
            "SetFileAttributesA", "SetFileAttributesW",
            "GetTempPathA", "GetTempPathW", "GetTempFileNameA", "GetTempFileNameW",
            "CreateDirectoryA", "CreateDirectoryW",
            "RemoveDirectoryA", "RemoveDirectoryW",
        ],
        "description": "Creates, reads, writes, copies, moves or deletes files and directories",
    },
    "Registry Access": {
        "dlls": [],
        "apis": [
            "RegOpenKeyA", "RegOpenKeyW", "RegOpenKeyExA", "RegOpenKeyExW",
            "RegCreateKeyA", "RegCreateKeyW", "RegCreateKeyExA", "RegCreateKeyExW",
            "RegSetValueA", "RegSetValueW", "RegSetValueExA", "RegSetValueExW",
            "RegDeleteKeyA", "RegDeleteKeyW", "RegDeleteValueA", "RegDeleteValueW",
            "RegQueryValueExA", "RegQueryValueExW",
            "RegEnumKeyExA", "RegEnumKeyExW",
            "RegCloseKey",
        ],
        "description": "Reads or modifies the Windows registry (settings, autorun, configuration)",
    },
    "Process / Thread Management": {
        "dlls": [],
        "apis": [
            "CreateProcessA", "CreateProcessW", "OpenProcess", "TerminateProcess",
            "CreateThread", "CreateRemoteThread", "CreateRemoteThreadEx",
            "SuspendThread", "ResumeThread", "ExitProcess",
            "GetCurrentProcess", "GetCurrentProcessId",
            "GetCurrentThread", "GetCurrentThreadId",
            "NtCreateThreadEx",
        ],
        "description": "Creates, opens, or terminates processes and threads",
    },
    "Memory Manipulation": {
        "dlls": [],
        "apis": [
            "VirtualAlloc", "VirtualAllocEx", "VirtualFree", "VirtualFreeEx",
            "VirtualProtect", "VirtualProtectEx", "VirtualQuery", "VirtualQueryEx",
            "ReadProcessMemory", "WriteProcessMemory",
            "NtAllocateVirtualMemory", "NtWriteVirtualMemory",
            "HeapCreate", "HeapAlloc", "HeapFree",
        ],
        "description": "Allocates, reads, writes, or protects memory in own or other processes",
    },
    "DLL / Code Injection": {
        "dlls": [],
        "apis": [
            "LoadLibraryA", "LoadLibraryW", "LoadLibraryExA", "LoadLibraryExW",
            "GetProcAddress", "FreeLibrary",
            "VirtualAllocEx", "WriteProcessMemory", "CreateRemoteThread",
            "NtMapViewOfSection", "RtlCreateUserThread",
            "QueueUserAPC", "SetThreadContext",
        ],
        "description": "Loads DLLs dynamically or injects code into other processes",
    },
    "Cryptography": {
        "dlls": ["advapi32.dll", "bcrypt.dll", "ncrypt.dll", "crypt32.dll"],
        "apis": [
            "CryptAcquireContextA", "CryptAcquireContextW",
            "CryptEncrypt", "CryptDecrypt",
            "CryptCreateHash", "CryptHashData", "CryptDeriveKey",
            "CryptGenKey", "CryptGenRandom",
            "CryptImportKey", "CryptExportKey",
            "BCryptOpenAlgorithmProvider", "BCryptEncrypt", "BCryptDecrypt",
            "BCryptGenerateSymmetricKey", "BCryptGenRandom",
            "CertOpenStore", "CertFindCertificateInStore",
        ],
        "description": "Uses cryptographic functions (encryption, decryption, hashing, certificates)",
    },
    "Keyboard / Input Hooking": {
        "dlls": [],
        "apis": [
            "SetWindowsHookExA", "SetWindowsHookExW",
            "GetAsyncKeyState", "GetKeyState", "GetKeyboardState",
            "RegisterHotKey", "RegisterRawInputDevices",
            "GetRawInputData", "MapVirtualKeyA", "MapVirtualKeyW",
        ],
        "description": "Intercepts keyboard input or sets system-wide hooks (possible keylogger behavior)",
    },
    "Screen Capture / GUI Spy": {
        "dlls": [],
        "apis": [
            "BitBlt", "StretchBlt", "GetDC", "GetWindowDC",
            "CreateCompatibleDC", "CreateCompatibleBitmap",
            "PrintWindow", "GetDesktopWindow",
            "GetForegroundWindow", "GetWindowTextA", "GetWindowTextW",
            "EnumWindows", "FindWindowA", "FindWindowW",
        ],
        "description": "Captures screen contents, enumerates windows, or reads window titles",
    },
    "Service Management": {
        "dlls": [],
        "apis": [
            "OpenSCManagerA", "OpenSCManagerW",
            "CreateServiceA", "CreateServiceW",
            "OpenServiceA", "OpenServiceW",
            "StartServiceA", "StartServiceW",
            "ControlService", "DeleteService",
            "ChangeServiceConfigA", "ChangeServiceConfigW",
        ],
        "description": "Creates, starts, stops, or modifies Windows services",
    },
    "Anti-Debug / Anti-Analysis": {
        "dlls": [],
        "apis": [
            "IsDebuggerPresent", "CheckRemoteDebuggerPresent",
            "NtQueryInformationProcess", "OutputDebugStringA", "OutputDebugStringW",
            "GetTickCount", "GetTickCount64", "QueryPerformanceCounter",
            "NtSetInformationThread", "NtQuerySystemInformation",
        ],
        "description": "Detects debuggers or analysis environments (anti-reverse-engineering techniques)",
    },
    "Clipboard Access": {
        "dlls": [],
        "apis": [
            "OpenClipboard", "GetClipboardData", "SetClipboardData",
            "EmptyClipboard", "CloseClipboard",
        ],
        "description": "Reads or modifies the system clipboard",
    },
    "Shell / Command Execution": {
        "dlls": ["shell32.dll"],
        "apis": [
            "ShellExecuteA", "ShellExecuteW",
            "ShellExecuteExA", "ShellExecuteExW",
            "WinExec", "system", "_wsystem",
            "CreateProcessA", "CreateProcessW",
        ],
        "description": "Executes shell commands or launches other programs",
    },
    "Privilege Escalation": {
        "dlls": [],
        "apis": [
            "AdjustTokenPrivileges", "OpenProcessToken",
            "LookupPrivilegeValueA", "LookupPrivilegeValueW",
            "ImpersonateLoggedOnUser", "DuplicateTokenEx",
            "SetTokenInformation",
        ],
        "description": "Adjusts process privileges or impersonates other users",
    },
}


# ---------------------------------------------------------------------------
# Analysis functions
# ---------------------------------------------------------------------------

def compute_hashes(filepath):
    """Compute MD5, SHA1, SHA256 hashes of a file."""
    md5 = hashlib.md5()
    sha1 = hashlib.sha1()
    sha256 = hashlib.sha256()
    with open(filepath, "rb") as f:
        while True:
            chunk = f.read(65536)
            if not chunk:
                break
            md5.update(chunk)
            sha1.update(chunk)
            sha256.update(chunk)
    return md5.hexdigest(), sha1.hexdigest(), sha256.hexdigest()


def get_file_metadata(filepath):
    """Get basic file metadata."""
    stat = os.stat(filepath)
    md5, sha1, sha256 = compute_hashes(filepath)
    return {
        "File Name": os.path.basename(filepath),
        "File Path": filepath,
        "File Size": format_size(stat.st_size),
        "Created": datetime.fromtimestamp(stat.st_ctime, tz=timezone.utc).strftime("%Y-%m-%d %H:%M:%S UTC"),
        "Modified": datetime.fromtimestamp(stat.st_mtime, tz=timezone.utc).strftime("%Y-%m-%d %H:%M:%S UTC"),
        "MD5": md5,
        "SHA1": sha1,
        "SHA256": sha256,
    }


def format_size(size_bytes):
    """Format bytes to human-readable size."""
    for unit in ["B", "KB", "MB", "GB"]:
        if size_bytes < 1024:
            return f"{size_bytes:.2f} {unit}"
        size_bytes /= 1024
    return f"{size_bytes:.2f} TB"


def analyze_pe(filepath):
    """Analyze PE file structure and return analysis results."""
    if pefile is None:
        return None, "pefile library is not installed. Run: pip install pefile"

    try:
        pe = pefile.PE(filepath)
    except pefile.PEFormatError as e:
        return None, f"Not a valid PE file: {e}"

    results = {}

    # Basic PE info
    pe_info = {}
    pe_info["Machine"] = _machine_type(pe.FILE_HEADER.Machine)
    pe_info["Number of Sections"] = str(pe.FILE_HEADER.NumberOfSections)
    pe_info["Compilation Timestamp"] = _format_timestamp(pe.FILE_HEADER.TimeDateStamp)
    pe_info["Entry Point"] = f"0x{pe.OPTIONAL_HEADER.AddressOfEntryPoint:08X}"
    pe_info["Image Base"] = f"0x{pe.OPTIONAL_HEADER.ImageBase:08X}"
    pe_info["Subsystem"] = _subsystem_name(pe.OPTIONAL_HEADER.Subsystem)

    is_dll = bool(pe.FILE_HEADER.Characteristics & 0x2000)
    is_exe = bool(pe.FILE_HEADER.Characteristics & 0x0002)
    pe_info["Type"] = "DLL" if is_dll else ("EXE" if is_exe else "Unknown")

    magic = pe.OPTIONAL_HEADER.Magic
    pe_info["Architecture"] = "64-bit (PE32+)" if magic == 0x20B else "32-bit (PE32)"

    results["pe_info"] = pe_info

    # Sections
    sections = []
    for section in pe.sections:
        name = section.Name.decode("utf-8", errors="replace").rstrip("\x00")
        sections.append({
            "Name": name,
            "Virtual Address": f"0x{section.VirtualAddress:08X}",
            "Virtual Size": f"0x{section.Misc_VirtualSize:08X}",
            "Raw Size": f"0x{section.SizeOfRawData:08X}",
            "Entropy": f"{section.get_entropy():.2f}",
            "Characteristics": _section_characteristics(section.Characteristics),
        })
    results["sections"] = sections

    # Imports
    imports = {}
    if hasattr(pe, "DIRECTORY_ENTRY_IMPORT"):
        for entry in pe.DIRECTORY_ENTRY_IMPORT:
            dll_name = entry.dll.decode("utf-8", errors="replace")
            funcs = []
            for imp in entry.imports:
                if imp.name:
                    funcs.append(imp.name.decode("utf-8", errors="replace"))
                else:
                    funcs.append(f"Ordinal #{imp.ordinal}")
            imports[dll_name] = funcs
    results["imports"] = imports

    # Exports
    exports = []
    if hasattr(pe, "DIRECTORY_ENTRY_EXPORT"):
        for exp in pe.DIRECTORY_ENTRY_EXPORT.symbols:
            if exp.name:
                exports.append(exp.name.decode("utf-8", errors="replace"))
            else:
                exports.append(f"Ordinal #{exp.ordinal}")
    results["exports"] = exports

    # Behavior analysis
    behaviors = detect_behaviors(imports)
    results["behaviors"] = behaviors

    # Resources
    resources = []
    if hasattr(pe, "DIRECTORY_ENTRY_RESOURCE"):
        _walk_resources(pe.DIRECTORY_ENTRY_RESOURCE, resources, pe)
    results["resources"] = resources

    pe.close()
    return results, None


def detect_behaviors(imports):
    """Detect probable behaviors based on imported APIs."""
    detected = []
    all_apis = set()
    all_dlls = set()

    for dll_name, funcs in imports.items():
        all_dlls.add(dll_name.lower())
        for func in funcs:
            all_apis.add(func)

    for category, info in BEHAVIOR_CATEGORIES.items():
        matched_apis = []
        matched_dlls = []

        for dll in info["dlls"]:
            if dll.lower() in all_dlls:
                matched_dlls.append(dll)

        for api in info["apis"]:
            if api in all_apis:
                matched_apis.append(api)

        if matched_apis or matched_dlls:
            detected.append({
                "category": category,
                "description": info["description"],
                "matched_apis": matched_apis,
                "matched_dlls": matched_dlls,
            })

    return detected


def extract_strings(filepath, min_length=6):
    """Extract ASCII and wide strings from binary."""
    strings = {"ascii": [], "wide": []}
    with open(filepath, "rb") as f:
        data = f.read()

    # ASCII strings
    current = []
    for byte in data:
        if 32 <= byte < 127:
            current.append(chr(byte))
        else:
            if len(current) >= min_length:
                strings["ascii"].append("".join(current))
            current = []
    if len(current) >= min_length:
        strings["ascii"].append("".join(current))

    # Wide (UTF-16LE) strings
    current = []
    i = 0
    while i < len(data) - 1:
        char = struct.unpack_from("<H", data, i)[0]
        if 32 <= char < 127:
            current.append(chr(char))
            i += 2
        else:
            if len(current) >= min_length:
                strings["wide"].append("".join(current))
            current = []
            i += 1
    if len(current) >= min_length:
        strings["wide"].append("".join(current))

    return strings


# ---------------------------------------------------------------------------
# Helper formatters
# ---------------------------------------------------------------------------

def _machine_type(machine):
    types = {0x14C: "x86 (i386)", 0x8664: "x64 (AMD64)", 0x1C0: "ARM", 0xAA64: "ARM64"}
    return types.get(machine, f"Unknown (0x{machine:04X})")


def _format_timestamp(ts):
    if ts == 0:
        return "N/A"
    try:
        return datetime.fromtimestamp(ts, tz=timezone.utc).strftime("%Y-%m-%d %H:%M:%S UTC")
    except (OSError, ValueError):
        return f"Invalid (0x{ts:08X})"


def _subsystem_name(subsystem):
    names = {
        0: "Unknown", 1: "Native", 2: "Windows GUI", 3: "Windows Console",
        5: "OS/2 Console", 7: "POSIX Console", 9: "Windows CE GUI",
        10: "EFI Application", 11: "EFI Boot Service Driver",
        12: "EFI Runtime Driver", 14: "Xbox",
    }
    return names.get(subsystem, f"Unknown ({subsystem})")


def _section_characteristics(chars):
    flags = []
    if chars & 0x00000020:
        flags.append("CODE")
    if chars & 0x00000040:
        flags.append("INITIALIZED_DATA")
    if chars & 0x00000080:
        flags.append("UNINITIALIZED_DATA")
    if chars & 0x20000000:
        flags.append("EXECUTE")
    if chars & 0x40000000:
        flags.append("READ")
    if chars & 0x80000000:
        flags.append("WRITE")
    return " | ".join(flags) if flags else "NONE"


def _walk_resources(resource_dir, results, pe, level=0, path=""):
    for entry in resource_dir.entries:
        entry_id = entry.name.string.decode("utf-8", errors="replace") if entry.name else str(entry.id)
        current_path = f"{path}/{entry_id}" if path else entry_id
        if hasattr(entry, "directory"):
            _walk_resources(entry.directory, results, pe, level + 1, current_path)
        else:
            data_entry = entry.data
            results.append({
                "Path": current_path,
                "Size": format_size(data_entry.struct.Size),
                "Offset": f"0x{data_entry.struct.OffsetToData:08X}",
            })


# ---------------------------------------------------------------------------
# GUI Application
# ---------------------------------------------------------------------------

class ExeAnalyzerApp:
    def __init__(self, root):
        self.root = root
        self.root.title("EXE Analyzer")
        self.root.geometry("1000x700")
        self.root.minsize(800, 500)
        self.root.configure(bg="#1e1e2e")

        self._apply_dark_theme()
        self._build_ui()

    def _apply_dark_theme(self):
        style = ttk.Style()
        style.theme_use("clam")

        bg = "#1e1e2e"
        fg = "#cdd6f4"
        accent = "#89b4fa"
        surface = "#313244"
        border = "#45475a"

        style.configure(".", background=bg, foreground=fg, bordercolor=border, focuscolor=accent)
        style.configure("TFrame", background=bg)
        style.configure("TLabel", background=bg, foreground=fg, font=("Segoe UI", 10))
        style.configure("Title.TLabel", font=("Segoe UI", 14, "bold"), foreground=accent)
        style.configure("Header.TLabel", font=("Segoe UI", 11, "bold"), foreground="#a6e3a1")
        style.configure("TButton", background=accent, foreground="#1e1e2e", font=("Segoe UI", 10, "bold"),
                         padding=(12, 6))
        style.map("TButton",
                   background=[("active", "#74c7ec"), ("pressed", "#74c7ec")],
                   foreground=[("active", "#1e1e2e")])
        style.configure("TNotebook", background=bg, bordercolor=border)
        style.configure("TNotebook.Tab", background=surface, foreground=fg, padding=(14, 6),
                         font=("Segoe UI", 10))
        style.map("TNotebook.Tab",
                   background=[("selected", accent)],
                   foreground=[("selected", "#1e1e2e")])
        style.configure("Treeview", background=surface, foreground=fg, fieldbackground=surface,
                         font=("Consolas", 10), rowheight=24, bordercolor=border)
        style.configure("Treeview.Heading", background=border, foreground=fg,
                         font=("Segoe UI", 10, "bold"))
        style.map("Treeview", background=[("selected", accent)], foreground=[("selected", "#1e1e2e")])

        self.colors = {"bg": bg, "fg": fg, "accent": accent, "surface": surface, "border": border}

    def _build_ui(self):
        # Top bar
        top_frame = ttk.Frame(self.root, padding=10)
        top_frame.pack(fill=tk.X)

        ttk.Label(top_frame, text="EXE Analyzer", style="Title.TLabel").pack(side=tk.LEFT)

        self.file_label = ttk.Label(top_frame, text="No file selected", font=("Consolas", 9))
        self.file_label.pack(side=tk.LEFT, padx=20)

        btn = ttk.Button(top_frame, text="Open .exe file...", command=self._open_file)
        btn.pack(side=tk.RIGHT)

        # Notebook for tabs
        self.notebook = ttk.Notebook(self.root, padding=5)
        self.notebook.pack(fill=tk.BOTH, expand=True, padx=10, pady=(0, 10))

        # Create tab frames
        self.tab_metadata = ttk.Frame(self.notebook)
        self.tab_pe_info = ttk.Frame(self.notebook)
        self.tab_sections = ttk.Frame(self.notebook)
        self.tab_imports = ttk.Frame(self.notebook)
        self.tab_exports = ttk.Frame(self.notebook)
        self.tab_behavior = ttk.Frame(self.notebook)
        self.tab_resources = ttk.Frame(self.notebook)
        self.tab_strings = ttk.Frame(self.notebook)

        self.notebook.add(self.tab_behavior, text="Behavior")
        self.notebook.add(self.tab_metadata, text="Metadata")
        self.notebook.add(self.tab_pe_info, text="PE Info")
        self.notebook.add(self.tab_sections, text="Sections")
        self.notebook.add(self.tab_imports, text="Imports")
        self.notebook.add(self.tab_exports, text="Exports")
        self.notebook.add(self.tab_resources, text="Resources")
        self.notebook.add(self.tab_strings, text="Strings")

        # Placeholder label
        self.placeholder = ttk.Label(
            self.tab_behavior,
            text="Open an .exe file to start analysis",
            style="Title.TLabel",
            anchor=tk.CENTER,
        )
        self.placeholder.pack(expand=True)

    def _open_file(self):
        filepath = filedialog.askopenfilename(
            title="Select an EXE file",
            filetypes=[
                ("Executable files", "*.exe *.dll *.sys *.ocx *.scr"),
                ("All files", "*.*"),
            ],
        )
        if not filepath:
            return

        self.file_label.config(text=filepath)
        self._analyze(filepath)

    def _analyze(self, filepath):
        # Clear all tabs
        for tab in [
            self.tab_metadata, self.tab_pe_info, self.tab_sections,
            self.tab_imports, self.tab_exports, self.tab_behavior,
            self.tab_resources, self.tab_strings,
        ]:
            for widget in tab.winfo_children():
                widget.destroy()

        # Metadata
        metadata = get_file_metadata(filepath)
        self._populate_key_value(self.tab_metadata, metadata, "File Metadata")

        # PE analysis
        results, error = analyze_pe(filepath)
        if error:
            ttk.Label(self.tab_pe_info, text=f"Error: {error}", foreground="#f38ba8").pack(padx=20, pady=20)
            return

        # PE info
        self._populate_key_value(self.tab_pe_info, results["pe_info"], "PE Header Information")

        # Sections
        self._populate_sections(results["sections"])

        # Imports
        self._populate_imports(results["imports"])

        # Exports
        self._populate_exports(results["exports"])

        # Behavior
        self._populate_behaviors(results["behaviors"])

        # Resources
        self._populate_resources(results["resources"])

        # Strings
        strings = extract_strings(filepath)
        self._populate_strings(strings)

        # Switch to behavior tab
        self.notebook.select(self.tab_behavior)

    def _populate_key_value(self, parent, data, title):
        ttk.Label(parent, text=title, style="Header.TLabel").pack(anchor=tk.W, padx=15, pady=(15, 5))

        frame = ttk.Frame(parent)
        frame.pack(fill=tk.BOTH, expand=True, padx=15, pady=5)

        tree = ttk.Treeview(frame, columns=("key", "value"), show="headings", height=len(data))
        tree.heading("key", text="Property")
        tree.heading("value", text="Value")
        tree.column("key", width=200, minwidth=150)
        tree.column("value", width=600, minwidth=300)

        for key, value in data.items():
            tree.insert("", tk.END, values=(key, value))

        scrollbar = ttk.Scrollbar(frame, orient=tk.VERTICAL, command=tree.yview)
        tree.configure(yscrollcommand=scrollbar.set)
        tree.pack(side=tk.LEFT, fill=tk.BOTH, expand=True)
        scrollbar.pack(side=tk.RIGHT, fill=tk.Y)

    def _populate_sections(self, sections):
        ttk.Label(self.tab_sections, text="PE Sections", style="Header.TLabel").pack(
            anchor=tk.W, padx=15, pady=(15, 5)
        )

        frame = ttk.Frame(self.tab_sections)
        frame.pack(fill=tk.BOTH, expand=True, padx=15, pady=5)

        columns = ("Name", "Virtual Address", "Virtual Size", "Raw Size", "Entropy", "Characteristics")
        tree = ttk.Treeview(frame, columns=columns, show="headings")
        for col in columns:
            tree.heading(col, text=col)
            tree.column(col, width=140, minwidth=80)

        for sec in sections:
            tree.insert("", tk.END, values=tuple(sec[c] for c in columns))

        scrollbar = ttk.Scrollbar(frame, orient=tk.VERTICAL, command=tree.yview)
        tree.configure(yscrollcommand=scrollbar.set)
        tree.pack(side=tk.LEFT, fill=tk.BOTH, expand=True)
        scrollbar.pack(side=tk.RIGHT, fill=tk.Y)

    def _populate_imports(self, imports):
        ttk.Label(self.tab_imports, text=f"Imported DLLs ({len(imports)})", style="Header.TLabel").pack(
            anchor=tk.W, padx=15, pady=(15, 5)
        )

        frame = ttk.Frame(self.tab_imports)
        frame.pack(fill=tk.BOTH, expand=True, padx=15, pady=5)

        tree = ttk.Treeview(frame, columns=("function",), show="tree headings")
        tree.heading("#0", text="DLL / Function")
        tree.heading("function", text="Details")
        tree.column("#0", width=400, minwidth=200)
        tree.column("function", width=400, minwidth=200)

        for dll_name, funcs in sorted(imports.items()):
            dll_node = tree.insert("", tk.END, text=f"{dll_name}  ({len(funcs)} functions)", open=False)
            for func in funcs:
                tree.insert(dll_node, tk.END, text=f"  {func}", values=("",))

        scrollbar = ttk.Scrollbar(frame, orient=tk.VERTICAL, command=tree.yview)
        tree.configure(yscrollcommand=scrollbar.set)
        tree.pack(side=tk.LEFT, fill=tk.BOTH, expand=True)
        scrollbar.pack(side=tk.RIGHT, fill=tk.Y)

    def _populate_exports(self, exports):
        ttk.Label(self.tab_exports, text=f"Exported Functions ({len(exports)})", style="Header.TLabel").pack(
            anchor=tk.W, padx=15, pady=(15, 5)
        )

        if not exports:
            ttk.Label(self.tab_exports, text="No exports found", foreground="#6c7086").pack(padx=20, pady=10)
            return

        frame = ttk.Frame(self.tab_exports)
        frame.pack(fill=tk.BOTH, expand=True, padx=15, pady=5)

        tree = ttk.Treeview(frame, columns=("name",), show="headings")
        tree.heading("name", text="Function Name")
        tree.column("name", width=600, minwidth=300)

        for name in exports:
            tree.insert("", tk.END, values=(name,))

        scrollbar = ttk.Scrollbar(frame, orient=tk.VERTICAL, command=tree.yview)
        tree.configure(yscrollcommand=scrollbar.set)
        tree.pack(side=tk.LEFT, fill=tk.BOTH, expand=True)
        scrollbar.pack(side=tk.RIGHT, fill=tk.Y)

    def _populate_behaviors(self, behaviors):
        ttk.Label(
            self.tab_behavior, text="Detected Behaviors", style="Header.TLabel"
        ).pack(anchor=tk.W, padx=15, pady=(15, 5))

        if not behaviors:
            ttk.Label(
                self.tab_behavior,
                text="No specific behaviors detected (file may have no imports or uses only basic APIs)",
                foreground="#6c7086",
            ).pack(padx=20, pady=10)
            return

        container = ttk.Frame(self.tab_behavior)
        container.pack(fill=tk.BOTH, expand=True, padx=15, pady=5)

        canvas = tk.Canvas(container, bg=self.colors["bg"], highlightthickness=0)
        scrollbar = ttk.Scrollbar(container, orient=tk.VERTICAL, command=canvas.yview)
        scroll_frame = ttk.Frame(canvas)

        scroll_frame.bind("<Configure>", lambda e: canvas.configure(scrollregion=canvas.bbox("all")))
        canvas.create_window((0, 0), window=scroll_frame, anchor=tk.NW)
        canvas.configure(yscrollcommand=scrollbar.set)

        # Bind mouse wheel
        def _on_mousewheel(event):
            canvas.yview_scroll(int(-1 * (event.delta / 120)), "units")

        def _on_mousewheel_linux(event):
            if event.num == 4:
                canvas.yview_scroll(-1, "units")
            elif event.num == 5:
                canvas.yview_scroll(1, "units")

        canvas.bind_all("<MouseWheel>", _on_mousewheel)
        canvas.bind_all("<Button-4>", _on_mousewheel_linux)
        canvas.bind_all("<Button-5>", _on_mousewheel_linux)

        for i, behavior in enumerate(behaviors):
            card = tk.Frame(scroll_frame, bg="#313244", padx=12, pady=10)
            card.pack(fill=tk.X, pady=4, padx=2)

            # Category name
            cat_label = tk.Label(
                card, text=behavior["category"],
                bg="#313244", fg="#f9e2af", font=("Segoe UI", 11, "bold"), anchor=tk.W,
            )
            cat_label.pack(fill=tk.X)

            # Description
            desc_label = tk.Label(
                card, text=behavior["description"],
                bg="#313244", fg="#cdd6f4", font=("Segoe UI", 9), anchor=tk.W, wraplength=900,
            )
            desc_label.pack(fill=tk.X, pady=(2, 4))

            # Matched DLLs
            if behavior["matched_dlls"]:
                dll_text = "DLLs: " + ", ".join(behavior["matched_dlls"])
                dll_label = tk.Label(
                    card, text=dll_text,
                    bg="#313244", fg="#89b4fa", font=("Consolas", 9), anchor=tk.W, wraplength=900,
                )
                dll_label.pack(fill=tk.X)

            # Matched APIs
            if behavior["matched_apis"]:
                api_text = "APIs: " + ", ".join(behavior["matched_apis"])
                api_label = tk.Label(
                    card, text=api_text,
                    bg="#313244", fg="#a6e3a1", font=("Consolas", 9), anchor=tk.W, wraplength=900,
                )
                api_label.pack(fill=tk.X)

        canvas.pack(side=tk.LEFT, fill=tk.BOTH, expand=True)
        scrollbar.pack(side=tk.RIGHT, fill=tk.Y)

    def _populate_resources(self, resources):
        ttk.Label(self.tab_resources, text=f"Resources ({len(resources)})", style="Header.TLabel").pack(
            anchor=tk.W, padx=15, pady=(15, 5)
        )

        if not resources:
            ttk.Label(self.tab_resources, text="No resources found", foreground="#6c7086").pack(padx=20, pady=10)
            return

        frame = ttk.Frame(self.tab_resources)
        frame.pack(fill=tk.BOTH, expand=True, padx=15, pady=5)

        columns = ("Path", "Size", "Offset")
        tree = ttk.Treeview(frame, columns=columns, show="headings")
        for col in columns:
            tree.heading(col, text=col)
            tree.column(col, width=250, minwidth=100)

        for res in resources:
            tree.insert("", tk.END, values=(res["Path"], res["Size"], res["Offset"]))

        scrollbar = ttk.Scrollbar(frame, orient=tk.VERTICAL, command=tree.yview)
        tree.configure(yscrollcommand=scrollbar.set)
        tree.pack(side=tk.LEFT, fill=tk.BOTH, expand=True)
        scrollbar.pack(side=tk.RIGHT, fill=tk.Y)

    def _populate_strings(self, strings):
        ttk.Label(
            self.tab_strings,
            text=f"Strings ({len(strings['ascii'])} ASCII, {len(strings['wide'])} Wide)",
            style="Header.TLabel",
        ).pack(anchor=tk.W, padx=15, pady=(15, 5))

        frame = ttk.Frame(self.tab_strings)
        frame.pack(fill=tk.BOTH, expand=True, padx=15, pady=5)

        tree = ttk.Treeview(frame, columns=("type", "string"), show="headings")
        tree.heading("type", text="Type")
        tree.heading("string", text="String")
        tree.column("type", width=80, minwidth=60)
        tree.column("string", width=800, minwidth=300)

        # Limit displayed strings to avoid freezing on huge files
        max_display = 5000
        count = 0
        for s in strings["ascii"]:
            if count >= max_display:
                break
            tree.insert("", tk.END, values=("ASCII", s))
            count += 1

        for s in strings["wide"]:
            if count >= max_display:
                break
            tree.insert("", tk.END, values=("Wide", s))
            count += 1

        if (len(strings["ascii"]) + len(strings["wide"])) > max_display:
            tree.insert("", tk.END, values=("...", f"Showing first {max_display} of {len(strings['ascii']) + len(strings['wide'])} strings"))

        scrollbar = ttk.Scrollbar(frame, orient=tk.VERTICAL, command=tree.yview)
        tree.configure(yscrollcommand=scrollbar.set)
        tree.pack(side=tk.LEFT, fill=tk.BOTH, expand=True)
        scrollbar.pack(side=tk.RIGHT, fill=tk.Y)


def main():
    if pefile is None:
        print("Warning: 'pefile' library is not installed.")
        print("Install it with: pip install pefile")
        print("The application will run but PE analysis will be limited.\n")

    root = tk.Tk()
    ExeAnalyzerApp(root)
    root.mainloop()


if __name__ == "__main__":
    main()

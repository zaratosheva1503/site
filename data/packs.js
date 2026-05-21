const PACKS = [
  {
    "id": "base",
    "title": "База",
    "emoji": "🆓",
    "cover": "assets/packs/base.svg",
    "free": true,
    "cards": [
      {
        "id": "base-москва",
        "name": "Москва",
        "image": "assets/cards/base-москва.svg"
      },
      {
        "id": "base-пляж",
        "name": "Пляж",
        "image": "assets/cards/base-пляж.svg"
      },
      {
        "id": "base-аэропорт",
        "name": "Аэропорт",
        "image": "assets/cards/base-аэропорт.svg"
      },
      {
        "id": "base-школа",
        "name": "Школа",
        "image": "assets/cards/base-школа.svg"
      },
      {
        "id": "base-больница",
        "name": "Больница",
        "image": "assets/cards/base-больница.svg"
      },
      {
        "id": "base-ресторан",
        "name": "Ресторан",
        "image": "assets/cards/base-ресторан.svg"
      },
      {
        "id": "base-космос",
        "name": "Космос",
        "image": "assets/cards/base-космос.svg"
      },
      {
        "id": "base-метро",
        "name": "Метро",
        "image": "assets/cards/base-метро.svg"
      },
      {
        "id": "base-стадион",
        "name": "Стадион",
        "image": "assets/cards/base-стадион.svg"
      },
      {
        "id": "base-банк",
        "name": "Банк",
        "image": "assets/cards/base-банк.svg"
      }
    ]
  },
  {
    "id": "locations",
    "title": "Локации",
    "emoji": "📍",
    "cover": "assets/packs/locations.svg",
    "free": false,
    "cards": [
      {
        "id": "locations-аэропорт",
        "name": "Аэропорт",
        "image": "assets/cards/locations-аэропорт.svg"
      },
      {
        "id": "locations-больница",
        "name": "Больница",
        "image": "assets/cards/locations-больница.svg"
      },
      {
        "id": "locations-полиция",
        "name": "Полиция",
        "image": "assets/cards/locations-полиция.svg"
      },
      {
        "id": "locations-школа",
        "name": "Школа",
        "image": "assets/cards/locations-школа.svg"
      },
      {
        "id": "locations-университет",
        "name": "Университет",
        "image": "assets/cards/locations-университет.svg"
      },
      {
        "id": "locations-пляж",
        "name": "Пляж",
        "image": "assets/cards/locations-пляж.svg"
      },
      {
        "id": "locations-отель",
        "name": "Отель",
        "image": "assets/cards/locations-отель.svg"
      },
      {
        "id": "locations-ресторан",
        "name": "Ресторан",
        "image": "assets/cards/locations-ресторан.svg"
      },
      {
        "id": "locations-кинотеатр",
        "name": "Кинотеатр",
        "image": "assets/cards/locations-кинотеатр.svg"
      },
      {
        "id": "locations-стадион",
        "name": "Стадион",
        "image": "assets/cards/locations-стадион.svg"
      },
      {
        "id": "locations-банк",
        "name": "Банк",
        "image": "assets/cards/locations-банк.svg"
      },
      {
        "id": "locations-музей",
        "name": "Музей",
        "image": "assets/cards/locations-музей.svg"
      },
      {
        "id": "locations-метро",
        "name": "Метро",
        "image": "assets/cards/locations-метро.svg"
      },
      {
        "id": "locations-супермаркет",
        "name": "Супермаркет",
        "image": "assets/cards/locations-супермаркет.svg"
      },
      {
        "id": "locations-парк",
        "name": "Парк",
        "image": "assets/cards/locations-парк.svg"
      }
    ]
  },
  {
    "id": "superheroes",
    "title": "Супергерои",
    "emoji": "🦸",
    "cover": "assets/packs/superheroes.svg",
    "free": false,
    "cards": [
      {
        "id": "superheroes-бэтмен",
        "name": "Бэтмен",
        "image": "assets/cards/superheroes-бэтмен.svg"
      },
      {
        "id": "superheroes-супермен",
        "name": "Супермен",
        "image": "assets/cards/superheroes-супермен.svg"
      },
      {
        "id": "superheroes-человек-паук",
        "name": "Человек-паук",
        "image": "assets/cards/superheroes-человек-паук.svg"
      },
      {
        "id": "superheroes-железный-человек",
        "name": "Железный человек",
        "image": "assets/cards/superheroes-железный-человек.svg"
      },
      {
        "id": "superheroes-капитан-америка",
        "name": "Капитан Америка",
        "image": "assets/cards/superheroes-капитан-америка.svg"
      },
      {
        "id": "superheroes-халк",
        "name": "Халк",
        "image": "assets/cards/superheroes-халк.svg"
      },
      {
        "id": "superheroes-тор",
        "name": "Тор",
        "image": "assets/cards/superheroes-тор.svg"
      },
      {
        "id": "superheroes-чудо-женщина",
        "name": "Чудо-женщина",
        "image": "assets/cards/superheroes-чудо-женщина.svg"
      },
      {
        "id": "superheroes-флэш",
        "name": "Флэш",
        "image": "assets/cards/superheroes-флэш.svg"
      },
      {
        "id": "superheroes-аквамен",
        "name": "Аквамен",
        "image": "assets/cards/superheroes-аквамен.svg"
      },
      {
        "id": "superheroes-росомаха",
        "name": "Росомаха",
        "image": "assets/cards/superheroes-росомаха.svg"
      },
      {
        "id": "superheroes-дэдпул",
        "name": "Дэдпул",
        "image": "assets/cards/superheroes-дэдпул.svg"
      },
      {
        "id": "superheroes-доктор-стрэндж",
        "name": "Доктор Стрэндж",
        "image": "assets/cards/superheroes-доктор-стрэндж.svg"
      },
      {
        "id": "superheroes-черная-пантера",
        "name": "Черная пантера",
        "image": "assets/cards/superheroes-черная-пантера.svg"
      },
      {
        "id": "superheroes-зеленый-фонарь",
        "name": "Зеленый фонарь",
        "image": "assets/cards/superheroes-зеленый-фонарь.svg"
      }
    ]
  },
  {
    "id": "cartoons",
    "title": "Мультфильмы",
    "emoji": "🎬",
    "cover": "assets/packs/cartoons.svg",
    "free": false,
    "cards": [
      {
        "id": "cartoons-шрек",
        "name": "Шрек",
        "image": "assets/cards/cartoons-шрек.svg"
      },
      {
        "id": "cartoons-губка-боб",
        "name": "Губка Боб",
        "image": "assets/cards/cartoons-губка-боб.svg"
      },
      {
        "id": "cartoons-том",
        "name": "Том",
        "image": "assets/cards/cartoons-том.svg"
      },
      {
        "id": "cartoons-джерри",
        "name": "Джерри",
        "image": "assets/cards/cartoons-джерри.svg"
      },
      {
        "id": "cartoons-симба",
        "name": "Симба",
        "image": "assets/cards/cartoons-симба.svg"
      },
      {
        "id": "cartoons-микки-маус",
        "name": "Микки Маус",
        "image": "assets/cards/cartoons-микки-маус.svg"
      },
      {
        "id": "cartoons-багз-банни",
        "name": "Багз Банни",
        "image": "assets/cards/cartoons-багз-банни.svg"
      },
      {
        "id": "cartoons-стич",
        "name": "Стич",
        "image": "assets/cards/cartoons-стич.svg"
      },
      {
        "id": "cartoons-пикачу",
        "name": "Пикачу",
        "image": "assets/cards/cartoons-пикачу.svg"
      },
      {
        "id": "cartoons-миньон",
        "name": "Миньон",
        "image": "assets/cards/cartoons-миньон.svg"
      },
      {
        "id": "cartoons-винни-пух",
        "name": "Винни-Пух",
        "image": "assets/cards/cartoons-винни-пух.svg"
      },
      {
        "id": "cartoons-эльза",
        "name": "Эльза",
        "image": "assets/cards/cartoons-эльза.svg"
      },
      {
        "id": "cartoons-молния-маккуин",
        "name": "Молния МакКуин",
        "image": "assets/cards/cartoons-молния-маккуин.svg"
      },
      {
        "id": "cartoons-кунг-фу-панда",
        "name": "Кунг-фу Панда",
        "image": "assets/cards/cartoons-кунг-фу-панда.svg"
      },
      {
        "id": "cartoons-босс-молокосос",
        "name": "Босс-молокосос",
        "image": "assets/cards/cartoons-босс-молокосос.svg"
      }
    ]
  },
  {
    "id": "memes",
    "title": "Мемы",
    "emoji": "😂",
    "cover": "assets/packs/memes.svg",
    "free": false,
    "cards": [
      {
        "id": "memes-ждун",
        "name": "Ждун",
        "image": "assets/cards/memes-ждун.svg"
      },
      {
        "id": "memes-гигачад",
        "name": "Гигачад",
        "image": "assets/cards/memes-гигачад.svg"
      },
      {
        "id": "memes-доге",
        "name": "Доге",
        "image": "assets/cards/memes-доге.svg"
      },
      {
        "id": "memes-пепе",
        "name": "Пепе",
        "image": "assets/cards/memes-пепе.svg"
      },
      {
        "id": "memes-нубик",
        "name": "Нубик",
        "image": "assets/cards/memes-нубик.svg"
      },
      {
        "id": "memes-кот-в-шоке",
        "name": "Кот в шоке",
        "image": "assets/cards/memes-кот-в-шоке.svg"
      },
      {
        "id": "memes-рикролл",
        "name": "Рикролл",
        "image": "assets/cards/memes-рикролл.svg"
      },
      {
        "id": "memes-троллфейс",
        "name": "Троллфейс",
        "image": "assets/cards/memes-троллфейс.svg"
      },
      {
        "id": "memes-стоникс",
        "name": "Стоникс",
        "image": "assets/cards/memes-стоникс.svg"
      },
      {
        "id": "memes-мистер-бист-мем",
        "name": "Мистер Бист мем",
        "image": "assets/cards/memes-мистер-бист-мем.svg"
      },
      {
        "id": "memes-скала-бровь",
        "name": "Скала бровь",
        "image": "assets/cards/memes-скала-бровь.svg"
      },
      {
        "id": "memes-плачущий-кот",
        "name": "Плачущий кот",
        "image": "assets/cards/memes-плачущий-кот.svg"
      },
      {
        "id": "memes-ок-бумер",
        "name": "Ок бумер",
        "image": "assets/cards/memes-ок-бумер.svg"
      },
      {
        "id": "memes-шрек-мем",
        "name": "Шрек мем",
        "image": "assets/cards/memes-шрек-мем.svg"
      },
      {
        "id": "memes-сигма",
        "name": "Сигма",
        "image": "assets/cards/memes-сигма.svg"
      }
    ]
  },
  {
    "id": "estrada",
    "title": "Эстрада",
    "emoji": "🎤",
    "cover": "assets/packs/estrada.svg",
    "free": false,
    "cards": [
      {
        "id": "estrada-алла-пугачёва",
        "name": "Алла Пугачёва",
        "image": "assets/cards/estrada-алла-пугачёва.svg"
      },
      {
        "id": "estrada-филипп-киркоров",
        "name": "Филипп Киркоров",
        "image": "assets/cards/estrada-филипп-киркоров.svg"
      },
      {
        "id": "estrada-дима-билан",
        "name": "Дима Билан",
        "image": "assets/cards/estrada-дима-билан.svg"
      },
      {
        "id": "estrada-полина-гагарина",
        "name": "Полина Гагарина",
        "image": "assets/cards/estrada-полина-гагарина.svg"
      },
      {
        "id": "estrada-сергей-лазарев",
        "name": "Сергей Лазарев",
        "image": "assets/cards/estrada-сергей-лазарев.svg"
      },
      {
        "id": "estrada-егор-крид",
        "name": "Егор Крид",
        "image": "assets/cards/estrada-егор-крид.svg"
      },
      {
        "id": "estrada-мот",
        "name": "Мот",
        "image": "assets/cards/estrada-мот.svg"
      },
      {
        "id": "estrada-zivert",
        "name": "Zivert",
        "image": "assets/cards/estrada-zivert.svg"
      },
      {
        "id": "estrada-jony",
        "name": "Jony",
        "image": "assets/cards/estrada-jony.svg"
      },
      {
        "id": "estrada-miyagi",
        "name": "Miyagi",
        "image": "assets/cards/estrada-miyagi.svg"
      },
      {
        "id": "estrada-баста",
        "name": "Баста",
        "image": "assets/cards/estrada-баста.svg"
      },
      {
        "id": "estrada-макс-корж",
        "name": "Макс Корж",
        "image": "assets/cards/estrada-макс-корж.svg"
      },
      {
        "id": "estrada-лолита",
        "name": "Лолита",
        "image": "assets/cards/estrada-лолита.svg"
      },
      {
        "id": "estrada-валерия",
        "name": "Валерия",
        "image": "assets/cards/estrada-валерия.svg"
      },
      {
        "id": "estrada-ани-лорак",
        "name": "Ани Лорак",
        "image": "assets/cards/estrada-ани-лорак.svg"
      }
    ]
  },
  {
    "id": "foreign-stars",
    "title": "Зарубежные звёзды",
    "emoji": "🌟",
    "cover": "assets/packs/foreign-stars.svg",
    "free": false,
    "cards": [
      {
        "id": "foreign-stars-kanye-west",
        "name": "Kanye West",
        "image": "assets/cards/foreign-stars-kanye-west.svg"
      },
      {
        "id": "foreign-stars-billie-eilish",
        "name": "Billie Eilish",
        "image": "assets/cards/foreign-stars-billie-eilish.svg"
      },
      {
        "id": "foreign-stars-taylor-swift",
        "name": "Taylor Swift",
        "image": "assets/cards/foreign-stars-taylor-swift.svg"
      },
      {
        "id": "foreign-stars-the-weeknd",
        "name": "The Weeknd",
        "image": "assets/cards/foreign-stars-the-weeknd.svg"
      },
      {
        "id": "foreign-stars-drake",
        "name": "Drake",
        "image": "assets/cards/foreign-stars-drake.svg"
      },
      {
        "id": "foreign-stars-rihanna",
        "name": "Rihanna",
        "image": "assets/cards/foreign-stars-rihanna.svg"
      },
      {
        "id": "foreign-stars-ariana-grande",
        "name": "Ariana Grande",
        "image": "assets/cards/foreign-stars-ariana-grande.svg"
      },
      {
        "id": "foreign-stars-dua-lipa",
        "name": "Dua Lipa",
        "image": "assets/cards/foreign-stars-dua-lipa.svg"
      },
      {
        "id": "foreign-stars-justin-bieber",
        "name": "Justin Bieber",
        "image": "assets/cards/foreign-stars-justin-bieber.svg"
      },
      {
        "id": "foreign-stars-beyonce",
        "name": "Beyonce",
        "image": "assets/cards/foreign-stars-beyonce.svg"
      },
      {
        "id": "foreign-stars-lady-gaga",
        "name": "Lady Gaga",
        "image": "assets/cards/foreign-stars-lady-gaga.svg"
      },
      {
        "id": "foreign-stars-bruno-mars",
        "name": "Bruno Mars",
        "image": "assets/cards/foreign-stars-bruno-mars.svg"
      },
      {
        "id": "foreign-stars-ed-sheeran",
        "name": "Ed Sheeran",
        "image": "assets/cards/foreign-stars-ed-sheeran.svg"
      },
      {
        "id": "foreign-stars-shakira",
        "name": "Shakira",
        "image": "assets/cards/foreign-stars-shakira.svg"
      },
      {
        "id": "foreign-stars-eminem",
        "name": "Eminem",
        "image": "assets/cards/foreign-stars-eminem.svg"
      }
    ]
  },
  {
    "id": "cars",
    "title": "Машины",
    "emoji": "🚗",
    "cover": "assets/packs/cars.svg",
    "free": false,
    "cards": [
      {
        "id": "cars-lada-niva",
        "name": "Lada Niva",
        "image": "assets/cards/cars-lada-niva.svg"
      },
      {
        "id": "cars-bmw-m5",
        "name": "BMW M5",
        "image": "assets/cards/cars-bmw-m5.svg"
      },
      {
        "id": "cars-mercedes-g-class",
        "name": "Mercedes G-Class",
        "image": "assets/cards/cars-mercedes-g-class.svg"
      },
      {
        "id": "cars-toyota-supra",
        "name": "Toyota Supra",
        "image": "assets/cards/cars-toyota-supra.svg"
      },
      {
        "id": "cars-tesla-model-s",
        "name": "Tesla Model S",
        "image": "assets/cards/cars-tesla-model-s.svg"
      },
      {
        "id": "cars-porsche-911",
        "name": "Porsche 911",
        "image": "assets/cards/cars-porsche-911.svg"
      },
      {
        "id": "cars-lamborghini-aventador",
        "name": "Lamborghini Aventador",
        "image": "assets/cards/cars-lamborghini-aventador.svg"
      },
      {
        "id": "cars-ferrari-laferrari",
        "name": "Ferrari LaFerrari",
        "image": "assets/cards/cars-ferrari-laferrari.svg"
      },
      {
        "id": "cars-bugatti-chiron",
        "name": "Bugatti Chiron",
        "image": "assets/cards/cars-bugatti-chiron.svg"
      },
      {
        "id": "cars-nissan-gt-r",
        "name": "Nissan GT-R",
        "image": "assets/cards/cars-nissan-gt-r.svg"
      },
      {
        "id": "cars-audi-rs6",
        "name": "Audi RS6",
        "image": "assets/cards/cars-audi-rs6.svg"
      },
      {
        "id": "cars-chevrolet-camaro",
        "name": "Chevrolet Camaro",
        "image": "assets/cards/cars-chevrolet-camaro.svg"
      },
      {
        "id": "cars-ford-mustang",
        "name": "Ford Mustang",
        "image": "assets/cards/cars-ford-mustang.svg"
      },
      {
        "id": "cars-range-rover",
        "name": "Range Rover",
        "image": "assets/cards/cars-range-rover.svg"
      },
      {
        "id": "cars-rolls-royce-phantom",
        "name": "Rolls-Royce Phantom",
        "image": "assets/cards/cars-rolls-royce-phantom.svg"
      }
    ]
  },
  {
    "id": "personalities",
    "title": "Личности",
    "emoji": "🌐",
    "cover": "assets/packs/personalities.svg",
    "free": false,
    "cards": [
      {
        "id": "personalities-билл-гейтс",
        "name": "Билл Гейтс",
        "image": "assets/cards/personalities-билл-гейтс.svg"
      },
      {
        "id": "personalities-илон-маск",
        "name": "Илон Маск",
        "image": "assets/cards/personalities-илон-маск.svg"
      },
      {
        "id": "personalities-стив-джобс",
        "name": "Стив Джобс",
        "image": "assets/cards/personalities-стив-джобс.svg"
      },
      {
        "id": "personalities-марк-цукерберг",
        "name": "Марк Цукерберг",
        "image": "assets/cards/personalities-марк-цукерберг.svg"
      },
      {
        "id": "personalities-джефф-безос",
        "name": "Джефф Безос",
        "image": "assets/cards/personalities-джефф-безос.svg"
      },
      {
        "id": "personalities-павел-дуров",
        "name": "Павел Дуров",
        "image": "assets/cards/personalities-павел-дуров.svg"
      },
      {
        "id": "personalities-криштиану-роналду",
        "name": "Криштиану Роналду",
        "image": "assets/cards/personalities-криштиану-роналду.svg"
      },
      {
        "id": "personalities-лионель-месси",
        "name": "Лионель Месси",
        "image": "assets/cards/personalities-лионель-месси.svg"
      },
      {
        "id": "personalities-мистер-бист",
        "name": "Мистер Бист",
        "image": "assets/cards/personalities-мистер-бист.svg"
      },
      {
        "id": "personalities-джеки-чан",
        "name": "Джеки Чан",
        "image": "assets/cards/personalities-джеки-чан.svg"
      },
      {
        "id": "personalities-дуэйн-джонсон",
        "name": "Дуэйн Джонсон",
        "image": "assets/cards/personalities-дуэйн-джонсон.svg"
      },
      {
        "id": "personalities-альберт-эйнштейн",
        "name": "Альберт Эйнштейн",
        "image": "assets/cards/personalities-альберт-эйнштейн.svg"
      },
      {
        "id": "personalities-никола-тесла",
        "name": "Никола Тесла",
        "image": "assets/cards/personalities-никола-тесла.svg"
      },
      {
        "id": "personalities-леонардо-да-винчи",
        "name": "Леонардо да Винчи",
        "image": "assets/cards/personalities-леонардо-да-винчи.svg"
      },
      {
        "id": "personalities-уолт-дисней",
        "name": "Уолт Дисней",
        "image": "assets/cards/personalities-уолт-дисней.svg"
      }
    ]
  },
  {
    "id": "series",
    "title": "Сериалы",
    "emoji": "📺",
    "cover": "assets/packs/series.svg",
    "free": false,
    "cards": [
      {
        "id": "series-друзья",
        "name": "Друзья",
        "image": "assets/cards/series-друзья.svg"
      },
      {
        "id": "series-во-все-тяжкие",
        "name": "Во все тяжкие",
        "image": "assets/cards/series-во-все-тяжкие.svg"
      },
      {
        "id": "series-игра-престолов",
        "name": "Игра престолов",
        "image": "assets/cards/series-игра-престолов.svg"
      },
      {
        "id": "series-очень-странные-дела",
        "name": "Очень странные дела",
        "image": "assets/cards/series-очень-странные-дела.svg"
      },
      {
        "id": "series-шерлок",
        "name": "Шерлок",
        "image": "assets/cards/series-шерлок.svg"
      },
      {
        "id": "series-офис",
        "name": "Офис",
        "image": "assets/cards/series-офис.svg"
      },
      {
        "id": "series-доктор-хаус",
        "name": "Доктор Хаус",
        "image": "assets/cards/series-доктор-хаус.svg"
      },
      {
        "id": "series-пацаны",
        "name": "Пацаны",
        "image": "assets/cards/series-пацаны.svg"
      },
      {
        "id": "series-бумажный-дом",
        "name": "Бумажный дом",
        "image": "assets/cards/series-бумажный-дом.svg"
      },
      {
        "id": "series-ведьмак",
        "name": "Ведьмак",
        "image": "assets/cards/series-ведьмак.svg"
      },
      {
        "id": "series-ходячие-мертвецы",
        "name": "Ходячие мертвецы",
        "image": "assets/cards/series-ходячие-мертвецы.svg"
      },
      {
        "id": "series-симпсоны",
        "name": "Симпсоны",
        "image": "assets/cards/series-симпсоны.svg"
      },
      {
        "id": "series-черное-зеркало",
        "name": "Черное зеркало",
        "image": "assets/cards/series-черное-зеркало.svg"
      },
      {
        "id": "series-мандалорец",
        "name": "Мандалорец",
        "image": "assets/cards/series-мандалорец.svg"
      },
      {
        "id": "series-сверхъестественное",
        "name": "Сверхъестественное",
        "image": "assets/cards/series-сверхъестественное.svg"
      }
    ]
  },
  {
    "id": "football-clubs",
    "title": "Футбольные клубы",
    "emoji": "🛡️",
    "cover": "assets/packs/football-clubs.svg",
    "free": false,
    "cards": [
      {
        "id": "football-clubs-барселона",
        "name": "Барселона",
        "image": "assets/cards/football-clubs-барселона.svg"
      },
      {
        "id": "football-clubs-реал-мадрид",
        "name": "Реал Мадрид",
        "image": "assets/cards/football-clubs-реал-мадрид.svg"
      },
      {
        "id": "football-clubs-манчестер-сити",
        "name": "Манчестер Сити",
        "image": "assets/cards/football-clubs-манчестер-сити.svg"
      },
      {
        "id": "football-clubs-манчестер-юнайтед",
        "name": "Манчестер Юнайтед",
        "image": "assets/cards/football-clubs-манчестер-юнайтед.svg"
      },
      {
        "id": "football-clubs-ливерпуль",
        "name": "Ливерпуль",
        "image": "assets/cards/football-clubs-ливерпуль.svg"
      },
      {
        "id": "football-clubs-челси",
        "name": "Челси",
        "image": "assets/cards/football-clubs-челси.svg"
      },
      {
        "id": "football-clubs-арсенал",
        "name": "Арсенал",
        "image": "assets/cards/football-clubs-арсенал.svg"
      },
      {
        "id": "football-clubs-псж",
        "name": "ПСЖ",
        "image": "assets/cards/football-clubs-псж.svg"
      },
      {
        "id": "football-clubs-бавария",
        "name": "Бавария",
        "image": "assets/cards/football-clubs-бавария.svg"
      },
      {
        "id": "football-clubs-боруссия-дортмунд",
        "name": "Боруссия Дортмунд",
        "image": "assets/cards/football-clubs-боруссия-дортмунд.svg"
      },
      {
        "id": "football-clubs-ювентус",
        "name": "Ювентус",
        "image": "assets/cards/football-clubs-ювентус.svg"
      },
      {
        "id": "football-clubs-милан",
        "name": "Милан",
        "image": "assets/cards/football-clubs-милан.svg"
      },
      {
        "id": "football-clubs-интер",
        "name": "Интер",
        "image": "assets/cards/football-clubs-интер.svg"
      },
      {
        "id": "football-clubs-наполи",
        "name": "Наполи",
        "image": "assets/cards/football-clubs-наполи.svg"
      },
      {
        "id": "football-clubs-атлетико-мадрид",
        "name": "Атлетико Мадрид",
        "image": "assets/cards/football-clubs-атлетико-мадрид.svg"
      }
    ]
  },
  {
    "id": "brawl-stars",
    "title": "Brawl Stars",
    "emoji": "👊",
    "cover": "https://cdn.brawlify.com/brawlers/borderless/16000040.png",
    "free": false,
    "cards": [
      {
        "id": "brawl-stars-bolt",
        "name": "Bolt",
        "image": "https://cdn.brawlify.com/brawlers/borderless/16000106.png"
      },
      {
        "id": "brawl-stars-starr-nova",
        "name": "Starr Nova",
        "image": "https://cdn.brawlify.com/brawlers/borderless/16000105.png"
      },
      {
        "id": "brawl-stars-damian",
        "name": "Damian",
        "image": "https://cdn.brawlify.com/brawlers/borderless/16000104.png"
      },
      {
        "id": "brawl-stars-najia",
        "name": "Najia",
        "image": "https://cdn.brawlify.com/brawlers/borderless/16000103.png"
      },
      {
        "id": "brawl-stars-sirius",
        "name": "Sirius",
        "image": "https://cdn.brawlify.com/brawlers/borderless/16000102.png"
      },
      {
        "id": "brawl-stars-glowy",
        "name": "Glowy",
        "image": "https://cdn.brawlify.com/brawlers/borderless/16000101.png"
      },
      {
        "id": "brawl-stars-gigi",
        "name": "Gigi",
        "image": "https://cdn.brawlify.com/brawlers/borderless/16000100.png"
      },
      {
        "id": "brawl-stars-pierce",
        "name": "Pierce",
        "image": "https://cdn.brawlify.com/brawlers/borderless/16000099.png"
      },
      {
        "id": "brawl-stars-ziggy",
        "name": "Ziggy",
        "image": "https://cdn.brawlify.com/brawlers/borderless/16000098.png"
      },
      {
        "id": "brawl-stars-mina",
        "name": "Mina",
        "image": "https://cdn.brawlify.com/brawlers/borderless/16000097.png"
      },
      {
        "id": "brawl-stars-trunk",
        "name": "Trunk",
        "image": "https://cdn.brawlify.com/brawlers/borderless/16000096.png"
      },
      {
        "id": "brawl-stars-alli",
        "name": "Alli",
        "image": "https://cdn.brawlify.com/brawlers/borderless/16000095.png"
      },
      {
        "id": "brawl-stars-kaze",
        "name": "Kaze",
        "image": "https://cdn.brawlify.com/brawlers/borderless/16000094.png"
      },
      {
        "id": "brawl-stars-jae-yong",
        "name": "Jae-Yong",
        "image": "https://cdn.brawlify.com/brawlers/borderless/16000093.png"
      },
      {
        "id": "brawl-stars-finx",
        "name": "Finx",
        "image": "https://cdn.brawlify.com/brawlers/borderless/16000092.png"
      },
      {
        "id": "brawl-stars-lumi",
        "name": "Lumi",
        "image": "https://cdn.brawlify.com/brawlers/borderless/16000091.png"
      },
      {
        "id": "brawl-stars-ollie",
        "name": "Ollie",
        "image": "https://cdn.brawlify.com/brawlers/borderless/16000090.png"
      },
      {
        "id": "brawl-stars-meeple",
        "name": "Meeple",
        "image": "https://cdn.brawlify.com/brawlers/borderless/16000089.png"
      },
      {
        "id": "brawl-stars-buzz-lightyear",
        "name": "Buzz Lightyear",
        "image": "https://cdn.brawlify.com/brawlers/borderless/16000088.png"
      },
      {
        "id": "brawl-stars-juju",
        "name": "Juju",
        "image": "https://cdn.brawlify.com/brawlers/borderless/16000087.png"
      },
      {
        "id": "brawl-stars-shade",
        "name": "Shade",
        "image": "https://cdn.brawlify.com/brawlers/borderless/16000086.png"
      },
      {
        "id": "brawl-stars-kenji",
        "name": "Kenji",
        "image": "https://cdn.brawlify.com/brawlers/borderless/16000085.png"
      },
      {
        "id": "brawl-stars-moe",
        "name": "Moe",
        "image": "https://cdn.brawlify.com/brawlers/borderless/16000084.png"
      },
      {
        "id": "brawl-stars-clancy",
        "name": "Clancy",
        "image": "https://cdn.brawlify.com/brawlers/borderless/16000083.png"
      },
      {
        "id": "brawl-stars-berry",
        "name": "Berry",
        "image": "https://cdn.brawlify.com/brawlers/borderless/16000082.png"
      },
      {
        "id": "brawl-stars-lily",
        "name": "Lily",
        "image": "https://cdn.brawlify.com/brawlers/borderless/16000081.png"
      },
      {
        "id": "brawl-stars-draco",
        "name": "Draco",
        "image": "https://cdn.brawlify.com/brawlers/borderless/16000080.png"
      },
      {
        "id": "brawl-stars-angelo",
        "name": "Angelo",
        "image": "https://cdn.brawlify.com/brawlers/borderless/16000079.png"
      },
      {
        "id": "brawl-stars-melodie",
        "name": "Melodie",
        "image": "https://cdn.brawlify.com/brawlers/borderless/16000078.png"
      },
      {
        "id": "brawl-stars-larry-and-lawrie",
        "name": "Larry & Lawrie",
        "image": "https://cdn.brawlify.com/brawlers/borderless/16000077.png"
      },
      {
        "id": "brawl-stars-kit",
        "name": "Kit",
        "image": "https://cdn.brawlify.com/brawlers/borderless/16000076.png"
      },
      {
        "id": "brawl-stars-mico",
        "name": "Mico",
        "image": "https://cdn.brawlify.com/brawlers/borderless/16000075.png"
      },
      {
        "id": "brawl-stars-charlie",
        "name": "Charlie",
        "image": "https://cdn.brawlify.com/brawlers/borderless/16000074.png"
      },
      {
        "id": "brawl-stars-chuck",
        "name": "Chuck",
        "image": "https://cdn.brawlify.com/brawlers/borderless/16000073.png"
      },
      {
        "id": "brawl-stars-pearl",
        "name": "Pearl",
        "image": "https://cdn.brawlify.com/brawlers/borderless/16000072.png"
      },
      {
        "id": "brawl-stars-doug",
        "name": "Doug",
        "image": "https://cdn.brawlify.com/brawlers/borderless/16000071.png"
      },
      {
        "id": "brawl-stars-cordelius",
        "name": "Cordelius",
        "image": "https://cdn.brawlify.com/brawlers/borderless/16000070.png"
      },
      {
        "id": "brawl-stars-hank",
        "name": "Hank",
        "image": "https://cdn.brawlify.com/brawlers/borderless/16000069.png"
      },
      {
        "id": "brawl-stars-maisie",
        "name": "Maisie",
        "image": "https://cdn.brawlify.com/brawlers/borderless/16000068.png"
      },
      {
        "id": "brawl-stars-willow",
        "name": "Willow",
        "image": "https://cdn.brawlify.com/brawlers/borderless/16000067.png"
      },
      {
        "id": "brawl-stars-r-t",
        "name": "R-T",
        "image": "https://cdn.brawlify.com/brawlers/borderless/16000066.png"
      },
      {
        "id": "brawl-stars-mandy",
        "name": "Mandy",
        "image": "https://cdn.brawlify.com/brawlers/borderless/16000065.png"
      },
      {
        "id": "brawl-stars-gray",
        "name": "Gray",
        "image": "https://cdn.brawlify.com/brawlers/borderless/16000064.png"
      },
      {
        "id": "brawl-stars-chester",
        "name": "Chester",
        "image": "https://cdn.brawlify.com/brawlers/borderless/16000063.png"
      },
      {
        "id": "brawl-stars-buster",
        "name": "Buster",
        "image": "https://cdn.brawlify.com/brawlers/borderless/16000062.png"
      },
      {
        "id": "brawl-stars-gus",
        "name": "Gus",
        "image": "https://cdn.brawlify.com/brawlers/borderless/16000061.png"
      },
      {
        "id": "brawl-stars-sam",
        "name": "Sam",
        "image": "https://cdn.brawlify.com/brawlers/borderless/16000060.png"
      },
      {
        "id": "brawl-stars-otis",
        "name": "Otis",
        "image": "https://cdn.brawlify.com/brawlers/borderless/16000059.png"
      },
      {
        "id": "brawl-stars-bonnie",
        "name": "Bonnie",
        "image": "https://cdn.brawlify.com/brawlers/borderless/16000058.png"
      },
      {
        "id": "brawl-stars-janet",
        "name": "Janet",
        "image": "https://cdn.brawlify.com/brawlers/borderless/16000057.png"
      },
      {
        "id": "brawl-stars-eve",
        "name": "Eve",
        "image": "https://cdn.brawlify.com/brawlers/borderless/16000056.png"
      },
      {
        "id": "brawl-stars-fang",
        "name": "Fang",
        "image": "https://cdn.brawlify.com/brawlers/borderless/16000054.png"
      },
      {
        "id": "brawl-stars-lola",
        "name": "Lola",
        "image": "https://cdn.brawlify.com/brawlers/borderless/16000053.png"
      },
      {
        "id": "brawl-stars-meg",
        "name": "Meg",
        "image": "https://cdn.brawlify.com/brawlers/borderless/16000052.png"
      },
      {
        "id": "brawl-stars-ash",
        "name": "Ash",
        "image": "https://cdn.brawlify.com/brawlers/borderless/16000051.png"
      },
      {
        "id": "brawl-stars-griff",
        "name": "Griff",
        "image": "https://cdn.brawlify.com/brawlers/borderless/16000050.png"
      },
      {
        "id": "brawl-stars-buzz",
        "name": "Buzz",
        "image": "https://cdn.brawlify.com/brawlers/borderless/16000049.png"
      },
      {
        "id": "brawl-stars-grom",
        "name": "Grom",
        "image": "https://cdn.brawlify.com/brawlers/borderless/16000048.png"
      },
      {
        "id": "brawl-stars-squeak",
        "name": "Squeak",
        "image": "https://cdn.brawlify.com/brawlers/borderless/16000047.png"
      },
      {
        "id": "brawl-stars-belle",
        "name": "Belle",
        "image": "https://cdn.brawlify.com/brawlers/borderless/16000046.png"
      },
      {
        "id": "brawl-stars-stu",
        "name": "Stu",
        "image": "https://cdn.brawlify.com/brawlers/borderless/16000045.png"
      },
      {
        "id": "brawl-stars-ruffs",
        "name": "Ruffs",
        "image": "https://cdn.brawlify.com/brawlers/borderless/16000044.png"
      },
      {
        "id": "brawl-stars-edgar",
        "name": "Edgar",
        "image": "https://cdn.brawlify.com/brawlers/borderless/16000043.png"
      },
      {
        "id": "brawl-stars-byron",
        "name": "Byron",
        "image": "https://cdn.brawlify.com/brawlers/borderless/16000042.png"
      },
      {
        "id": "brawl-stars-lou",
        "name": "Lou",
        "image": "https://cdn.brawlify.com/brawlers/borderless/16000041.png"
      },
      {
        "id": "brawl-stars-amber",
        "name": "Amber",
        "image": "https://cdn.brawlify.com/brawlers/borderless/16000040.png"
      },
      {
        "id": "brawl-stars-colette",
        "name": "Colette",
        "image": "https://cdn.brawlify.com/brawlers/borderless/16000039.png"
      },
      {
        "id": "brawl-stars-surge",
        "name": "Surge",
        "image": "https://cdn.brawlify.com/brawlers/borderless/16000038.png"
      },
      {
        "id": "brawl-stars-sprout",
        "name": "Sprout",
        "image": "https://cdn.brawlify.com/brawlers/borderless/16000037.png"
      },
      {
        "id": "brawl-stars-nani",
        "name": "Nani",
        "image": "https://cdn.brawlify.com/brawlers/borderless/16000036.png"
      },
      {
        "id": "brawl-stars-gale",
        "name": "Gale",
        "image": "https://cdn.brawlify.com/brawlers/borderless/16000035.png"
      },
      {
        "id": "brawl-stars-jacky",
        "name": "Jacky",
        "image": "https://cdn.brawlify.com/brawlers/borderless/16000034.png"
      },
      {
        "id": "brawl-stars-max",
        "name": "Max",
        "image": "https://cdn.brawlify.com/brawlers/borderless/16000032.png"
      },
      {
        "id": "brawl-stars-mr-p",
        "name": "Mr. P",
        "image": "https://cdn.brawlify.com/brawlers/borderless/16000031.png"
      },
      {
        "id": "brawl-stars-emz",
        "name": "Emz",
        "image": "https://cdn.brawlify.com/brawlers/borderless/16000030.png"
      },
      {
        "id": "brawl-stars-bea",
        "name": "Bea",
        "image": "https://cdn.brawlify.com/brawlers/borderless/16000029.png"
      },
      {
        "id": "brawl-stars-sandy",
        "name": "Sandy",
        "image": "https://cdn.brawlify.com/brawlers/borderless/16000028.png"
      },
      {
        "id": "brawl-stars-8-bit",
        "name": "8-Bit",
        "image": "https://cdn.brawlify.com/brawlers/borderless/16000027.png"
      },
      {
        "id": "brawl-stars-bibi",
        "name": "Bibi",
        "image": "https://cdn.brawlify.com/brawlers/borderless/16000026.png"
      },
      {
        "id": "brawl-stars-carl",
        "name": "Carl",
        "image": "https://cdn.brawlify.com/brawlers/borderless/16000025.png"
      },
      {
        "id": "brawl-stars-rosa",
        "name": "Rosa",
        "image": "https://cdn.brawlify.com/brawlers/borderless/16000024.png"
      },
      {
        "id": "brawl-stars-leon",
        "name": "Leon",
        "image": "https://cdn.brawlify.com/brawlers/borderless/16000023.png"
      },
      {
        "id": "brawl-stars-tick",
        "name": "Tick",
        "image": "https://cdn.brawlify.com/brawlers/borderless/16000022.png"
      },
      {
        "id": "brawl-stars-gene",
        "name": "Gene",
        "image": "https://cdn.brawlify.com/brawlers/borderless/16000021.png"
      },
      {
        "id": "brawl-stars-frank",
        "name": "Frank",
        "image": "https://cdn.brawlify.com/brawlers/borderless/16000020.png"
      },
      {
        "id": "brawl-stars-penny",
        "name": "Penny",
        "image": "https://cdn.brawlify.com/brawlers/borderless/16000019.png"
      },
      {
        "id": "brawl-stars-darryl",
        "name": "Darryl",
        "image": "https://cdn.brawlify.com/brawlers/borderless/16000018.png"
      },
      {
        "id": "brawl-stars-tara",
        "name": "Tara",
        "image": "https://cdn.brawlify.com/brawlers/borderless/16000017.png"
      },
      {
        "id": "brawl-stars-pam",
        "name": "Pam",
        "image": "https://cdn.brawlify.com/brawlers/borderless/16000016.png"
      },
      {
        "id": "brawl-stars-piper",
        "name": "Piper",
        "image": "https://cdn.brawlify.com/brawlers/borderless/16000015.png"
      },
      {
        "id": "brawl-stars-bo",
        "name": "Bo",
        "image": "https://cdn.brawlify.com/brawlers/borderless/16000014.png"
      },
      {
        "id": "brawl-stars-poco",
        "name": "Poco",
        "image": "https://cdn.brawlify.com/brawlers/borderless/16000013.png"
      },
      {
        "id": "brawl-stars-crow",
        "name": "Crow",
        "image": "https://cdn.brawlify.com/brawlers/borderless/16000012.png"
      },
      {
        "id": "brawl-stars-mortis",
        "name": "Mortis",
        "image": "https://cdn.brawlify.com/brawlers/borderless/16000011.png"
      },
      {
        "id": "brawl-stars-el-primo",
        "name": "El Primo",
        "image": "https://cdn.brawlify.com/brawlers/borderless/16000010.png"
      },
      {
        "id": "brawl-stars-dynamike",
        "name": "Dynamike",
        "image": "https://cdn.brawlify.com/brawlers/borderless/16000009.png"
      },
      {
        "id": "brawl-stars-nita",
        "name": "Nita",
        "image": "https://cdn.brawlify.com/brawlers/borderless/16000008.png"
      },
      {
        "id": "brawl-stars-jessie",
        "name": "Jessie",
        "image": "https://cdn.brawlify.com/brawlers/borderless/16000007.png"
      },
      {
        "id": "brawl-stars-barley",
        "name": "Barley",
        "image": "https://cdn.brawlify.com/brawlers/borderless/16000006.png"
      },
      {
        "id": "brawl-stars-spike",
        "name": "Spike",
        "image": "https://cdn.brawlify.com/brawlers/borderless/16000005.png"
      },
      {
        "id": "brawl-stars-rico",
        "name": "Rico",
        "image": "https://cdn.brawlify.com/brawlers/borderless/16000004.png"
      },
      {
        "id": "brawl-stars-brock",
        "name": "Brock",
        "image": "https://cdn.brawlify.com/brawlers/borderless/16000003.png"
      },
      {
        "id": "brawl-stars-bull",
        "name": "Bull",
        "image": "https://cdn.brawlify.com/brawlers/borderless/16000002.png"
      },
      {
        "id": "brawl-stars-colt",
        "name": "Colt",
        "image": "https://cdn.brawlify.com/brawlers/borderless/16000001.png"
      },
      {
        "id": "brawl-stars-shelly",
        "name": "Shelly",
        "image": "https://cdn.brawlify.com/brawlers/borderless/16000000.png"
      }
    ]
  },
  {
    "id": "clash-royale",
    "title": "Clash Royale",
    "emoji": "👑",
    "cover": "https://cdn.royaleapi.com/static/img/cards-150/skeletons.png",
    "free": false,
    "cards": [
      {
        "id": "clash-royale-knight",
        "name": "Knight",
        "image": "https://cdn.royaleapi.com/static/img/cards-150/knight.png"
      },
      {
        "id": "clash-royale-archers",
        "name": "Archers",
        "image": "https://cdn.royaleapi.com/static/img/cards-150/archers.png"
      },
      {
        "id": "clash-royale-goblins",
        "name": "Goblins",
        "image": "https://cdn.royaleapi.com/static/img/cards-150/goblins.png"
      },
      {
        "id": "clash-royale-giant",
        "name": "Giant",
        "image": "https://cdn.royaleapi.com/static/img/cards-150/giant.png"
      },
      {
        "id": "clash-royale-pekka",
        "name": "P.E.K.K.A",
        "image": "https://cdn.royaleapi.com/static/img/cards-150/pekka.png"
      },
      {
        "id": "clash-royale-minions",
        "name": "Minions",
        "image": "https://cdn.royaleapi.com/static/img/cards-150/minions.png"
      },
      {
        "id": "clash-royale-balloon",
        "name": "Balloon",
        "image": "https://cdn.royaleapi.com/static/img/cards-150/balloon.png"
      },
      {
        "id": "clash-royale-witch",
        "name": "Witch",
        "image": "https://cdn.royaleapi.com/static/img/cards-150/witch.png"
      },
      {
        "id": "clash-royale-barbarians",
        "name": "Barbarians",
        "image": "https://cdn.royaleapi.com/static/img/cards-150/barbarians.png"
      },
      {
        "id": "clash-royale-golem",
        "name": "Golem",
        "image": "https://cdn.royaleapi.com/static/img/cards-150/golem.png"
      },
      {
        "id": "clash-royale-skeletons",
        "name": "Skeletons",
        "image": "https://cdn.royaleapi.com/static/img/cards-150/skeletons.png"
      },
      {
        "id": "clash-royale-valkyrie",
        "name": "Valkyrie",
        "image": "https://cdn.royaleapi.com/static/img/cards-150/valkyrie.png"
      },
      {
        "id": "clash-royale-skeleton-army",
        "name": "Skeleton Army",
        "image": "https://cdn.royaleapi.com/static/img/cards-150/skeleton-army.png"
      },
      {
        "id": "clash-royale-bomber",
        "name": "Bomber",
        "image": "https://cdn.royaleapi.com/static/img/cards-150/bomber.png"
      },
      {
        "id": "clash-royale-musketeer",
        "name": "Musketeer",
        "image": "https://cdn.royaleapi.com/static/img/cards-150/musketeer.png"
      },
      {
        "id": "clash-royale-baby-dragon",
        "name": "Baby Dragon",
        "image": "https://cdn.royaleapi.com/static/img/cards-150/baby-dragon.png"
      },
      {
        "id": "clash-royale-prince",
        "name": "Prince",
        "image": "https://cdn.royaleapi.com/static/img/cards-150/prince.png"
      },
      {
        "id": "clash-royale-wizard",
        "name": "Wizard",
        "image": "https://cdn.royaleapi.com/static/img/cards-150/wizard.png"
      },
      {
        "id": "clash-royale-mini-pekka",
        "name": "Mini P.E.K.K.A",
        "image": "https://cdn.royaleapi.com/static/img/cards-150/mini-pekka.png"
      },
      {
        "id": "clash-royale-spear-goblins",
        "name": "Spear Goblins",
        "image": "https://cdn.royaleapi.com/static/img/cards-150/spear-goblins.png"
      },
      {
        "id": "clash-royale-giant-skeleton",
        "name": "Giant Skeleton",
        "image": "https://cdn.royaleapi.com/static/img/cards-150/giant-skeleton.png"
      },
      {
        "id": "clash-royale-hog-rider",
        "name": "Hog Rider",
        "image": "https://cdn.royaleapi.com/static/img/cards-150/hog-rider.png"
      },
      {
        "id": "clash-royale-minion-horde",
        "name": "Minion Horde",
        "image": "https://cdn.royaleapi.com/static/img/cards-150/minion-horde.png"
      },
      {
        "id": "clash-royale-ice-wizard",
        "name": "Ice Wizard",
        "image": "https://cdn.royaleapi.com/static/img/cards-150/ice-wizard.png"
      },
      {
        "id": "clash-royale-royal-giant",
        "name": "Royal Giant",
        "image": "https://cdn.royaleapi.com/static/img/cards-150/royal-giant.png"
      },
      {
        "id": "clash-royale-guards",
        "name": "Guards",
        "image": "https://cdn.royaleapi.com/static/img/cards-150/guards.png"
      },
      {
        "id": "clash-royale-princess",
        "name": "Princess",
        "image": "https://cdn.royaleapi.com/static/img/cards-150/princess.png"
      },
      {
        "id": "clash-royale-dark-prince",
        "name": "Dark Prince",
        "image": "https://cdn.royaleapi.com/static/img/cards-150/dark-prince.png"
      },
      {
        "id": "clash-royale-three-musketeers",
        "name": "Three Musketeers",
        "image": "https://cdn.royaleapi.com/static/img/cards-150/three-musketeers.png"
      },
      {
        "id": "clash-royale-lava-hound",
        "name": "Lava Hound",
        "image": "https://cdn.royaleapi.com/static/img/cards-150/lava-hound.png"
      },
      {
        "id": "clash-royale-ice-spirit",
        "name": "Ice Spirit",
        "image": "https://cdn.royaleapi.com/static/img/cards-150/ice-spirit.png"
      },
      {
        "id": "clash-royale-fire-spirit",
        "name": "Fire Spirit",
        "image": "https://cdn.royaleapi.com/static/img/cards-150/fire-spirit.png"
      },
      {
        "id": "clash-royale-miner",
        "name": "Miner",
        "image": "https://cdn.royaleapi.com/static/img/cards-150/miner.png"
      },
      {
        "id": "clash-royale-sparky",
        "name": "Sparky",
        "image": "https://cdn.royaleapi.com/static/img/cards-150/sparky.png"
      },
      {
        "id": "clash-royale-bowler",
        "name": "Bowler",
        "image": "https://cdn.royaleapi.com/static/img/cards-150/bowler.png"
      },
      {
        "id": "clash-royale-lumberjack",
        "name": "Lumberjack",
        "image": "https://cdn.royaleapi.com/static/img/cards-150/lumberjack.png"
      },
      {
        "id": "clash-royale-battle-ram",
        "name": "Battle Ram",
        "image": "https://cdn.royaleapi.com/static/img/cards-150/battle-ram.png"
      },
      {
        "id": "clash-royale-inferno-dragon",
        "name": "Inferno Dragon",
        "image": "https://cdn.royaleapi.com/static/img/cards-150/inferno-dragon.png"
      },
      {
        "id": "clash-royale-ice-golem",
        "name": "Ice Golem",
        "image": "https://cdn.royaleapi.com/static/img/cards-150/ice-golem.png"
      },
      {
        "id": "clash-royale-mega-minion",
        "name": "Mega Minion",
        "image": "https://cdn.royaleapi.com/static/img/cards-150/mega-minion.png"
      },
      {
        "id": "clash-royale-dart-goblin",
        "name": "Dart Goblin",
        "image": "https://cdn.royaleapi.com/static/img/cards-150/dart-goblin.png"
      },
      {
        "id": "clash-royale-goblin-gang",
        "name": "Goblin Gang",
        "image": "https://cdn.royaleapi.com/static/img/cards-150/goblin-gang.png"
      },
      {
        "id": "clash-royale-electro-wizard",
        "name": "Electro Wizard",
        "image": "https://cdn.royaleapi.com/static/img/cards-150/electro-wizard.png"
      },
      {
        "id": "clash-royale-elite-barbarians",
        "name": "Elite Barbarians",
        "image": "https://cdn.royaleapi.com/static/img/cards-150/elite-barbarians.png"
      },
      {
        "id": "clash-royale-hunter",
        "name": "Hunter",
        "image": "https://cdn.royaleapi.com/static/img/cards-150/hunter.png"
      },
      {
        "id": "clash-royale-executioner",
        "name": "Executioner",
        "image": "https://cdn.royaleapi.com/static/img/cards-150/executioner.png"
      },
      {
        "id": "clash-royale-bandit",
        "name": "Bandit",
        "image": "https://cdn.royaleapi.com/static/img/cards-150/bandit.png"
      },
      {
        "id": "clash-royale-royal-recruits",
        "name": "Royal Recruits",
        "image": "https://cdn.royaleapi.com/static/img/cards-150/royal-recruits.png"
      },
      {
        "id": "clash-royale-night-witch",
        "name": "Night Witch",
        "image": "https://cdn.royaleapi.com/static/img/cards-150/night-witch.png"
      },
      {
        "id": "clash-royale-bats",
        "name": "Bats",
        "image": "https://cdn.royaleapi.com/static/img/cards-150/bats.png"
      },
      {
        "id": "clash-royale-royal-ghost",
        "name": "Royal Ghost",
        "image": "https://cdn.royaleapi.com/static/img/cards-150/royal-ghost.png"
      },
      {
        "id": "clash-royale-ram-rider",
        "name": "Ram Rider",
        "image": "https://cdn.royaleapi.com/static/img/cards-150/ram-rider.png"
      },
      {
        "id": "clash-royale-zappies",
        "name": "Zappies",
        "image": "https://cdn.royaleapi.com/static/img/cards-150/zappies.png"
      },
      {
        "id": "clash-royale-rascals",
        "name": "Rascals",
        "image": "https://cdn.royaleapi.com/static/img/cards-150/rascals.png"
      },
      {
        "id": "clash-royale-cannon-cart",
        "name": "Cannon Cart",
        "image": "https://cdn.royaleapi.com/static/img/cards-150/cannon-cart.png"
      },
      {
        "id": "clash-royale-mega-knight",
        "name": "Mega Knight",
        "image": "https://cdn.royaleapi.com/static/img/cards-150/mega-knight.png"
      },
      {
        "id": "clash-royale-skeleton-barrel",
        "name": "Skeleton Barrel",
        "image": "https://cdn.royaleapi.com/static/img/cards-150/skeleton-barrel.png"
      },
      {
        "id": "clash-royale-flying-machine",
        "name": "Flying Machine",
        "image": "https://cdn.royaleapi.com/static/img/cards-150/flying-machine.png"
      },
      {
        "id": "clash-royale-wall-breakers",
        "name": "Wall Breakers",
        "image": "https://cdn.royaleapi.com/static/img/cards-150/wall-breakers.png"
      },
      {
        "id": "clash-royale-royal-hogs",
        "name": "Royal Hogs",
        "image": "https://cdn.royaleapi.com/static/img/cards-150/royal-hogs.png"
      },
      {
        "id": "clash-royale-goblin-giant",
        "name": "Goblin Giant",
        "image": "https://cdn.royaleapi.com/static/img/cards-150/goblin-giant.png"
      },
      {
        "id": "clash-royale-fisherman",
        "name": "Fisherman",
        "image": "https://cdn.royaleapi.com/static/img/cards-150/fisherman.png"
      },
      {
        "id": "clash-royale-magic-archer",
        "name": "Magic Archer",
        "image": "https://cdn.royaleapi.com/static/img/cards-150/magic-archer.png"
      },
      {
        "id": "clash-royale-electro-dragon",
        "name": "Electro Dragon",
        "image": "https://cdn.royaleapi.com/static/img/cards-150/electro-dragon.png"
      },
      {
        "id": "clash-royale-firecracker",
        "name": "Firecracker",
        "image": "https://cdn.royaleapi.com/static/img/cards-150/firecracker.png"
      },
      {
        "id": "clash-royale-mighty-miner",
        "name": "Mighty Miner",
        "image": "https://cdn.royaleapi.com/static/img/cards-150/mighty-miner.png"
      },
      {
        "id": "clash-royale-super-witch",
        "name": "Super Witch",
        "image": "https://cdn.royaleapi.com/static/img/cards-150/super-witch.png"
      },
      {
        "id": "clash-royale-elixir-golem",
        "name": "Elixir Golem",
        "image": "https://cdn.royaleapi.com/static/img/cards-150/elixir-golem.png"
      },
      {
        "id": "clash-royale-battle-healer",
        "name": "Battle Healer",
        "image": "https://cdn.royaleapi.com/static/img/cards-150/battle-healer.png"
      },
      {
        "id": "clash-royale-skeleton-king",
        "name": "Skeleton King",
        "image": "https://cdn.royaleapi.com/static/img/cards-150/skeleton-king.png"
      },
      {
        "id": "clash-royale-super-lava-hound",
        "name": "Super Lava Hound",
        "image": "https://cdn.royaleapi.com/static/img/cards-150/super-lava-hound.png"
      },
      {
        "id": "clash-royale-super-magic-archer",
        "name": "Super Magic Archer",
        "image": "https://cdn.royaleapi.com/static/img/cards-150/super-magic-archer.png"
      },
      {
        "id": "clash-royale-archer-queen",
        "name": "Archer Queen",
        "image": "https://cdn.royaleapi.com/static/img/cards-150/archer-queen.png"
      },
      {
        "id": "clash-royale-santa-hog-rider",
        "name": "Santa Hog Rider",
        "image": "https://cdn.royaleapi.com/static/img/cards-150/santa-hog-rider.png"
      },
      {
        "id": "clash-royale-golden-knight",
        "name": "Golden Knight",
        "image": "https://cdn.royaleapi.com/static/img/cards-150/golden-knight.png"
      },
      {
        "id": "clash-royale-super-ice-golem",
        "name": "Super Ice Golem",
        "image": "https://cdn.royaleapi.com/static/img/cards-150/super-ice-golem.png"
      },
      {
        "id": "clash-royale-monk",
        "name": "Monk",
        "image": "https://cdn.royaleapi.com/static/img/cards-150/monk.png"
      },
      {
        "id": "clash-royale-super-archers",
        "name": "Super Archers",
        "image": "https://cdn.royaleapi.com/static/img/cards-150/super-archers.png"
      },
      {
        "id": "clash-royale-skeleton-dragons",
        "name": "Skeleton Dragons",
        "image": "https://cdn.royaleapi.com/static/img/cards-150/skeleton-dragons.png"
      },
      {
        "id": "clash-royale-terry",
        "name": "Terry",
        "image": "https://cdn.royaleapi.com/static/img/cards-150/terry.png"
      },
      {
        "id": "clash-royale-super-mini-pekka",
        "name": "Super Mini P.E.K.K.A",
        "image": "https://cdn.royaleapi.com/static/img/cards-150/super-mini-pekka.png"
      },
      {
        "id": "clash-royale-mother-witch",
        "name": "Mother Witch",
        "image": "https://cdn.royaleapi.com/static/img/cards-150/mother-witch.png"
      },
      {
        "id": "clash-royale-electro-spirit",
        "name": "Electro Spirit",
        "image": "https://cdn.royaleapi.com/static/img/cards-150/electro-spirit.png"
      },
      {
        "id": "clash-royale-electro-giant",
        "name": "Electro Giant",
        "image": "https://cdn.royaleapi.com/static/img/cards-150/electro-giant.png"
      },
      {
        "id": "clash-royale-raging-prince",
        "name": "Raging Prince",
        "image": "https://cdn.royaleapi.com/static/img/cards-150/raging-prince.png"
      },
      {
        "id": "clash-royale-phoenix",
        "name": "Phoenix",
        "image": "https://cdn.royaleapi.com/static/img/cards-150/phoenix.png"
      },
      {
        "id": "clash-royale-cannon",
        "name": "Cannon",
        "image": "https://cdn.royaleapi.com/static/img/cards-150/cannon.png"
      },
      {
        "id": "clash-royale-goblin-hut",
        "name": "Goblin Hut",
        "image": "https://cdn.royaleapi.com/static/img/cards-150/goblin-hut.png"
      },
      {
        "id": "clash-royale-mortar",
        "name": "Mortar",
        "image": "https://cdn.royaleapi.com/static/img/cards-150/mortar.png"
      },
      {
        "id": "clash-royale-inferno-tower",
        "name": "Inferno Tower",
        "image": "https://cdn.royaleapi.com/static/img/cards-150/inferno-tower.png"
      },
      {
        "id": "clash-royale-bomb-tower",
        "name": "Bomb Tower",
        "image": "https://cdn.royaleapi.com/static/img/cards-150/bomb-tower.png"
      },
      {
        "id": "clash-royale-barbarian-hut",
        "name": "Barbarian Hut",
        "image": "https://cdn.royaleapi.com/static/img/cards-150/barbarian-hut.png"
      },
      {
        "id": "clash-royale-tesla",
        "name": "Tesla",
        "image": "https://cdn.royaleapi.com/static/img/cards-150/tesla.png"
      },
      {
        "id": "clash-royale-elixir-collector",
        "name": "Elixir Collector",
        "image": "https://cdn.royaleapi.com/static/img/cards-150/elixir-collector.png"
      },
      {
        "id": "clash-royale-x-bow",
        "name": "X-Bow",
        "image": "https://cdn.royaleapi.com/static/img/cards-150/x-bow.png"
      },
      {
        "id": "clash-royale-tombstone",
        "name": "Tombstone",
        "image": "https://cdn.royaleapi.com/static/img/cards-150/tombstone.png"
      },
      {
        "id": "clash-royale-furnace",
        "name": "Furnace",
        "image": "https://cdn.royaleapi.com/static/img/cards-150/furnace.png"
      },
      {
        "id": "clash-royale-goblin-cage",
        "name": "Goblin Cage",
        "image": "https://cdn.royaleapi.com/static/img/cards-150/goblin-cage.png"
      },
      {
        "id": "clash-royale-goblin-drill",
        "name": "Goblin Drill",
        "image": "https://cdn.royaleapi.com/static/img/cards-150/goblin-drill.png"
      },
      {
        "id": "clash-royale-party-hut",
        "name": "Party Hut",
        "image": "https://cdn.royaleapi.com/static/img/cards-150/party-hut.png"
      },
      {
        "id": "clash-royale-fireball",
        "name": "Fireball",
        "image": "https://cdn.royaleapi.com/static/img/cards-150/fireball.png"
      },
      {
        "id": "clash-royale-arrows",
        "name": "Arrows",
        "image": "https://cdn.royaleapi.com/static/img/cards-150/arrows.png"
      },
      {
        "id": "clash-royale-rage",
        "name": "Rage",
        "image": "https://cdn.royaleapi.com/static/img/cards-150/rage.png"
      },
      {
        "id": "clash-royale-rocket",
        "name": "Rocket",
        "image": "https://cdn.royaleapi.com/static/img/cards-150/rocket.png"
      },
      {
        "id": "clash-royale-goblin-barrel",
        "name": "Goblin Barrel",
        "image": "https://cdn.royaleapi.com/static/img/cards-150/goblin-barrel.png"
      },
      {
        "id": "clash-royale-freeze",
        "name": "Freeze",
        "image": "https://cdn.royaleapi.com/static/img/cards-150/freeze.png"
      },
      {
        "id": "clash-royale-mirror",
        "name": "Mirror",
        "image": "https://cdn.royaleapi.com/static/img/cards-150/mirror.png"
      },
      {
        "id": "clash-royale-lightning",
        "name": "Lightning",
        "image": "https://cdn.royaleapi.com/static/img/cards-150/lightning.png"
      },
      {
        "id": "clash-royale-zap",
        "name": "Zap",
        "image": "https://cdn.royaleapi.com/static/img/cards-150/zap.png"
      },
      {
        "id": "clash-royale-poison",
        "name": "Poison",
        "image": "https://cdn.royaleapi.com/static/img/cards-150/poison.png"
      },
      {
        "id": "clash-royale-graveyard",
        "name": "Graveyard",
        "image": "https://cdn.royaleapi.com/static/img/cards-150/graveyard.png"
      },
      {
        "id": "clash-royale-the-log",
        "name": "The Log",
        "image": "https://cdn.royaleapi.com/static/img/cards-150/the-log.png"
      },
      {
        "id": "clash-royale-tornado",
        "name": "Tornado",
        "image": "https://cdn.royaleapi.com/static/img/cards-150/tornado.png"
      },
      {
        "id": "clash-royale-clone",
        "name": "Clone",
        "image": "https://cdn.royaleapi.com/static/img/cards-150/clone.png"
      },
      {
        "id": "clash-royale-earthquake",
        "name": "Earthquake",
        "image": "https://cdn.royaleapi.com/static/img/cards-150/earthquake.png"
      },
      {
        "id": "clash-royale-barbarian-barrel",
        "name": "Barbarian Barrel",
        "image": "https://cdn.royaleapi.com/static/img/cards-150/barbarian-barrel.png"
      },
      {
        "id": "clash-royale-heal-spirit",
        "name": "Heal Spirit",
        "image": "https://cdn.royaleapi.com/static/img/cards-150/heal-spirit.png"
      },
      {
        "id": "clash-royale-giant-snowball",
        "name": "Giant Snowball",
        "image": "https://cdn.royaleapi.com/static/img/cards-150/giant-snowball.png"
      },
      {
        "id": "clash-royale-royal-delivery",
        "name": "Royal Delivery",
        "image": "https://cdn.royaleapi.com/static/img/cards-150/royal-delivery.png"
      },
      {
        "id": "clash-royale-party-rocket",
        "name": "Party Rocket",
        "image": "https://cdn.royaleapi.com/static/img/cards-150/party-rocket.png"
      }
    ]
  },
  {
    "id": "dota-2",
    "title": "Дота 2",
    "emoji": "⚔️",
    "cover": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/juggernaut.png",
    "free": false,
    "cards": [
      {
        "id": "dota-2-anti-mage",
        "name": "Anti-Mage",
        "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/antimage.png"
      },
      {
        "id": "dota-2-axe",
        "name": "Axe",
        "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/axe.png"
      },
      {
        "id": "dota-2-bane",
        "name": "Bane",
        "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/bane.png"
      },
      {
        "id": "dota-2-bloodseeker",
        "name": "Bloodseeker",
        "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/bloodseeker.png"
      },
      {
        "id": "dota-2-crystal-maiden",
        "name": "Crystal Maiden",
        "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/crystal_maiden.png"
      },
      {
        "id": "dota-2-drow-ranger",
        "name": "Drow Ranger",
        "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/drow_ranger.png"
      },
      {
        "id": "dota-2-earthshaker",
        "name": "Earthshaker",
        "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/earthshaker.png"
      },
      {
        "id": "dota-2-juggernaut",
        "name": "Juggernaut",
        "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/juggernaut.png"
      },
      {
        "id": "dota-2-mirana",
        "name": "Mirana",
        "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/mirana.png"
      },
      {
        "id": "dota-2-morphling",
        "name": "Morphling",
        "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/morphling.png"
      },
      {
        "id": "dota-2-shadow-fiend",
        "name": "Shadow Fiend",
        "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/nevermore.png"
      },
      {
        "id": "dota-2-phantom-lancer",
        "name": "Phantom Lancer",
        "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/phantom_lancer.png"
      },
      {
        "id": "dota-2-puck",
        "name": "Puck",
        "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/puck.png"
      },
      {
        "id": "dota-2-pudge",
        "name": "Pudge",
        "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/pudge.png"
      },
      {
        "id": "dota-2-razor",
        "name": "Razor",
        "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/razor.png"
      },
      {
        "id": "dota-2-sand-king",
        "name": "Sand King",
        "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/sand_king.png"
      },
      {
        "id": "dota-2-storm-spirit",
        "name": "Storm Spirit",
        "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/storm_spirit.png"
      },
      {
        "id": "dota-2-sven",
        "name": "Sven",
        "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/sven.png"
      },
      {
        "id": "dota-2-tiny",
        "name": "Tiny",
        "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/tiny.png"
      },
      {
        "id": "dota-2-vengeful-spirit",
        "name": "Vengeful Spirit",
        "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/vengefulspirit.png"
      },
      {
        "id": "dota-2-windranger",
        "name": "Windranger",
        "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/windrunner.png"
      },
      {
        "id": "dota-2-zeus",
        "name": "Zeus",
        "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/zuus.png"
      },
      {
        "id": "dota-2-kunkka",
        "name": "Kunkka",
        "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/kunkka.png"
      },
      {
        "id": "dota-2-lina",
        "name": "Lina",
        "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/lina.png"
      },
      {
        "id": "dota-2-lion",
        "name": "Lion",
        "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/lion.png"
      },
      {
        "id": "dota-2-shadow-shaman",
        "name": "Shadow Shaman",
        "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/shadow_shaman.png"
      },
      {
        "id": "dota-2-slardar",
        "name": "Slardar",
        "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/slardar.png"
      },
      {
        "id": "dota-2-tidehunter",
        "name": "Tidehunter",
        "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/tidehunter.png"
      },
      {
        "id": "dota-2-witch-doctor",
        "name": "Witch Doctor",
        "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/witch_doctor.png"
      },
      {
        "id": "dota-2-lich",
        "name": "Lich",
        "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/lich.png"
      },
      {
        "id": "dota-2-riki",
        "name": "Riki",
        "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/riki.png"
      },
      {
        "id": "dota-2-enigma",
        "name": "Enigma",
        "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/enigma.png"
      },
      {
        "id": "dota-2-tinker",
        "name": "Tinker",
        "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/tinker.png"
      },
      {
        "id": "dota-2-sniper",
        "name": "Sniper",
        "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/sniper.png"
      },
      {
        "id": "dota-2-necrophos",
        "name": "Necrophos",
        "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/necrolyte.png"
      },
      {
        "id": "dota-2-warlock",
        "name": "Warlock",
        "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/warlock.png"
      },
      {
        "id": "dota-2-beastmaster",
        "name": "Beastmaster",
        "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/beastmaster.png"
      },
      {
        "id": "dota-2-queen-of-pain",
        "name": "Queen of Pain",
        "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/queenofpain.png"
      },
      {
        "id": "dota-2-venomancer",
        "name": "Venomancer",
        "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/venomancer.png"
      },
      {
        "id": "dota-2-faceless-void",
        "name": "Faceless Void",
        "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/faceless_void.png"
      },
      {
        "id": "dota-2-wraith-king",
        "name": "Wraith King",
        "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/skeleton_king.png"
      },
      {
        "id": "dota-2-death-prophet",
        "name": "Death Prophet",
        "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/death_prophet.png"
      },
      {
        "id": "dota-2-phantom-assassin",
        "name": "Phantom Assassin",
        "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/phantom_assassin.png"
      },
      {
        "id": "dota-2-pugna",
        "name": "Pugna",
        "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/pugna.png"
      },
      {
        "id": "dota-2-templar-assassin",
        "name": "Templar Assassin",
        "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/templar_assassin.png"
      },
      {
        "id": "dota-2-viper",
        "name": "Viper",
        "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/viper.png"
      },
      {
        "id": "dota-2-luna",
        "name": "Luna",
        "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/luna.png"
      },
      {
        "id": "dota-2-dragon-knight",
        "name": "Dragon Knight",
        "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/dragon_knight.png"
      },
      {
        "id": "dota-2-dazzle",
        "name": "Dazzle",
        "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/dazzle.png"
      },
      {
        "id": "dota-2-clockwerk",
        "name": "Clockwerk",
        "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/rattletrap.png"
      },
      {
        "id": "dota-2-leshrac",
        "name": "Leshrac",
        "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/leshrac.png"
      },
      {
        "id": "dota-2-nature-s-prophet",
        "name": "Nature's Prophet",
        "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/furion.png"
      },
      {
        "id": "dota-2-lifestealer",
        "name": "Lifestealer",
        "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/life_stealer.png"
      },
      {
        "id": "dota-2-dark-seer",
        "name": "Dark Seer",
        "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/dark_seer.png"
      },
      {
        "id": "dota-2-clinkz",
        "name": "Clinkz",
        "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/clinkz.png"
      },
      {
        "id": "dota-2-omniknight",
        "name": "Omniknight",
        "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/omniknight.png"
      },
      {
        "id": "dota-2-enchantress",
        "name": "Enchantress",
        "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/enchantress.png"
      },
      {
        "id": "dota-2-huskar",
        "name": "Huskar",
        "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/huskar.png"
      },
      {
        "id": "dota-2-night-stalker",
        "name": "Night Stalker",
        "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/night_stalker.png"
      },
      {
        "id": "dota-2-broodmother",
        "name": "Broodmother",
        "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/broodmother.png"
      },
      {
        "id": "dota-2-bounty-hunter",
        "name": "Bounty Hunter",
        "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/bounty_hunter.png"
      },
      {
        "id": "dota-2-weaver",
        "name": "Weaver",
        "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/weaver.png"
      },
      {
        "id": "dota-2-jakiro",
        "name": "Jakiro",
        "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/jakiro.png"
      },
      {
        "id": "dota-2-batrider",
        "name": "Batrider",
        "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/batrider.png"
      },
      {
        "id": "dota-2-chen",
        "name": "Chen",
        "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/chen.png"
      },
      {
        "id": "dota-2-spectre",
        "name": "Spectre",
        "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/spectre.png"
      },
      {
        "id": "dota-2-ancient-apparition",
        "name": "Ancient Apparition",
        "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/ancient_apparition.png"
      },
      {
        "id": "dota-2-doom",
        "name": "Doom",
        "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/doom_bringer.png"
      },
      {
        "id": "dota-2-ursa",
        "name": "Ursa",
        "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/ursa.png"
      },
      {
        "id": "dota-2-spirit-breaker",
        "name": "Spirit Breaker",
        "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/spirit_breaker.png"
      },
      {
        "id": "dota-2-gyrocopter",
        "name": "Gyrocopter",
        "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/gyrocopter.png"
      },
      {
        "id": "dota-2-alchemist",
        "name": "Alchemist",
        "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/alchemist.png"
      },
      {
        "id": "dota-2-invoker",
        "name": "Invoker",
        "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/invoker.png"
      },
      {
        "id": "dota-2-silencer",
        "name": "Silencer",
        "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/silencer.png"
      },
      {
        "id": "dota-2-outworld-destroyer",
        "name": "Outworld Destroyer",
        "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/obsidian_destroyer.png"
      },
      {
        "id": "dota-2-lycan",
        "name": "Lycan",
        "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/lycan.png"
      },
      {
        "id": "dota-2-brewmaster",
        "name": "Brewmaster",
        "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/brewmaster.png"
      },
      {
        "id": "dota-2-shadow-demon",
        "name": "Shadow Demon",
        "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/shadow_demon.png"
      },
      {
        "id": "dota-2-lone-druid",
        "name": "Lone Druid",
        "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/lone_druid.png"
      },
      {
        "id": "dota-2-chaos-knight",
        "name": "Chaos Knight",
        "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/chaos_knight.png"
      },
      {
        "id": "dota-2-meepo",
        "name": "Meepo",
        "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/meepo.png"
      },
      {
        "id": "dota-2-treant-protector",
        "name": "Treant Protector",
        "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/treant.png"
      },
      {
        "id": "dota-2-ogre-magi",
        "name": "Ogre Magi",
        "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/ogre_magi.png"
      },
      {
        "id": "dota-2-undying",
        "name": "Undying",
        "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/undying.png"
      },
      {
        "id": "dota-2-rubick",
        "name": "Rubick",
        "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/rubick.png"
      },
      {
        "id": "dota-2-disruptor",
        "name": "Disruptor",
        "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/disruptor.png"
      },
      {
        "id": "dota-2-nyx-assassin",
        "name": "Nyx Assassin",
        "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/nyx_assassin.png"
      },
      {
        "id": "dota-2-naga-siren",
        "name": "Naga Siren",
        "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/naga_siren.png"
      },
      {
        "id": "dota-2-keeper-of-the-light",
        "name": "Keeper of the Light",
        "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/keeper_of_the_light.png"
      },
      {
        "id": "dota-2-io",
        "name": "Io",
        "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/wisp.png"
      },
      {
        "id": "dota-2-visage",
        "name": "Visage",
        "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/visage.png"
      },
      {
        "id": "dota-2-slark",
        "name": "Slark",
        "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/slark.png"
      },
      {
        "id": "dota-2-medusa",
        "name": "Medusa",
        "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/medusa.png"
      },
      {
        "id": "dota-2-troll-warlord",
        "name": "Troll Warlord",
        "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/troll_warlord.png"
      },
      {
        "id": "dota-2-centaur-warrunner",
        "name": "Centaur Warrunner",
        "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/centaur.png"
      },
      {
        "id": "dota-2-magnus",
        "name": "Magnus",
        "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/magnataur.png"
      },
      {
        "id": "dota-2-timbersaw",
        "name": "Timbersaw",
        "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/shredder.png"
      },
      {
        "id": "dota-2-bristleback",
        "name": "Bristleback",
        "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/bristleback.png"
      },
      {
        "id": "dota-2-tusk",
        "name": "Tusk",
        "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/tusk.png"
      },
      {
        "id": "dota-2-skywrath-mage",
        "name": "Skywrath Mage",
        "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/skywrath_mage.png"
      },
      {
        "id": "dota-2-abaddon",
        "name": "Abaddon",
        "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/abaddon.png"
      },
      {
        "id": "dota-2-elder-titan",
        "name": "Elder Titan",
        "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/elder_titan.png"
      },
      {
        "id": "dota-2-legion-commander",
        "name": "Legion Commander",
        "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/legion_commander.png"
      },
      {
        "id": "dota-2-techies",
        "name": "Techies",
        "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/techies.png"
      },
      {
        "id": "dota-2-ember-spirit",
        "name": "Ember Spirit",
        "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/ember_spirit.png"
      },
      {
        "id": "dota-2-earth-spirit",
        "name": "Earth Spirit",
        "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/earth_spirit.png"
      },
      {
        "id": "dota-2-underlord",
        "name": "Underlord",
        "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/abyssal_underlord.png"
      },
      {
        "id": "dota-2-terrorblade",
        "name": "Terrorblade",
        "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/terrorblade.png"
      },
      {
        "id": "dota-2-phoenix",
        "name": "Phoenix",
        "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/phoenix.png"
      },
      {
        "id": "dota-2-oracle",
        "name": "Oracle",
        "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/oracle.png"
      },
      {
        "id": "dota-2-winter-wyvern",
        "name": "Winter Wyvern",
        "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/winter_wyvern.png"
      },
      {
        "id": "dota-2-arc-warden",
        "name": "Arc Warden",
        "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/arc_warden.png"
      },
      {
        "id": "dota-2-monkey-king",
        "name": "Monkey King",
        "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/monkey_king.png"
      },
      {
        "id": "dota-2-dark-willow",
        "name": "Dark Willow",
        "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/dark_willow.png"
      },
      {
        "id": "dota-2-pangolier",
        "name": "Pangolier",
        "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/pangolier.png"
      },
      {
        "id": "dota-2-grimstroke",
        "name": "Grimstroke",
        "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/grimstroke.png"
      },
      {
        "id": "dota-2-hoodwink",
        "name": "Hoodwink",
        "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/hoodwink.png"
      },
      {
        "id": "dota-2-void-spirit",
        "name": "Void Spirit",
        "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/void_spirit.png"
      },
      {
        "id": "dota-2-snapfire",
        "name": "Snapfire",
        "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/snapfire.png"
      },
      {
        "id": "dota-2-mars",
        "name": "Mars",
        "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/mars.png"
      },
      {
        "id": "dota-2-ringmaster",
        "name": "Ringmaster",
        "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/ringmaster.png"
      },
      {
        "id": "dota-2-dawnbreaker",
        "name": "Dawnbreaker",
        "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/dawnbreaker.png"
      },
      {
        "id": "dota-2-marci",
        "name": "Marci",
        "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/marci.png"
      },
      {
        "id": "dota-2-primal-beast",
        "name": "Primal Beast",
        "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/primal_beast.png"
      },
      {
        "id": "dota-2-muerta",
        "name": "Muerta",
        "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/muerta.png"
      },
      {
        "id": "dota-2-kez",
        "name": "Kez",
        "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/kez.png"
      },
      {
        "id": "dota-2-largo",
        "name": "Largo",
        "image": "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/largo.png"
      }
    ]
  },
  {
    "id": "ufc",
    "title": "UFC",
    "emoji": "🥊",
    "cover": "assets/packs/ufc.svg",
    "free": false,
    "cards": [
      {
        "id": "ufc-conor-mcgregor",
        "name": "Conor McGregor",
        "image": "assets/cards/ufc-conor-mcgregor.svg"
      },
      {
        "id": "ufc-khabib-nurmagomedov",
        "name": "Khabib Nurmagomedov",
        "image": "assets/cards/ufc-khabib-nurmagomedov.svg"
      },
      {
        "id": "ufc-islam-makhachev",
        "name": "Islam Makhachev",
        "image": "assets/cards/ufc-islam-makhachev.svg"
      },
      {
        "id": "ufc-jon-jones",
        "name": "Jon Jones",
        "image": "assets/cards/ufc-jon-jones.svg"
      },
      {
        "id": "ufc-kamaru-usman",
        "name": "Kamaru Usman",
        "image": "assets/cards/ufc-kamaru-usman.svg"
      },
      {
        "id": "ufc-israel-adesanya",
        "name": "Israel Adesanya",
        "image": "assets/cards/ufc-israel-adesanya.svg"
      },
      {
        "id": "ufc-charles-oliveira",
        "name": "Charles Oliveira",
        "image": "assets/cards/ufc-charles-oliveira.svg"
      },
      {
        "id": "ufc-dustin-poirier",
        "name": "Dustin Poirier",
        "image": "assets/cards/ufc-dustin-poirier.svg"
      },
      {
        "id": "ufc-nate-diaz",
        "name": "Nate Diaz",
        "image": "assets/cards/ufc-nate-diaz.svg"
      },
      {
        "id": "ufc-alex-pereira",
        "name": "Alex Pereira",
        "image": "assets/cards/ufc-alex-pereira.svg"
      },
      {
        "id": "ufc-sean-o-malley",
        "name": "Sean O'Malley",
        "image": "assets/cards/ufc-sean-o-malley.svg"
      },
      {
        "id": "ufc-tony-ferguson",
        "name": "Tony Ferguson",
        "image": "assets/cards/ufc-tony-ferguson.svg"
      },
      {
        "id": "ufc-georges-st-pierre",
        "name": "Georges St-Pierre",
        "image": "assets/cards/ufc-georges-st-pierre.svg"
      },
      {
        "id": "ufc-anderson-silva",
        "name": "Anderson Silva",
        "image": "assets/cards/ufc-anderson-silva.svg"
      },
      {
        "id": "ufc-valentina-shevchenko",
        "name": "Valentina Shevchenko",
        "image": "assets/cards/ufc-valentina-shevchenko.svg"
      }
    ]
  },
  {
    "id": "autobloggers",
    "title": "Автоблогеры",
    "emoji": "🚙",
    "cover": "assets/packs/autobloggers.svg",
    "free": false,
    "cards": [
      {
        "id": "autobloggers-academeg",
        "name": "AcademeG",
        "image": "assets/cards/autobloggers-academeg.svg"
      },
      {
        "id": "autobloggers-ильдар-автоподбор",
        "name": "Ильдар Автоподбор",
        "image": "assets/cards/autobloggers-ильдар-автоподбор.svg"
      },
      {
        "id": "autobloggers-жекич-дубровский",
        "name": "Жекич Дубровский",
        "image": "assets/cards/autobloggers-жекич-дубровский.svg"
      },
      {
        "id": "autobloggers-булкин",
        "name": "Булкин",
        "image": "assets/cards/autobloggers-булкин.svg"
      },
      {
        "id": "autobloggers-smotratv",
        "name": "SmotraTV",
        "image": "assets/cards/autobloggers-smotratv.svg"
      },
      {
        "id": "autobloggers-давидыч",
        "name": "Давидыч",
        "image": "assets/cards/autobloggers-давидыч.svg"
      },
      {
        "id": "autobloggers-игорь-бурцев",
        "name": "Игорь Бурцев",
        "image": "assets/cards/autobloggers-игорь-бурцев.svg"
      },
      {
        "id": "autobloggers-антон-воротников",
        "name": "Антон Воротников",
        "image": "assets/cards/autobloggers-антон-воротников.svg"
      },
      {
        "id": "autobloggers-лиса-рулит",
        "name": "Лиса Рулит",
        "image": "assets/cards/autobloggers-лиса-рулит.svg"
      },
      {
        "id": "autobloggers-clickoncar",
        "name": "Clickoncar",
        "image": "assets/cards/autobloggers-clickoncar.svg"
      },
      {
        "id": "autobloggers-максим-шелков",
        "name": "Максим Шелков",
        "image": "assets/cards/autobloggers-максим-шелков.svg"
      },
      {
        "id": "autobloggers-garage-54",
        "name": "Garage 54",
        "image": "assets/cards/autobloggers-garage-54.svg"
      },
      {
        "id": "autobloggers-wylsacar",
        "name": "Wylsacar",
        "image": "assets/cards/autobloggers-wylsacar.svg"
      },
      {
        "id": "autobloggers-асафьев-стас",
        "name": "Асафьев Стас",
        "image": "assets/cards/autobloggers-асафьев-стас.svg"
      },
      {
        "id": "autobloggers-drive2",
        "name": "DRIVE2",
        "image": "assets/cards/autobloggers-drive2.svg"
      }
    ]
  },
  {
    "id": "food",
    "title": "Еда",
    "emoji": "🍕",
    "cover": "assets/packs/food.svg",
    "free": false,
    "cards": [
      {
        "id": "food-плов",
        "name": "Плов",
        "image": "assets/cards/food-плов.svg"
      },
      {
        "id": "food-бургер",
        "name": "Бургер",
        "image": "assets/cards/food-бургер.svg"
      },
      {
        "id": "food-пицца",
        "name": "Пицца",
        "image": "assets/cards/food-пицца.svg"
      },
      {
        "id": "food-суши",
        "name": "Суши",
        "image": "assets/cards/food-суши.svg"
      },
      {
        "id": "food-шаурма",
        "name": "Шаурма",
        "image": "assets/cards/food-шаурма.svg"
      },
      {
        "id": "food-пельмени",
        "name": "Пельмени",
        "image": "assets/cards/food-пельмени.svg"
      },
      {
        "id": "food-лагман",
        "name": "Лагман",
        "image": "assets/cards/food-лагман.svg"
      },
      {
        "id": "food-самса",
        "name": "Самса",
        "image": "assets/cards/food-самса.svg"
      },
      {
        "id": "food-борщ",
        "name": "Борщ",
        "image": "assets/cards/food-борщ.svg"
      },
      {
        "id": "food-стейк",
        "name": "Стейк",
        "image": "assets/cards/food-стейк.svg"
      },
      {
        "id": "food-паста",
        "name": "Паста",
        "image": "assets/cards/food-паста.svg"
      },
      {
        "id": "food-хот-дог",
        "name": "Хот-дог",
        "image": "assets/cards/food-хот-дог.svg"
      },
      {
        "id": "food-мороженое",
        "name": "Мороженое",
        "image": "assets/cards/food-мороженое.svg"
      },
      {
        "id": "food-шоколад",
        "name": "Шоколад",
        "image": "assets/cards/food-шоколад.svg"
      },
      {
        "id": "food-торт",
        "name": "Торт",
        "image": "assets/cards/food-торт.svg"
      }
    ]
  },
  {
    "id": "animals",
    "title": "Животные",
    "emoji": "🐆",
    "cover": "assets/packs/animals.svg",
    "free": false,
    "cards": [
      {
        "id": "animals-тигр",
        "name": "Тигр",
        "image": "assets/cards/animals-тигр.svg"
      },
      {
        "id": "animals-лев",
        "name": "Лев",
        "image": "assets/cards/animals-лев.svg"
      },
      {
        "id": "animals-волк",
        "name": "Волк",
        "image": "assets/cards/animals-волк.svg"
      },
      {
        "id": "animals-медведь",
        "name": "Медведь",
        "image": "assets/cards/animals-медведь.svg"
      },
      {
        "id": "animals-лиса",
        "name": "Лиса",
        "image": "assets/cards/animals-лиса.svg"
      },
      {
        "id": "animals-орёл",
        "name": "Орёл",
        "image": "assets/cards/animals-орёл.svg"
      },
      {
        "id": "animals-акула",
        "name": "Акула",
        "image": "assets/cards/animals-акула.svg"
      },
      {
        "id": "animals-панда",
        "name": "Панда",
        "image": "assets/cards/animals-панда.svg"
      },
      {
        "id": "animals-кот",
        "name": "Кот",
        "image": "assets/cards/animals-кот.svg"
      },
      {
        "id": "animals-собака",
        "name": "Собака",
        "image": "assets/cards/animals-собака.svg"
      },
      {
        "id": "animals-слон",
        "name": "Слон",
        "image": "assets/cards/animals-слон.svg"
      },
      {
        "id": "animals-жираф",
        "name": "Жираф",
        "image": "assets/cards/animals-жираф.svg"
      },
      {
        "id": "animals-крокодил",
        "name": "Крокодил",
        "image": "assets/cards/animals-крокодил.svg"
      },
      {
        "id": "animals-обезьяна",
        "name": "Обезьяна",
        "image": "assets/cards/animals-обезьяна.svg"
      },
      {
        "id": "animals-пингвин",
        "name": "Пингвин",
        "image": "assets/cards/animals-пингвин.svg"
      }
    ]
  },
  {
    "id": "bloggers-cis",
    "title": "Блогеры СНГ",
    "emoji": "🎙️",
    "cover": "assets/packs/bloggers-cis.svg",
    "free": false,
    "cards": [
      {
        "id": "bloggers-cis-влад-бумага",
        "name": "Влад Бумага",
        "image": "assets/cards/bloggers-cis-влад-бумага.svg"
      },
      {
        "id": "bloggers-cis-ивангай",
        "name": "Ивангай",
        "image": "assets/cards/bloggers-cis-ивангай.svg"
      },
      {
        "id": "bloggers-cis-мамикс",
        "name": "Мамикс",
        "image": "assets/cards/bloggers-cis-мамикс.svg"
      },
      {
        "id": "bloggers-cis-даня-милохин",
        "name": "Даня Милохин",
        "image": "assets/cards/bloggers-cis-даня-милохин.svg"
      },
      {
        "id": "bloggers-cis-егорик",
        "name": "Егорик",
        "image": "assets/cards/bloggers-cis-егорик.svg"
      },
      {
        "id": "bloggers-cis-а4-команда",
        "name": "А4 команда",
        "image": "assets/cards/bloggers-cis-а4-команда.svg"
      },
      {
        "id": "bloggers-cis-куплинов",
        "name": "Куплинов",
        "image": "assets/cards/bloggers-cis-куплинов.svg"
      },
      {
        "id": "bloggers-cis-брайан-мапс",
        "name": "Брайан Мапс",
        "image": "assets/cards/bloggers-cis-брайан-мапс.svg"
      },
      {
        "id": "bloggers-cis-литвин",
        "name": "Литвин",
        "image": "assets/cards/bloggers-cis-литвин.svg"
      },
      {
        "id": "bloggers-cis-моргенштерн",
        "name": "Моргенштерн",
        "image": "assets/cards/bloggers-cis-моргенштерн.svg"
      },
      {
        "id": "bloggers-cis-некоглай",
        "name": "Некоглай",
        "image": "assets/cards/bloggers-cis-некоглай.svg"
      },
      {
        "id": "bloggers-cis-елена-райтман",
        "name": "Елена Райтман",
        "image": "assets/cards/bloggers-cis-елена-райтман.svg"
      },
      {
        "id": "bloggers-cis-саша-спилберг",
        "name": "Саша Спилберг",
        "image": "assets/cards/bloggers-cis-саша-спилберг.svg"
      },
      {
        "id": "bloggers-cis-катя-клэп",
        "name": "Катя Клэп",
        "image": "assets/cards/bloggers-cis-катя-клэп.svg"
      },
      {
        "id": "bloggers-cis-дима-масленников",
        "name": "Дима Масленников",
        "image": "assets/cards/bloggers-cis-дима-масленников.svg"
      }
    ]
  },
  {
    "id": "cinema",
    "title": "Кино",
    "emoji": "🎥",
    "cover": "assets/packs/cinema.svg",
    "free": false,
    "cards": [
      {
        "id": "cinema-гарри-поттер",
        "name": "Гарри Поттер",
        "image": "assets/cards/cinema-гарри-поттер.svg"
      },
      {
        "id": "cinema-джек-воробей",
        "name": "Джек Воробей",
        "image": "assets/cards/cinema-джек-воробей.svg"
      },
      {
        "id": "cinema-терминатор",
        "name": "Терминатор",
        "image": "assets/cards/cinema-терминатор.svg"
      },
      {
        "id": "cinema-джокер",
        "name": "Джокер",
        "image": "assets/cards/cinema-джокер.svg"
      },
      {
        "id": "cinema-форрест-гамп",
        "name": "Форрест Гамп",
        "image": "assets/cards/cinema-форрест-гамп.svg"
      },
      {
        "id": "cinema-джон-уик",
        "name": "Джон Уик",
        "image": "assets/cards/cinema-джон-уик.svg"
      },
      {
        "id": "cinema-нео",
        "name": "Нео",
        "image": "assets/cards/cinema-нео.svg"
      },
      {
        "id": "cinema-дарт-вейдер",
        "name": "Дарт Вейдер",
        "image": "assets/cards/cinema-дарт-вейдер.svg"
      },
      {
        "id": "cinema-индиана-джонс",
        "name": "Индиана Джонс",
        "image": "assets/cards/cinema-индиана-джонс.svg"
      },
      {
        "id": "cinema-рокки",
        "name": "Рокки",
        "image": "assets/cards/cinema-рокки.svg"
      },
      {
        "id": "cinema-шерлок-холмс",
        "name": "Шерлок Холмс",
        "image": "assets/cards/cinema-шерлок-холмс.svg"
      },
      {
        "id": "cinema-халк",
        "name": "Халк",
        "image": "assets/cards/cinema-халк.svg"
      },
      {
        "id": "cinema-тони-старк",
        "name": "Тони Старк",
        "image": "assets/cards/cinema-тони-старк.svg"
      },
      {
        "id": "cinema-эллен-рипли",
        "name": "Эллен Рипли",
        "image": "assets/cards/cinema-эллен-рипли.svg"
      },
      {
        "id": "cinema-ганнибал-лектер",
        "name": "Ганнибал Лектер",
        "image": "assets/cards/cinema-ганнибал-лектер.svg"
      }
    ]
  },
  {
    "id": "footballers",
    "title": "Футболисты",
    "emoji": "⚽",
    "cover": "assets/packs/footballers.svg",
    "free": false,
    "cards": [
      {
        "id": "footballers-лионель-месси",
        "name": "Лионель Месси",
        "image": "assets/cards/footballers-лионель-месси.svg"
      },
      {
        "id": "footballers-криштиану-роналду",
        "name": "Криштиану Роналду",
        "image": "assets/cards/footballers-криштиану-роналду.svg"
      },
      {
        "id": "footballers-неймар",
        "name": "Неймар",
        "image": "assets/cards/footballers-неймар.svg"
      },
      {
        "id": "footballers-килиан-мбаппе",
        "name": "Килиан Мбаппе",
        "image": "assets/cards/footballers-килиан-мбаппе.svg"
      },
      {
        "id": "footballers-эрлинг-холанд",
        "name": "Эрлинг Холанд",
        "image": "assets/cards/footballers-эрлинг-холанд.svg"
      },
      {
        "id": "footballers-мохамед-салах",
        "name": "Мохамед Салах",
        "image": "assets/cards/footballers-мохамед-салах.svg"
      },
      {
        "id": "footballers-карим-бензема",
        "name": "Карим Бензема",
        "image": "assets/cards/footballers-карим-бензема.svg"
      },
      {
        "id": "footballers-лука-модрич",
        "name": "Лука Модрич",
        "image": "assets/cards/footballers-лука-модрич.svg"
      },
      {
        "id": "footballers-роберт-левандовски",
        "name": "Роберт Левандовски",
        "image": "assets/cards/footballers-роберт-левандовски.svg"
      },
      {
        "id": "footballers-винисиус-жуниор",
        "name": "Винисиус Жуниор",
        "image": "assets/cards/footballers-винисиус-жуниор.svg"
      },
      {
        "id": "footballers-зинедин-зидан",
        "name": "Зинедин Зидан",
        "image": "assets/cards/footballers-зинедин-зидан.svg"
      },
      {
        "id": "footballers-роналдиньо",
        "name": "Роналдиньо",
        "image": "assets/cards/footballers-роналдиньо.svg"
      },
      {
        "id": "footballers-пеле",
        "name": "Пеле",
        "image": "assets/cards/footballers-пеле.svg"
      },
      {
        "id": "footballers-марадона",
        "name": "Марадона",
        "image": "assets/cards/footballers-марадона.svg"
      },
      {
        "id": "footballers-серхио-рамос",
        "name": "Серхио Рамос",
        "image": "assets/cards/footballers-серхио-рамос.svg"
      }
    ]
  },
  {
    "id": "anime",
    "title": "Аниме",
    "emoji": "🎮",
    "cover": "assets/packs/anime.svg",
    "free": false,
    "cards": [
      {
        "id": "anime-наруто",
        "name": "Наруто",
        "image": "assets/cards/anime-наруто.svg"
      },
      {
        "id": "anime-саске",
        "name": "Саске",
        "image": "assets/cards/anime-саске.svg"
      },
      {
        "id": "anime-луффи",
        "name": "Луффи",
        "image": "assets/cards/anime-луффи.svg"
      },
      {
        "id": "anime-зоро",
        "name": "Зоро",
        "image": "assets/cards/anime-зоро.svg"
      },
      {
        "id": "anime-гоку",
        "name": "Гоку",
        "image": "assets/cards/anime-гоку.svg"
      },
      {
        "id": "anime-вегета",
        "name": "Вегета",
        "image": "assets/cards/anime-вегета.svg"
      },
      {
        "id": "anime-ичиго",
        "name": "Ичиго",
        "image": "assets/cards/anime-ичиго.svg"
      },
      {
        "id": "anime-лайт-ягами",
        "name": "Лайт Ягами",
        "image": "assets/cards/anime-лайт-ягами.svg"
      },
      {
        "id": "anime-леви",
        "name": "Леви",
        "image": "assets/cards/anime-леви.svg"
      },
      {
        "id": "anime-эрен",
        "name": "Эрен",
        "image": "assets/cards/anime-эрен.svg"
      },
      {
        "id": "anime-танджиро",
        "name": "Танджиро",
        "image": "assets/cards/anime-танджиро.svg"
      },
      {
        "id": "anime-незуко",
        "name": "Незуко",
        "image": "assets/cards/anime-незуко.svg"
      },
      {
        "id": "anime-сайтама",
        "name": "Сайтама",
        "image": "assets/cards/anime-сайтама.svg"
      },
      {
        "id": "anime-годжо",
        "name": "Годжо",
        "image": "assets/cards/anime-годжо.svg"
      },
      {
        "id": "anime-итачи",
        "name": "Итачи",
        "image": "assets/cards/anime-итачи.svg"
      }
    ]
  },
  {
    "id": "cities",
    "title": "Города",
    "emoji": "🏙️",
    "cover": "assets/packs/cities.svg",
    "free": false,
    "cards": [
      {
        "id": "cities-москва",
        "name": "Москва",
        "image": "assets/cards/cities-москва.svg"
      },
      {
        "id": "cities-ташкент",
        "name": "Ташкент",
        "image": "assets/cards/cities-ташкент.svg"
      },
      {
        "id": "cities-нью-йорк",
        "name": "Нью-Йорк",
        "image": "assets/cards/cities-нью-йорк.svg"
      },
      {
        "id": "cities-лондон",
        "name": "Лондон",
        "image": "assets/cards/cities-лондон.svg"
      },
      {
        "id": "cities-париж",
        "name": "Париж",
        "image": "assets/cards/cities-париж.svg"
      },
      {
        "id": "cities-токио",
        "name": "Токио",
        "image": "assets/cards/cities-токио.svg"
      },
      {
        "id": "cities-дубай",
        "name": "Дубай",
        "image": "assets/cards/cities-дубай.svg"
      },
      {
        "id": "cities-стамбул",
        "name": "Стамбул",
        "image": "assets/cards/cities-стамбул.svg"
      },
      {
        "id": "cities-берлин",
        "name": "Берлин",
        "image": "assets/cards/cities-берлин.svg"
      },
      {
        "id": "cities-рим",
        "name": "Рим",
        "image": "assets/cards/cities-рим.svg"
      },
      {
        "id": "cities-барселона",
        "name": "Барселона",
        "image": "assets/cards/cities-барселона.svg"
      },
      {
        "id": "cities-сеул",
        "name": "Сеул",
        "image": "assets/cards/cities-сеул.svg"
      },
      {
        "id": "cities-пекин",
        "name": "Пекин",
        "image": "assets/cards/cities-пекин.svg"
      },
      {
        "id": "cities-санкт-петербург",
        "name": "Санкт-Петербург",
        "image": "assets/cards/cities-санкт-петербург.svg"
      },
      {
        "id": "cities-самарканд",
        "name": "Самарканд",
        "image": "assets/cards/cities-самарканд.svg"
      }
    ]
  },
  {
    "id": "brands",
    "title": "Бренды",
    "emoji": "🏷️",
    "cover": "assets/packs/brands.svg",
    "free": false,
    "cards": [
      {
        "id": "brands-apple",
        "name": "Apple",
        "image": "assets/cards/brands-apple.svg"
      },
      {
        "id": "brands-nike",
        "name": "Nike",
        "image": "assets/cards/brands-nike.svg"
      },
      {
        "id": "brands-adidas",
        "name": "Adidas",
        "image": "assets/cards/brands-adidas.svg"
      },
      {
        "id": "brands-samsung",
        "name": "Samsung",
        "image": "assets/cards/brands-samsung.svg"
      },
      {
        "id": "brands-coca-cola",
        "name": "Coca-Cola",
        "image": "assets/cards/brands-coca-cola.svg"
      },
      {
        "id": "brands-mcdonald-s",
        "name": "McDonald's",
        "image": "assets/cards/brands-mcdonald-s.svg"
      },
      {
        "id": "brands-google",
        "name": "Google",
        "image": "assets/cards/brands-google.svg"
      },
      {
        "id": "brands-microsoft",
        "name": "Microsoft",
        "image": "assets/cards/brands-microsoft.svg"
      },
      {
        "id": "brands-tesla",
        "name": "Tesla",
        "image": "assets/cards/brands-tesla.svg"
      },
      {
        "id": "brands-bmw",
        "name": "BMW",
        "image": "assets/cards/brands-bmw.svg"
      },
      {
        "id": "brands-mercedes-benz",
        "name": "Mercedes-Benz",
        "image": "assets/cards/brands-mercedes-benz.svg"
      },
      {
        "id": "brands-sony",
        "name": "Sony",
        "image": "assets/cards/brands-sony.svg"
      },
      {
        "id": "brands-playstation",
        "name": "PlayStation",
        "image": "assets/cards/brands-playstation.svg"
      },
      {
        "id": "brands-netflix",
        "name": "Netflix",
        "image": "assets/cards/brands-netflix.svg"
      },
      {
        "id": "brands-amazon",
        "name": "Amazon",
        "image": "assets/cards/brands-amazon.svg"
      }
    ]
  },
  {
    "id": "tiktok",
    "title": "TikTok",
    "emoji": "📱",
    "cover": "assets/packs/tiktok.svg",
    "free": false,
    "cards": [
      {
        "id": "tiktok-хаби-лейм",
        "name": "Хаби Лейм",
        "image": "assets/cards/tiktok-хаби-лейм.svg"
      },
      {
        "id": "tiktok-белла-порч",
        "name": "Белла Порч",
        "image": "assets/cards/tiktok-белла-порч.svg"
      },
      {
        "id": "tiktok-чарли-дамелио",
        "name": "Чарли Дамелио",
        "image": "assets/cards/tiktok-чарли-дамелио.svg"
      },
      {
        "id": "tiktok-эддисон-рэй",
        "name": "Эддисон Рэй",
        "image": "assets/cards/tiktok-эддисон-рэй.svg"
      },
      {
        "id": "tiktok-зак-кинг",
        "name": "Зак Кинг",
        "image": "assets/cards/tiktok-зак-кинг.svg"
      },
      {
        "id": "tiktok-лорен-грей",
        "name": "Лорен Грей",
        "image": "assets/cards/tiktok-лорен-грей.svg"
      },
      {
        "id": "tiktok-дикси-дамелио",
        "name": "Дикси Дамелио",
        "image": "assets/cards/tiktok-дикси-дамелио.svg"
      },
      {
        "id": "tiktok-спенсер-икс",
        "name": "Спенсер Икс",
        "image": "assets/cards/tiktok-спенсер-икс.svg"
      },
      {
        "id": "tiktok-брент-ривера",
        "name": "Брент Ривера",
        "image": "assets/cards/tiktok-брент-ривера.svg"
      },
      {
        "id": "tiktok-домелик",
        "name": "Домелик",
        "image": "assets/cards/tiktok-домелик.svg"
      },
      {
        "id": "tiktok-рахим-абрамов",
        "name": "Рахим Абрамов",
        "image": "assets/cards/tiktok-рахим-абрамов.svg"
      },
      {
        "id": "tiktok-дина-саева",
        "name": "Дина Саева",
        "image": "assets/cards/tiktok-дина-саева.svg"
      },
      {
        "id": "tiktok-валя-карнавал",
        "name": "Валя Карнавал",
        "image": "assets/cards/tiktok-валя-карнавал.svg"
      },
      {
        "id": "tiktok-аня-покров",
        "name": "Аня Покров",
        "image": "assets/cards/tiktok-аня-покров.svg"
      },
      {
        "id": "tiktok-артур-бабич",
        "name": "Артур Бабич",
        "image": "assets/cards/tiktok-артур-бабич.svg"
      }
    ]
  }
];

module.exports = { PACKS };

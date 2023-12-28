const movies = [
  {
    genre: 'drama',
    name: 'Втеча з Шоушенка',
    images: [
      '/shawshank/shawshank_h.jpg',
      '/shawshank/shawshank_m.jpg',
      '/shawshank/shawshank_e.jpg',
    ],
    guessed: false,
  },
  {
    genre: 'animation',
    name: 'Волл І',
    images: ['/walle/walle_h.jpg', '/walle/walle_m.jpg', '/walle/walle_e.jpg'],
    guessed: false,
  },
  {
    genre: 'drama',
    name: 'Престиж',
    images: [
      '/prestige/prestige_h.jpg',
      '/prestige/prestige_m.jpg',
      '/prestige/prestige_e.jpg',
    ],
    guessed: false,
  },
  {
    genre: 'animation',
    name: 'Корпорація монстрів',
    images: [
      '/monstersinc/monstersinc_h.jpg',
      '/monstersinc/monstersinc_m.jpg',
      '/monstersinc/monstersinc_e.jpg',
    ],
    guessed: false,
  },
  {
    genre: 'comedy',
    name: 'Один вдома',
    images: [
      '/home_alone/home_alone_h.jpg',
      '/home_alone/home_alone_m.jpg',
      '/home_alone/home_alone_e.jpg',
    ],
    guessed: false,
  },
  {
    genre: 'fantasy',
    name: 'Вартові Галактики',
    images: ['/gotg/gotg_h.jpg', '/gotg/gotg_m.jpg', '/gotg/gotg_e.jpg'],
    guessed: false,
  },
  {
    genre: 'fantasy',
    name: 'Людина павук',
    images: ['/spiderman/3.jpg', '/spiderman/2.jpg', '/spiderman/1.jpg'],
    guessed: false,
  },
  {
    genre: 'comedy',
    name: 'Форест Гамп',
    images: [
      '/forest_gump/forest_gump_h.jpg',
      '/forest_gump/forest_gump_m.jpg',
      '/forest_gump/forest_gump_e.jpg',
    ],
    guessed: false,
  },
  {
    genre: 'drama',
    name: 'Крихітка на мільйон доларів',
    images: [
      '/mildollarbaby/mildollarbaby_h.jpg',
      '/mildollarbaby/mildollarbaby_m.jpg',
      '/mildollarbaby/mildollarbaby_e.jpg',
    ],
    guessed: false,
  },
  {
    genre: 'real_events',
    name: 'Хоробре серце',
    images: ['/braveheart/3.jpg', '/braveheart/2.jpg', '/braveheart/1.jpg'],
    guessed: false,
  },
  {
    genre: 'real_events',
    name: 'Людина дощу',
    images: ['/rainman/3.jpg', '/rainman/2.jpg', '/rainman/1.jpg'],
    guessed: false,
  },
  {
    genre: 'real_events',
    name: '12 років рабства',
    images: ['/12slave/3.jpg', '/12slave/2.jpg', '/12slave/1.jpg'],
    guessed: false,
  },
  {
    genre: 'real_events',
    name: '127 годин',
    images: ['/127hours/3.jpg', '/127hours/2.jpg', '/127hours/1.jpg'],
    guessed: false,
  },
  {
    genre: 'real_events',
    name: 'Американський снайпер',
    images: [
      '/americansniper/1.jpg',
      '/americansniper/2.jpg',
      '/americansniper/3.jpg',
    ],
    guessed: false,
  },
  {
    genre: 'real_events',
    name: 'Ігри розуму',
    images: [
      '/beautifulmind/1.jpg',
      '/beautifulmind/2.jpg',
      '/beautifulmind/3.jpg',
    ],
    guessed: false,
  },
  {
    genre: 'real_events',
    name: 'Гра на пониження',
    images: ['/bigshort/1.jpg', '/bigshort/2.jpg', '/bigshort/3.jpg'],
    guessed: false,
  },
  {
    genre: 'real_events',
    name: 'Капітан Філліпс',
    images: [
      '/captain_philips/1.jpg',
      '/captain_philips/2.jpg',
      '/captain_philips/3.jpg',
    ],
    guessed: false,
  },

  {
    genre: 'real_events',
    name: 'Впіймай мене, якщо зможеш',
    images: [
      '/CatchMeIfYouCan/1.jpg',
      '/CatchMeIfYouCan/2.jpg',
      '/CatchMeIfYouCan/3.jpg',
    ],
    guessed: false,
  },
  {
    genre: 'real_events',
    name: 'Війна струмів',
    images: ['/current_war/1.jpg', '/current_war/2.jpg', '/current_war/3.jpg'],
    guessed: false,
  },
  {
    genre: 'real_events',
    name: 'Дюнкерк',
    images: ['/dunkirk/1.jpg', '/dunkirk/2.jpg', '/dunkirk/3.jpg'],
    guessed: false,
  },
  {
    genre: 'real_events',
    name: 'Їсти молитися кохати',
    images: ['/eatpraylove/1.jpg', '/eatpraylove/2.jpg', '/eatpraylove/3.jpg'],
    guessed: false,
  },
  {
    genre: 'real_events',
    name: 'З міркувань совісті',
    images: [
      '/hacksawridge/1.jpg',
      '/hacksawridge/2.jpg',
      '/hacksawridge/3.jpg',
    ],
    guessed: false,
  },
  {
    genre: 'real_events',
    name: 'Гра в імітацію',
    images: [
      '/imitationgame/1.jpg',
      '/imitationgame/2.jpg',
      '/imitationgame/3.jpg',
    ],
    guessed: false,
  },
  {
    genre: 'real_events',
    name: 'Король говорить!',
    images: ['/kingspeech/1.jpg', '/kingspeech/2.jpg', '/kingspeech/3.jpg'],
    guessed: false,
  },
  {
    genre: 'real_events',
    name: 'Лінкольн',
    images: ['/lincoln/1.jpg', '/lincoln/2.jpg', '/lincoln/3.jpg'],
    guessed: false,
  },
  {
    genre: 'real_events',
    name: 'Людина, яка змінила все',
    images: ['/moneyball/1.jpg', '/moneyball/2.jpg', '/moneyball/3.jpg'],
    guessed: false,
  },
  {
    genre: 'real_events',
    name: 'Піаніст',
    images: ['/pianist/1.jpg', '/pianist/2.jpg', '/pianist/3.jpg'],
    guessed: false,
  },
  {
    genre: 'real_events',
    name: 'У гонитві за щастям',
    images: [
      '/pursuithappiness/1.jpg',
      '/pursuithappiness/2.jpg',
      '/pursuithappiness/3.jpg',
    ],
    guessed: false,
  },

  {
    genre: 'real_events',
    name: 'Список Шиндлера',
    images: [
      '/schindlerslist/1.jpg',
      '/schindlerslist/2.jpg',
      '/schindlerslist/3.jpg',
    ],
    guessed: false,
  },
  {
    genre: 'real_events',
    name: 'Соціальна мережа',
    images: [
      '/socialnetwork/1.jpg',
      '/socialnetwork/2.jpg',
      '/socialnetwork/3.jpg',
    ],
    guessed: false,
  },
  {
    genre: 'action',
    name: 'Сікаріо',
    images: ['/sicario/1.jpg', '/sicario/2.jpg', '/sicario/3.jpg'],
    guessed: false,
  },
  {
    genre: 'real_events',
    name: 'У центрі уваги',
    images: ['/spotlight/1.jpg', '/spotlight/2.jpg', '/spotlight/3.jpg'],
    guessed: false,
  },
  {
    genre: 'real_events',
    name: 'Термінал',
    images: ['/terminal/1.jpg', '/terminal/2.jpg', '/terminal/3.jpg'],
    guessed: false,
  },
  {
    genre: 'real_events',
    name: 'Теорія всього',
    images: [
      '/theoryeverything/1.jpg',
      '/theoryeverything/2.jpg',
      '/theoryeverything/3.jpg',
    ],
    guessed: false,
  },
  {
    genre: 'real_events',
    name: 'Зодіак',
    images: ['/zodiac/1.jpg', '/zodiac/2.jpg', '/zodiac/3.jpg'],
    guessed: false,
  },
];

export default movies;

//=============Raitings component==============/
export const getStars = (rating) => {
  return Array.from({ length: 10 }, (_, index) =>
    index < rating ? 'yellow' : 'gray'
  );
};

export const ratings = [
  { title: 'bonus offer', score: 9 },
  { title: 'betting variety', score: 8 },
  { title: 'mobile experience', score: 7 },
  { title: 'payment options', score: 9 },
];

//=============Navigation component==============/
export const menuItems = [
  {
    text: 'play review',
    icon: '/images/navigation/money.svg',
    alt: 'Play review',
  },
  {
    text: 'casino bonuses',
    icon: '/images/navigation/crown.svg',
    alt: 'Casino bonuses',
  },
  {
    text: 'casino bonuses',
    icon: '/images/navigation/trophy.svg',
    alt: 'Casino bonuses',
  },
  {
    text: 'casino app',
    icon: '/images/navigation/online-casino.svg',
    alt: 'Casino app',
  },
  {
    text: 'casino mobile',
    icon: '/images/navigation/mobile.svg',
    alt: 'Casino mobile',
  },
  {
    text: 'how to sign up',
    icon: '/images/navigation/casino.svg',
    alt: 'How to sign up',
  },
  {
    text: 'casino review',
    icon: '/images/navigation/croupier.svg',
    alt: 'Casino review',
  },
  {
    text: 'player reviews (4)',
    icon: '/images/navigation/credit-card.svg',
    alt: 'Player reviews',
  },
  {
    text: 'complaints',
    icon: '/images/navigation/poker-table.svg',
    alt: 'Complaints',
  },
];

//=============CasinoSidebar component==============/
export const sidebarItems = [
  {
    srcSet: '/images/sidebar/oil-1x.jpg 1x, /images/sidebar/oil-2x.jpg 2x',
    src: '/images/sidebar/oil-1x.jpg',
    alt: 'Queen of ise Casino',
    hasOverlay: true,
  },
  {
    srcSet: '/images/sidebar/queen-1x.jpg 1x, /images/sidebar/queen-2x.jpg 2x',
    src: '/images/sidebar/queen-1x.jpg',
    alt: 'Queen of ise Casino',
    hasOverlay: true,
  },
  {
    srcSet: '/images/sidebar/lucky-1x.jpg 1x, /images/sidebar/lucky-2x.jpg 2x',
    src: '/images/sidebar/lucky-1x.jpg',
    alt: 'Lucky Jack Casino',
    hasOverlay: true,
  },
  {
    srcSet:
      '/images/sidebar/hot-cash-1x.jpg 1x, /images/sidebar/hot-cash-2x.jpg 2x',
    src: '/images/sidebar/hot-cash-1x.jpg',
    alt: 'Hot Cash Casino',
    hasOverlay: true,
  },
  {
    srcSet:
      '/images/sidebar/lucky-jungle-1x.jpg 1x, /images/sidebar/lucky-jungle-2x.jpg 2x',
    src: '/images/sidebar/lucky-jungle-1x.jpg',
    alt: 'Lucky Jack Jungle Casino',
    hasOverlay: true,
  },
  {
    srcSet: '/images/sidebar/coins-1x.jpg 1x, /images/sidebar/coins-2x.jpg 2x',
    src: '/images/sidebar/coins-1x.jpg',
    alt: 'Royal Coins Casino',
    hasOverlay: true,
  },
];

//=============EventsSidebar component==============/
export const eventsSidebarItems = [
  {
    id: 1,
    srcSet:
      '/images/sidebar/usa-football-1x.png 1x, /images/sidebar/usa-football-2x.png 2x',
    src: '/images/sidebar/usa-football-1x.png',
    alt: 'American football',
    text: 'American football',
  },
  {
    id: 2,
    srcSet:
      '/images/sidebar/basketball-1x.png 1x, /images/sidebar/basketball-2x.png 2x',
    src: '/images/sidebar/basketball-1x.png',
    alt: 'Basketball',
    text: 'Basketball',
  },
  {
    id: 3,
    srcSet:
      '/images/sidebar/tennis-1x.png 1x, /images/sidebar/tennis-2x.png 2x',
    src: '/images/sidebar/tennis-1x.png',
    alt: 'Tennis',
    text: 'Tennis',
  },
  {
    id: 4,
    srcSet:
      '/images/sidebar/basket-1x.png 1x, /images/sidebar/basket-2x.png 2x',
    src: '/images/sidebar/basket-1x.png',
    alt: 'Basketball',
    text: 'Basketball',
  },
  {
    id: 5,
    srcSet:
      '/images/sidebar/bowling-1x.png 1x, /images/sidebar/bowling-2x.png 2x',
    src: '/images/sidebar/bowling-1x.png',
    alt: 'Bowling',
    text: 'Bowling',
  },
  {
    id: 6,
    srcSet: '/images/sidebar/box-1x.png 1x, /images/sidebar/box-2x.png 2x',
    src: '/images/sidebar/box-1x.png',
    alt: 'Box',
    text: 'Box',
  },
  {
    id: 7,
    srcSet:
      '/images/sidebar/football-1x.png 1x, /images/sidebar/football-2x.png 2x',
    src: '/images/sidebar/football-1x.png',
    alt: 'Football',
    text: 'Football',
  },
  {
    id: 8,
    srcSet: '/images/sidebar/golf-1x.png 1x, /images/sidebar/golf-2x.png 2x',
    src: '/images/sidebar/golf-1x.png',
    alt: 'Golf ball',
    text: 'Golf',
  },
  {
    id: 9,
    srcSet:
      '/images/sidebar/golf-club-1x.png 1x, /images/sidebar/golf-club-2x.png 2x',
    src: '/images/sidebar/golf-club-1x.png',
    alt: 'Golf club',
    text: 'Golf Club',
  },
  {
    id: 10,
    srcSet:
      '/images/sidebar/skateboard-1x.png 1x, /images/sidebar/skateboard-2x.png 2x',
    src: '/images/sidebar/skateboard-1x.png',
    alt: 'Skateboard',
    text: 'Skateboard',
  },
  {
    id: 11,
    srcSet:
      '/images/sidebar/table-tennis-1x.png 1x, /images/sidebar/table-tennis-2x.png 2x',
    src: '/images/sidebar/table-tennis-1x.png',
    alt: 'Table tennis',
    text: 'Table tennis',
  },
  {
    id: 12,
    srcSet:
      '/images/sidebar/tennis-racket-1x.png 1x, /images/sidebar/tennis-racket-2x.png 2x',
    src: '/images/sidebar/tennis-racket-1x.png',
    alt: 'Tennis racket',
    text: 'Tennis racket',
  },
  {
    id: 13,
    srcSet:
      '/images/sidebar/volleyball-1x.png 1x, /images/sidebar/volleyball-2x.png 2x',
    src: '/images/sidebar/volleyball-1x.png',
    alt: 'Volleyball',
    text: 'Volleyball',
  },
];

//=============QuickFacts component==============/
export const factsItems = [
  {
    emoji: '🌐',
    title: 'Website',
    description: 'casinoname.com',
  },
  {
    emoji: '🕹',
    title: 'Game Types:',
    description: 'Sportsbook, Casino, Live Games, Live Casino',
  },
  {
    emoji: '💸',
    title: 'Deposit methods:',
    description:
      'Visa, Masterscard, Maestro, PayPal, Skrill, Neteller, Trustly, Bitcoin, Bank Transfer, Entropay, ecoPayz, Neosurf',
  },
  {
    emoji: '💳',
    title: 'Withdrawal methods:',
    description:
      'Visa, Mastercard, Maestro, PayPal, Skrill, Neteller, Trustly, Bitcoin, Bank Transfer, Entropay, ecoPayz, Neosurf',
  },
  {
    emoji: '🤑',
    title: 'Betting functions:',
    description: 'Live betting, cash out',
  },
  {
    emoji: '🎰',
    title: 'Casino game types:',
    description: 'Slots, table games',
  },
  {
    emoji: '🕺',
    title: 'Casino provider:',
    description:
      '1X2 Network, Amatic Industries, Apollo Games, Asia Gaming and more',
  },
  {
    emoji: '📱',
    title: 'Apps:',
    description: 'iPhone, Android',
  },
  {
    emoji: '🏠',
    title: 'Founded Year:',
    description: '2017',
  },
];

//=============Reviews component==============/
export const ITEMS_PER_PAGE = 2;

export const reviewsItems = [
  {
    title: 'joshua',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat egestas eget.',
    rating: 4.5,
    src: '/images/reviews/player-1x.jpg',
    srcSet:
      '/images/reviews/player-1x.jpg 1x, /images/reviews/player-2x.jpg 2x',
  },
  {
    title: 'mark',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat egestas eget.',
    rating: 4.5,
    src: '/images/reviews/user-1x.jpg',
    srcSet: '/images/reviews/user-1x.jpg 1x, /images/reviews/user-2x.jpg 2x',
  },
  {
    title: 'joshua',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat egestas eget.',
    rating: 4.5,
    src: '/images/reviews/player-1x.jpg',
    srcSet:
      '/images/reviews/player-1x.jpg 1x, /images/reviews/player-2x.jpg 2x',
  },
];

//=============Faq component==============/
export const faqItems = [
  {
    id: 1,
    title: 'question',
    content:
      "This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. ",
  },
  {
    id: 2,
    title: 'question',
    content:
      "This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. ",
  },
  {
    id: 3,
    title: 'question',
    content:
      "This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. ",
  },
];

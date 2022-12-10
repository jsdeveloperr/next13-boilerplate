export const SITE_NAME = 'NextJs Redux';

export const USER_MENU_LINKS = [
  { title: 'My Favorites', url: '/user/favorite' },
  { title: 'Recent Viewed', url: '/user/recent' },
  { title: 'Change Profile', url: '/user/profile' },
  { title: 'Logout ', url: '/user/favorite' },
];

export const PROFILE_STAR_LABELS: { [index: number]: string } = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};

export const PROFILE_SLIDER_MARKS = [
  {
    value: 1,
    label: '1 year',
  },
  {
    value: 5,
    label: '5 year',
  },
  {
    value: 10,
    label: '10 years',
  },
];

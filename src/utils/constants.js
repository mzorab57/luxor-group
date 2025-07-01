export const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  {
    name: 'Pages',
    children: [
      { name: 'Gallery', href: '/gallery' },
      { name: 'Video', href: '/video' },
      { name: 'History', href: '/history' },
    ],
  },
  { name: 'Contact', href: '/contact' },
];
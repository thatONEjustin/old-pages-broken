export type MenuItem = {
  label: string,
  href: string,
  icon: string,
  scrollTo?: string
}

export const menu_data: MenuItem[] = [
  {
    'label': 'home',
    'href': '/',
    'icon': 'nf-custom-home'
  },
  // {
  //   'label': 'about',
  //   'href': '#',
  //   'icon': 'nf-dev-terminal',
  //   'scrollTo': 'about-me'
  // },
  // {
  //   'label': 'blog',
  //   'href': '/blog',
  //   'icon': 'nf-md-keyboard'
  // },
]

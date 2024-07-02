export type MenuItem = {
  label: string,
  url: string,
  icon: string
}

export const menu_data: MenuItem[] = [
  {
    'label': 'home',
    'url': '/',
    'icon': 'nf-custom-home'
  },
  {
    'label': 'about',
    'url': '/about-me',
    'icon': 'nf-dev-terminal'
  },
  {
    'label': 'blog',
    'url': '/blog',
    'icon': 'nf-md-keyboard'
  },
]

import { getPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [],
};

export const footerData = {
  links: [
    { text: 'Email us', href: '/contact' },
    { text: 'Phone:', phone: '+351 911 075 104' },
    { text: 'GDPR', href: getPermalink('/gdpr') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  secondaryLinks: [],
  socialLinks: [
    // { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    // { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    // { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    // { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
  ],
  // ToDo: add favicon here
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm bg-[url(https://onwidget.com/favicon/favicon-32x32.png)]"></span>
    Made by <a class="text-blue-600 hover:underline dark:text-gray-200" href="#"> Division</a> · All rights reserved.
  `,
};

import { getBlogPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Khởi Duyên',
      href: '/#ve-viet-nghi',
    },
    {
      text: 'Tam Phẩm',
      links: [
        { text: 'Vòng Ngọc Cẩm Thạch A', href: '/#ngoc-cam-thach' },
        { text: 'Pháp Phục Ứng Dụng', href: '/#phap-phuc' },
        { text: 'Khăn Chầu Áo Ngự', href: '/#khan-chau' },
      ],
    },
    {
      text: 'Đo Ni Tay',
      href: '/#do-ni-tay',
    },
    {
      text: 'Góc Kể Chuyện',
      href: getBlogPermalink(),
    },
  ],
  actions: [
    {
      text: '☯ Chân Truyền',
      href: '/chan-truyen',
      class: 'border border-amber-500 text-amber-600 dark:text-amber-400 font-semibold px-3 py-1.5 rounded-full text-xs hover:bg-amber-500 hover:text-white transition',
    },
    {
      text: 'Thỉnh Duyên',
      href: 'https://zalo.me',
      target: '_blank',
      variant: 'primary',
    },
  ],
};

export const footerData = {
  links: [],
  secondaryLinks: [],
  socialLinks: [],
  footNote: `© ${new Date().getFullYear()} Việt Nghi · Gìn giữ lề lối tiền nhân.`,
};

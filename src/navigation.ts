import { getBlogPermalink } from './utils/permalinks';

export const headerData = {
  links: [
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

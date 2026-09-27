import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Khởi Duyên',
      href: '/#ve-viet-nghi',
    },
    {
      text: 'Tam Phẩm',
      links: [
        {
          text: 'Khăn Chầu Áo Ngự',
          href: '/#khan-chau-ao-ngu',
        },
        {
          text: 'Pháp Phục Thiền Tịnh',
          href: '/#phap-phuc',
        },
        {
          text: 'Ngọc Cẩm Thạch Loại A',
          href: '/#ngoc-cam-thach',
        },
      ],
    },
    {
      text: 'Góc Kể Chuyện',
      href: getBlogPermalink(),
    },
    {
      text: 'Minh Bạch Giám Định',
      href: '/#minh-bach-giam-dinh',
    },
  ],
  actions: [{ text: 'Thỉnh Duyên', href: 'https://zalo.me', target: '_blank' }],
};

export const footerData = {
  links: [],
  secondaryLinks: [],
  socialLinks: [],
  footNote: `© ${new Date().getFullYear()} Việt Nghi · Gìn giữ lề lối tiền nhân.`,
};

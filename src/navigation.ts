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
      href: '/blog',
    },
    {
      text: 'Minh Bạch Giám Định',
      href: '/#minh-bach-giam-dinh',
    },
  ],
  actions: [
    {
      text: 'Thỉnh Duyên',
      href: 'https://zalo.me/SỐ_ĐIỆN_THOẠI_CỦA_THẦY', // Thay bằng số Zalo hoặc link Fanpage
      target: '_blank',
      variant: 'primary',
    },
  ],
};

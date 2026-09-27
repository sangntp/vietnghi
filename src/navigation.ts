import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

// ==========================================
// BỘ MENU THEME 1: "Tam Phẩm Tinh Hoa" (Hiện đại, tối ưu chuyển đổi)
// ==========================================
const headerTheme1 = {
  links: [
    { text: 'Khởi Duyên', href: '/#ve-viet-nghi' },
    {
      text: 'Tam Phẩm',
      links: [
        { text: 'Khăn Chầu Áo Ngự', href: '/#khan-chau-ao-ngu' },
        { text: 'Pháp Phục Thiền Tịnh', href: '/#phap-phuc' },
        { text: 'Ngọc Cẩm Thạch Loại A', href: '/#ngoc-cam-thach' },
      ],
    },
    { text: 'Góc Kể Chuyện', href: getBlogPermalink() },
    { text: 'Minh Bạch Giám Định', href: '/#minh-bach-giam-dinh' },
  ],
  actions: [{ text: 'Thỉnh Duyên', href: 'https://zalo.me', target: '_blank' }],
};

// ==========================================
// BỘ MENU THEME 2: "Hành Trình Chiêm Nghiệm" (Sâu lắng, đậm chất cổ phong)
// ==========================================
const headerTheme2 = {
  links: [
    { text: 'Diện Kiến', href: '/#hero' },
    {
      text: 'Tác Phẩm',
      links: [
        { text: 'Y Phục Nghi Lễ', href: '/#khan-chau-ao-ngu' },
        { text: 'Trang Phục Thường Nhật', href: '/#phap-phuc' },
        { text: 'Ngọc Phỉ Thúy Loại A', href: '/#ngoc-cam-thach' },
      ],
    },
    { text: 'Điển Tích & Ngọc Học', href: getBlogPermalink() },
    { text: 'Chỉ Dẫn Đo Ni', href: '/#huong-dan-ni' },
  ],
  actions: [{ text: 'Trò Chuyện Hữu Duyên', href: 'https://zalo.me', target: '_blank' }],
};

// =====================================================================
// 👉 CÔNG TẮC ĐỔI THEME: Chọn 'headerTheme1' HOẶC 'headerTheme2' ở đây
// =====================================================================
export const headerData = headerTheme1; 

export const footerData = {
  links: [],
  secondaryLinks: [],
  socialLinks: [],
  footNote: `© ${new Date().getFullYear()} Việt Nghi · Gìn giữ lề lối tiền nhân.`,
};

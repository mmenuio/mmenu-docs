/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Giới thiệu',
      items: [
        'gioi-thieu/khoi-dau-nhanh',
        'gioi-thieu/cau-truc-app',
      ],
    },
    {
      type: 'category',
      label: 'Hồ sơ tài khoản',
      items: [
        'ho-so/ho-so',
        'ho-so/mat-khau',
        'ho-so/ngon-ngu',
      ],
    },
    {
      type: 'category',
      label: 'Màn hình Tổng quan',
      items: [
        'tong-quan/dashboard',
        'tong-quan/chuyen-cua-hang',
      ],
    },
    {
      type: 'category',
      label: 'QL Order',
      items: [
        'ql-order/tong-quan',
        'ql-order/xem-ban',
        'ql-order/tao-order',
        'ql-order/phuc-vu',
        'ql-order/lich-su',
      ],
    },
    {
      type: 'category',
      label: 'QL Đặt chỗ',
      items: [
        'ql-dat-cho/tong-quan',
        'ql-dat-cho/tao-dat-cho',
        'ql-dat-cho/danh-sach',
      ],
    },
    {
      type: 'category',
      label: 'Bếp/Bar',
      items: [
        'bep-bar/tong-quan',
        'bep-bar/che-bien',
        'bep-bar/che-do-toi',
        'bep-bar/xac-nhan-phuc-vu',
      ],
    },
    {
      type: 'category',
      label: 'QL Thực đơn',
      items: [
        'ql-thuc-don/tong-quan',
        'ql-thuc-don/them-sua-san-pham',
        'ql-thuc-don/bat-tat-trang-thai',
        'ql-thuc-don/nhap-file',
        'ql-thuc-don/danh-muc',
        'ql-thuc-don/mon-tuy-chon',
      ],
    },
    {
      type: 'category',
      label: 'QL Khách hàng',
      items: [
        'ql-khach-hang/tong-quan',
        'ql-khach-hang/danh-sach',
        'ql-khach-hang/chi-tiet',
      ],
    },
    {
      type: 'category',
      label: 'Báo cáo KD',
      items: [
        'bao-cao/tong-quan',
        'bao-cao/doanh-thu',
        'bao-cao/khach-hang',
        'bao-cao/san-pham',
        'bao-cao/mon-an-abc',
        'bao-cao/theo-don',
        'bao-cao/phuong-thuc-thanh-toan',
        'bao-cao/nhan-vien',
        'bao-cao/theo-ban',
        'bao-cao/khu-vuc',
        'bao-cao/theo-ca',
        'bao-cao/danh-gia',
        'bao-cao/the-thanh-vien',
        'bao-cao/tra-mon',
        'bao-cao/theo-gio',
        'bao-cao/dieu-chinh-hoa-don',
        'bao-cao/doi-tac-giao-hang',
        'bao-cao/dat-cho',
        'bao-cao/tip',
        'bao-cao/luot-thich',
        'bao-cao/nguon-khach-hang',
        'bao-cao/nhom-khach-hang',
      ],
    },
    {
      type: 'category',
      label: 'QL Nhân viên',
      items: [
        'ql-nhan-vien/danh-sach',
        'ql-nhan-vien/them-nhan-vien',
        'ql-nhan-vien/phan-quyen',
        'ql-nhan-vien/sua-xoa',
      ],
    },
    {
      type: 'category',
      label: 'QL Ca',
      items: [
        'ql-ca/tong-quan',
        'ql-ca/mo-ca',
        'ql-ca/lich-su-ca',
        'ql-ca/dong-ca',
      ],
    },
    {
      type: 'category',
      label: 'Vật tư',
      items: [
        'vat-tu/tong-quan',
        'vat-tu/thiet-bi-pos',
      ],
    },
    {
      type: 'category',
      label: 'QL Kho',
      items: [
        'ql-kho/tong-quan',
        'ql-kho/nhap-kho',
        'ql-kho/xuat-kho',
      ],
    },
    {
      type: 'category',
      label: 'QL Khuyến mại',
      items: [
        'ql-khuyen-mai/tong-quan',
        'ql-khuyen-mai/tao-khuyen-mai',
        'ql-khuyen-mai/the-thanh-vien',
      ],
    },
    {
      type: 'category',
      label: 'Sổ thu chi',
      items: [
        'so-thu-chi/danh-sach',
        'so-thu-chi/tao-phieu',
        'so-thu-chi/phan-loai',
      ],
    },
    {
      type: 'category',
      label: 'Quản lý công việc',
      items: [
        'ql-cong-viec/tao-giao',
        'ql-cong-viec/theo-doi',
        'ql-cong-viec/lich-su',
      ],
    },
    {
      type: 'category',
      label: 'Cài đặt',
      items: [
        'cai-dat/ql-ban',
        'cai-dat/may-in',
        'cai-dat/luong-in-hoa-don',
        'cai-dat/van-hanh',
        'cai-dat/giao-dien',
        'cai-dat/thanh-toan',
        'cai-dat/thue-vat',
        'cai-dat/bep-bar',
        'cai-dat/dat-cho',
        'cai-dat/ca-co-dinh',
        'cai-dat/pos-display-api',
      ],
    },
    {
      type: 'category',
      label: 'Yêu cầu hỗ trợ',
      items: [
        'ho-tro/gui-yeu-cau',
        'ho-tro/theo-doi',
      ],
    },
  ],
};

module.exports = sidebars;

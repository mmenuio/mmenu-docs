# Workflow: Viết Manual Mmenu Admin

## Tổng quan dự án

Viết tài liệu hướng dẫn sử dụng **Mmenu Admin** trên GitBook, sync qua GitHub.

- **GitHub repo**: `mmenuio/mmenu-docs` (branch `main`)
- **GitBook Space**: Docs (ID: `8JSga5jke72QJ9Fp3Bcw`)
- **GitBook Site**: Mmenu Docs → `docs.mmenu.io` (cần CNAME)
- **Local path**: `/Users/mmenutech/Documents/mmenuio/mmenu-docs/`

---

## Trạng thái hiện tại

### Đã hoàn thành — Nội dung (87 files .md)

| Module | Files | Trạng thái |
|--------|-------|------------|
| Giới thiệu | 2 files | ✅ Nội dung + ảnh thật |
| Hồ sơ tài khoản | 3 files | ✅ Nội dung + ảnh thật |
| Màn hình Tổng quan | 2 files | ✅ Nội dung + ảnh thật |
| QL Order | 5 files | ✅ Nội dung — ⏳ Chờ ảnh |
| QL Đặt chỗ | 3 files | ✅ Nội dung — ⏳ Chờ ảnh |
| Bếp/Bar | 4 files | ✅ Nội dung — ⏳ Chờ ảnh |
| QL Thực đơn | 6 files | ✅ Nội dung — ⏳ Chờ ảnh |
| QL Khách hàng | 3 files | ✅ Nội dung — ⏳ Chờ ảnh |
| Báo cáo KD | 22 files | ✅ Nội dung — ⏳ Chờ ảnh |
| QL Nhân viên | 4 files | ✅ Nội dung — ⏳ Chờ ảnh |
| QL Ca | 4 files | ✅ Nội dung — ⏳ Chờ ảnh |
| Vật tư | 2 files | ✅ Nội dung — ⏳ Chờ ảnh |
| QL Kho | 3 files | ✅ Nội dung — ⏳ Chờ ảnh |
| QL Khuyến mại | 3 files | ✅ Nội dung — ⏳ Chờ ảnh |
| Sổ thu chi | 3 files | ✅ Nội dung — ⏳ Chờ ảnh |
| Quản lý công việc | 3 files | ✅ Nội dung — ⏳ Chờ ảnh |
| Cài đặt | 11 files | ✅ Nội dung — ⏳ Chờ ảnh |
| Hỗ trợ | 2 files | ✅ Nội dung — ⏳ Chờ ảnh |

---

## Việc còn lại: Chụp ảnh màn hình thật

### App cần chụp
URL: `shop.mmenu.io` (đăng nhập tài khoản Mmenu Admin)

### Quy tắc đặt tên ảnh

```
assets/images/vi/<module>/<số thứ tự 2 chữ số>-<slug>.png
```

Ví dụ:
```
assets/images/vi/ql-order/02-so-do-ban.png
assets/images/vi/bao-cao/01-tong-quan.png
```

### Danh sách ảnh cần chụp theo module

#### QL Order
| File ảnh | Mô tả cần chụp |
|----------|----------------|
| `ql-order/01-tong-quan.png` | Màn hình chính QL Order |
| `ql-order/02-so-do-ban.png` | Sơ đồ bàn theo khu vực |
| `ql-order/03-chuyen-khu-vuc.png` | Nhấn tab chuyển khu vực |
| `ql-order/04-mo-order.png` | Popup mở order mới |
| `ql-order/05-them-mon.png` | Màn hình thêm món vào order |
| `ql-order/06-gui-order.png` | Nhấn nút Gửi order |
| `ql-order/07-thanh-toan.png` | Màn hình thanh toán |
| `ql-order/08-tab-phuc-vu.png` | Tab Phục vụ |
| `ql-order/09-tab-lich-su.png` | Tab Lịch sử |

#### QL Đặt chỗ
| File ảnh | Mô tả cần chụp |
|----------|----------------|
| `ql-dat-cho/01-tong-quan.png` | Màn hình chính QL Đặt chỗ |
| `ql-dat-cho/02-tao-dat-cho.png` | Form tạo đặt chỗ mới |
| `ql-dat-cho/03-danh-sach.png` | Danh sách đặt chỗ trong ngày |
| `ql-dat-cho/04-chuyen-order.png` | Chuyển đặt chỗ sang order |

#### Bếp/Bar
| File ảnh | Mô tả cần chụp |
|----------|----------------|
| `bep-bar/01-tong-quan.png` | Màn hình Bếp/Bar tổng quan |
| `bep-bar/02-che-bien.png` | Ticket món đang chế biến |
| `bep-bar/03-xac-nhan-mon.png` | Nhấn xác nhận món xong |
| `bep-bar/04-che-do-toi.png` | Dark mode bếp/bar |
| `bep-bar/05-loc-mon.png` | Lọc món theo danh mục |
| `bep-bar/06-xac-nhan-phuc-vu.png` | Màn hình xác nhận phục vụ |

#### QL Thực đơn
| File ảnh | Mô tả cần chụp |
|----------|----------------|
| `ql-thuc-don/01-tong-quan.png` | Danh sách sản phẩm |
| `ql-thuc-don/02-them-san-pham.png` | Form thêm sản phẩm mới |
| `ql-thuc-don/03-sua-san-pham.png` | Form chỉnh sửa sản phẩm |
| `ql-thuc-don/04-bat-tat-trang-thai.png` | Toggle bật/tắt bán |
| `ql-thuc-don/05-nhap-file.png` | Màn hình nhập file Excel |
| `ql-thuc-don/06-danh-muc.png` | Danh sách danh mục |
| `ql-thuc-don/07-mon-tuy-chon.png` | Danh sách nhóm tùy chọn |
| `ql-thuc-don/08-them-option.png` | Form thêm option |

#### QL Khách hàng
| File ảnh | Mô tả cần chụp |
|----------|----------------|
| `ql-khach-hang/01-tong-quan.png` | Màn hình QL Khách hàng |
| `ql-khach-hang/02-danh-sach.png` | Danh sách khách hàng |
| `ql-khach-hang/03-chi-tiet.png` | Chi tiết 1 khách hàng |
| `ql-khach-hang/04-lich-su-giao-dich.png` | Lịch sử giao dịch của khách |

#### Báo cáo KD
| File ảnh | Mô tả cần chụp |
|----------|----------------|
| `bao-cao/01-tong-quan.png` | Trang chọn báo cáo |
| `bao-cao/02-doanh-thu.png` | Báo cáo doanh thu |
| `bao-cao/03-khach-hang.png` | Báo cáo khách hàng |
| `bao-cao/04-san-pham.png` | Báo cáo sản phẩm |
| `bao-cao/05-mon-an-abc.png` | Báo cáo ABC |
| `bao-cao/06-theo-don.png` | Báo cáo theo đơn |
| `bao-cao/07-phuong-thuc-thanh-toan.png` | Báo cáo thanh toán |
| `bao-cao/08-nhan-vien.png` | Báo cáo nhân viên |
| `bao-cao/09-theo-ban.png` | Báo cáo theo bàn |
| `bao-cao/10-khu-vuc.png` | Báo cáo khu vực |
| `bao-cao/11-theo-ca.png` | Báo cáo theo ca |
| `bao-cao/12-danh-gia.png` | Báo cáo đánh giá |
| `bao-cao/13-the-thanh-vien.png` | Báo cáo thẻ thành viên |
| `bao-cao/14-tra-mon.png` | Báo cáo trả món |
| `bao-cao/15-theo-gio.png` | Báo cáo theo giờ |
| `bao-cao/16-dieu-chinh-hoa-don.png` | Báo cáo điều chỉnh HĐ |
| `bao-cao/17-doi-tac-giao-hang.png` | Báo cáo đối tác giao hàng |
| `bao-cao/18-dat-cho.png` | Báo cáo đặt chỗ |
| `bao-cao/19-tip.png` | Báo cáo TIP |
| `bao-cao/20-luot-thich.png` | Báo cáo lượt thích |
| `bao-cao/21-nguon-khach-hang.png` | Báo cáo nguồn KH |
| `bao-cao/22-nhom-khach-hang.png` | Báo cáo nhóm KH |

#### QL Nhân viên
| File ảnh | Mô tả cần chụp |
|----------|----------------|
| `ql-nhan-vien/01-danh-sach.png` | Danh sách nhân viên |
| `ql-nhan-vien/02-them-nhan-vien.png` | Form thêm nhân viên |
| `ql-nhan-vien/03-phan-quyen.png` | Màn hình phân quyền |
| `ql-nhan-vien/04-sua-nhan-vien.png` | Form chỉnh sửa nhân viên |

#### QL Ca
| File ảnh | Mô tả cần chụp |
|----------|----------------|
| `ql-ca/01-tong-quan.png` | Màn hình QL Ca |
| `ql-ca/02-mo-ca.png` | Form mở ca mới |
| `ql-ca/03-lich-su-ca.png` | Danh sách lịch sử ca |
| `ql-ca/04-dong-ca.png` | Màn hình đóng ca |

#### Vật tư
| File ảnh | Mô tả cần chụp |
|----------|----------------|
| `vat-tu/01-tong-quan.png` | Màn hình Vật tư |
| `vat-tu/02-thiet-bi-pos.png` | Danh sách thiết bị POS |

#### QL Kho
| File ảnh | Mô tả cần chụp |
|----------|----------------|
| `ql-kho/01-tong-quan.png` | Màn hình QL Kho |
| `ql-kho/02-nhap-kho.png` | Form nhập kho |
| `ql-kho/03-xuat-kho.png` | Form xuất kho |

#### QL Khuyến mại
| File ảnh | Mô tả cần chụp |
|----------|----------------|
| `ql-khuyen-mai/01-tong-quan.png` | Màn hình QL Khuyến mại |
| `ql-khuyen-mai/02-tao-khuyen-mai.png` | Form tạo chương trình KM |
| `ql-khuyen-mai/03-the-thanh-vien.png` | Cấu hình thẻ thành viên |

#### Sổ thu chi
| File ảnh | Mô tả cần chụp |
|----------|----------------|
| `so-thu-chi/01-danh-sach.png` | Danh sách thu chi |
| `so-thu-chi/02-tao-phieu-chi.png` | Form tạo phiếu chi |
| `so-thu-chi/03-phan-loai.png` | Danh mục phân loại |

#### QL Công việc
| File ảnh | Mô tả cần chụp |
|----------|----------------|
| `ql-cong-viec/01-tao-giao.png` | Form tạo công việc |
| `ql-cong-viec/02-theo-doi.png` | Màn hình theo dõi tiến độ |
| `ql-cong-viec/03-lich-su.png` | Lịch sử công việc |

#### Cài đặt
| File ảnh | Mô tả cần chụp |
|----------|----------------|
| `cai-dat/01-ql-ban.png` | Cài đặt bàn và khu vực |
| `cai-dat/02-may-in.png` | Cài đặt máy in |
| `cai-dat/03-luong-in.png` | Cài đặt luồng in |
| `cai-dat/04-van-hanh.png` | Cài đặt vận hành |
| `cai-dat/05-giao-dien.png` | Cài đặt giao diện |
| `cai-dat/06-thanh-toan.png` | Cài đặt thanh toán |
| `cai-dat/07-thue-vat.png` | Cài đặt thuế VAT |
| `cai-dat/08-bep-bar.png` | Cài đặt Bếp/Bar |
| `cai-dat/09-dat-cho.png` | Cài đặt đặt chỗ |
| `cai-dat/10-ca-co-dinh.png` | Cài đặt ca cố định |
| `cai-dat/11-pos-display.png` | Cài đặt POS Display |

#### Hỗ trợ
| File ảnh | Mô tả cần chụp |
|----------|----------------|
| `ho-tro/01-gui-yeu-cau.png` | Form gửi yêu cầu hỗ trợ |
| `ho-tro/02-theo-doi.png` | Danh sách yêu cầu đã gửi |

---

## Quy trình chụp ảnh và cập nhật

### Bước 1: Chụp 1 module
Vào `shop.mmenu.io`, chụp màn hình theo từng bước trong module, lưu đúng tên.

### Bước 2: Đẩy lên GitHub
```bash
cd /Users/mmenutech/Documents/mmenuio/mmenu-docs
git add assets/images/vi/<module>/
git commit -m "add screenshots: <module>"
git push
```

### Bước 3: GitBook tự sync
GitBook tự pull từ GitHub trong vài giây — không cần thao tác thêm.

---

## Quy tắc khi chụp ảnh

- Chụp **portrait** hoặc **landscape** đều được, nhưng cần **nhỏ hơn 2000px** chiều dài (để tránh lỗi context)
- Resize về **1080px width** trước khi lưu nếu ảnh gốc quá lớn
- Format: **PNG**
- Chụp đủ context (không cắt mất thành phần quan trọng)
- Nếu có dữ liệu nhạy cảm (số tiền thật, tên khách hàng thật) có thể dùng data test

---

## DNS cần fix để public

Nhờ người quản lý domain `mmenu.io` thêm:
```
Type:  CNAME
Name:  docs
Value: 4c9889855f-hosting.gitbook.io
```

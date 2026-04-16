---
title: Cấu trúc tổng thể của app
---

# Cấu trúc tổng thể của app

Mmenu Admin được tổ chức thành **2 lớp chính**: cấp Chuỗi và cấp Cửa hàng.

---

## 1. Cấp Chuỗi (Chain Level)

Sau khi đăng nhập, bạn thấy màn hình **Tổng quan chuỗi** — hiển thị doanh thu tổng hợp của tất cả cửa hàng trong chuỗi.

![Màn hình Tổng quan chuỗi](/img/vi/tong-quan/01-dashboard-chuoi.png)

Từ màn hình này bạn có thể:
- Xem doanh thu toàn chuỗi theo thời gian
- Xem chi tiết từng cửa hàng
- Chuyển sang màn hình **Bán hàng** để chọn vào cửa hàng cụ thể

---

## 2. Cấp Cửa hàng (Restaurant Level)

Khi chọn vào một cửa hàng, bạn thấy **màn hình chính** với 15 module chức năng:

![Màn hình chính cửa hàng](/img/vi/gioi-thieu/01-man-hinh-chinh-cua-hang.png)

![Màn hình chính - phần còn lại](/img/vi/gioi-thieu/02-man-hinh-chinh-scroll.png)

### Danh sách module

| STT | Module | Chức năng chính |
|-----|--------|-----------------|
| 1 | **QL Order** | Quản lý bàn, tạo và xử lý order theo thời gian thực |
| 2 | **QL Đặt chỗ** | Nhận và quản lý đặt bàn trước |
| 3 | **Bếp/Bar** | Màn hình Smart Kitchen cho bếp và bar |
| 4 | **QL Thực đơn** | Tạo và quản lý danh mục, sản phẩm, món tùy chọn |
| 5 | **QL Khách hàng** | Quản lý thông tin và lịch sử khách hàng |
| 6 | **Báo cáo KD** | Thống kê doanh thu, sản phẩm, nhân viên, ca... (22 loại báo cáo) |
| 7 | **QL Nhân viên** | Thêm, phân quyền, quản lý tài khoản nhân viên |
| 8 | **QL Ca** | Mở, đóng ca, xem lịch sử và báo cáo ca |
| 9 | **Vật tư** | Quản lý thiết bị, vật tư nhà hàng |
| 10 | **QL Kho** | Quản lý nhập xuất kho nguyên liệu |
| 11 | **QL Khuyến mại** | Tạo chương trình giảm giá, quản lý thẻ thành viên |
| 12 | **Sổ thu chi** | Theo dõi dòng tiền thu vào và chi ra |
| 13 | **Cài đặt** | Cấu hình bàn, khu vực, máy in, thanh toán... |
| 14 | **Quản lý công việc** | Giao việc và theo dõi tiến độ nội bộ |
| 15 | **Yêu cầu hỗ trợ** | Gửi và theo dõi yêu cầu hỗ trợ kỹ thuật |

---

## Luồng hoạt động cơ bản

```
Khách vào → QL Order: Chọn bàn → Tạo order → Gọi món
                                              ↓
                                        Bếp/Bar: Chế biến
                                              ↓
                                        Phục vụ khách
                                              ↓
                                        Thanh toán → Đóng order
                                              ↓
                                        Báo cáo KD cập nhật
```

---

Tiếp theo: [Dashboard chuỗi cửa hàng](../tong-quan/dashboard.md)

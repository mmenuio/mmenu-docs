# Cấu trúc tổng thể của Mmenu Admin

Mmenu Admin được tổ chức thành 2 lớp chính:

## 1. Cấp Chuỗi (Chain Level)

Màn hình **Tổng quan** là nơi bạn nhìn thấy toàn bộ hoạt động của chuỗi:
- Doanh thu tổng hợp từ tất cả cửa hàng
- So sánh doanh thu theo kỳ
- Chuyển đổi nhanh giữa các cửa hàng

## 2. Cấp Cửa hàng (Restaurant Level)

Khi chọn vào một cửa hàng cụ thể, bạn thấy **12 module chức năng**:

### Nhóm Vận hành
| Module | Mô tả |
|---|---|
| **QL Order** | Quản lý bàn, tạo và xử lý order theo thời gian thực |
| **Bếp/Bar** | Màn hình Smart Kitchen cho bếp và bar |

### Nhóm Menu & Doanh thu
| Module | Mô tả |
|---|---|
| **QL Thực đơn** | Tạo và quản lý danh mục, sản phẩm, món tùy chọn |
| **Báo cáo KD** | Thống kê doanh thu, khách hàng, sản phẩm, nhân viên... |
| **Sổ thu chi** | Theo dõi dòng tiền thu vào và chi ra |

### Nhóm Nhân sự
| Module | Mô tả |
|---|---|
| **QL Nhân viên** | Thêm, phân quyền, quản lý tài khoản nhân viên |
| **QL Ca** | Mở, đóng ca, xem lịch sử và báo cáo ca |
| **Quản lý công việc** | Giao việc và theo dõi tiến độ nội bộ |

### Nhóm Marketing
| Module | Mô tả |
|---|---|
| **QL Khuyến mại** | Tạo chương trình giảm giá, quản lý thẻ thành viên |

### Nhóm Hệ thống
| Module | Mô tả |
|---|---|
| **Vật tư** | Quản lý thiết bị POS, máy in |
| **Cài đặt** | Cấu hình bàn, khu vực, thanh toán, giao diện... |
| **Yêu cầu hỗ trợ** | Gửi và theo dõi yêu cầu hỗ trợ kỹ thuật |

---

## Luồng hoạt động cơ bản

```
Khách vào → Chọn bàn (QL Order)
         → Gọi món → Gửi xuống Bếp/Bar
         → Chế biến xong → Phục vụ
         → Thanh toán → Đóng order
         → Dữ liệu cập nhật vào Báo cáo KD
```

---

Tiếp theo: [Dashboard chuỗi cửa hàng](../tong-quan/dashboard.md)

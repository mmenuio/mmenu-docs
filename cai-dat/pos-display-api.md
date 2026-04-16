# Pos Display & Cài đặt API

## Pos Display

**Pos Display** là màn hình phụ hiển thị thông tin order cho khách hàng thấy khi thu ngân đang xử lý.

![Pos Display](../assets/images/vi/cai-dat/11-pos-display.png)

### Cấu hình

| Tùy chọn | Mô tả |
|----------|-------|
| **Bật Pos Display** | Kích hoạt màn hình phụ |
| **Thiết bị hiển thị** | Chọn thiết bị thứ 2 làm màn hình khách |
| **Nội dung hiển thị** | Tên món, giá, tổng bill, logo cửa hàng |
| **Màn hình chờ** | Hình ảnh/video quảng cáo khi không có order |

## Cài đặt API

Dành cho tích hợp kỹ thuật với hệ thống bên thứ ba (phần mềm kế toán, CRM, app giao hàng...).

### API Key

1. Nhấn **Tạo API Key**
2. Đặt tên và chọn quyền truy cập (đọc / ghi)
3. Copy API Key để dùng trong tích hợp

> API Key chỉ hiển thị một lần khi tạo. Lưu lại ngay.

### Webhook

Cài đặt URL Webhook để hệ thống Mmenu tự động gửi dữ liệu khi có sự kiện (order mới, thanh toán...).

---

Tiếp theo: [Cách gửi yêu cầu hỗ trợ](../ho-tro/gui-yeu-cau.md)

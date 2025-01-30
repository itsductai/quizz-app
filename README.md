# Quizz App 🎮

## Mô tả dự án 📝
Quizz App là một ứng dụng web được phát triển nhằm cung cấp nền tảng tạo và làm bài kiểm tra trực tuyến. Dự án sử dụng công nghệ **ReactJS** cho phần giao diện người dùng (frontend) và **ASP.NET Core Web API** cho phần backend.

Ứng dụng cho phép người dùng:
- 🚀 Đăng ký tài khoản và đăng nhập.
- 📚 Tham gia làm các bài kiểm tra (quizz) với giao diện thân thiện, trực quan.
- 🛠️ Tạo, quản lý, và chia sẻ các bài kiểm tra.
- 📊 Xem kết quả và thống kê sau khi hoàn thành bài kiểm tra.

## Công nghệ sử dụng 💻

### Frontend 🌐
- **ReactJS**: Xây dựng giao diện người dùng tương tác, linh hoạt.
- **Axios**: Kết nối với API để lấy dữ liệu và gửi yêu cầu.
- **Material-UI (MUI)**: Thư viện UI component mạnh mẽ giúp tùy chỉnh giao diện và đảm bảo thiết kế responsive.

### Backend 🔙
- **ASP.NET Core Web API**: Cung cấp các API RESTful để quản lý dữ liệu người dùng, bài kiểm tra và kết quả.
- **Entity Framework Core**: Quản lý cơ sở dữ liệu.
- **SQL Server**: Hệ quản trị cơ sở dữ liệu được sử dụng.

### Kiến trúc dự án 🏗️
- **Frontend**: Được lưu trữ tại `quizz-client` (thư mục chính).
- **Backend**: Được lưu trữ tại `quizz-api` (thư mục chính).

## Các tính năng chính 🎯
1. **Quản lý người dùng** 👤:
   - Đăng ký, đăng nhập và quản lý tài khoản.
   - Bảo mật thông tin người dùng với mã hóa mật khẩu.

2. **Tạo và quản lý bài kiểm tra** 📝:
   - Giao diện dễ sử dụng để tạo câu hỏi, thiết lập thời gian, và phân loại câu hỏi.
   - Lưu trữ bài kiểm tra trên cơ sở dữ liệu.

3. **Làm bài kiểm tra** ⏳:
   - Giao diện trả lời câu hỏi theo thời gian thực.
   - Hiển thị thời gian còn lại và số câu hỏi đã hoàn thành.

4. **Xem kết quả và thống kê** 📈:
   - Hiển thị điểm số ngay sau khi hoàn thành bài kiểm tra.
   - Thống kê chi tiết các câu trả lời đúng/sai.

## Cài đặt và chạy dự án ⚙️
### Yêu cầu hệ thống 📋
- **Node.js** >= 14.x
- **.NET SDK** >= 6.0
- **SQL Server** (cài đặt local hoặc trên cloud)

### Hướng dẫn cài đặt 📥

1. **Clone repository** 🖥️:
   Mở terminal và chạy lệnh sau để clone dự án:
   ```bash
   git clone https://github.com/itsductai/quizz-app.git
   cd quizz-app
2. **Cài đặt và chạy frontend** 🌐:
Di chuyển vào thư mục client và cài đặt các phụ thuộc:
   ```
   cd quizz-client
   npm install
   npm start
   ```
Sau khi frontend đã được cài đặt thành công, ứng dụng sẽ chạy tại http://localhost:3000.
   
3. **Cài đặt và chạy backend** 🔙: 
  Cấu hình chuỗi kết nối trong file appsettings.json tại thư mục server.
  Di chuyển vào thư mục server và chạy các lệnh sau để cài đặt và chạy backend:
    ```
    cd quizz-api
    dotnet restore
    dotnet run
    ```
  Backend API sẽ hoạt động tại: http://localhost:5000.

4. **Khởi chạy ứng dụng** 🚀
  Giao diện người dùng: Truy cập tại http://localhost:3000.
  Backend API: Truy cập tại http://localhost:5000.

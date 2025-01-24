DELETE FROM dbo.Questions;

INSERT INTO dbo.Questions (dbo.QuestionText, dbo.Img, dbo.Option1, dbo.Option2, dbo.Option3, dbo.Option4, dbo.Answer)
VALUES
(N'JSX trong React là gì?', N'i1.jpg', N'Mở rộng JavaScript', N'Cú pháp JavaScript', N'Cú pháp JSON', N'Không đúng', N'Mở rộng JavaScript'),
(N'Hook nào được dùng để quản lý state trong React?', N'i2.jpg', N'useState', N'useEffect', N'useReducer', N'useContext', N'useState'),
(N'Mục đích của Virtual DOM trong React là gì?', N'i3.jpg', N'Dùng để debug', N'Cải thiện hiệu suất', N'Quản lý CSDL', N'Tạo animation', N'Cải thiện hiệu suất'),
(N'Lệnh nào tạo một ứng dụng React mới?', N'i4.jpg', N'npx create-react-app app-name', N'npm init react-app', N'npx new-react-app', N'create-react-app', N'npx create-react-app app-name'),
(N'Tệp entry point trong ứng dụng React mặc định là gì?', N'i5.jpg', N'index.js', N'App.js', N'index.html', N'main.js', N'index.js'),
(N'ASP.NET Core là gì?', N'i6.jpg', N'Một framework frontend', N'Một framework đa nền tảng', N'Một CSDL', N'Một IDE', N'Một framework đa nền tảng'),
(N'Middleware nào được sử dụng để định tuyến trong ASP.NET Core?', N'i7.jpg', N'RouteConfig', N'UseRouting', N'MiddlewarePipeline', N'AppRouting', N'UseRouting'),
(N'Tiêm phụ thuộc (Dependency Injection) trong ASP.NET Core là gì?', N'i8.jpg', N'Cách để chèn mã động', N'Một phương pháp định tuyến', N'Một mẫu thiết kế', N'Một công cụ debug', N'Một mẫu thiết kế'),
(N'Làm thế nào để chỉ định route cho controller trong ASP.NET Core?', N'i9.jpg', N'[HttpRoute]', N'[Route]', N'[Controller]', N'[Action]', N'[Route]'),
(N'Phương thức mặc định để khởi chạy ứng dụng ASP.NET Core là gì?', N'i10.jpg', N'Configure', N'Start', N'Main', N'Run', N'Main');

select * from dbo.Questions;
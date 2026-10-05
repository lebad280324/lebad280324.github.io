# CV website Lê Bá Dũng

Website CV tiếng Việt từ bản PDF đã bỏ BI và xác nhận AI tại An Phát chỉ là thử nghiệm. HTML, CSS và JavaScript thuần; không cần cài thư viện hay build. Ảnh, stylesheet, script và PDF đều nằm trong website, không tải font hay dịch vụ bên ngoài.

## Xem website

Mở `index.html` trong trình duyệt. Nút sao chép email cần HTTPS hoặc localhost; nếu không có quyền clipboard, website hiện email để sao chép trực tiếp.

## Đưa lên GitHub Pages

1. Đưa **nội dung bên trong thư mục này** vào thư mục gốc của một repository GitHub dành cho CV. Giữ nguyên `assets/` và `.nojekyll`.
2. Trong repository, vào **Settings → Pages → Build and deployment**.
3. Chọn **Deploy from a branch**, nhánh chứa website (thường là `main`) và thư mục **/(root)**, rồi **Save**.
4. Chờ GitHub triển khai; mở địa chỉ được hiển thị trong Settings → Pages.

Các đường dẫn tài nguyên đều tương đối, sử dụng được cho cả website `username.github.io` và website dưới `username.github.io/repository/`.

Tài liệu chính thức: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Chỉnh nội dung

- `index.html`: nội dung, lịch sử công việc, phân hệ, kỹ năng và liên hệ.
- `style.css`: màu sắc, bố cục điện thoại và định dạng in.
- `script.js`: sao chép email, đánh dấu mục điều hướng.
- `assets/portrait.jpg`: ảnh chân dung.
- `assets/CV_Le_Ba_Dung.pdf`: bản CV để tải xuống.

Các kế hoạch kiến trúc, CI/CD và dự phòng được ghi là đề xuất. Phần AI thử nghiệm tại An Phát có trạng thái riêng. Phần học vấn trùng trong PDF nguồn đã được gộp thành một mục trên website.

Địa chỉ GitHub Pages: https://lebad280324.github.io/

Repository dành riêng cho CV: https://github.com/lebad280324/lebad280324.github.io

Nguồn phát hành: nhánh `codex/cv`, thư mục gốc. Khi sửa, cập nhật các tệp trên nhánh này để GitHub Pages triển khai lại.

## Thiết kế hiện tại

Tông xanh tím đậm, trắng ấm và cam đào. Dự án An Phát được đặt trước lịch sử làm việc. Sáu phân hệ có bộ lọc theo nhóm; menu điện thoại có điều khiển mở/đóng và hỗ trợ Escape. Giữ rõ trạng thái AI thử nghiệm, các phương án kiến trúc đề xuất và thông tin CV đã bỏ BI.

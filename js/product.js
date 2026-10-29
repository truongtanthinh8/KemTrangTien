/* NGUỒN DỮ LIỆU SẢN PHẨM DUY NHẤT – mọi trang (index, category, detail, cart) đều đọc từ đây.
   Các trường giữ nguyên: id, ten, gia, hinh, loai. Thêm trường mới: mota. */
let ds = [
    {id:1, ten:'Kem Que Ổi Hồng', gia:10000, hinh:'sanpham1.png', loai:'kemque', mota:'Kem que vị ổi hồng thơm nhẹ, ngọt thanh và mát lạnh, hợp để giải nhiệt trong những ngày nắng.'},
    {id:2, ten:'Kem Que Trà Xanh', gia:12000, hinh:'sanpham2.png', loai:'kemque', mota:'Vị trà xanh đậm đà, hơi chát nhẹ rồi hậu ngọt, dành cho người thích hương trà.'},
    {id:3, ten:'Kem Que Socola', gia:11000, hinh:'sanpham3.png', loai:'kemque', mota:'Kem que socola béo ngậy, lớp kem mịn tan chậm trong miệng.'},
    {id:4, ten:'Kem Que Mè Đen', gia:10000, hinh:'sanpham4.png', loai:'kemque', mota:'Hương mè đen rang bùi bùi, vị ngọt vừa phải, một lựa chọn quen thuộc mà không nhàm chán.'},

    {id:5, ten:'Kem Hộp Sữa Dừa', gia:80000, hinh:'sanpham5.png', loai:'kemhop', mota:'Hộp kem sữa dừa béo thơm, thích hợp chia sẻ cho cả gia đình hoặc buổi tụ họp bạn bè.'},
    {id:6, ten:'Kem Hộp CaCao', gia:75000, hinh:'sanpham6.png', loai:'kemhop', mota:'Kem cacao đậm vị, hơi đắng nhẹ ở hậu, ăn kèm trái cây hoặc bánh quy đều ngon.'},
    {id:7, ten:'Kem Hộp Khoai Môn', gia:80000, hinh:'sanpham7.png', loai:'kemhop', mota:'Kem khoai môn màu tím dịu, vị bùi và thơm đặc trưng, kết cấu mềm mịn.'},
    {id:8, ten:'Kem Hộp Vani', gia:78000, hinh:'sanpham8.png', loai:'kemhop', mota:'Vị vani cổ điển, dễ ăn với mọi lứa tuổi, cũng là nền hoàn hảo để thêm topping tùy thích.'},

    {id:9, ten:'Kem Ốc Quế Dâu', gia:15000, hinh:'sanpham9.png', loai:'kemocque', mota:'Kem dâu hồng nhạt đặt trong ốc quế giòn, vị chua ngọt hài hòa.'},
    {id:10, ten:'Kem Ốc Quế Dừa', gia:16000, hinh:'sanpham10.png', loai:'kemocque', mota:'Kem dừa thơm béo, ăn cùng vỏ ốc quế giòn rụm tạo nên cảm giác trọn vẹn.'},
    {id:11, ten:'Kem Ốc Quế Trà Xanh', gia:18000, hinh:'sanpham11.png', loai:'kemocque', mota:'Kem trà xanh thanh mát, lớp ốc quế giòn giúp cân bằng vị đậm của trà.'},
    {id:12, ten:'Kem Ốc Quế Đậu Xanh', gia:15000, hinh:'sanpham12.png', loai:'kemocque', mota:'Hương đậu xanh dân dã, ngọt bùi, gợi nhớ những món chè quen thuộc.'},

    {id:13, ten:'Kem Tươi Dâu', gia:20000, hinh:'sanpham13.png', loai:'kemtuoi', mota:'Kem tươi xoắn vị dâu, mềm mịn và nhẹ, ăn ngay sau khi làm để giữ độ xốp.'},
    {id:14, ten:'Kem Tươi Socola', gia:22000, hinh:'sanpham14.png', loai:'kemtuoi', mota:'Kem tươi socola đậm vị, lớp kem xốp mịn, phù hợp với người mê vị ngọt đậm.'},
    {id:15, ten:'Kem Tươi Matcha', gia:18000, hinh:'sanpham15.png', loai:'kemtuoi', mota:'Kem tươi matcha dịu mát, vị trà nhẹ nhàng và ít ngọt.'},
    {id:16, ten:'Kem Tươi Sữa Dừa', gia:20000, hinh:'sanpham16.png', loai:'kemtuoi', mota:'Kem tươi sữa dừa béo nhẹ, mùi dừa thơm, mát lạnh và dễ ăn.'},
];

let danhmuc = [
    "Kem Que","Kem Ốc Quế","Kem Hộp","Kem Tươi"
];

/* Mã danh mục tương ứng từng phần tử của danhmuc (cùng thứ tự) – khớp với trường `loai` của ds */
let loaiKey = ["kemque","kemocque","kemhop","kemtuoi"];

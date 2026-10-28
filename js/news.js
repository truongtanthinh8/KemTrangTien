/* TRANG TIN TỨC: danh sách bài viết hoặc chi tiết bài (news.html?id=). Nội dung là bài viết MẪU tự biên soạn,
   dùng ảnh sản phẩm có sẵn của project; có thể thay bằng nội dung thật. Sửa bài viết: chỉnh mảng `tintuc` bên dưới (tieude, tomtat, noidung, ngay, anh). */
const tintuc = [
    {id:1, tag:"Mẹo hay", ngay:"2026-10-20", anh:"sanpham5.png", loai:"kemhop",
     tieude:"5 mẹo bảo quản kem hộp luôn mềm mịn",
     tomtat:"Vài thói quen nhỏ khi cất giữ giúp hộp kem giữ được kết cấu mịn và hương vị trọn vẹn đến muỗng cuối cùng.",
     noidung:["Kem hộp ngon nhất khi được giữ lạnh ổn định. Hãy đặt hộp kem ở ngăn đá, tránh để gần cửa tủ vì nơi này thay đổi nhiệt độ mỗi lần mở.",
              "Sau khi dùng, đậy kín nắp ngay và có thể phủ thêm một lớp giấy nến mỏng sát bề mặt kem để hạn chế đóng đá tinh thể.",
              "Hạn chế để kem tan chảy rồi cấp đông lại, vì kết cấu sẽ kém mịn hơn. Nếu cần lấy kem, hãy nhúng muỗng vào nước ấm để múc dễ dàng và gọn gàng."]},
    {id:2, tag:"Hướng dẫn", ngay:"2026-10-12", anh:"sanpham9.png", loai:"kemocque",
     tieude:"Kem que, ốc quế, kem hộp hay kem tươi: nên chọn loại nào?",
     tomtat:"Mỗi dạng kem phù hợp với một hoàn cảnh khác nhau. Cùng điểm qua để chọn đúng món cho mình.",
     noidung:["Kem que gọn nhẹ, dễ mang theo và hợp với nhu cầu giải nhiệt nhanh. Kem ốc quế thêm độ giòn của vỏ bánh, tạo cảm giác ăn thú vị hơn.",
              "Kem hộp thích hợp để chia sẻ trong gia đình hoặc buổi gặp mặt bạn bè. Bạn có thể ăn trực tiếp hoặc kết hợp với trái cây, bánh quy.",
              "Kem tươi mềm, xốp và nhẹ, ngon nhất khi thưởng thức ngay sau khi làm. Nếu thích sự mới mẻ, hãy thử đổi vị mỗi lần để tìm ra món yêu thích."]},
    {id:3, tag:"Gợi ý", ngay:"2026-10-05", anh:"sanpham1.png", loai:"kemque",
     tieude:"Gợi ý vị kem cho những ngày nắng nóng",
     tomtat:"Ổi hồng thanh mát, trà xanh dịu nhẹ hay socola đậm vị: món nào hợp với tâm trạng của bạn hôm nay?",
     noidung:["Những ngày oi bức, các vị trái cây như ổi hồng hoặc dâu thường mang lại cảm giác nhẹ nhàng và dễ chịu hơn.",
              "Nếu thích vị thanh, hãy thử trà xanh hoặc matcha với độ ngọt vừa phải. Người mê vị đậm có thể chọn socola hoặc cacao.",
              "Mỗi dòng sản phẩm đều có nhiều lựa chọn, bạn có thể bắt đầu từ danh mục kem que để thử nhiều hương vị với chi phí nhẹ nhàng."]},
    {id:4, tag:"Kiến thức", ngay:"2026-09-28", anh:"sanpham13.png", loai:"kemtuoi",
     tieude:"Kem tươi khác gì so với kem đóng que?",
     tomtat:"Cùng là kem nhưng cách làm và cách thưởng thức lại không giống nhau. Điểm khác biệt nằm ở kết cấu và thời điểm ăn ngon nhất.",
     noidung:["Kem tươi thường được làm và dùng ngay, nên có kết cấu xốp mềm và nhiều không khí hơn. Vì vậy hương vị thường nhẹ và tan nhanh.",
              "Kem đóng que được cấp đông đến khi cứng, giữ hình dáng lâu hơn và tiện mang theo.",
              "Không có loại nào hơn loại nào, quan trọng là bạn muốn thưởng thức ở đâu, vào lúc nào và với ai."]},
    {id:5, tag:"Mẹo hay", ngay:"2026-09-18", anh:"sanpham11.png", loai:"kemocque",
     tieude:"Cách thưởng thức kem trà xanh trọn vị",
     tomtat:"Một chút chú ý về nhiệt độ và cách kết hợp sẽ giúp vị trà xanh được nổi bật hơn.",
     noidung:["Kem trà xanh ngon hơn khi mềm vừa phải. Hãy để kem ở nhiệt độ phòng khoảng một đến hai phút trước khi ăn nếu kem quá cứng.",
              "Vị trà xanh thường hợp với những món có vị ngọt nhẹ như bánh quy bơ hoặc đậu đỏ. Tránh kết hợp quá nhiều vị đậm sẽ làm lấn át hương trà.",
              "Nếu ăn cùng ốc quế, vị chát nhẹ của trà sẽ được cân bằng bởi lớp vỏ giòn thơm."]},
    {id:6, tag:"Ý tưởng", ngay:"2026-09-08", anh:"sanpham7.png", loai:"kemhop",
     tieude:"Ý tưởng tổ chức một buổi tiệc kem tại nhà",
     tomtat:"Chỉ cần vài hộp kem, một ít topping và không gian thoải mái là bạn đã có buổi tụ họp đáng nhớ.",
     noidung:["Chuẩn bị vài hộp kem với hương vị khác nhau, ví dụ một vị béo, một vị trái cây và một vị trà để mọi người dễ chọn.",
              "Bày thêm topping như trái cây tươi, hạt rang, bánh quy vụn hoặc sốt socola để mỗi người tự tạo ly kem của riêng mình.",
              "Nhớ lấy kem ra vừa đủ dùng và cất lại ngay vào ngăn đá để kem giữ được độ mịn."]}
];

function ngayVN(s) { let d = s.split("-"); return d[2] + "/" + d[1] + "/" + d[0]; }

function theBai(a) {
    return `<a class="nw-card" href="news.html?id=${a.id}"><img src="images/${a.anh}" alt="${a.tieude}" loading="lazy">
        <div class="nw-body"><span class="nw-tag">${a.tag}</span><h3>${a.tieude}</h3>
        <p>${a.tomtat}</p><small>${ngayVN(a.ngay)}</small></div></a>`;
}

(function () {
    let box = document.getElementById("newsBox");
    let idStr = new URLSearchParams(window.location.search).get("id");
    let a = /^\d+$/.test(idStr || "") ? tintuc.find(x => x.id === Number(idStr)) : null;
    if (idStr && !a) {
        box.innerHTML = `<div class="empty-state"><h2>Không tìm thấy bài viết</h2><a class="sc-btn" href="news.html">Về trang tin tức</a></div>`;
        return;
    }
    if (a) {   // chi tiết một bài
        document.title = a.tieude + " – Kem Tràng Tiền";
        let lq = ds.filter(p => p.loai === a.loai).slice(0, 4);
        box.innerHTML = `<div class="breadcrumb"><a href="index.html">Trang chủ</a> › <a href="news.html">Tin tức</a> › <span>${a.tag}</span></div>
            <article class="nw-article"><span class="nw-tag">${a.tag}</span><h1>${a.tieude}</h1><small>${ngayVN(a.ngay)}</small>
            <img src="images/${a.anh}" alt="${a.tieude}">${a.noidung.map(t => `<p>${t}</p>`).join("")}
            <a class="sc-btn" href="category.html?loai=${a.loai}">Xem sản phẩm ${tenLoai(a.loai)}</a></article>
            <h2 class="nw-h2">SẢN PHẨM LIÊN QUAN</h2><div class="row">${lq.map(p => cardHTML(p)).join("")}</div>
            <h2 class="nw-h2">BÀI VIẾT KHÁC</h2><div class="nw-grid">${tintuc.filter(x => x.id !== a.id).slice(0, 3).map(theBai).join("")}</div>`;
        return;
    }
    let [dau, ...con] = tintuc;     // danh sách: bài nổi bật + lưới
    box.innerHTML = `<a class="nw-feature" href="news.html?id=${dau.id}"><img src="images/${dau.anh}" alt="${dau.tieude}">
        <div class="nw-body"><span class="nw-tag">${dau.tag}</span><h2>${dau.tieude}</h2><p>${dau.tomtat}</p><small>${ngayVN(dau.ngay)}</small></div></a>
        <div class="nw-grid">${con.map(theBai).join("")}</div>`;
})();

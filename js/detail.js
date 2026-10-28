/* TRANG CHI TIẾT: đọc ?id= rồi hiển thị tên, giá, ảnh, mô tả từ product.js (nguồn dữ liệu duy nhất). */
(function () {
    let idStr = new URLSearchParams(window.location.search).get("id");
    let item = /^\d+$/.test(idStr || "") ? timSP(idStr) : null;
    let box = document.getElementById("chitiet");
    if (!item) {   // không có id hoặc id không tồn tại
        box.innerHTML = `<div class="empty-state"><h2>Không tìm thấy sản phẩm</h2>
            <p>Sản phẩm bạn chọn không tồn tại hoặc đã bị gỡ.</p>
            <a class="sc-btn" href="category.html">Xem tất cả sản phẩm</a></div>`;
        document.getElementById("sptt-wrap").style.display = "none";
        document.title = "Không tìm thấy sản phẩm – Kem Tràng Tiền";
        return;
    }
    document.title = item.ten + " – Kem Tràng Tiền";
    let hinh = document.getElementById("hinh");
    hinh.src = "images/" + item.hinh;
    hinh.alt = item.ten;
    document.getElementById("tenSP").textContent = item.ten;
    document.getElementById("giaSP").textContent = fmtGia(item.gia);
    document.getElementById("moTaSP").textContent = item.mota || "";
    let l = document.getElementById("loaiSP");
    l.textContent = tenLoai(item.loai);
    l.href = "category.html?loai=" + item.loai;
    document.getElementById("bcLoai").textContent = tenLoai(item.loai);
    document.getElementById("bcLoai").href = "category.html?loai=" + item.loai;
    document.getElementById("bcTen").textContent = item.ten;

    let sl = document.getElementById("soLuong");
    function chinhSL(d) { sl.value = Math.min(99, Math.max(1, (parseInt(sl.value, 10) || 1) + d)); }
    document.getElementById("slTru").onclick = () => chinhSL(-1);
    document.getElementById("slCong").onclick = () => chinhSL(1);
    sl.onchange = () => chinhSL(0);

    document.getElementById("btnAddCart").onclick = function () {
        let tong = addToCart(item.id, sl.value);
        let msg = document.getElementById("addMsg");
        msg.innerHTML = `Đã thêm vào giỏ hàng (trong giỏ hiện có ${tong} sản phẩm này). <a href="cart.html">Xem giỏ hàng</a>`;
    };

    // SẢN PHẨM TƯƠNG TỰ: cùng danh mục, trừ sản phẩm đang xem
    let sptt = ds.filter(a => a.loai === item.loai && a.id !== item.id);
    document.getElementById("sptt").innerHTML = sptt.map(p => cardHTML(p)).join("");
    if (!sptt.length) document.getElementById("sptt-wrap").style.display = "none";
})();

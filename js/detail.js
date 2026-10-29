/* TRANG CHI TIẾT: đọc ?id= rồi hiển thị tên, giá, ảnh, mô tả từ product.js (nguồn dữ liệu duy nhất). */
let currentUrl = window.location.href;
let url = new URL(currentUrl);
let id = url.searchParams.get("id");
let item = ds.find(a => a.id === Number(id));

if (item == undefined) {        // không có id hoặc id không tồn tại
    document.getElementById("chitiet").innerHTML =
        `<div class="empty-state"><h2>Không tìm thấy sản phẩm</h2>
        <p>Sản phẩm bạn chọn không tồn tại hoặc đã bị gỡ.</p>
        <a class="sc-btn" href="category.html">Xem tất cả sản phẩm</a></div>`;
    document.getElementById("sptt-wrap").innerHTML = "";
} else {
    document.getElementById("hinh").src = `images/${item.hinh}`;
    document.getElementById("tenSP").innerText = item.ten;
    document.getElementById("giaSP").innerText = fmtGia(item.gia);
    document.getElementById("moTaSP").innerText = item.mota;
    document.getElementById("loaiSP").innerText = tenLoai(item.loai);
    document.getElementById("loaiSP").href = `category.html?loai=${item.loai}`;
    document.getElementById("bcLoai").innerText = tenLoai(item.loai);
    document.getElementById("bcLoai").href = `category.html?loai=${item.loai}`;
    document.getElementById("bcTen").innerText = item.ten;

    // SẢN PHẨM TƯƠNG TỰ: cùng danh mục, trừ sản phẩm đang xem
    let sptt = ds.filter(a => a.loai === item.loai && a.id !== item.id);
    for (let i = 0; i < sptt.length; i++) {
        document.getElementById("sptt").innerHTML += cardHTML(sptt[i]);
    }
}

function doiSoLuong(d) {        // nút −, + và ô nhập số lượng (giữ trong khoảng 1 – 99)
    let sl = Number(document.getElementById("soLuong").value) + d;
    if (!(sl >= 1)) {
        sl = 1;
    }
    if (sl > 99) {
        sl = 99;
    }
    document.getElementById("soLuong").value = sl;
}

function themVaoGio() {         // nút THÊM VÀO GIỎ HÀNG
    let tong = addToCart(item.id, Number(document.getElementById("soLuong").value));
    document.getElementById("addMsg").innerHTML =
        `Đã thêm vào giỏ hàng (trong giỏ hiện có ${tong} sản phẩm này). <a href="cart.html">Xem giỏ hàng</a>`;
}

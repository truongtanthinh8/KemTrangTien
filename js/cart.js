/* TRANG GIỎ HÀNG. Dùng getCart/saveCart/addToCart trong common.js; key localStorage: giohang_Storage. */
let giohang = getCart();

// Danh sách gợi ý: 8 sản phẩm đầu (không làm thay đổi biến ds dùng chung)
document.getElementById("productAll").innerHTML = ds.slice(0, 8).map(p => cardHTML(p, "cart")).join("");

function addCart(ID) {            // nút "Thêm vào giỏ" ở danh sách gợi ý
    addToCart(ID, 1);
    giohang = getCart();
    viewCart();
}

function viewCart() {
    let kq = "", tong = 0;
    for (let i = 0; i < giohang.length; i++) {
        let it = giohang[i], thanhtien = it.gia * it.sl;
        tong += thanhtien;
        kq += `<tr>
            <td data-label="STT">${i + 1}</td>
            <td data-label="Sản phẩm"><a href="detail.html?id=${it.id}">${it.ten}</a></td>
            <td data-label="Hình"><img src="images/${it.hinh}" alt="${it.ten}" style="width:50px"></td>
            <td data-label="Đơn giá">${fmtGia(it.gia)}</td>
            <td data-label="Số lượng"><div class="qty"><button type="button" onclick="doiSL(${i},-1)" aria-label="Giảm">−</button>
                <input type="number" min="1" max="99" value="${it.sl}" onchange="datSL(${i},this.value)" aria-label="Số lượng">
                <button type="button" onclick="doiSL(${i},1)" aria-label="Tăng">+</button></div></td>
            <td data-label="Thành tiền">${fmtGia(thanhtien)}</td>
            <td data-label="Thao tác"><button class="remove_button fm" type="button" onclick="remove(${i})">Xóa</button></td>
        </tr>`;
    }
    if (!giohang.length) kq = `<tr><td colspan="7" class="cart-empty">Giỏ hàng đang trống. <a href="category.html">Chọn sản phẩm ngay</a></td></tr>`;
    document.getElementById("addCart").innerHTML = kq;
    document.getElementById("tongthanhtien").innerText = fmtGia(tong);
    updateBadge(giohang);
}

function datSL(i, v) {            // nhập trực tiếp số lượng
    let n = Math.min(99, Math.max(1, parseInt(v, 10) || 1));
    giohang[i].sl = n;
    saveCart(giohang);
    viewCart();
}
function doiSL(i, d) { datSL(i, giohang[i].sl + d); }

function remove(i) {
    giohang.splice(i, 1);         // xóa khỏi mảng giohang
    saveCart(giohang);            // cập nhật lại localStorage
    viewCart();
}

function thanhToan() {            // demo: chưa có máy chủ nên chỉ mô phỏng đặt hàng
    if (!giohang.length) { alert("Giỏ hàng đang trống."); return; }
    let tong = giohang.reduce((s, x) => s + x.gia * x.sl, 0);
    if (confirm(`Xác nhận đặt hàng? Tổng thanh toán: ${fmtGia(tong)}`)) {
        giohang = [];
        saveCart(giohang);
        viewCart();
        alert("Đặt hàng thành công (bản demo, chưa kết nối thanh toán thật).");
    }
}

viewCart();

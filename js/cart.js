/* TRANG GIỎ HÀNG. Dùng getCart/saveCart/addToCart trong common.js; key localStorage: giohang_Storage. */
let giohang = getCart();

// Danh sách gợi ý: 8 sản phẩm đầu
let goiy = ds.slice(0, 8);
for (let i = 0; i < goiy.length; i++) {
    document.getElementById("productAll").innerHTML += cardHTML(goiy[i], "cart");
}

function addCart(ID) {          // nút "Thêm vào giỏ" ở danh sách gợi ý
    addToCart(ID, 1);
    giohang = getCart();
    viewCart();
}

function viewCart() {
    let kq = "";
    let tong = 0;
    for (let i = 0; i < giohang.length; i++) {
        let thanhtien = giohang[i].gia * giohang[i].sl;
        tong += thanhtien;
        kq +=
        `<tr>
            <td data-label="STT">${i + 1}</td>
            <td data-label="Sản phẩm"><a href="detail.html?id=${giohang[i].id}">${giohang[i].ten}</a></td>
            <td data-label="Hình"><img src="images/${giohang[i].hinh}" alt="" style="width:50px"></td>
            <td data-label="Đơn giá">${fmtGia(giohang[i].gia)}</td>
            <td data-label="Số lượng"><div class="qty"><button type="button" onclick="doiSL(${i},-1)">−</button>
                <input type="number" min="1" max="99" value="${giohang[i].sl}" onchange="datSL(${i},this.value)">
                <button type="button" onclick="doiSL(${i},1)">+</button></div></td>
            <td data-label="Thành tiền">${fmtGia(thanhtien)}</td>
            <td data-label="Thao tác"><button class="remove_button fm" type="button" onclick="remove(${i})">Xóa</button></td>
        </tr>`;
    }
    if (giohang.length == 0) {
        kq = `<tr><td colspan="7" class="cart-empty">Giỏ hàng đang trống. <a href="category.html">Chọn sản phẩm ngay</a></td></tr>`;
    }
    document.getElementById("addCart").innerHTML = kq;
    document.getElementById("tongthanhtien").innerText = fmtGia(tong);
    updateBadge();
}

function datSL(i, v) {          // nhập trực tiếp số lượng (giữ trong khoảng 1 – 99)
    let n = Number(v);
    if (!(n >= 1)) {
        n = 1;
    }
    if (n > 99) {
        n = 99;
    }
    giohang[i].sl = n;
    saveCart(giohang);
    viewCart();
}

function doiSL(i, d) {          // nút − và +
    datSL(i, giohang[i].sl + d);
}

function remove(i) {
    giohang.splice(i, 1);       // xóa khỏi mảng giohang
    saveCart(giohang);          // cập nhật lại localStorage
    viewCart();
}

function thanhToan() {          // demo: chưa có máy chủ nên chỉ mô phỏng đặt hàng
    if (giohang.length == 0) {
        alert("Giỏ hàng đang trống.");
        return;
    }
    giohang.splice(0, giohang.length);      // xóa hết sản phẩm
    saveCart(giohang);
    viewCart();
    alert("Đặt hàng thành công (bản demo, chưa kết nối thanh toán thật).");
}

viewCart();

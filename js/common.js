/* DÙNG CHUNG: giỏ hàng (localStorage), thẻ sản phẩm, menu và footer.
   Nạp SAU product.js. Menu/footer được chèn vào #site-header và #site-footer.
   Mỗi trang khai báo trước: let trang = "index"; (dùng để tô sáng mục menu hiện tại). */

/* Thông tin liên hệ – chỉnh tại đây, footer mọi trang sẽ tự cập nhật */
let SITE = {
    ten: "Kem Tràng Tiền",
    diachi: "215 Nguyễn Văn Luông, Bình Phú, Hồ Chí Minh",
    dienthoai: "0961 300 246",
    tel: "0961300246",
    email: "ktkthcm@hotec.edu.vn"
};

/* ---------- Tiện ích dữ liệu ---------- */
function fmtGia(n) {
    return n + " VND";
}

function timSP(id) {
    return ds.find(a => a.id === Number(id));
}

function tenLoai(k) {
    for (let i = 0; i < loaiKey.length; i++) {
        if (loaiKey[i] == k) {
            return danhmuc[i];
        }
    }
    return "";
}

function detail(id) {
    window.location.href = `detail.html?id=${id}`;   // chuyển sang trang detail.html
}

/* ---------- Giỏ hàng (key localStorage: giohang_Storage) ---------- */
function getCart() {
    return JSON.parse(localStorage.getItem("giohang_Storage")) || [];
}

function saveCart(arr) {
    localStorage.setItem("giohang_Storage", JSON.stringify(arr));
    updateBadge();
}

function addToCart(id, qty) {
    let p = timSP(id);
    if (p == undefined) {
        return 0;
    }
    if (!(qty >= 1)) {      // qty sai (rỗng, chữ, nhỏ hơn 1) thì lấy 1
        qty = 1;
    }
    let giohang = getCart();
    let i;
    for (i = 0; i < giohang.length; i++) {
        // th1: trùng id => tăng số lượng
        if (giohang[i].id == id) {
            giohang[i].sl = giohang[i].sl + qty;
            break;
        }
    }
    // th2: không trùng => thêm 1 dòng sản phẩm
    if (i == giohang.length) {
        giohang.push({ id: p.id, ten: p.ten, gia: p.gia, hinh: p.hinh, loai: p.loai, sl: qty });
    }
    if (giohang[i].sl > 99) {
        giohang[i].sl = 99;
    }
    saveCart(giohang);
    return giohang[i].sl;
}

function muaNgay(id) {      // nút "Mua ngay": thêm 1 sản phẩm rồi chuyển sang giỏ hàng
    addToCart(id, 1);
    window.location.href = "cart.html";
}

function updateBadge() {
    let giohang = getCart();
    let tong = 0;
    for (let i = 0; i < giohang.length; i++) {
        tong = tong + giohang[i].sl;
    }
    let el = document.getElementById("cartCount");
    if (el != null) {
        el.innerText = tong;
    }
}

/* ---------- Thẻ sản phẩm (dùng cho index, category, detail, cart) ---------- */
function cardHTML(p, mode) {
    let nut = "";
    if (mode == "cart") {
        nut = `<button onclick="addCart(${p.id})" value="${p.id}">Thêm vào giỏ</button>`;
    } else {
        nut = `<div class="btn-row">
                <button onclick="detail(${p.id})" value="${p.id}">Chi tiết</button>
                <button class="btn-buy" onclick="muaNgay(${p.id})" value="${p.id}">Mua ngay</button>
            </div>`;
    }
    return `<div class="col3 m3">
            <img src="images/${p.hinh}" alt="${p.ten}">
            <h2>${p.ten}</h2>
            <h3>${fmtGia(p.gia)}</h3>
            ${nut}
            <div class="km">Giảm 50%</div>
        </div>`;
}

/* ---------- Menu + Footer ---------- */
function act(k) {           // mục menu của trang hiện tại thì thêm class active
    if (trang == k) {
        return ' class="active"';
    }
    return "";
}

function toggleMenu() {     // nút ba gạch trên điện thoại
    let h = document.getElementById("scHeader");
    if (h.className == "sc-header") {
        h.className = "sc-header open";
    } else {
        h.className = "sc-header";
    }
}

function renderHeader() {
    let host = document.getElementById("site-header");
    if (host == null) {
        return;
    }
    let sub = "";
    for (let i = 0; i < danhmuc.length; i++) {
        sub += `<li><a href="category.html?loai=${loaiKey[i]}">${danhmuc[i]}</a></li>`;
    }
    host.innerHTML = `<header class="sc-header" id="scHeader"><div class="sc-bar">
        <a class="sc-brand" href="index.html"><img src="images/logo.png" alt="${SITE.ten}"><span>KEM TRÀNG TIỀN</span></a>
        <button type="button" class="sc-burger" id="scBurger" onclick="toggleMenu()"><span></span><span></span><span></span></button>
        <div class="sc-nav" id="scNav"><ul>
            <li><a href="index.html"${act("index")}>TRANG CHỦ</a></li>
            <li><a href="about.html"${act("about")}>GIỚI THIỆU</a></li>
            <li class="has-sub"><a href="category.html"${act("category")}>SẢN PHẨM</a><ul id="danhmuc">${sub}</ul></li>
            <li><a href="news.html"${act("news")}>TIN TỨC</a></li>
            <li><a href="#lienhe">LIÊN HỆ</a></li>
        </ul></div>
        <div class="sc-icons">
            <a href="index.html?login=1" id="btnLogin" aria-label="Tài khoản"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-6 8-6s8 2 8 6"/></svg></a>
            <a href="cart.html" aria-label="Giỏ hàng"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 4h2.5l2.2 11h10.6l2-8H6.3"/><circle cx="9" cy="20" r="1.4"/><circle cx="17" cy="20" r="1.4"/></svg><span id="cartCount">0</span></a>
        </div></div></header>`;
    updateBadge();
}

function renderFooter() {
    let host = document.getElementById("site-footer");
    if (host == null) {
        return;
    }
    host.innerHTML = `<div class="sc-footer" id="lienhe"><div class="sc-foot-grid">
        <div class="sc-foot-brand"><img src="images/ref_logo1.png" alt="${SITE.ten}">
            <p>Kem que, kem ốc quế, kem hộp và kem tươi cho mọi khoảnh khắc ngọt ngào.</p></div>
        <div class="sc-foot-col"><h4>${SITE.ten.toUpperCase()}</h4><ul class="sc-contact">
            <li><img src="images/ref_icon7.png" alt=""><span>Địa chỉ: ${SITE.diachi}</span></li>
            <li><img src="images/ref_icon8.png" alt=""><span>Hotline: <a href="tel:${SITE.tel}">${SITE.dienthoai}</a></span></li>
            <li><img src="images/ref_icon9.png" alt=""><span>Email: <a href="mailto:${SITE.email}">${SITE.email}</a></span></li></ul></div>
        <div class="sc-foot-col"><h4>GIỚI THIỆU</h4><ul>
            <li><a href="about.html">Giới thiệu ${SITE.ten}</a></li>
            <li><a href="category.html">Tất cả sản phẩm</a></li>
            <li><a href="news.html">Tin tức</a></li></ul></div>
        <div class="sc-foot-col"><h4>HỖ TRỢ KHÁCH HÀNG</h4><ul>
            <li>Chính sách vận chuyển</li><li>Chính sách đổi trả sản phẩm</li>
            <li>Chính sách đại lý</li><li>Giải quyết khiếu nại</li><li>Chính sách bảo mật</li></ul></div>
        <div class="sc-foot-col"><h4>KẾT NỐI VỚI CHÚNG TÔI</h4><div class="sc-social">
            <a href="#" aria-label="Facebook"><img src="images/ref_icon10.png" alt="Facebook"></a>
            <a href="#" aria-label="YouTube"><img src="images/ref_icon11.png" alt="YouTube"></a>
            <a href="#" aria-label="Instagram"><img src="images/ref_icon12.png" alt="Instagram"></a></div></div>
        </div><div class="sc-foot-bottom">© 2026 ${SITE.ten}. Bảo lưu mọi quyền.</div></div>`;
}

renderHeader();
renderFooter();

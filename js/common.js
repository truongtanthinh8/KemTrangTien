/* DÙNG CHUNG: giỏ hàng (localStorage), thẻ sản phẩm, menu và footer.
   Nạp SAU product.js. Menu/footer được chèn vào #site-header và #site-footer. */
const CART_KEY = "giohang_Storage";   // giữ nguyên key cũ

/* Thông tin liên hệ – chỉnh tại đây, footer mọi trang sẽ tự cập nhật */
const SITE = {
    ten: "Kem Tràng Tiền",
    diachi: "215 Nguyễn Văn Luông, Bình Phú, Hồ Chí Minh",
    dienthoai: "0961 300 246",
    email: "ktkthcm@hotec.edu.vn"
};

/* ---------- Tiện ích dữ liệu ---------- */
function fmtGia(n) { return Number(n).toLocaleString("vi-VN") + "đ"; }
function timSP(id) { return ds.find(p => p.id === Number(id)); }
function tenLoai(k) { let i = loaiKey.indexOf(k); return i >= 0 ? danhmuc[i] : ""; }
function detail(id) { window.location.href = `detail.html?id=${id}`; }

/* ---------- Giỏ hàng ---------- */
let _memCart = [];   // dự phòng khi trình duyệt chặn localStorage
function getCart() {
    let raw = [];
    try { raw = JSON.parse(localStorage.getItem(CART_KEY)) || []; }
    catch (e) { raw = _memCart; }
    if (!Array.isArray(raw)) raw = [];
    // chuẩn hóa theo dữ liệu gốc để giá/tên/ảnh luôn khớp với product.js
    return raw.map(it => {
        let p = timSP(it && it.id);
        let sl = parseInt(it && it.sl, 10);
        return p ? Object.assign({}, p, { sl: sl > 0 ? Math.min(sl, 99) : 1 }) : null;
    }).filter(Boolean);
}
function saveCart(arr) {
    _memCart = arr;
    try { localStorage.setItem(CART_KEY, JSON.stringify(arr)); } catch (e) {}
    updateBadge(arr);
}
function addToCart(id, qty) {
    let p = timSP(id);
    if (!p) return 0;
    qty = Math.max(1, parseInt(qty, 10) || 1);
    let cart = getCart();
    let it = cart.find(x => x.id === p.id);
    if (it) it.sl = Math.min(99, it.sl + qty);
    else cart.push(Object.assign({}, p, { sl: Math.min(99, qty) }));
    saveCart(cart);
    return (cart.find(x => x.id === p.id)).sl;
}
function updateBadge(arr) {
    let el = document.getElementById("cartCount");
    if (el) el.textContent = (arr || getCart()).reduce((s, x) => s + x.sl, 0);
}

/* ---------- Thẻ sản phẩm (dùng cho index, category, detail, cart) ---------- */
function cardHTML(p, mode) {
    let nut = mode === "cart"
        ? `<button onclick="addCart(${p.id})" value="${p.id}">Thêm vào giỏ</button>`
        : `<button onclick="detail(${p.id})" value="${p.id}">Chi tiết</button>`;
    return `<div class="col3 m3">
            <img src="images/${p.hinh}" alt="${p.ten}" loading="lazy">
            <h2>${p.ten}</h2>
            <h3>${fmtGia(p.gia)}</h3>
            ${nut}
            <div class="km">Giảm 50%</div>
        </div>`;
}

/* ---------- Menu + Footer ---------- */
const ICON = {
    user: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-6 8-6s8 2 8 6"/></svg>',
    cart: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 4h2.5l2.2 11h10.6l2-8H6.3"/><circle cx="9" cy="20" r="1.4"/><circle cx="17" cy="20" r="1.4"/></svg>',
    search: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/></svg>'
};

function renderHeader() {
    let host = document.getElementById("site-header");
    if (!host) return;
    let page = document.body.dataset.page || "";
    let on = k => page === k ? ' class="active"' : "";
    let sub = danhmuc.map((t, i) => `<li><a href="category.html?loai=${loaiKey[i]}">${t}</a></li>`).join("");
    host.innerHTML = `<header class="sc-header"><div class="sc-bar">
        <a class="sc-brand" href="index.html"><img src="images/logo.png" alt="${SITE.ten}"><span>KEM TRÀNG TIỀN</span></a>
        <button type="button" class="sc-burger" id="scBurger" aria-label="Mở menu" aria-expanded="false"><span></span><span></span><span></span></button>
        <div class="sc-nav" id="scNav"><ul>
            <li><a href="index.html"${on("index")}>TRANG CHỦ</a></li>
            <li><a href="about.html"${on("about")}>GIỚI THIỆU</a></li>
            <li class="has-sub"><a href="category.html"${on("category")}>SẢN PHẨM</a><ul id="danhmuc">${sub}</ul></li>
            <li><a href="news.html"${on("news")}>TIN TỨC</a></li>
            <li><a href="#lienhe">LIÊN HỆ</a></li>
        </ul>
        <form class="sc-search" id="scSearch" role="search"><input type="text" name="q" placeholder="Tìm kiếm sản phẩm..." aria-label="Tìm kiếm sản phẩm"><button type="submit" aria-label="Tìm">${ICON.search}</button></form></div>
        <div class="sc-icons">
            <a href="index.html?login=1" id="btnLogin" aria-label="Tài khoản">${ICON.user}</a>
            <a href="cart.html" aria-label="Giỏ hàng">${ICON.cart}<span id="cartCount">0</span></a>
        </div></div></header>`;
    document.getElementById("scBurger").addEventListener("click", function () {
        let open = host.firstElementChild.classList.toggle("open");
        this.setAttribute("aria-expanded", open);
    });
    document.getElementById("scSearch").addEventListener("submit", function (e) {
        e.preventDefault();
        let q = this.q.value.trim();
        window.location.href = "category.html" + (q ? "?q=" + encodeURIComponent(q) : "");
    });
    updateBadge();
}

function renderFooter() {
    let host = document.getElementById("site-footer");
    if (!host) return;
    host.innerHTML = `<div class="sc-footer" id="lienhe"><div class="sc-foot-grid">
        <div class="sc-foot-brand"><img src="images/ref_logo1.png" alt="${SITE.ten}">
            <p>Kem que, kem ốc quế, kem hộp và kem tươi cho mọi khoảnh khắc ngọt ngào.</p></div>
        <div class="sc-foot-col"><h4>${SITE.ten.toUpperCase()}</h4><ul class="sc-contact">
            <li><img src="images/ref_icon7.png" alt=""><span>Địa chỉ: ${SITE.diachi}</span></li>
            <li><img src="images/ref_icon8.png" alt=""><span>Hotline: <a href="tel:${SITE.dienthoai.replace(/\s/g,'')}">${SITE.dienthoai}</a></span></li>
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
        </div><div class="sc-foot-bottom">© ${new Date().getFullYear()} ${SITE.ten}. Bảo lưu mọi quyền.</div></div>`;
}

renderHeader();
renderFooter();

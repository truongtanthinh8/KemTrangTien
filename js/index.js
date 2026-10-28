/* TRANG CHỦ: đổ sản phẩm theo danh mục + banner. Cần product.js và common.js nạp trước. */
function renderGrid(id, list) {
    let el = document.getElementById(id);
    if (el) el.innerHTML = list.map(p => cardHTML(p)).join("");
}
renderGrid("show", ds);                                          // TẤT CẢ SẢN PHẨM
renderGrid("kemque", ds.filter(p => p.loai == "kemque"));        // KEM QUE
renderGrid("kemocque", ds.filter(p => p.loai == "kemocque"));    // KEM ỐC QUẾ
renderGrid("kemtuoi", ds.filter(p => p.loai == "kemtuoi"));      // KEM TƯƠI
renderGrid("kemhop", ds.filter(p => p.loai == "kemhop"));        // KEM HỘP

/* BANNER: banner1–5 (banner6 là quảng cáo bánh trung thu theo mùa nên không đưa vào) */
let arr = ["images/banner1.png", "images/banner2.png", "images/banner3.png", "images/banner4.png", "images/banner5.png"];
let bannerIndex = 0, bannerTimer = null;

function showBanner(n) {
    bannerIndex = (n + arr.length) % arr.length;
    document.getElementById("banner").src = arr[bannerIndex];
    document.querySelectorAll(".banner-1 .dot").forEach((d, k) => d.classList.toggle("on", k === bannerIndex));
}
function right() { showBanner(bannerIndex + 1); }
function left() { showBanner(bannerIndex - 1); }
function startBanner() { clearInterval(bannerTimer); bannerTimer = setInterval(right, 2000); }

(function initBanner() {
    let dots = document.querySelector(".banner-1 .btn");
    if (!dots) return;
    dots.innerHTML = arr.map((_, k) => `<span class="dot" data-i="${k}" role="button" aria-label="Banner ${k + 1}"></span>`).join("");
    dots.addEventListener("click", e => {
        if (e.target.dataset.i !== undefined) { showBanner(+e.target.dataset.i); startBanner(); }
    });
    let box = document.querySelector(".banner-1");
    box.addEventListener("mouseenter", () => clearInterval(bannerTimer));
    box.addEventListener("mouseleave", startBanner);
    document.querySelectorAll(".btn-left, .btn-right").forEach(b => b.addEventListener("click", startBanner));
    showBanner(0);
    startBanner();
})();

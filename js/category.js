/* TRANG DANH MỤC DÙNG CHUNG: category.html?loai=kemque|kemocque|kemhop|kemtuoi  (bỏ trống = tất cả)
   Tìm kiếm: category.html?q=từ khóa */
(function () {
    let params = new URLSearchParams(window.location.search);
    let loai = params.get("loai") || "";
    let q = (params.get("q") || "").trim();
    if (loai && loaiKey.indexOf(loai) < 0) loai = "";           // mã lạ -> hiển thị tất cả

    let tabs = `<a href="category.html" class="${!loai ? "on" : ""}">Tất cả</a>` +
        danhmuc.map((t, i) => `<a href="category.html?loai=${loaiKey[i]}" class="${loai === loaiKey[i] ? "on" : ""}">${t}</a>`).join("");
    document.getElementById("catTabs").innerHTML = tabs;

    let list = ds.filter(p => (!loai || p.loai === loai) &&
        (!q || p.ten.toLowerCase().includes(q.toLowerCase())));
    let tieude = q ? `Kết quả cho “${q}”` : (loai ? "Sản phẩm " + tenLoai(loai) : "Tất cả sản phẩm");
    document.getElementById("catTitle").textContent = tieude.toUpperCase();
    document.getElementById("catCount").textContent = list.length + " sản phẩm";
    document.title = tieude + " – Kem Tràng Tiền";
    document.getElementById("catList").innerHTML = list.length
        ? list.map(p => cardHTML(p)).join("")
        : `<div class="empty-state"><h2>Không có sản phẩm phù hợp</h2><a class="sc-btn" href="category.html">Xem tất cả sản phẩm</a></div>`;
})();

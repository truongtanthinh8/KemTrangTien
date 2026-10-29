/* TRANG DANH MỤC DÙNG CHUNG: category.html?loai=kemque|kemocque|kemhop|kemtuoi  (bỏ trống = tất cả) */
let url = new URL(window.location.href);
let loai = url.searchParams.get("loai");
if (loai == null) {
    loai = "";
}

// loai không nằm trong danh sách thì xem như "tất cả"
let hopLe = false;
for (let i = 0; i < loaiKey.length; i++) {
    if (loaiKey[i] == loai) {
        hopLe = true;
    }
}
if (hopLe == false) {
    loai = "";
}

// các nút chọn danh mục (tab)
let tieude = "Tất cả sản phẩm";
let tabs = "";
if (loai == "") {
    tabs += `<a href="category.html" class="on">Tất cả</a>`;
} else {
    tabs += `<a href="category.html">Tất cả</a>`;
}
for (let i = 0; i < danhmuc.length; i++) {
    if (loai == loaiKey[i]) {
        tabs += `<a href="category.html?loai=${loaiKey[i]}" class="on">${danhmuc[i]}</a>`;
        tieude = "Sản phẩm " + danhmuc[i];
    } else {
        tabs += `<a href="category.html?loai=${loaiKey[i]}">${danhmuc[i]}</a>`;
    }
}
document.getElementById("catTabs").innerHTML = tabs;

// hiển thị sản phẩm đúng danh mục
let dem = 0;
for (let i = 0; i < ds.length; i++) {
    if (loai == "" || ds[i].loai == loai) {
        document.getElementById("catList").innerHTML += cardHTML(ds[i]);
        dem++;
    }
}
document.getElementById("catTitle").innerText = tieude.toUpperCase();
document.getElementById("catCount").innerText = dem + " sản phẩm";

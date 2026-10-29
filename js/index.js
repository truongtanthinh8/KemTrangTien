/* TRANG CHỦ: đổ sản phẩm theo danh mục + banner. Cần product.js và common.js nạp trước. */
function renderGrid(id, list) {
    for (let i = 0; i < list.length; i++) {
        document.getElementById(id).innerHTML += cardHTML(list[i]);
    }
}
renderGrid("show", ds);                                          // TẤT CẢ SẢN PHẨM
renderGrid("kemque", ds.filter(a => a.loai == "kemque"));        // KEM QUE
renderGrid("kemocque", ds.filter(a => a.loai == "kemocque"));    // KEM ỐC QUẾ
renderGrid("kemtuoi", ds.filter(a => a.loai == "kemtuoi"));      // KEM TƯƠI
renderGrid("kemhop", ds.filter(a => a.loai == "kemhop"));        // KEM HỘP

/* BANNER: banner1–5 */
let arr = [
    "images/banner1.png",
    "images/banner2.png",
    "images/banner3.png",
    "images/banner4.png",
    "images/banner5.png"
];
let i = 0;

// tạo các chấm tròn dưới banner
for (let k = 0; k < arr.length; k++) {
    document.getElementById("dots").innerHTML += `<span class="dot" id="dot${k}" onclick="showBanner(${k})"></span>`;
}

function showBanner(n) {
    i = n;
    document.getElementById("banner").src = arr[i];
    for (let k = 0; k < arr.length; k++) {      // chấm của banner đang xem thì sáng lên
        if (k == i) {
            document.getElementById("dot" + k).className = "dot on";
        } else {
            document.getElementById("dot" + k).className = "dot";
        }
    }
}

function right() {
    i++;
    if (i == arr.length) {
        i = 0;
    }
    showBanner(i);
}

function left() {
    i--;
    if (i < 0) {
        i = arr.length - 1;
    }
    showBanner(i);
}

showBanner(0);
setInterval(right, 2000);       // 2000 = 2 giây tự chuyển banner

const lazyImages = document.querySelectorAll("img[data-src]");
const windowHeight = document.documentElement.clientHeight;

let lazyImagePositions = [];

if (lazyImages.length > 0) {
    lazyImages.forEach((img) => {
        if (img.dataset.src || img.dataset.srcset) {
            lazyImagePositions.push(
                img.getBoundingClientRect().top + pageYOffset
            );
            lazyScrollCheck();
        }
    });
}

window.addEventListener("scroll", lazyScroll);

function lazyScroll() {
    if (document.querySelectorAll("img[data-src]").length > 0) {
        lazyScrollCheck();
    }
}

function lazyScrollCheck() {
    let imgIndex = lazyImagePositions.findIndex(
        (item) => pageYOffset > item - windowHeight
    );
    if (imgIndex >= 0) {
        if (lazyImages[imgIndex].dataset.src) {
            lazyImages[imgIndex].src = lazyImages[imgIndex].dataset.src;
            lazyImages[imgIndex].removeAttribute("data-src");
        }
        delete lazyImagePositions[imgIndex];
    }
}

// console.log(lazyImagePositions);

// =============================================

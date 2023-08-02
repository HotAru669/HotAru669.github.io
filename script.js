const pages = document.querySelectorAll('.page');
const arrows = document.querySelectorAll('.arrow');
let currentPage = 0;

function showPage(pageIndex) {
    pages.forEach((page, index) => {
        if (index === pageIndex) {
            page.classList.add('show');
        } else {
            page.classList.remove('show');
        }
    });
}

function prevPage() {
    if (currentPage === 0) {
        currentPage = pages.length - 1;
    } else {
        currentPage--;
    }
    showPage(currentPage);
}

function nextPage() {
    if (currentPage === pages.length - 1) {
        currentPage = 0;
    } else {
        currentPage++;
    }
    showPage(currentPage);
}

arrows.forEach(arrow => {
    arrow.addEventListener('click', event => {
        if (event.target === document.getElementById('prev')) {
            prevPage();
        } else if (event.target === document.getElementById('next')) {
            nextPage();
        }
    });
});

show

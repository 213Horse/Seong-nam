let currentPage = 1;
const itemsPerPage = 12;

function renderItems() {
    const allItems = document.querySelectorAll('.grid-item');
    allItems.forEach((item, index) => {
        item.style.display = (index >= (currentPage - 1) * itemsPerPage && index < currentPage * itemsPerPage) ? 'block' : 'none';
    });
    updatePagination();
}

function nextPage() {
    const totalItems = document.querySelectorAll('.grid-item').length;
    if (currentPage * itemsPerPage < totalItems) {
        currentPage++;
        renderItems();
    }
}

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        renderItems();
    }
}

function goToPage(page) {
    currentPage = page;
    renderItems();
}

function nextDupPage() {
    const totalItems = document.querySelectorAll('.grid-item').length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    currentPage = totalPages; 
    renderItems();
}

function updatePagination() {
    const totalItems = document.querySelectorAll('.grid-item').length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    
    const pageNumbersContainer = document.querySelector('.pagination');
    
    // Xóa các số trang hiện tại
    const pageNumbers = document.querySelectorAll('.page-number');
    pageNumbers.forEach(number => number.remove());
    
    // Tạo các nút trang mới
    for (let i = 1; i <= totalPages; i++) {
        const span = document.createElement('span');
        span.classList.add('page-number');
        if (i === currentPage) {
            span.classList.add('active');
        }
        span.innerText = i;
        span.onclick = () => goToPage(i);
        pageNumbersContainer.insertBefore(span, document.querySelector('.next')); 
    }
    
    // Cập nhật trạng thái của nút prev và next
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    
    prevButton.disabled = currentPage === 1;
    nextButton.disabled = currentPage * itemsPerPage >= totalItems;
}

// Initial rendering of items
renderItems();

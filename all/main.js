function toggleNav() {
    const nav = document.querySelector('header nav');
    nav.classList.toggle('active');
}

function toggleAccordion(header) {
    const content = header.nextElementSibling;
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
}

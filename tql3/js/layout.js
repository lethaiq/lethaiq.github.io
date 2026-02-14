document.addEventListener('DOMContentLoaded', function () {
    // Determine current page to highlight active link
    const path = window.location.pathname;
    const page = path.split("/").pop() || "index.html";

    // Header & Navigation HTML
    const headerHTML = `
    <header>
        <div class="nav-container">
            <div class="logo">
                <a href="index.html">ARKAI <span>Lab</span></a>
            </div>
            <nav>
                <ul>
                    <li><a href="index.html" class="${page === 'index.html' || page === '' ? 'active' : ''}">ARKAI Lab</a></li>
                    <li><a href="group.html" class="${page === 'group.html' ? 'active' : ''}">People</a></li>
                    <li><a href="research.html" class="${page === 'research.html' ? 'active' : ''}">Research</a></li>
                    <li><a href="publication.html" class="${page === 'publication.html' ? 'active' : ''}">Publications</a></li>
                    <li><a href="dataset.html" class="${page === 'dataset.html' ? 'active' : ''}">Dataset & Software</a></li>
                    <li><a href="teaching.html" class="${page === 'teaching.html' ? 'active' : ''}">Teaching</a></li>
                </ul>
            </nav>
            <div class="mobile-menu-toggle">
                <i class="fas fa-bars"></i>
            </div>
        </div>
    </header>
    `;

    // Footer HTML
    const footerHTML = `
    <footer>
        <div class="container">
            <p>&copy; ${new Date().getFullYear()} Thai Le. All rights reserved.</p>
            <p>ARKAI Research Lab (Accountable, Resilient, and Kind AI)</p>
            <div style="margin-top: 10px;">
                <a href="https://scholar.google.com/citations?user=Fd8K7kAAAAAJ&hl=en" target="_blank"><i class="fas fa-graduation-cap"></i> Google Scholar</a> | 
                <a href="https://github.com/lethaiq" target="_blank"><i class="fab fa-github"></i> GitHub</a>
            </div>
        </div>
    </footer>
    `;

    // Inject Header at the beginning of body
    document.body.insertAdjacentHTML('afterbegin', headerHTML);

    // Inject Footer at the end of body
    document.body.insertAdjacentHTML('beforeend', footerHTML);

    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('nav');

    if (menuToggle && nav) {
        menuToggle.addEventListener('click', () => {
            nav.classList.toggle('active');
        });
    }

    // News Toggle
    const newsToggle = document.getElementById('toggle-news-btn');
    const olderNews = document.getElementById('older-news');

    if (newsToggle && olderNews) {
        newsToggle.addEventListener('click', () => {
            if (olderNews.style.display === 'none') {
                olderNews.style.display = 'block';
                newsToggle.textContent = 'Show Less News';
            } else {
                olderNews.style.display = 'none';
                newsToggle.textContent = 'Show Older News';
            }
        });
    }
});

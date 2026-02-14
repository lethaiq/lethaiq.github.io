document.addEventListener('DOMContentLoaded', function () {
    // Determine current page to highlight active link
    const path = window.location.pathname;
    const page = path.split("/").pop() || "index.html";

    // Header & Navigation HTML - V3 Hybrid (Glass Header)
    // terminology restored to V3.1: Home, Research, Publications, Datasets & Software, Team, Teaching
    const headerHTML = `
    <header class="glass-header" style="position: sticky; top: 0; z-index: 1000;">
        <div class="nav-container" style="max-width: var(--max-width); margin: 0 auto; width: 95%; display: flex; justify-content: space-between; align-items: center;">
            <div class="logo">
                <a href="index.html" style="font-weight: 800; color: var(--primary-color); text-transform: uppercase; letter-spacing: 2px; font-size: 1.2rem; text-decoration: none;">
                    ARKAI <span style="color: var(--secondary-color);">Lab</span>
                </a>
            </div>
            <nav style="display: flex; gap: 20px;">
                <ul style="display: flex; list-style: none; gap: 25px; margin: 0; padding: 0;">
                    <li><a href="index.html" style="text-decoration: none; font-weight: 600; color: ${page === 'index.html' || page === '' ? 'var(--accent-red)' : 'var(--primary-color)'};">Home</a></li>
                    <li><a href="research.html" style="text-decoration: none; font-weight: 600; color: ${page === 'research.html' ? 'var(--accent-red)' : 'var(--primary-color)'};">Research</a></li>
                    <li><a href="publication.html" style="text-decoration: none; font-weight: 600; color: ${page === 'publication.html' ? 'var(--accent-red)' : 'var(--primary-color)'};">Publications</a></li>
                    <li><a href="dataset.html" style="text-decoration: none; font-weight: 600; color: ${page === 'dataset.html' ? 'var(--accent-red)' : 'var(--primary-color)'};">Datasets & Software</a></li>
                    <li><a href="group.html" style="text-decoration: none; font-weight: 600; color: ${page === 'group.html' ? 'var(--accent-red)' : 'var(--primary-color)'};">Team</a></li>
                    <li><a href="teaching.html" style="text-decoration: none; font-weight: 600; color: ${page === 'teaching.html' ? 'var(--accent-red)' : 'var(--primary-color)'};">Knowledge Transfer</a></li>
                </ul>
            </nav>
            <div class="mobile-menu-toggle" style="display: none; cursor: pointer; color: var(--primary-color);">
                <i class="fas fa-bars"></i>
            </div>
        </div>
    </header>
    `;

    // Footer HTML - V4 Favorite Mission Branding
    const footerHTML = `
    <footer style="margin-top: 100px; padding: 60px 0; border-top: 1px solid #eee; background: #fff;">
        <div class="container" style="max-width: var(--max-width); margin: 0 auto; text-align: center; width: 95%;">
            <div style="font-size: 0.95rem; font-weight: 600; color: var(--secondary-color); letter-spacing: 3px; text-transform: uppercase; margin-bottom: 20px; opacity: 0.7;">
                Accountable &bull; Resilient &bull; Kind
            </div>
            <p style="color: #a0aec0; font-size: 0.85rem; letter-spacing: 1px;">
                &copy; ${new Date().getFullYear()} ARKAI Research Lab
            </p>
            <div style="margin-top: 30px; display: flex; justify-content: center; gap: 20px;">
                <a href="https://scholar.google.com/citations?user=Fd8K7kAAAAAJ&hl=en" target="_blank" style="color: var(--secondary-color); text-decoration: none; font-size: 0.9rem;"><i class="fas fa-graduation-cap"></i> Scholar</a>
                <a href="https://github.com/lethaiq" target="_blank" style="color: var(--secondary-color); text-decoration: none; font-size: 0.9rem;"><i class="fab fa-github"></i> GitHub</a>
            </div>
        </div>
    </footer>
    `;

    // Inject Header at the beginning of body
    document.body.insertAdjacentHTML('afterbegin', headerHTML);

    // Inject Footer at the end of body
    document.body.insertAdjacentHTML('beforeend', footerHTML);

    // Mobile Menu Toggle (Simplified)
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('nav');
    if (menuToggle && nav) {
        menuToggle.addEventListener('click', () => {
            const currentDisplay = window.getComputedStyle(nav).display;
            nav.style.display = currentDisplay === 'flex' ? 'none' : 'flex';
        });
    }
});

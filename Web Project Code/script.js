
        document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.tab');
    const yearContents = document.querySelectorAll('.year-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const year = this.getAttribute('data-year');
            tabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');

            yearContents.forEach(content => content.classList.remove('active'));
            document.getElementById(`year-${year}`).classList.add('active');
        });
    });

    // Initially show the first year's content
    document.querySelector('.tab').click();

    const blocks = document.querySelectorAll('.block');
    blocks.forEach(block => {
        block.addEventListener('click', function() {
            const details = this.querySelector('.block-details');
            if (details.style.display === 'block') {
                details.style.display = 'none';
            } else {
                details.style.display = 'block';
            }
        });
    });

    window.addEventListener('scroll', function() {
        if (window.scrollY > 200) {
            document.getElementById('back-to-top-btn').style.display = 'block';
        } else {
            document.getElementById('back-to-top-btn').style.display = 'none';
        }
    });

    document.getElementById('back-to-top-btn').addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
   
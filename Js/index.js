document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.btn-more');
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const description = this.nextElementSibling;
            if (description.style.display === 'none' || description.style.display === '') {
                description.style.display = 'block';
                this.textContent = 'Ver menos';
            } else {
                description.style.display = 'none';
                this.textContent = 'Ver más';
            }
        });
    });
});
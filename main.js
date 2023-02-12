document.addEventListener('DOMContentLoaded', () => {
    const error = document.querySelector('.get__error');
    const form = document.querySelector('.get__form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const value = e.target['email'].value.replace(/<[^>]+>/g, '');
        if (value && value.trim() && value.includes('@')) {
            alert('Good, your email: ' + value);
            e.target['email'].value = "";
            error.textContent = "";
        } else {
            error.textContent = "Please enter a valid email address";
        }
    });
});
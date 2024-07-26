document.querySelectorAll('.galeria-imagen').forEach(img => {
    img.addEventListener('click', function() {
        this.classList.toggle('ampliar');
    });
});

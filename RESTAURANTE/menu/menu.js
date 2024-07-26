document.querySelectorAll('.menu-lista li').forEach(item => {
    item.addEventListener('mouseover', function() {
        this.style.backgroundColor = '#e0e0e0';
    });
    item.addEventListener('mouseout', function() {
        this.style.backgroundColor = '#f9f9f9';
    });
});

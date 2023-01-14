let text = document.querySelector('.text');

text.addEventListener('mouseenter', () => {
    text.innerHTML = 'раша параша';
    text.style.color = '#008080'; 
});

text.addEventListener('mouseout', () => {
    text.innerHTML = 'Привіт світ';
    text.style.color = '#800080'; 
});
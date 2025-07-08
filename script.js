
```javascript
document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('ثبت‌نام با موفقیت انجام شد!');
});
```

```javascript
const poemList = document.getElementById('poem-list');

document.getElementById('poem-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const title = this.querySelector('input').value;
    const content = this.querySelector('textarea').value;

    const poemItem = document.createElement('div');
    poemItem.innerHTML = `<h3>${title}</h3><p>${content}</p>`;
    poemList.appendChild(poemItem);

    this.reset(); // Reset the form
});
javascript
const mobileMenu = document.getElementById('mobile-menu');
const nav = document.querySelector('.nav');

mobileMenu.addEventListener('click', () => {
    nav.classList.toggle('active');
});

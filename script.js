function toggleMenu() {
  document.getElementById("mainMenu").classList.toggle("active");
}

// انیمیشن یا تایپ در مراحل بعدی قابل اضافه کردنه
console.log("صفحه اصلی سایت صدای شاعر بارگذاری شد.");
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
function toggleChat() {
  document.getElementById("chatBox").classList.toggle("active");
}

function chatReply(type) {
  let msg = "";
  switch(type) {
    case "signup":
      msg = "برای ثبت‌نام شاعر، لطفاً به صفحه 'ثبت‌نام' مراجعه کنید.";
      break;
    case "gallery":
      msg = "برای دیدن اشعار زیبا، وارد گالری اشعار شوید.";
      break;
    case "contact":
      msg = "برای ارتباط با ما، به صفحه 'تماس با ما' سر بزنید.";
      break;
  }
  alert(msg);
}

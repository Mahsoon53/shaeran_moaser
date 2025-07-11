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
function toggleChat() {
  document.getElementById("chatBox").classList.toggle("active");
}

function faqAnswer(type) {
  let msg = "";
  switch(type) {
    case "ثبت‌نام":
      msg = "برای ثبت‌نام، وارد بخش 'ثبت‌نام شاعر' شوید و فرم را پر کنید.";
      break;
    case "تماس":
      msg = "برای ارتباط، از صفحه 'تماس با ما' استفاده کنید یا ایمیل بزنید.";
      break;
    case "ارسال شعر":
      msg = "پس از ورود، می‌توانید از طریق داشبورد اشعار خود را ثبت کنید.";
      break;
  }
  document.getElementById("botReply").innerText = msg;
}

function submitQuestion() {
  const q = document.getElementById("userQuestion").value.trim();
  let replyBox = document.getElementById("botReply");
  if (!q) {
    replyBox.innerText = "لطفاً سوالی وارد کنید.";
  } else {
    replyBox.innerText = `سوال "${q}" دریافت شد. مدیر سایت به زودی پاسخ می‌دهد ✉️`;
  }
}
function toggleMenu() {
  document.getElementById("menuDrawer").classList.toggle("active");
}

# Animated Portfolio Website - Squinox Space 🌐🎨

This is a visually engaging and responsive portfolio website featuring animated sections, background videos, and smooth transitions. It’s designed to showcase projects, contact information, and brand identity in a clean and interactive way.

## 🚀 Features

- 🎥 Animated background videos in banner and footer
- ✨ Scroll-based animations using [AOS (Animate On Scroll)](https://michalsnik.github.io/aos/)
- 💡 Responsive design (mobile-first approach)
- 📨 Modal contact form
- 🔼 Scroll-up button for better UX

## 📁 Folder Structure

```csharp
├── index.html
├── style.css
├── scripts.js
├── /assets
│ ├── banner-video.mp4
│ ├── footer-video.mp4
│ └── images/
```

## 🛠️ Technologies Used

- HTML5
- CSS3 (no frameworks)
- JavaScript (Vanilla JS)
- AOS Library for animations
- Responsive Media Queries

## 📜 scripts.js Highlights

```js
document.addEventListener("DOMContentLoaded", function () {
    AOS.init(); // Initialize Animate On Scroll
});

const btn = document.querySelector('.contact-btn');
const modal = document.querySelector('.contact-modal');
const exitBtn = document.querySelector('.exit-form');

btn.addEventListener('click', function() {
    modal.style.display = 'block';
});

exitBtn.addEventListener('click', function() {
    modal.style.display = 'none';
});
```

This script initializes scroll-based animations and manages modal open/close events for the contact form.

## 💻 How to Run Locally
Clone the repo:

```bash
git clone https://github.com/paulmagadi/animated-portfolio.git
cd animated-portfolio
```

Open index.html in your browser. Ensure scripts.js and style.css are linked correctly in the HTML.

## 🔧 To Do / Improvements
- Add form submission logic (e.g., AJAX or form service)

- Close modal when clicking outside the form

- Add keyboard accessibility for modal (Escape key closes it)

- Lazy load assets for performance

## 📸 Preview

## 🧑‍💻 Author
Paul Magadi - [paulmagadi](https://github.com/paulmagadi)
[LinkedIn](https://www.linkedin.com/in/paulmagadi) | [Portfolio](https://paulmagadi.github.io/)

### ⚠️ Disclaimer
This project is for educational/demo purposes. It is not affiliated with the **Equinox Space**. To view [Equinox.space](https://equinox.space/)

---

## 📄 License
MIT


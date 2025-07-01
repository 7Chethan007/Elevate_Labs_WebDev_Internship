# 📬 Contact Form with Client-Side Validation

A modern, responsive **Contact Form** built using HTML, CSS, and JavaScript. It features real-time client-side validation, clean design, and helpful feedback — all without using any external libraries or frameworks.

---

## 🚀 Live Demo

🌐 [Click here to view the live form](https://7chethan007.github.io/Elevate_Labs_WebDev_Internship_T6_ContactForm/)

> ✅ Hosted using **GitHub Pages** from the `main` branch of this repository.

---

## 🧰 Tech Stack

- **HTML5** – Form structure
- **CSS3** – Responsive layout using Flexbox, gradients, and transitions
- **JavaScript** – Input validation, error handling, and DOM manipulation

---

## 🎯 Features

- ✨ Fully responsive across devices
- 🧠 Real-time client-side form validation
- ✅ Validates:
    - **Name:** Must not be empty
    - **Email:** Must follow valid format using regex
    - **Message:** Minimum 10 characters
- 🚫 Prevents invalid submissions
- 📢 Inline error messages for each field
- 🟢 Displays success message upon valid submission
- ⚡️ Lightweight and fast (No frameworks or libraries)

---

## 📁 Folder Structure

```
.
├── index.html        # Form layout
├── style.css         # Styling and design
├── script.js         # Validation logic
└── assets/
        ├── preview-desktop.png
        └── preview-mobile.png
```

---

## 🖼️ UI Preview

| Desktop 💻 | Mobile 📱 |
|------------|-----------|
| ![Desktop Preview](assets/preview-desktop.png) | ![Mobile Preview](assets/preview-mobile.png) |

---

## 🧠 How Validation Works

- **Name Field:** Must be filled
- **Email Field:** Regex used → `/^[\w.-]+@[\w.-]+\.\w+$/`
- **Message Field:** Must be at least 10 characters
- ❌ Errors shown inline under each input
- ✅ Success message appears if all fields are valid

---

## 🔍 Edge Cases Handled

- Empty name/email/message fields
- Invalid email formats (`john@com`, `@gmail.com`, etc.)
- Short messages under 10 characters
- Supports special characters

---

## 📦 Deployment

- Deployed using **GitHub Pages**
- Branch: `main`
- Folder: `/ (root)`
- URL: [https://7chethan007.github.io/Elevate_Labs_WebDev_Internship_T6_ContactForm/](https://7chethan007.github.io/Elevate_Labs_WebDev_Internship_T6_ContactForm/)

---
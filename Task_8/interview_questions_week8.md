# ✅ Key Concepts – Bootstrap 5

| Concept           | Summary                                                                 |
|-------------------|-------------------------------------------------------------------------|
| **Bootstrap 5**   | A modern, open-source CSS framework for building responsive UIs quickly. |
| **CDN**           | Content Delivery Network – loads Bootstrap from a server via URL.        |
| **Grid System**   | 12-column responsive layout system using rows and columns.               |
| **Components**    | Pre-built UI elements like buttons, navbars, cards, modals, etc.         |
| **Utility Classes** | Small, reusable classes for spacing, colors, text, etc. (e.g., `mt-3`, `text-center`). |

---

## 🧠 Additional Relevant Concepts

- **Breakpoints:**  
    Bootstrap uses breakpoints (`sm`, `md`, `lg`, `xl`, `xxl`) for responsive behavior in the grid and components.

- **Responsive Classes:**  
    Classes like `d-none d-md-block` help show/hide content based on screen size.

- **JavaScript Plugins:**  
    Bootstrap includes built-in JS plugins like modals, dropdowns, tooltips. You must include Bootstrap’s JS bundle or use a CDN.

---

# 🎯 Interview Questions & Answers

### 1. What is Bootstrap?
Bootstrap is a popular CSS framework that simplifies the process of creating responsive and modern web designs using pre-built components and utility classes.

---

### 2. How to include Bootstrap in a project?
- **CDN (easiest):** Use `<link>` and `<script>` tags from Bootstrap’s website.
- **Download:** Add local CSS and JS files.
- **npm/yarn:** Install via package manager for advanced setups.

---

### 3. What is the grid system?
A flexible 12-column layout system that helps structure content into rows and columns. It adjusts based on screen size (breakpoints like `sm`, `md`, `lg`, etc.).

**Example:**
```html
<div class="row">
    <div class="col-md-6">Left</div>
    <div class="col-md-6">Right</div>
</div>
```

---

### 4. What are utility classes?
Small helper classes for quick styling like spacing (`mt-3`), alignment (`text-center`), color (`bg-light`), etc., without writing custom CSS.

---

### 5. How do you customize Bootstrap?
- Use utility classes smartly
- Override styles with custom CSS
- Use Sass variables (in advanced setups)

---

### 6. Difference between container and container-fluid?

| container         | container-fluid         |
|-------------------|------------------------|
| Fixed width       | Full-width (100%)       |
| Changes at breakpoints | Always takes full width |

---

### 7. What are Bootstrap cards?
Cards are flexible containers with image, title, text, and buttons—used for blog posts, user profiles, etc.

**Example:**
```html
<div class="card">
    <img src="..." class="card-img-top" />
    <div class="card-body">
        <h5 class="card-title">Title</h5>
        <p class="card-text">Description</p>
    </div>
</div>
```

---

### 8. How to make responsive navigation?
Use Bootstrap’s navbar component with classes like:
- `navbar-expand-lg` – collapses on smaller screens
- `navbar-toggler` – hamburger menu
- `collapse navbar-collapse` – hides/shows links on toggle

---

### 9. What is a CDN?
A Content Delivery Network is a global network of servers that deliver files quickly. Bootstrap CDN allows linking its CSS/JS directly via URL without downloading.

---

### 10. How to override Bootstrap styles?
- Write custom CSS after Bootstrap link.
- Use `!important` for higher specificity.
- Use more specific selectors.

---

## 🎯 Extended Bootstrap Interview Questions

### 11. What are Bootstrap breakpoints and how are they used?
Breakpoints are predefined screen widths (`sm`, `md`, `lg`, `xl`, `xxl`) used to apply responsive classes and layouts.

---

### 12. Explain the difference between d-none, d-block, d-md-none, etc.
These are display utility classes used to show or hide elements based on screen size.  
**Example:** `d-none d-md-block` hides on small screens, shows on medium+.

---

### 13. What are some key differences between Bootstrap 4 and 5?
- Bootstrap 5 removed jQuery dependency
- Introduced new utility API
- Dropped IE 10/11 support
- Added RTL support
- Enhanced grid system with gutter utilities

---

### 14. How do you use icons in Bootstrap?
Bootstrap doesn’t include icons by default in v5. Use external libraries like:
- Font Awesome
- Bootstrap Icons

---

### 15. What is the role of row and col in Bootstrap?
- `row` creates a horizontal group of columns and clears floats.
- `col` defines column widths and handles content layout.

---

### 16. How do you center content horizontally and vertically using Bootstrap?
- **Horizontally:** `mx-auto`, `text-center`
- **Vertically:** `d-flex align-items-center justify-content-center` with height defined

---

### 17. What are Bootstrap’s helper classes for spacing and alignment?
- **Margin:** `m-3`, `mt-2`, `mb-1`
- **Padding:** `p-4`, `px-2`, `py-3`
- **Alignment:** `text-center`, `float-end`, `align-items-center`

---

### 18. What are Bootstrap modals and how are they triggered?
Modals are overlay popups created using modal classes.  
Trigger with `data-bs-toggle="modal"` and `data-bs-target="#modalID"`.

---

### 19. How do you add a carousel in Bootstrap?
Use the carousel component. It includes images/slides with controls and indicators. Requires Bootstrap’s JS bundle.

---

### 20. How can you use tooltips and popovers in Bootstrap 5?
You must initialize them with JavaScript:
```js
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
tooltipTriggerList.forEach(t => new bootstrap.Tooltip(t))
```

---

### 21. What is the Bootstrap utility API?
Introduced in v5 – allows you to generate custom utility classes via Sass. Useful for custom design systems.

---

### 22. How to disable a button using Bootstrap?
Use `disabled` attribute or `.disabled` class for links.

---

### 23. How do you add responsiveness to images using Bootstrap?
Add the class `img-fluid` to images to make them scale with the parent container.

---

### 24. Can Bootstrap work with React/Vue/Angular frameworks?
Yes! You can use Bootstrap with any front-end framework. There are also component libraries like:
- React Bootstrap
- NgBootstrap
- BootstrapVue

---

### 25. What is a jumbotron and why is it deprecated?
A jumbotron was a large header section in Bootstrap 4. In Bootstrap 5, it was removed; you can recreate it using utility classes and containers.

---

## ✅ Tip for Interviews

- Practice building layouts live (e.g., navbar + cards + footer).
- Be ready to explain why you used a class or layout.
- Mention your experience using CDN vs downloaded Bootstrap, and using custom overrides.
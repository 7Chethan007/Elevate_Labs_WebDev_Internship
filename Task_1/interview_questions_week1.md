# Interview Questions Week 1

## 1. What is semantic HTML?

Semantic HTML refers to the use of HTML tags that have meaningful names and clearly describe their purpose and content. Examples include `<header>`, `<footer>`, `<article>`, and `<section>`. These tags improve accessibility, SEO, and code readability.

---

## 2. How does CSS Flexbox differ from Grid?

Flexbox is a one-dimensional layout system used for aligning items either horizontally or vertically. Grid, on the other hand, is a two-dimensional layout system that allows for control over both rows and columns. Flexbox is ideal for simpler layouts, while Grid is better suited for complex designs.

---

## 3. What are media queries?

Media queries are CSS rules that apply styles based on the characteristics of the user's device, such as screen width, height, orientation, or resolution. They are commonly used to create responsive designs. Example:

```css
@media (max-width: 768px) {
  body {
    background-color: lightblue;
  }
}
```

---

## 4. How do you make a website responsive?

To make a website responsive:

- Use flexible layouts with percentages or relative units like `em` or `rem`.
- Implement media queries to adapt styles for different screen sizes.
- Utilize responsive images and videos with attributes like `max-width: 100%`.
- Leverage CSS frameworks like Bootstrap or Tailwind CSS.

---

## 5. Explain the box model.

The box model describes how HTML elements are structured in terms of space. It consists of:

- **Content**: The actual content inside the element.
- **Padding**: Space between the content and the border.
- **Border**: The edge surrounding the padding.
- **Margin**: Space outside the border, separating the element from others.

---

## 6. What is the difference between classes and IDs in CSS?

- **Classes**: Used to style multiple elements and are defined with a `.` (dot). Example: `.button { color: red; }`.
- **IDs**: Used to style a single, unique element and are defined with a `#` (hash). Example: `#header { font-size: 20px; }`.  
  IDs have higher specificity than classes.

---

## 7. How can you optimize CSS for performance?

- Minify CSS files to reduce file size.
- Combine multiple CSS files into one to reduce HTTP requests.
- Use shorthand properties to simplify code.
- Avoid inline styles and redundant selectors.
- Use a CSS preprocessor like Sass for better organization.
- Implement lazy loading for non-critical styles.

---

## 8. What is the difference between relative and absolute positioning?

- **Relative**: Positions an element relative to its normal position. Example:
  ```css
  position: relative;
  top: 10px; /* Moves the element 10px down from its original position */
  ```
- **Absolute**: Positions an element relative to its nearest positioned ancestor or the viewport if no ancestor is positioned. Example:
  ```css
  position: absolute;
  top: 10px; /* Moves the element 10px down from the ancestor */
  ```

---

## 9. How does the z-index property work?

The `z-index` property controls the stacking order of elements. Elements with higher `z-index` values appear above those with lower values. Example:

```css
div {
  position: absolute;
  z-index: 10; /* This element will appear above elements with lower z-index values */
}
```

---

## 10. What is the difference between padding and margin?

- **Padding**: Space between the content and the element's border.
- **Margin**: Space between the element's border and other elements.  
  Padding affects the internal spacing, while margin affects external spacing.

---

## Additional Questions

### 11. What is the difference between inline, block, and inline-block elements?

- **Inline**: Elements that do not start on a new line and only take up as much width as necessary (e.g., `<span>`).
- **Block**: Elements that start on a new line and take up the full width available (e.g., `<div>`).
- **Inline-block**: Combines characteristics of both; it behaves like an inline element but allows block-level styling.

### 12. What are pseudo-classes in CSS?

Pseudo-classes define the special state of an element. Example:

```css
a:hover {
  color: blue; /* Changes the link color when hovered */
}
```

### 13. What is the difference between `em` and `rem` units in CSS?

- **`em`**: Relative to the font size of its parent element.
- **`rem`**: Relative to the font size of the root element (`html`).

## Addition Topics

### Key Concepts: HTML5, CSS3, Flexbox, Grid, Media Queries, Responsive Design

#### HTML5

HTML5 is the latest version of the HyperText Markup Language, which is used to structure content on the web. It introduced new semantic elements like `<header>`, `<footer>`, `<article>`, and `<section>` to improve accessibility and SEO. HTML5 also supports multimedia elements like `<audio>` and `<video>` without requiring external plugins.

#### CSS3

CSS3 is the latest evolution of Cascading Style Sheets, enabling advanced styling and animations. It introduced features like transitions, transformations, and keyframes for animations, as well as new selectors and properties like `box-shadow` and `border-radius`. CSS3 enhances the visual appeal and interactivity of web pages.

#### Flexbox

Flexbox, short for Flexible Box Layout, is a CSS layout model designed for one-dimensional layouts. It simplifies the alignment and distribution of space among items in a container, even when their sizes are dynamic. Key properties include `justify-content`, `align-items`, and `flex-wrap`.

#### Grid

CSS Grid Layout is a powerful two-dimensional system for creating web layouts. It allows developers to design layouts by defining rows and columns explicitly. Grid provides precise control over placement and alignment, making it ideal for complex designs. Key properties include `grid-template-rows`, `grid-template-columns`, and `grid-gap`.

#### Media Queries

Media queries are CSS techniques used to apply styles based on device characteristics like screen width, height, orientation, or resolution. They are essential for responsive design, enabling websites to adapt to different devices. Example:

```css
@media (max-width: 768px) {
  body {
    background-color: lightblue;
  }
}
```

#### Responsive Design

Responsive design ensures that websites look and function well on all devices, from desktops to smartphones. It involves using flexible layouts, media queries, and responsive images. Techniques include:

- Using relative units like percentages, `em`, or `rem` for widths and font sizes.
- Implementing media queries to adjust styles for various screen sizes.
- Ensuring images and videos scale properly with attributes like `max-width: 100%`.
- Leveraging CSS frameworks like Bootstrap or Tailwind CSS for pre-built responsive components.

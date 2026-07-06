# CubMart - E-commerce Website Template

A modern, responsive e-commerce website template built with HTML, CSS, JavaScript, Bootstrap 5, and Bootstrap Icons.

## Features

- Fully responsive design
- Modern tech store UI
- Easy-to-customize text and icons
- Bootstrap Icons integration
- Product showcase sections
- Customer reviews
- Contact form
- Mobile-friendly navigation
- Smooth scrolling
- Organized and beginner-friendly code

---

## Folder Structure

```text
│
├── index.html
├── README.md
│
└── assets/
    ├── css/
    │   └── style.css
    │
    ├── js/
    │   ├── text.js
    │   └── icons.js
    │
    └── images/
        ├── logo.png
        ├── hero-image.png
        ├── product-1.png
        ├── product-2.png
        ├── product-3.png
        ├── product-4.png
        ├── product-5.png
        ├── product-6.png
        ├── product-7.png
        ├── product-8.png
        ├── product-9.png
        ├── client-1.jpg
        ├── client-2.jpg
        └── client-3.jpg
```

---

# Customization

## Change Text

Open:

```text
assets/js/text.js
```

- Find the `let` variable that contains the text you want to change.
- Replace only the text inside the quotation marks (`" "`).
- Do **not** change the variable names.
- Do **not** remove the quotation marks.

Example:

```javascript
let websiteName = "CubMart";
```

can become

```javascript
let websiteName = "TechZone";
```

---

## Change Icons

Open:

```text
assets/js/icons.js
```

- Visit the Bootstrap Icons website:
  https://icons.getbootstrap.com/
- Find the icon you want.
- Copy its class name (for example: `bi-laptop`).
- Replace the value of the corresponding variable.

Example:

```javascript
let heroFeatureIcon1 = "bi-shield-check";
```

can become

```javascript
let heroFeatureIcon1 = "bi-lock";
```

Keep the format exactly as:

```text
bi-icon-name
```

---

## Change Images

Replace the images inside:

```text
assets/images
```

### Important

- Keep the same filenames.
- Filenames are case-sensitive.
- Keep the same file extension whenever possible.
- Use images close to the recommended aspect ratios below for the best appearance.

|             Image             |        Recommended Aspect Ratio      |
|-------------------------------|--------------------------------------|
| logo.png                      |                 1:1                  |
| hero-image.jpg                |                 4:5                  |
| product-1.jpg – product-9.jpg |                 1:1                  |
| client-1.png – client-3.jpg   |                 1:1                  |

---

## Technologies

- HTML5
- CSS3
- JavaScript
- Bootstrap 5
- Bootstrap Icons

---

## Browser Support

Works on all modern browsers, including:

- Google Chrome
- Microsoft Edge
- Mozilla Firefox
- Safari

---

## License

Free to use for both personal and commercial projects.

No attribution is required, but it is appreciated.
# Login Form Project

A small, dependency-free login form built with plain HTML, CSS, and JavaScript.

## Project description

The form collects a **username** and **password** and validates that both fields are
filled in before submission. On success it shows a "Logging in…" status message.
Validation errors are announced to assistive technology via `role="alert"`, and
the layout is responsive and respects `prefers-reduced-motion`.

Files:

- `index.html` — markup for the login card and form.
- `style.css` — minimal styling (CSS variables, responsive card, focus states).
- `script.js` — client-side validation and success feedback.

## Usage

No build step or dependencies required.

1. Clone or download this repository.
2. Open `index.html` in any modern web browser (double-click it, or serve the
   folder with any static file server).
3. Enter a username and password, then click **Log in**.
   - Empty fields show an inline "… is required" error and block submission.
   - Once both fields are filled, a "Logging in…" message appears.

## Notes

- Validation is client-side only; there is no backend authentication wired up.
- To connect a real backend, replace the success branch in `script.js` with a
  request to your auth endpoint.
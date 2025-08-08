/**
 * The code below create HTML navigation bar.
 * It creates unordered list with various links to various pages.
 */
const navLinks = [
    { href: "index.html", text: "Home" },
    { href: "links.html", text: "Links" },
    { href: "glossary.html", text: "Glossary" },
    { href: "survey.html", text: "Survey" }
];

let newNavBar = '<ul>';
for (const link of navLinks) {
    newNavBar += `<li><a href="${link.href}">${link.text}</a></li>`;
}
newNavBar += '</ul>';

document.querySelector('nav').innerHTML = newNavBar;
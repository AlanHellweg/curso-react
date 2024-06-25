const tecnologias = ["HTML", "CSS", "JavaScript", "React.js", "Node.jS"];

const react = tecnologias[3];
// Destructuring array by position
const [html, css, nodejs] = tecnologias;
const [, , , reactjs] = tecnologias;

console.log(html, css, nodejs);
console.log(reactjs);

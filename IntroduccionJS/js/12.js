const tecnologias = [
  "HTML",
  "CSS",
  "JavaScript",
  "React.js",
  "Node.jS",
  "NestJs",
  "TypeScript",
  //
];

// for (let i = 0; i < tecnologias.length; i++) {
//   console.log(tecnologias[i]);
// }

// Foreach
tecnologias.forEach((tech) => {
  console.log(`Desde la funcion ${tech}`);
});

// map
const arrayMap = tecnologias.map((tech) => {
  return tech;
});

console.log(`arrayMap: ${arrayMap}`);

// for ... of
for(let tech of tecnologias) {
    console.log(`tech: ${tech}`);
}
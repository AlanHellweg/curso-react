//
const tecnologias = ["HTML", "CSS", "JavaScript", "React.js", "Node.jS"];
// tecnologias[4] = 'Nest.js'
// tecnologias[5] = 'Nest.js'
// tecnologias[10] = 'Nest.js'
tecnologias.push("Nest.js");

const nuevoArreglo = [...tecnologias, "Nest.js"];

// tecnologias.shift()

const tecnologias2 = tecnologias.filter(function (tech) {
  if (tech === "HTML") {
    return tech;
  }
});

const tecnologias3 = tecnologias.map(function (tech) {
  if(tech === 'Node.js'){
    return 'Nest.js'
  }else {
    return tech
  }
});

console.table(tecnologias);
console.table(tecnologias2);
console.table(tecnologias3);
console.table(nuevoArreglo);

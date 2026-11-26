const prix= prompt("Prix HT")
const tva=prompt("Prix TVA ?")
const article=prompt("Prix Article?")

const total=prix*article* (1+(tva/100))

console.log(total)
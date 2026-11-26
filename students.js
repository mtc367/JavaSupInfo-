const students = [
    {nom: "Jack", age: 19, note: 13,},
    {nom: "Theo", age: 79, note:5},
    {nom: "Matt", age: 19, note:20},]

    students.forEach(students => console.log(`${students.nom} ${students.note}`))

const bonEleve = students.filter(students=> students.note > 12)

console.log(bonEleve)

const noms=students.map(students=> students.nom)

console.log(noms)

const supinfoModule= [{nom : "1WEBD", professeur : "M.Benabou", students}]
console.log(supinfoModule)
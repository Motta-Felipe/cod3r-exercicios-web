const escola = "Cod3r"
console.log(escola.charAt(0))
console.log(escola.charAt(4))
console.log(escola.charAt(5))
console.log(escola.charCodeAt(0)) //codigo Unicode (HTML)

console.log(escola.indexOf('9'))
console.log(escola.substring(1))
console.log(escola.substring(0,3))

console.log("Escola ".concat(escola).concat("!"))
console.log("Escola " + escola + "!") //concatena igualmente ^
console.log(escola.replace(3, "e")) //substitua numero 3 por e
console.log(escola.replace(/\w/g,'e')) 

console.log("Ana,Maria,pedro, jao, felipe, deboram".split(",")) //gerou array


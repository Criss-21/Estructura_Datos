let expresion = "mangos"

switch (expresion) {
    case "mangos":
        console.log("los mangos x5 cuestan $1")
        break;
    case "naranja":
        console.log("las naranjas x10 cuestan $1")
        break;
    case "manzana":
        console.log("las manzanas x5 cuestan $1")
    default:
        console.log(`Lo siento no contamos con ${expresion}`)
        break;
}
console.log("quieres comprar algo adicional")
  
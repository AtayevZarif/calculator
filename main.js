let display = document.querySelector("h1")
let inner = document.getElementsByClassName("inner")
let clear = document.getElementById("clear")
let backspace = document.getElementById("backspace")
let equals = document.getElementById("equals")
display.style.fontSize = "40px"


for (const i of inner) {
    i.addEventListener("click", innerFunction = () =>{
        console.log("_______________________________________________");
        console.log("length: " + display.textContent.length);
        
        if (display.textContent.slice(-1) != "*"){
            if (display.textContent.slice(-1) != "/") {
                if (display.textContent.slice(-1) != "+") {
                    if (display.textContent.slice(-1) != "-") {
                        if (display.textContent.length != 25 && display.textContent.length > 19){
                            display.style.fontSize = Number(display.style.fontSize.slice(0, 2)) - 1 + "px"
                            console.log("font: " + display.style.fontSize)
                        }
                        else if (!(display.textContent.length >= 25) && display.textContent.length >= 13) {
                            display.style.fontSize = Number(display.style.fontSize.slice(0, 2)) - 2 + "px"
                            console.log("font: " + display.style.fontSize)
                        }
                    }
                }
            }
        }

        if (i.classList[2] == "action"){
            if (display.textContent.slice(-1) == "*" || display.textContent.slice(-1) == "/" || display.textContent.slice(-1) == "+" || display.textContent.slice(-1) == "-"){           
                display.innerHTML = display.textContent.slice(0, -1) + i.textContent
            }
            else if (display.textContent.length != 25){
                display.append(i.textContent)
            }
        }
        else if (display.textContent.length != 25){
            display.append(i.textContent)
        }
    })
}

let clearFunction = () => {
    display.innerHTML = ""
    display.style.fontSize = "40px"
}

clear.addEventListener("click", clearFunction)

let backspaceFunction = () => {
    display.innerHTML = display.textContent.slice(0, -1)
    if (Number(display.style.fontSize.slice(0, 2)) >= 32 && Number(display.style.fontSize.slice(0, 2)) < 40) {
        display.style.fontSize = Number(display.style.fontSize.slice(0, 2)) + 2 + "px"
    }
    else if (Number(display.style.fontSize.slice(0, 2)) < 32) {
        display.style.fontSize = Number(display.style.fontSize.slice(0, 2)) + 1 + "px"
    }
}

backspace.addEventListener("click", backspaceFunction)

let equalsFunction = () => {
    display.innerHTML = eval(display.textContent)
}

equals.addEventListener("click", equalsFunction)
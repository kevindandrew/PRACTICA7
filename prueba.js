const display = document.querySelector("#display")
const buttons = document.querySelectorAll(".boton")

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", escribir)
}
function escribir() {

    if (display.value ==="") {
        if (this.value === "0" || this.value === "1" || this.value === "2" || this.value === "3" || this.value === "4" || this.value === "5" || this.value === "6" || this.value === "7" || this.value === "8" || this.value === "9") {
            display.value = display.value + this.value
        }

    }
    else {
        if (this.value === "AC" || this.value === "X" || this.value === "=") {
            if (this.value === "AC") {
                display.value = ""
            }
            if (this.value === "X") {
                display.value = display.value.slice(0, -1)
            }
            if (this.value === "=") {
                display.value = eval(display.value);
            }
        } else {
            if (this.value === "+" || this.value === "-" || this.value === "*" || this.value === "/") {
                if (this.value === "+" && ((display.value).slice(-1) === "-" || (display.value).slice(-1) === "*" || (display.value).slice(-1) === "/" || (display.value).slice(-1) === "+")) {
                    display.value = display.value.slice(0,-1) + this.value
                }else{
                    if(this.value==="+"){
                        display.value=display.value+this.value
                    }
                }
                if (this.value === "*" && ((display.value).slice(-1) === "-" || (display.value).slice(-1) === "*" || (display.value).slice(-1) === "/" || (display.value).slice(-1) === "+")) {
                    display.value = display.value.slice(0,-1) + this.value
                }else{
                    if(this.value==="*"){
                        display.value=display.value+this.value
                    }
                }
                if (this.value === "/" && ((display.value).slice(-1) === "-" || (display.value).slice(-1) === "*" || (display.value).slice(-1) === "/" || (display.value).slice(-1) === "+")) {
                    display.value = display.value.slice(0,-1) + this.value
                }else{
                    if(this.value==="/"){
                        display.value=display.value+this.value
                    }
                }
                if (this.value === "-" && ((display.value).slice(-1) === "-" || (display.value).slice(-1) === "*" || (display.value).slice(-1) === "/" || (display.value).slice(-1) === "+")) {
                    display.value = display.value.slice(0,-1) + this.value
                }else{
                    if(this.value==="-"){
                        display.value=display.value+this.value
                    }
                }
            } else { display.value = display.value + this.value }
        }
    }
}
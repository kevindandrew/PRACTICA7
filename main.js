const botones = document.querySelectorAll(".btn")
const res = document.querySelector("#display")
let resultado = ""
for (let i = 0; i < botones.length; i++) {
    botones[i].addEventListener("click", buttonPressed)
}


function buttonPressed() {
    if (res.value === "") {
        if (this.value === "0" || this.value === "1" || this.value === "2" || this.value === "3" || this.value === "4" || this.value === "5" || this.value === "6" || this.value === "7" || this.value === "8" || this.value === "9") {
            res.value = res.value + this.value
        }
    } else {

            if(this.value==="AC"||this.value==="X"||this.value==="="){
                if(this.value==="AC"){
                    res.value="";
                }
                if(this.value==="X"){
                    res.value=(res.value).slice(0,-1);
                }
                if(this.value==="="){
                    res.value= eval(res.value);
                }
            }else{
                if ((this.value==="+"||this.value==="/"||this.value==="-"||this.value==="*")&&((res.value).slice(-1)==="+"||(res.value).slice(-1)==="-"||(res.value).slice(-1)==="*"||(res.value).slice(-1)==="/")) {
                    res.value=(res.value).slice(0,-1)+this.value
                }else{
                res.value= res.value + this.value}
            }


    }
}

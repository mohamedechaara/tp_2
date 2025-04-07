let input_many = document.querySelector('.amount-input')
let message =document.querySelector('.payment-p')
let input_per =document.getElementById('Person-input')
let Costume = document.querySelector('.custom-tip')
let button =  Array.from(document.querySelectorAll("#tip-option"))
let valeur = document.querySelector('.result-value')
let valeur2 = document.querySelector(".result-value_2")
var tt = 0

document.getElementById("reset").addEventListener("click",cliked)
input_many.addEventListener("input",function(){
    afficher(this.value)
    calculer()
})
input_per.addEventListener("input",function(){
    afficher(this.value)
    calculer()
})
Costume.addEventListener("input",function(){
})


button.forEach((e, i)=>{
    e.addEventListener("click",() =>{
        button.forEach((e2, i2) => {
            let frais = e.value
            calculer(frais)
            if (i2 == i) {
                e2.classList.add('elemet-clik')
                tt = Number(e2.getAttribute('data-num'))
                
            } else {
                e2.classList.remove("elemet-clik")
            }
            
        })
    })
    
})
Costume.addEventListener("input",FunctCostume)
function FunctCostume(){
    let costumevalue = Costume.value
    if (costumevalue){
            for(input of button){
                if(input.classList.contains("elemet-clik")){
                    input.classList.remove("elemet-clik")
                }
            }
        }
        
        calculer(costumevalue / 100)
}
function cliked(){
    input_many.value=""
    input_per.value =""
    Costume.value =""
    button.forEach((e2, i2) => {
        e2.classList.remove("elemet-clik")
    })
    document.getElementById("result").textContent ='0.00'
    document.querySelector(".result-value_2").textContent ='0.00'
    document.querySelector(".custom-tip")

}
function calculer(frais){
    let people = input_per.value
    let bill =input_many.value
    let fraisService = parseFloat(bill) * tt
    if(people!= 0){
        let resultat = bill / people
        if(frais){
            fraisService = (bill* frais)/people
            valeur.innerHTML =fraisService.toFixed(2)
        }

        let total = resultat + fraisService
        valeur2.innerHTML =total.toFixed(2)
        valeur.innerHTML = fraisService.toFixed(2)
    }
}
function afficher(){

    if(input_many.value && input_per.value ==0){
        document.getElementById("payment-p").style.display="block"
        input_per.style.border="1px solid red"
        input_per.style.outlineColor='red'
    }
    else {
        document.getElementById("payment-p").style.display="none"
        input_per.style.border="none"
        input_per.style.outlineColor ="hsl(183, 100%, 15%)"
    }
}
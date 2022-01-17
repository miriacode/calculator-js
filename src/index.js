document.addEventListener("DOMContentLoaded",() =>{
    const numberButtons =[...document.querySelectorAll("[data-button-number]")]
    const numberExtra =[...document.querySelectorAll("[data-button-extra]")]
    const numberOperator =[...document.querySelectorAll("[data-button-operator]")]


    //Event Listeners
    console.log(numberButtons)
    numberButtons.forEach(button => {
        button.addEventListener("click", () => {
        console.log(button.innerText)
        })
    })
    
    numberExtra.forEach(button=>{
        button.addEventListener("click",()=>{
            console.log(button.innerText)
        })
    })
    
    numberOperator.forEach(button=>{
        button.addEventListener("click",()=>{
            console.log(button.innerText)
        })
    })
})
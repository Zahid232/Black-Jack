
let sum=0
let Cards= []
let isAlive=false
let cardsEl=document.getElementById("cards")
let sumEl=document.getElementById("card-sum")
let messageEl=document.getElementById("message-el")
let hasblack=false


function lowd(){
    return Math.floor(Math.random() * 10)+2

}

function startGame(){
    isAlive=true
    let firstCard=lowd()
    let secondCard=lowd()
    Cards=[firstCard,secondCard]
    sum=firstCard+secondCard
    render()
}

function render(){
    cardsEl.textContent="Cards: "
    for (let i = 0; i < Cards.length; i++) {
        cardsEl.textContent += Cards[i] + " "
    }
    sumEl.innerText = "Sum: " + sum
    if (sum===21){
        messageEl.innerText="You habe got BLACKJACK!"
        hasblack=true
    }else if (sum<=20){
        messageEl.innerText="Do you want a new card?"
    }else{
        messageEl.innerText="You are out of the game!"
        isAlive=false
    }
}

function newCard(){
    if (isAlive===true && hasblack===false){
        let lyath=lowd()
        sum+=lyath
        Cards.push(lyath)
        render()
}
}






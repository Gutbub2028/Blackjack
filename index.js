
let firstnum = getrandomcard()
let secondnum = getrandomcard()
let cards = [firstnum, secondnum]
let num = firstnum + secondnum
let isAlive = true
let hasblackjack = false
let message = ""
let playername = "Abood"
let playerchips = 145
document.getElementById("player").innerText = playername + " " + playerchips
function getrandomcard(){
    let nu=Math.floor(Math.random()*13)+1
    if(nu===1){
        return 11
    }
    else if(10<nu){
        return 10
    }
    else{
        return nu
    }
}
function startgame(){

    if (num <= 20) {
        message = "Do you want to draw a new card"
    } else if (num === 21) {
        message = "wohoo you have got blackjack"
        hasblackjack = true
    } else {
        message = "you are out of the game"
        isAlive = false
    }

    document.getElementById("me").innerHTML = message
    document.getElementById("cards").innerHTML = "cards: " + cards.join(" ")
    document.getElementById("sum").innerHTML = "sum: " + num
}
function newcard(){
    if (isAlive === true && hasblackjack === false) {
        let thirdnum = getrandomcard()
        cards.push(thirdnum)
        num += thirdnum
        startgame()
    }
}

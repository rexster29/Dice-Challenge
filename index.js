
var generateTwoRandomNumbers = () => {
    var randomNumber1 = Math.floor(Math.random() * 7);
    console.log(randomNumber1);

    var randomNumber2 = Math.floor(Math.random() * 7);
    console.log(randomNumber2);

    var getPlayerOneElement = document.querySelector(".dice .img1");
    console.log(getPlayerOneElement);

    var getPlayerTwoElement = document.querySelector(".dice .img2");
    console.log(getPlayerTwoElement);

    switch (randomNumber1) {
        case 1:
            getPlayerOneElement.setAttribute("src", "images/dice1.png")
            console.log(1);
            break;
        case 2:
            getPlayerOneElement.setAttribute("src", "images/dice2.png")
            console.log(2);
            break;
        case 3:
            getPlayerOneElement.setAttribute("src", "images/dice3.png")
            console.log(3);
            break;
        case 4:
            getPlayerOneElement.setAttribute("src", "images/dice4.png")
            console.log(4);
            break;
        case 5:
            getPlayerOneElement.setAttribute("src", "images/dice5.png")
            console.log(5);
            break;
        case 6:
            getPlayerOneElement.setAttribute("src", "images/dice6.png")
            console.log(6);
            break;
            
    }
      
    switch (randomNumber2) {
        case 1:
            getPlayerTwoElement.setAttribute("src", "images/dice1.png")
            console.log(1);
            break;
        case 2:
            getPlayerTwoElement.setAttribute("src", "images/dice2.png")
            console.log(2);
            break;
        case 3:
            getPlayerTwoElement.setAttribute("src", "images/dice3.png")
            console.log(3);
            break;
        case 4:
            getPlayerTwoElement.setAttribute("src", "images/dice4.png")
            console.log(4);
            break;
        case 5:
            getPlayerTwoElement.setAttribute("src", "images/dice5.png")
            console.log(5);
            break;
        case 6:
            getPlayerTwoElement.setAttribute("src", "images/dice6.png")
            console.log(6);
            break;
    }
}





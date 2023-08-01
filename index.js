document.getElementById('random').addEventListener('click', () => {
    let number = document.getElementById('inumber').value;
    let res = document.querySelector("#res");
    let img = document.querySelector("img");
    let random = Math.floor(Math.random() * 6);
    while(true){
        if(number <= 0 || number > 6){
            alert(`Please enter a valid input between 1 to 6.`);
        } else{
            if(number == random){
                res.innerHTML = `Congratulations! You guess the number and win the game.`
                res.style.color = "rgb(93, 238, 93)";
                res.style.backgroundColor = 'rgb(13, 51, 13)';
                res.style.fontSize = '0.9rem'
                }
                else{
                    res.innerHTML = `Sorry! You lose, try again!`
                    res.style.color = 'red';
                    res.style.backgroundColor = 'darkred';
                }
                switch(random){
                    case random = 1:
                        img.src = "img/dice-six-faces-one.png";
                        break
                    case random = 2:
                        img.src = "img/dice-six-faces-two.png";
                        break
                    case random = 3:
                        img.src = "img/dice-six-faces-three.png";
                        break
                    case random = 4:
                        img.src = "img/dice-six-faces-four.png";
                        break
                    case random = 5:
                        img.src = "img/dice-six-faces-five.png";
                        break
                    case random = 6:
                        img.src = "img/dice-six-faces-six.png";
                        break
                    default:
                        console.log('Error');
                        break
                    }
        }
        
            break
        
    }
})

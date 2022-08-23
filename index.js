let screen = document.getElementById('screen');

buttons = document.querySelectorAll('button');
let screenValue= "";

for( item of buttons ){
    item.addEventListener('click' , (event)=>{
        buttonText = event.target.innerText; 

        if(buttonText == 'C'){
            screenValue = ""; 
            screen.value = screenValue; 
        }
        else if (buttonText == '='){
            screen.value = eval(screenValue); 
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue; 
        }
    })
}
    let screen =  document.querySelector('.screen');
    let buttons =  document.querySelectorAll('.row1');

    buttons.forEach(function(button){
        button.addEventListener('click',calculate)
    });

    function calculate(event){
        // displays the value in the box
        let clickbutton = event.target.value;
        if(clickbutton === '='){
            if(screen.value!=''){
                screen.value = eval(screen.value).toFixed(2);
            }
        }else if(clickbutton=='AC'){
            screen.value = ''
        }else if(clickbutton=='C'){
            let arr = screen.value;
            let l=arr.length;
            screen.value = arr.slice(0,l-1);
        }
        else{
            screen.value += clickbutton;
        }
    }

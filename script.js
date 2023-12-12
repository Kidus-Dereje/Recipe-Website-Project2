let input = document.querySelector('input');
let container = document.querySelectorAll('.container');
let foodList = document.querySelectorAll('.container h5');
let mainText = document.querySelector('main h2');
let section = document.querySelector('section');

input.addEventListener('keyup', ()=>{

    let textInput = input.value.toUpperCase();

    mainText.style.display = 'none';

    for(let i = 0; i < foodList.length ; i++){

        let food = foodList[i].textContent.toUpperCase();
        let foodContainer = container[i];

        if(food.indexOf(textInput) > -1){
            foodContainer.style.display = '';
            section.style.backgroundColor = 'transparent';
        }
        else{
            foodContainer.style.display = 'none';
        }
    }
})
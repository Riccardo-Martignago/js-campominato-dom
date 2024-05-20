const buttonEl = document.querySelector('button');
const gridEl = document.querySelector('section.griglia');

function getRandom (max, min){
    return Math.floor(Math.random() * ((max + 1)- min)) + min;
}

const bomb = []
let i = 0;
buttonEl.addEventListener('click',function (){
    for(let i = 0; i < 100; i++){
        const articleEl = document.createElement('article');
        articleEl.addEventListener('click', function(){
            for(let i = 0; i < bomb.length; i++){
                if(i !== bomb.indexOf(i)){
                    articleEl.classList.add('active')
                }
                else{
                    articleEl.classList.add('bomb')
                }
            }
            console.log(i+1)
        })
        gridEl.appendChild(articleEl);
        articleEl.append(i+1)
    }
    while(i < 16){
        let numberRand = getRandom(100, 1)
        if(numberRand != bomb.findIndex(numberRand)){
            bomb.push(numberRand);
            i++;
        }
    }
    console.log(bomb)
})
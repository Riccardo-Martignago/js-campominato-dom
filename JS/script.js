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
                if(!bomb.includes(i + 1)){
                    articleEl.classList.add('active')
                    console.log (bomb.includes(i))
                }
                else{
                    articleEl.classList.add('bomb')
                    console.log (bomb.includes(i))
                }
        })
        gridEl.appendChild(articleEl);
        articleEl.append(i+1)
    }
    while(i < 16){
        let numberRand = getRandom(100, 1)
        if(!bomb.includes(numberRand)){
            bomb.push(numberRand);
            i++;
        }
    }
    console.log(bomb)
})
const buttonEl = document.querySelector('button');
const gridEl = document.querySelector('section.griglia');
buttonEl.addEventListener('click',function (){
    for(let i = 0; i < 100; i++){
        const articleEl = document.createElement('article');
        articleEl.addEventListener('click', function(){
            articleEl.classList.add('active')
            console.log(i+1)
        })
        gridEl.appendChild(articleEl);
        articleEl.append(i+1)
    }
})
function getRandom (max, min){
    return Math.floor(Math.random() * ((max + 1)- min)) + min;
}
const bomb = []
let i = 0;
while(i < 16){
    let numberRand = getRandom(100, 1)
    if(numberRand == bomb.indexOf(numberRand)){
        i = i
    }
    else{
        bomb.push(numberRand);
        i++;
    }
}


console.log(bomb)

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
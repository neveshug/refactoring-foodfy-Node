const buttons = document.querySelector('.btn-toggle')
const content = document.querySelector('.content')

for(let [i,button] of buttons.entries()){
    button.addEventListener('click', () => {
        if(content[i].classList.contains("show")){
            content[i].classList.remove('show')
            content[i].classList.add('hidden')
            button.innerHTML= "MOSTRAR"
        } else {
            content[i].classList.add('show')
            content[i].classList.remove('hidden')
            button.innerHTML= "ESCONDER"
        }
    })  
} 
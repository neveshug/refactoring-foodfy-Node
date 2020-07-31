const cards = document.querySelectorAll('.card-only')


for (let card of cards){
    card.addEventListener("click", ()=>{
        const recipeId = card.getAttribute('id')
        window.location.href = `recipe-description?id=${recipeId}`
    })
}

import Modal from './modal.js'

const modal = Modal()

const checkButtons = document.querySelectorAll(".actions a")

console.log("botao clicado ")


checkButtons.forEach(button => {
    button.addEventListener("click", event => {
        console.log("botao clicado ")

        modal.open()
    })
})


const deleteButton = document.querySelectorAll(".actions a.delete")
import Modal from './modal.js'

const modal = Modal()

const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')


const checkButtons = document.querySelectorAll(".actions a.check")

const deleteButton = document.querySelectorAll(".actions a.delete")

checkButtons.forEach(button => {
    button.addEventListener("click", handleClick)
})

// quando o botao delete for clicado ele abre a modal

deleteButton.forEach(button => {
    button.addEventListener("click", (event) => handleClick(event, false))
})

function handleClick(event, check = true) {
    const text = check ? "Marcar como lida" : "Excluir"

    modalTitle.innerHTML = `${text} esta pergunta`
    modalDescription.innerHTML = check ? "Tem certeza que deseja marcar como lida esta pergunta" : "Tem certeza que deseja excluir esta pergunta"
    modal.open()
}
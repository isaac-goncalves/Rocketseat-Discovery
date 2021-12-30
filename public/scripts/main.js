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
    event.preventDefault()
    const text = check ? "Marcar como lida" : "Excluir"

    const form = document.querySelector('.modal form')

    const roomId = document.querySelector("#room-id").dataset.id


    form.setAttribute("action", `room/${roomId}/:question/:action`)


    modalTitle.innerHTML = `${text} esta pergunta`
    modalDescription.innerHTML = `Tem certeza que deseja ${text.toLocaleLowerCase()} esta pergunta`
    modalButton.innerHTML = `Sim, ${text.toLocaleLowerCase()}`
    check ? modalButton.classList.remove("red") : modalButton.classList.add("red")

    modal.open()
}
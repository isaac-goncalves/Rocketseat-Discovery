import { Modal } from './modal.js'

const modal = Modal()

const checkButtons = document.querySelectorAll(".actions a.check")

checkButtons.forEach(button => {
    button.eventlistener("click", event => {
        modal.open()
    })
})

modal.open()
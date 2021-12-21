module.exports = function Modal() {
    function open() {
        document.querySelector('.modal-wrapper').classList.add('active')
    }

    function close() {}
    return {
        open,
        close,
    };
}
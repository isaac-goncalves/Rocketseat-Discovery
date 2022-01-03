module.exports = {
    create(req, res) {
        let roomId = 1234

        res.redirect(`/room/${roomId}`)
    }
}
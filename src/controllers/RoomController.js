module.exports = {
    create(req, res) {

        var roomId = 123456

        res.redirect(`/room/${roomId}`)
    }
}
const Database = require("../db/config");


module.exports = {
  async create(req, res) {
    const db = await Database();
    const pass = req.body.password

    let roomId;

    for (var i = 0; i < 6; i++) {
      i == 0
        ? roomId = Math.floor(Math.random() * 10).toString()
        : roomId += Math.floor(Math.random() * 10).toString();
    }

    console.log(parseInt(roomId))

// veridicar se o numero ja existe


const roomsExistIds  =   await db.all(`SELECT id FROM rooms`)

roomsExistIds.map(roomsExistIds)

    // insere a sala no banco

    await db.run(`INSERT INTO rooms (
        id,
        pass
    )VALUES(
        ${parseInt(roomId)},
        "${pass}"
    )`)

    res.redirect(`/room/${roomId}`);
  }
};

const Database = require("../db/config");

module.exports = {
  async create(req, res) {
    const db = await Database();
    const pass = req.body.password;
    let roomId;
    let isRoom = true;

    while (isRoom) {
      // gera um numero aleatorio
      for (var i = 0; i < 6; i++) {
        i == 0
          ? (roomId = Math.floor(Math.random() * 10).toString())
          : (roomId += Math.floor(Math.random() * 10).toString());
      }

      console.log(parseInt(roomId));

      // veridicar se o numero ja existe

    await db.close
    const roomsExistIds = await db.all(`SELECT id FROM rooms`);
      isRoom = roomsExistIds.some(roomsExistIds => roomsExistIds === roomId);

      // insere a sala no banco se o numero for diferente
      if (!isRoom) {
        await db.run(`INSERT INTO rooms (
              id,
              pass
          )VALUES(
              ${parseInt(roomId)},
              "${pass}"
          )`);
      }
    }

    await db.close()

    res.redirect(`/room/${roomId}`);
  },
};

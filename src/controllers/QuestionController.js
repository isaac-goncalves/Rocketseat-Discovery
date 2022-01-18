const Database = require("../db/config");

module.exports = {
  index(req, res) {
    const roomId = req.params.room;
    const questionId = req.params.question;
    const action = req.params.action;
    const password = req.body.password;

    console.log(
      `room = ${roomId}, quest = ${questionId}, act = ${action}, pass = ${password}`
    );
  },

  async create(req, res) {
    const db = await Database();

    const question = req.body.question;
    const roomId = req.params.room;

    db.run(`INSERT INTO questions (
        title,
        room,
        read
        )VALUES(
            "${question}",
            ${roomId},
            0
    )`)
            res.redirect(`/room/${roomId}`)
  }

  // cont
  //  pegar o valor do body no req eu acho e então escrever no banco com o comando

  //  INSERT INTO ROOMS numero da room , id da sala e tals
};

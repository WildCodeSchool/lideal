const jwt = require("jsonwebtoken");
const tables = require("../tables");

function generateAccessToken(data) {
  return jwt.sign(data, process.env.APP_SECRET);
}

const getUsers = (_, res) => {
  tables.customers
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const postLogin = (req, res) => {
  tables.customers.login(req.body).then((user) => {
    if (user) {
      const token = generateAccessToken({ id: user.id });
      res.send({ token });
    } else {
      res.status(401).send({ error: "Identifiant incorrect!!!" });
    }
  });
};

const postUser = (req, res) => {
  tables.customers
    .create(req.body)
    .then(([rows]) => {
      res.send({
        id: rows.insertId,
        email: req.body.email,
      });
    })
    .catch((err) => {
      console.error(err);
      res.status(422).send({ error: err.message });
    });
  // res.status(418).send(req.body)
};

const getProfile = (req, res) => {
  res.send(req.user);
};

const getUser = async (req, res) => {
  const id = +req.params.id;
  try {
    const [result] = await tables.user.find(id);
    if (!result.length) {
      return res.status(404).send({ error: "User not found" });
    }
    return res.send(result[0]);
  } catch (error) {
    return res.status(422).send({ error: error.message });
  }
};

module.exports = {
  getUsers,
  postUser,
  postLogin,
  getProfile,
  getUser,
};

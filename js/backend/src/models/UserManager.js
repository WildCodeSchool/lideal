const bcrypt = require("bcrypt");
const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "customers" });
  }

  create(user) {
    return UserManager.hashPassword(user.password).then(async (hash) => {
      const [rows] = await this.database.query(
        `INSERT INTO ${this.table} (firstname, lastname, address, city, country, phone, email, password) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          user.firstname,
          user.lastname,
          user.address,
          user.city,
          user.country,
          user.phone,
          user.email,
          hash,
        ]
      );
      return rows;
    });
  }

  async login(user) {
    const { email, password } = user;
    const [rows] = await this.database.query(
      `SELECT * FROM customers WHERE email LIKE ?`,
      [email]
    );

    if (!rows.length) {
      return undefined;
    }

    const dbUser = rows[0];

    const result = await bcrypt.compare(password, dbUser.password);
    // console.log(result);

    return result ? dbUser : undefined;
  }
  // update(user) {
  //   return this.database.query(
  //     `update ${this.table} set email = ?, password = ? where id = ?`,
  //     [user.email, user.password, user.isAdmin, user.id]
  //   );
  // }

  getProfile(id) {
    return this.database.query(
      `SELECT id, email FROM ${this.table} WHERE id = ?`,
      [id]
    );
  }

  // addAvatar(userId, avatarId) {
  //   return this.database.query(
  //     `UPDATE ${this.table} SET avatar = ? WHERE id = ?`,
  //     [avatarId, userId]
  //   );
  // }

  static hashPassword(password, workFactor = 5) {
    return bcrypt.hash(password, workFactor);
  }
}

module.exports = UserManager;

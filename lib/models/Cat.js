const pool = require('../utils/pool');

module.exports = class Cat {
  id;
  name;
  type;
  url;
  year;
  lives;
  isSidekick;

  constructor(row){
    this.id = row.id;
    this.name = row.name;
    this.type = row.type;
    this.url = row.url;
    this.year = row.year;
    this.lives = row.lives;
    this.isSidekick = row.isSidekick;
  }

  static async getAll(){
    const { rows } = await pool.query('SELECT * from cats');
    return rows.map(row => new Cat(row));
  }
};

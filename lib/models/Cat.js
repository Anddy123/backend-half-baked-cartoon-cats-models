const pool = require('../utils/pool');

module.exports = class Cat {
  id;
  name;
  type;
  url;
  year;
  lives;
  issidekick;

  constructor(row){
    this.id = row.id;
    this.name = row.name;
    this.type = row.type;
    this.url = row.url;
    this.year = row.year;
    this.lives = row.lives;
    this.issidekick = row.issidekick;
  }

  static async getAll(){
    const { rows } = await pool.query('SELECT * from cats');
    console.log(rows, 'hio from model');
    return rows.map(row => new Cat(row));
  }
};

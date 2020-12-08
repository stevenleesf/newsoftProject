const sql = require("./db.js");

// constructor
const Information = function(info) {
  this.id = info.id;
  this.email = info.email;
  this.hp = info.hp;
  this.name = info.name;
  this.password = info.password;
  this.gender = info.gender;
  
  

};

Information.create = (newCustomer, result) => {
  sql.query("INSERT INTO information SET ?", newCustomer, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created info: ", { id: res.insertId, ...newCustomer });
    result({Customer: { id: res.insertId, ...newCustomer }});
  });
};

Information.findByHp = (hp, result) => {
  sql.query(`SELECT code, email, hp, name FROM information  WHERE hp = ${hp}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("Customer: Customer Found" );
      console.log("Customer: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Customer with the id
    result({ kind: "not_found" }, null);
  });
};

Information.getAll = result => {
  sql.query("SELECT code, email, hp, name FROM information ", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("information List: ", res);
    result(null, res);
  });
};

Information.updateById = (id, info, result) => {
  sql.query(
    `UPDATE information SET  name = ? WHERE id = ${id}`,
    [info.name, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Customer with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated info id: ", { id: id, ...info });
      result(null, { id: id, ...info });
    }
  );
};

Information.remove = (id, result) => {
  sql.query(`DELETE FROM information WHERE id = ${id}`, id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Customer with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("Successfully Deleted id: ", id);
    result(null, res);
  });
};



module.exports = Information;
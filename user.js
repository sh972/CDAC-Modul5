const mysql = require("mysql");
const Promise = require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo = {
host : "localhost",
user : "root",
password : "cdac",
database : 'practice1'
};

const selectUser = async() => {
    const Connection = mysql.createConnection(dbinfo);
    await Connection.connectAsync();
    let sql = `select * from user `;
    const list = await Connection.queryAsync(sql);
    await Connection.endAsync();
    return list;
};
const addUser = async(user) =>{
    const Connection = mysql.createConnection(dbinfo);
    await Connection.connectAsync();
    let sql = `insert into user values (?,?)`;
    await Connection.queryAsync(sql,[user.username,user.password]);
    await Connection.endAsync();
};

module.exports = {selectUser,addUser};


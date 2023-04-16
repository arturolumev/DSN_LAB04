const mariadb = require('mariadb');

// PORT 3307
// PASSWORD: 12345678

const pool = mariadb.createPool({
    host: '127.0.0.1',
    port: '3307',
    user: 'root',
    password: '12345678',
    database: 'lab04'
})

async function getConnection() {
    try {
        const connection = await pool.getConnection();
        return connection;
    } catch (error) {
        console.log(error);
    }
}

module.exports = {getConnection};

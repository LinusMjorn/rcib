const pg = require('pg')

const config = {
    database: 'insurance'
}
result = 0
const pool = new pg.Pool(config);pool.connect((err, client, done) => {
    if (err) throw err;
    client.query('SELECT totalfromstart FROM  january', (err, res) => {
        result1= []
        if (err)
            console.log(err.stack);
        else {
            console.log(res.rows);
        }
        
        result = res.rows;
        result = (result[0]["totalfromstart"])
        return result;
        pool.end()
        


        
    })
    
})




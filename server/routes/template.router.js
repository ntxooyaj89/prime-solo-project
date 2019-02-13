const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */

 // this get each family name out from the database.
router.get('/:id', (req, res) => {
    if(req.isAuthenticated()){
        console.log('req.user', req.user);
        pool.query(`SELECT * FROM "family" JOIN "members"
                    ON "members"."family_id" = family."id"
                    WHERE family."id" = $1;`,[req.params.id] )
                    
        .then(result => {
            res.send(result.rows)
        }).catch(error => {
            console.log('this is error in router.get', error);
        });
    }else{
        res.sendStatus(403);
    }
    
});

// no longer need this 
// router.get('/chang', (req, res) => {
//     const queryText = `SELECT * FROM "family" JOIN "members"
//                         ON "members"."family_id" = family."id"
//                         WHERE family."id" = 2`;
//     pool.query(queryText)
//     .then(result => {
//         res.send(result.rows);
//     }).catch(error =>{
//         console.log('there is an error in get family', error);
//         res.sendStatus(500);
//     })
// })

router.delete('/:id', (req, res) => {
    console.log('this is delete', req.params);
    const queryText = 'DELETE FROM "members" WHERE id =$1';
    pool.query(queryText, [req.params.id])
    .then(()=> {res.sendStatus(200); })
    .catch((err) => {
        console.log('there is an error in delete member', err);
        res.sendStatus(500);
    });
});


/**
 * POST route template
 */
router.post('/', (req, res) => {

});

module.exports = router;

`SELECT * FROM "family" JOIN "members"
ON "members"."family_id" = family."id"; `

    // `SELECT * FROM "members";`
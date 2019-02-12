const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    if(req.isAuthenticated()){
        console.log('req.user', req.user);
        pool.query(`SELECT * FROM "family" JOIN "members"
                    ON "members"."family_id" = family."id"
                    WHERE family."id" = 1;`)
        .then(result => {
            res.send(result.rows)
        }).catch(error => {
            console.log('this is error in router.get', error);
        });
    }else{
        res.sendStatus(403);
    }
    
});

router.get('/family', (req, res) => {
    const queryText = `SELECT * FROM "family" JOIN "members"
                        ON "members"."family_id" = family."id"
                        WHERE family."id" = 2`;
    pool.query(queryText)
    .then(result => {
        res.send(result.rows);
    }).catch(error =>{
        console.log('there is an error in get family', error);
        res.sendStatus(500);
    })
})

/**
 * POST route template
 */
router.post('/', (req, res) => {

});

module.exports = router;

`SELECT * FROM "family" JOIN "members"
ON "members"."family_id" = family."id"; `

    // `SELECT * FROM "members";`
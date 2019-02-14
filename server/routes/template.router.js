const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */


// this get each family by id.
router.get('/:id', (req, res) => {

    // only need authentication on routes that are protected 
    // only allow person who is authenticated.

    if (req.isAuthenticated()) {
        console.log('req.user', req.user);
        // authorization 
        pool.query(`SELECT * FROM "family" JOIN "members"
                    ON "members"."family_id" = family."id"
                    WHERE family."id" = $1`, [req.params.id])

            .then(result => {
                res.send(result.rows)
            }).catch(error => {
                console.log('this is error in router.get', error);
                res.sendStatus(500);
            });
    } else {
        res.sendStatus(403);
    }

});

// get all the members of in the database
router.get('/member', (req, res) => {
    console.log('this is in get member')
    const queryText = 'SELECT * FROM "members"'; 
    pool.query(queryText)
    .then(result => {
        res.send(result.rows);
    }).catch(error => {
        console.log('there is an error in get member router')
        res.sendStatus(500);
    })
        

})


// just get the family name
router.get('/', (req, res) => {
    const queryText = 'SELECT * FROM family';
    pool.query(queryText)
        .then((result) => { res.send(result.rows); })
        .catch((err) => {
            console.log('Error completing SELECT family query', err);
            res.sendStatus(500);
        });
});


// delete the member
router.delete('/:id', (req, res) => {
    console.log('this is delete', req.params);
    const queryText = 'DELETE FROM "members" WHERE id =$1';
    pool.query(queryText, [req.params.id])
        .then(() => { res.sendStatus(200); })
        .catch((err) => {
            console.log('there is an error in delete member', err);
            res.sendStatus(500);
        });
});


/**
 * POST route template
 */
router.post('/', (req, res) => {

    console.log(req.body);
    const newMember = req.body;
    const queryText = `INSERT INTO "members" ("first_name", "last_name", "date_of_birth", "gender",
                       "description", "image", "family_id",)
                       VALUES ($1, $2, $3, $4, $5, $6, $7);`;
    const queryValues = [
        newMember.firstName,
        newMember.lastName,
        newMember.date_of_birth,
        newMember.gender,
        newMember.description,
        newMember.image,
        newMember.family_id

    ]
    pool.query(queryText, queryValues)
        .then(response => {
            res.sendStatus(201);
        }).catch(error => {
            console.log('there is error in newMember post');
            res.sendStatus(500);
        })


});

module.exports = router;

`SELECT * FROM "family" JOIN "members"
ON "members"."family_id" = family."id"; `

    // `SELECT * FROM "members";`
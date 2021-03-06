const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */


// this get each family by the family.id.
router.get('/:id', (req, res) => {
    
    // only need authentication on routes that are protected 
    // only allow person who is authenticated.

    if (req.isAuthenticated()) {
        console.log('req.user', req.user);
        pool.query(`SELECT * FROM "family" JOIN "members"
                    ON "members"."family_id" = family."id"
                    WHERE family."id" = $1 
                    ORDER BY "members"."id"`, [req.params.id])

            .then(result => {
                res.send(result.rows)
            }).catch(error => {
                console.log('this is error in get family router', error);
                res.sendStatus(500);
            });
    } else {
        res.sendStatus(403);
    }

});


// this gets the member's family when the user clicked on.
router.get('/member-family/:id', (req, res) => {
    const queryText = `SELECT * FROM "members" JOIN "family_member"
                       ON "members"."id" = "family_member"."member_id"
                       WHERE "family_member"."family_id" IN (SELECT DISTINCT fm."family_id" FROM "family_member" as fm 
                       JOIN "members" as m ON m."id" = fm."member_id" WHERE m."id" = $1) AND "members"."id" != $1;`;
    pool.query(queryText, [req.params.id]  )
    .then(result => {
        res.send(result.rows);
    }).catch(error => {
        console.log('there is error in get member family router', error);
        res.sendStatus(500);
    })

})


router.get('/family/:id', (req, res) => {
    console.log('this is in router get member detail', req.params);
    
    // gets the detail of the member clicked on.

    const queryText = `SELECT * FROM "family_member" JOIN "members"
                       ON "members"."id" = "family_member"."member_id"
                       JOIN "family" ON "family"."id" = "family_member"."family_id"
                       WHERE members."id" = $1 
                       ORDER BY "family"."id";`;
    pool.query(queryText, [req.params.id])   
    .then(result => {
        res.send(result.rows);
    }).catch(error => {
        console.log('there is errror in get member detail', error)
        res.sendStatus(500);
    })                
})


//get all the members of in the database
router.get('/family-name/:id', (req, res) => {
    console.log('this is in get member')
    const queryText = 'SELECT * FROM family'; 
    pool.query(queryText)
    .then(result => {
        res.send(result.rows);
    }).catch(error => {
        console.log('there is an error in get member router', error)
        res.sendStatus(500);
    })
        

})


// this get the user's family
router.get('/', (req, res) => {
    if(req.isAuthenticated()){
    console.log('this is get user family routes', req.user);
    const queryText = `SELECT * FROM "person" 
                       JOIN "person_family" ON "person"."id" = "person_family"."person_id"
                       JOIN "family" ON "family"."id" = "person_family"."family_id" 
                       WHERE person.id = $1;`;
    pool.query(queryText, [req.user.id])
        .then((result) => { 
            res.send(result.rows); 
        })
        .catch((err) => {
            console.log('Error completing SELECT family query', err);
            res.sendStatus(500);
        });
    }else{
        res.sendStatus(403);  
    }
    
});




// delete a member
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


router.put('/:id', (req, res) => {
    const queryText = `UPDATE members SET "have_we_met" = 'true' 
                       WHERE "id" = $1;`
    pool.query(queryText, [req.params.id])
    .then((result)=> {
        res.sendStatus(200);
    }).catch((error) => {
        console.log('there is error in put routes', error);

    });                   
})


/**
 * POST route template
 */
// add a new member
router.post('/', (req, res) => {

    console.log(req.body);
    const newMember = req.body;
    const queryText = `INSERT INTO "members" ("first_name", "last_name", "date_of_birth", "gender",
                       "description", "image", "family_id")
                       VALUES ($1, $2, $3, $4, $5, $6, $7);`;
    const queryValues = [
        newMember.firstName,
        newMember.lastName,
        newMember.date_of_birth,
        newMember.gender,
        newMember.description,
        newMember.image,
        newMember.family_id
    ];
    pool.query(queryText, queryValues)
        .then(response => {
            res.sendStatus(201);
        }).catch(error => {
            console.log('there is error in new Member post');
            res.sendStatus(500);
        });
});

module.exports = router;


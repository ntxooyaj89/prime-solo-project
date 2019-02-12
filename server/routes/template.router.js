const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    if(req.isAuthenticated()){
        console.log('req.user', req.user);
        pool.query('SELECT * FROM members;')
        .then(result => {
            res.send(result.rows)
        }).catch(error => {
            console.log('this is error in router.get', error);
        });
    }else{
        res.sendStatus(403);
    }
    
});

/**
 * POST route template
 */
router.post('/', (req, res) => {

});

module.exports = router;
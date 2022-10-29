// Student ID: 301216721
// Name: Kin Man Tung
// Date: 28/10/2022

var express = require('express');
var router = express.Router();

let todoController = require('../controllers/todo');

// Helper function for guard purposes
function requireAuth(req, res, next)
{
    // check if the user is logged in
    
    // ADD YOUR CODE HERE
    // check if the user is logged in
    if(!req.isAuthenticated())
    {
        req.session.url = req.originalUrl;
        return res.redirect('/users/signin');
    }
    next();        

}

/* GET list of items */
router.get('/list', requireAuth, todoController.todoList);

// Route for Details
router.get('/details/:id', requireAuth, todoController.details);

// Routers for edit
router.get('/edit/:id', requireAuth, todoController.displayEditPage);
router.post('/edit/:id', requireAuth, todoController.processEditPage);

// Delete
router.get('/delete/:id', requireAuth, todoController.performDelete);

/* GET Route for displaying the Add page - CREATE Operation */
router.get('/add', requireAuth, todoController.displayAddPage);

/* POST Route for processing the Add page - CREATE Operation */
router.post('/add', requireAuth, todoController.processAddPage);

module.exports = router;
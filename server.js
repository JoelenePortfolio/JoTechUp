// Needed for dotenv
require("dotenv").config();

// Needed for Express
var express = require('express')
var app = express()

// Needed for EJS
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html');

// Needed for public directory
app.use(express.static(__dirname + '/public'));

// Needed for parsing form data
app.use(express.json());       
app.use(express.urlencoded({extended: true}));

// Needed for Prisma to connect to database
//const { PrismaClient } = require('@prisma/client')
//const prisma = new PrismaClient();

// Main landing page
app.get('/', async function(req, res) {

    // Try-Catch for any errors
    try {
        // Get all blog posts
        // const blogs = await prisma.post.findMany({
        //         orderBy: [
        //           {
        //             id: 'desc'
        //           }
        //         ]
        // });

        // Render the homepage with all the blog posts
        await res.render('./pages/About Me.html', ); //{ blogs: blogs }
      } catch (error) {
        res.render('./pages/About Me.html');
        console.log(error);
      } 
});

// Challenges page
app.get('/challenges', function(req, res) {
    res.render('./pages/Challenges.html');
});

// Home page
app.get('/Index', function(req, res) {
    res.render('./pages/Index.html');
});

// WealthUp page
app.get('/WealthUp', function(req, res) {
  res.render('./pages/WealthUp.html');
});

// Create a new post
app.post('/newchallenge', async function(req, res) {
    
    // Try-Catch for any errors
    try {
        // Get the title and content from submitted form
        const { title, description} = req.body;

        // Reload page if empty title or content
        if (!title || !description) {
            console.log("Unable to create new challenge");
            res.render('./Challenges.html');
        } else {
            // // Create post and store in database
            // const blog = await prisma.post.create({
            //     data: { title, content },
            // });

            // Redirect back to the homepage
            res.redirect('/Challenges');
        }
      } catch (error) {
        console.log(error);
        res.render('./Challenges.html');
      }

});

// Delete a post by id
app.post("/delete/:id", async (req, res) => {
    const { id } = req.params;
    
    try {
        // await prisma.post.delete({
        //     where: { id: parseInt(id) },
        // });
      
        // Redirect back to the homepage
        res.redirect('/');
    } catch (error) {
        console.log(error);
        res.redirect('/');
    }
  });

// Tells the app which port to run on
app.listen(5500);
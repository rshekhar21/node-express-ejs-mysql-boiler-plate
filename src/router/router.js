const log=console.log;
const express=require('express');
const router=express.Router();

module.exports=router;

// all routes start here with /app

router.get('/', (req, res) => {
  res.send('ok');
})

router.get('/page', (req, res) => res.render('index'))

router.get('/page/:url', (req, res) => res.render('src/'+req.params.url));

// router.get('/api',  )
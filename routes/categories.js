const router = require("express").Router();

router.get('/', (req, res) => {
  res.render('categories');
});

router.get('/add', (req, res) => {
  res.render('addCategory');
});

router.post('/create', (req, res) => {
  console.log(req.body);
})

module.exports = router;

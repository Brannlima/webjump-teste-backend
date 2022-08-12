const router = require("express").Router();

router.get('/', (req, res) => {
  res.render('products');
});

router.get('/add', (req, res) => {
  res.render('addProduct');
});

router.post('/create', (req, res) => {
  console.log(req.body);
})

module.exports = router;

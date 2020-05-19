const router = require('express').Router()
const db = require('../models')
router.use(require('express').static('static'))

router.get('/', (req, res) => {
  
})

router.post('/results', (req, res) => {
    
})

router.delete('/results/:id', (req, res)=> {
   
})

module.exports = router
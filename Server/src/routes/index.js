const {validateForm} = require('../controllers/login')
const {getCharById} = require('../controllers/getCharById')
const {deleteFav, postFav } = require('../controllers/handleFavorites')

const router = require('express').Router()

router.get('/character/:id', getCharById)
router.get('/login', validateForm)
router.post('/fav', postFav)
router.delete('/fav/:id', deleteFav)



module.exports= router;



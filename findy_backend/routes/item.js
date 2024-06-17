const express = require('express')
const {
  createItemPost,
  getAllItemPosts,
  getItemPost,
  deleteItemPost,
  updateItemPost, 
  getAllUserPosts
} = require('../controllers/itemController')
const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

// require auth for all item routes
// router.use(requireAuth)



// GET all items  
router.get('/', getAllItemPosts)

// GET all items for a particular user
router.get('/user', getAllUserPosts)

//GET a single item
router.get('/:id', getItemPost)

// POST a new item
router.post('/', createItemPost)

// DELETE a item
router.delete('/:id', deleteItemPost)

// UPDATE a item
router.patch('/:id', updateItemPost)


module.exports = router
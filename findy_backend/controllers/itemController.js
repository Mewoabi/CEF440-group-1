const Item = require('../models/itemModel')
const mongoose = require('mongoose')



//get all items 
const getAllItemPosts = async (req, res) => {
  try {
    const items = await Item.find().sort({ createdAt: -1 })
    res.status(200).json(items)
  } catch (error) {
    res.status(400).json({ error: error.message })
    console.log(error.message)
  }
}
// get all items for a particular user 
const getAllUserPosts = async (req, res) => {
  const user_id = req.user._id
  try {
    const items = await Item.find({ reporter: user_id }).sort({ createdAt: -1 })
    res.status(200).json(items)
  } catch (error) {
    res.status(400).json({ error: error.message })
    console.log(error.message)
  }
}

// get a single item
const getItemPost = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such item' })
  }

  try {
    const item = await Item.findById(id)

    if (!item) {
      return res.status(404).json({ error: 'No such item' })
    }

    res.status(200).json(item)
  } catch (error) {
    res.status(400).json({ error: error.message })
    console.log(error.message)
  }
}


// create new item
const createItemPost = async (req, res) => {
  const { title, name, description, additionalInfo, category, location, reporter, type, imageUrl } = req.body
  let userId
  if (req.user && req.user._id) {
    userId = req.user._id
  } else {
    userId = reporter;
  }

  let emptyFields = []

  if (!title) {
    emptyFields.push('title')
  }
  if (!name) {
    emptyFields.push('name')
  }
  if (!description) {
    emptyFields.push('description')
  }
  if (!category) {
    emptyFields.push('category')
  }
  if (!location) {
    emptyFields.push('location')
  }
  if (!imageUrl) {
    emptyFields.push('imageUrl')
  }
  if (emptyFields.length > 0) {
    return res.status(400).json({ error: 'Please fill in all the fields', emptyFields })
  }

  // add doc to db
  try {
    const item = await Item.create({ title, name, description, additionalInfo, category, location, reporter: userId, type, status: 'unreturned', imageUrl })
    res.status(200).json(item)
  } catch (error) {
    res.status(400).json({ error: error.message })
    console.log(error.message)
  }
}

// delete a item
const deleteItemPost = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such item, Invalid mongo objectId' })
  }

  const item = await Item.findOneAndDelete({ _id: id })

  if (!item) {
    return res.status(400).json({ error: 'No such item' })
  }

  res.status(200).json(item)
}

// update a item
const updateItemPost = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such item' })
  }

  const item = await Item.findOneAndUpdate({ _id: id }, { ...req.body  }, {new: true, runValidators: true})

  if (!item) {
    return res.status(400).json({ error: 'No such item' })
  }

  res.status(200).json(item)
}


module.exports = {
  getAllUserPosts,
  getAllItemPosts,
  getItemPost,
  createItemPost,
  deleteItemPost,
  updateItemPost
}
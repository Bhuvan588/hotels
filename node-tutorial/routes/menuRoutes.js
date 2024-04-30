const express = require('express')
const router = express.Router()
const MenuItem = require('../models/MenuItem')


//FOR PRACTISING
// POST AND GET FOR MenuItem.js

router.post('/', async (req, res)=>{
    try {
        const data = req.body;

        const newItem = new MenuItem(data)

        const response = await newItem.save()

        console.log('menu item saved successfully')
        res.status(200).json(response)
    } catch (err) {
        console.log(err)
        res.status(500).json({error: 'Internal Server Error for menu item'})
    }
})


router.get('/',async (req, res)=>{
    try {
        const data = await MenuItem.find()
        console.log('get request for menu item successfull')
        res.status(200).json(data)

    } catch (err) {
        console.log(err)
        res.status(500).json({error: 'Internal Server Error for menu item'})
    }
})

module.exports = router;
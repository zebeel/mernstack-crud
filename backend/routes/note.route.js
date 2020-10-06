let express = require('express')
let router = express.Router()
let noteSchema = require('../models/Note')

// Create new note
router.route('/create-note').post((req, res, next) => {
    noteSchema.create(req.body, (error, data) => {
        if(error) {
            return next(error)
        } else {
            res.json(data)
            console.log('Note created')
        }
    })
})

// Read notes
router.route('/').get((req, res, next) => {
    noteSchema.find((error, data) => {
        if(error) {
            return next(error)
        } else {
            res.json(data)
            console.log('Read note list')
        }
    })
})

// Get one note
router.route('/edit-note/:id').get((req, res, next) => {
    noteSchema.findById(req.params.id, (error, data) => {
        if(error) {
            return next(error)
        } else {
            res.json(data)
            console.log('Edit note ' + req.params.id)
        }
    })
})

// Update note
router.route('/update-note/:id').put((req, res, next) => {
    noteSchema.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if(error) {
            return next(data)
        } else {
            res.json(data)
            console.log('Note updated ' + req.params.id)
        }
    })
})

// Delete note
router.route('/delete-note/:id').delete((req, res, next) => {
    noteSchema.findByIdAndRemove(req.params.id, (error, data) => {
        if(error) {
            return next(error)
        } else {
            res.status(200).json({msg: data})
        }
    })
})

module.exports = router

const express = require('express');
const Playlist = require('../models/Playlist'); // Assuming you have a Playlist model

const router = express.Router();

// Route to get all playlists
router.get('/playlists', async (req, res) => {
    try {
        const playlists = await Playlist.find();
        res.json(playlists);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
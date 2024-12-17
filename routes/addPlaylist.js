const express = require('express');
const mongoose = require('mongoose');
const Playlist = require('../models/Playlist'); // Adjust the path as necessary

const router = express.Router();

router.post('/addPlaylist', async (req, res) => {
    const { name, songUrl } = req.body;

    if (!name || !songUrl) {
        return res.status(400).send('Name and song URL are required');
    }

    try {
        const newPlaylist = new Playlist({ name, songUrl });
        await newPlaylist.save();
        res.status(201).send('Playlist added successfully');
    } catch (error) {
        res.status(500).send('Error adding playlist: ' + error.message);
    }
});

module.exports = router;
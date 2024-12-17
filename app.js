const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Playlist = require('./models/playlist'); // Assuming you have a Playlist model defined

// MongoDB connection
const uri = "mongodb+srv://nouric576:QHpJa0kBxcPnuzq1@cluster0.e78xg.mongodb.net/Music-player?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB Atlas'))
.catch((err) => {
    console.error('Failed to connect to MongoDB Atlas', err);
});

// Middleware
app.use(bodyParser.json());  // Place the bodyParser middleware before route handling

// Import routes
const addPlaylist = require('./routes/addPlaylist');
const showPlaylist = require('./routes/showPlaylist');

app.use('/api', addPlaylist);  // Register addPlaylist route

// Root route to show all playlists
app.get('/', async (req, res) => {
    showPlaylist(req, res);
});

module.exports = app;

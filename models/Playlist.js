const mongoose = require('mongoose');

const playlistSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    songUrl: {
        type: String,
        required: true
    }
});

// Avoid overwriting the model if it's already compiled
const Playlist = mongoose.models.Playlist || mongoose.model('Playlist', playlistSchema);

module.exports = Playlist;

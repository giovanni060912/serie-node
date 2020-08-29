const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://dansilveira:75049566@cluster0-3iecn.mongodb.net/test?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.Promise = global.Promise;

module.exports = mongoose;
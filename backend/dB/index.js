const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://krishna:sivam123@cluster0.czukufp.mongodb.net/')
.then(() => {
    console.log("DB connected")
})
.catch(err => {
    console.log(err)
})

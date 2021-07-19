const mongoose = require('mongoose');
const ListSchema = new mongoose.Schema({

    desc:{
        type:String,
        required: true
    },
    due_date_list:{
        type:String,
        required: true
    },
    category_list:{
        type:String,
        require: true
    }

});

const List = mongoose.model('List', ListSchema);
module.exports = List;
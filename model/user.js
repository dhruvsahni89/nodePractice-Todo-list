var mongoose = require('mongoose');
const schema=mongoose.Schema;

const listschema=new schema({
    name:String
});
module.exports = List= mongoose.model('List',listschema);

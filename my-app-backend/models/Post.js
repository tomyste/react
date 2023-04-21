const {Schema, model} = require('mongoose');


const PostSchema = Schema({
   txt: {
    type: String,
    required: true,

   },

   date: {
        type: Date,
        required: true
    },

   user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
   },

});

PostSchema.method('toJSON', function(){
   const {__v, _id, ...object} = this.toObject();
   object.id= _id;
   return object;
})


module.exports = model('Post', PostSchema);
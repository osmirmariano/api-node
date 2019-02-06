const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
const ProdutSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

ProdutSchema.plugin(mongoosePaginate);
mongoose.model('Product', ProdutSchema);
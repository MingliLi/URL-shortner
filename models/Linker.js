var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    autoIncrement = require('mongoose-auto-increment');

var connection = mongoose.createConnection("mongodb://localhost/linker");

autoIncrement.initialize(connection);

var LinkerSchema = new Schema({
  itemId: { type: Number, ref: 'Linker' },
  url: String,
  updated_at: { type: Date, default: Date.now },
});

LinkerSchema.plugin(autoIncrement.plugin, {
    model: 'Linker',
    field: 'itemId',
    startAt: 20160723,
    incrementBy: 1
});

var Linker = connection.model('Linker', LinkerSchema),
    linker = new Linker();

module.exports = mongoose.model('Linker', LinkerSchema);
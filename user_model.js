var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const geneSchema = new Schema({
  Sl_no: Number,
  Info: String,
  NucleotideSeq : String,
  Size: Number,
  per: Number,
  ProteinSeq: String,
  Remark: String
});
module.exports = mongoose.model('genes', geneSchema);

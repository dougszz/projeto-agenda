const mongoose = require('mongoose');

const HomeSchema = new mongoose.HomeSchema({
  titulo: { type: String, required: true },
  descricao: String
});

const HomeModel = mongoose.model('Home', HomeSchema);

class Home {

}

module.exports = Home;
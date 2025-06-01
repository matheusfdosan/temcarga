const mongoose = require("mongoose")

const MotoristaScheema = new mongoose.Schema({
  name: {
    type: String,
    required: false,
  },
  cpf: {
    type: String,
    required: false,
  },
  adress: {
    type: String,
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  _id: {
    type: String,
    required: false,
  },
  limitecaminhao: {
    type: Number,
    required: false,
  },
  tipocarroceria: {
    type: String,
    required: false,
  },
  telefone: {
    type: String,
    required: true,
  },
  // localizacao: {
  //   lat: {
  //     type: Number,
  //     required: false,
  //   },
  //   lon: {
  //     type: Number,
  //     required: false,
  //   },
  // },
})

module.exports = mongoose.model("motoristas", MotoristaScheema)

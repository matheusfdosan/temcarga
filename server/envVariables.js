const { config } = require("dotenv")

config({ path: "./src/configs/.env" })

const PGHOST = process.env.PGHOST
const PGDATABASE = process.env.PGDATABASE
const PGUSER = process.env.PGUSER
const PGPASSWORD = process.env.PGPASSWORD
const JWT_SECRET = process.env.JWT_SECRET
const MONGODB_URI = process.env.MONGODB_URI
const PORT = process.env.PORT

module.exports = {
  JWT_SECRET,
  PORT,
  PGHOST,
  PGDATABASE,
  PGUSER,
  PGPASSWORD,
  MONGODB_URI,
}

const postgres = require("postgres")
const {
  PGHOST,
  PGDATABASE,
  PGUSER,
  PGPASSWORD,
} = require("../../envVariables.js")

const URL = `postgresql://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}?sslmode=require`
const sql = postgres(URL)

module.exports = sql


const DB_USER = process.env.DB_USER || "postgres";
const DB_PASSWORD = process.env.DB_PASSWORD || "estefy";
const DB_HOST = process.env.DB_HOST || "localhost";
const DB_NAME = process.env.DB_NAME || "countries";
const DB_PORT = process.env.DB_PORT || 5432;
const DB_URL = process.env.DB_URL || `postgres://${DB_USER}:${DB_PASSWORD}@${DB_PORT}:${DB_HOST}/${DB_NAME}`

module.exports = DB_URL;
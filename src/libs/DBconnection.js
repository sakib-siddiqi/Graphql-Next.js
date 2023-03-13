const { connect } = require("mongoose");
const isProduction = process.env.NODE_ENV === "production";

const DB_URI = process.env.DB_URI;
export default function (options) {
  options ??= {};
  console.log(DB_URI);
  return connect(DB_URI, options);
}

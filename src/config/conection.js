import mongoose from "mongoose";

async function DBconec () {
  mongoose.connect(process.env.DB_CONNECTION_STRING);

  return mongoose.connection;
}

export default DBconec;
import mongoose from "mongoose";
// const mongoose=require('mongoose');
let alreadyDone = false;

export  async function connectToDatabase(){
    if (alreadyDone) {
        return;
    }
    alreadyDone = true;
    await mongoose.connect('mongodb+srv://umeshola07:NpwRXseEerKCQRcZ@cluster0.kzrdrrk.mongodb.net/', { dbName: "User" });
    console.log("Connected to database successfully!");
}

// import mongoose from "mongoose";

// const MONGO_URI = 'mongodb+srv://umeshola07:NpwRXseEerKCQRcZ@cluster0.kzrdrrk.mongodb.net/';

// if (!MONGO_URI) {
//   throw new Error("Error Code: grx30xd33d");
// }

// let cached = global.mongoose;
// if (!cached) {
//   cached = global.mongoose = { conn: null, promise: null };
// }

// async function connectToDatabase() {
//   if (cached.conn) {
//     return cached.conn;
//   }

//   if (!cached.promise) {
//     const opts = {
//       bufferCommands: false,
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//       maxPoolSize: 50,
//       wtimeoutMS: 2500,
//     };

//     mongoose.set("strictQuery", false);
//     cached.promise = mongoose.connect(MONGO_URI, opts).then((mongoose) => {
//       return mongoose;
//     });
//   }

//   try {
//     cached.conn = await cached.promise;
//   } catch (e) {
//     cached.promise = null;
//     throw e;
//   }

//   return cached.conn;
// }

// export default connectToDatabase;

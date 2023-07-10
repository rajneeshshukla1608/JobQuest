import mongoose from "mongoose"

const connectDB = () => {
    mongoose.connect('mongodb://127.0.0.1:27017', {
        dbName: "workzen"
    })
        .then((c) => console.log(`Database connected at ${c.connection.host}`))
        .catch(((e) => console.log(e)));

}

export default connectDB;
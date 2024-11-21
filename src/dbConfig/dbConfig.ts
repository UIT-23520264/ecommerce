import mongoose from "mongoose";

export async function connect() {
    try {
        await mongoose.connect(process.env.MONGODB_URI!);
        const connection = mongoose.connection;

        connection.on('connected', () => {
            console.log("Successfully")
        })

        connection.on('error', (err) => {
            console.log("Failed to connect" + err);
            process.exit();
        })
    }
    catch (error) {
        console.log("Some thing wrong")
        console.log(error)
    }
}
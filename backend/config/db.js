import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://srijankumar3010:Ramuknajirs3@cluster0.pgvv4ar.mongodb.net/FoodDelivery').then(()=>console.log("DB Connected"))
}
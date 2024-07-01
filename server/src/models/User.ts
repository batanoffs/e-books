import mongoose, { Schema, Document } from "mongoose";

interface IUser extends Document {
    email: string;
    password: string;
    role: "user" | "admin";
}

const UserSchema: Schema = new Schema(
    {
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        role: {
            type: String,
            required: true,
            enum: ["user", "admin"],
            default: "user",
        },
    },
    {
        collation: {
            locale: "en",
            strength: 2,
        },
    }
);

const User = mongoose.model<IUser>("User", UserSchema);

export default User;

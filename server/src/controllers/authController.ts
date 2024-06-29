import { Request, Response } from "express-serve-static-core";

import User from "../models/User";
import { createToken } from "../services/jwt";

const bcrypt = require("bcrypt");

export const register = async (req: Request, res: Response) => {
    const { username, password, role } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ username, password: hashedPassword, role });
        await newUser.save();
        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        res.status(500).json({ message: "Registration failed", error });
    }
};

export const login = async (req: Request, res: Response) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username });
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        const token = createToken(user);

        res.cookie("token", token, { httpOnly: true });
        res.status(200).json({ message: "Login successful", token });
    } catch (error) {
        res.status(500).json({ message: "Login failed", error });
    }
};

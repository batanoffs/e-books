import { identityName } from '../constants/identity';
import { IUser } from '../interfaces/user.interface';
import User from '../models/User';
import bcrypt from 'bcrypt';

async function registerUser(identity: string, password: string, role: string): Promise<IUser> {
    try {
        const existingUser = await User.findOne({ [identityName]: identity });
        if (existingUser) {
            throw new Error(`This email is already in use`);
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            [identityName]: identity,
            password: hashedPassword,
            role,
        });

        const savedUser = await newUser.save();
        console.log('User successfully created:', savedUser);
        return savedUser;
    } catch (error: any) {
        console.error('Failed to register user:', error);
        if (error.code === 11000) {
            throw new Error(`This email is already in use`);
        } else {
            throw new Error(`Exceptional error occurred: ${error.message}`);
        }
    }
}

async function loginUser(identity: string, password: string): Promise<IUser> {
    const user = await User.findOne({ [identityName]: identity });

    if (!user) {
        throw new Error(`Incorrect ${identityName} or password`);
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
        throw new Error(`Incorrect ${identityName} or password`);
    }

    return user;
}

export { registerUser, loginUser };

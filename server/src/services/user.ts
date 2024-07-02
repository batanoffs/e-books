import { identityName } from '../constants/identity';
import { IUser } from '../models/User';
import User from '../models/User';
import bcrypt from 'bcrypt';

async function registerUser(email: string, password: string, role: string): Promise<IUser> {
    //TODO add props if needed (username)
    const existing = await User.findOne({ email });
    console.log(existing);

    if (existing) {
        throw new Error(`This email is already in use`);
    }

    const user = new User({
        email,
        password: await bcrypt.hash(password, 10), //TODO add props if needed (username)
        role,
    });

    try {
        await user.save();
    } catch (error: any) {
        if (error.code === 11000) {
            // error duplicate name
            throw new Error(`This email is already in use`); //TODO check for username and email if needed
        } else {
            throw new Error(`Exceptional error occurred: ${error.message}`);
        }
    }

    return user;
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

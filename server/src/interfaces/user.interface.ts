import { Document } from 'mongoose';

export interface IUserSchema extends Document {
  email: string;
  password: string;
  role: 'user' | 'admin';
}
import { Request } from 'express';
import { File } from 'multer';

declare module 'express-serve-static-core' {
  interface Request {
    body: MyRequestBodyType;
    files: File[] | null; // TODO check if files need to be in the body
  }
}

interface MyRequestBodyType {
  // Define the types for your form fields here
}

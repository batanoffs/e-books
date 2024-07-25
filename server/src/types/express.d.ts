import { Request } from 'express';
import { File } from 'multer';

declare module 'express-serve-static-core' {
  interface Request {
    body: MyRequestBodyType;
    files: File[] | null; // Multiple file upload
  }
}

interface MyRequestBodyType {
  // Define the types for your form fields here
  exampleField: string;
}

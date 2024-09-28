// // handles the "get-cloudinary-signature" route and should be secured
// import { LoaderFunctionArgs, json } from "@remix-run/node";
// import cloudinary from "cloudinary";

// export const loader = ({ request }: LoaderFunctionArgs) => {
//   cloudinary.v2.config({
//     api_key: process.env.CLOUDINARY_API_KEY,
//     api_secret: process.env.CLOUDINARY_API_SECRET,
//     cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//     secure: false,
//   });

//   const timestamp = Math.round(new Date().getTime() / 1000);

//   const signature = cloudinary.v2.utils.api_sign_request(
//     {
//       timestamp: timestamp,
//     },
//     process.env.CLOUDINARY_API_SECRET as string
//   );

//   return json({
//     timestamp,
//     signature,
//     cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//     api_key: process.env.CLOUDINARY_API_KEY,
//   });
// };
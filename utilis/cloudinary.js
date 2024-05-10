import {v2 as cloudinary} from "cloudinary";
import dotenv from "dotenv";
dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})
export default cloudinary

// export const uploadToCloudinary = async (filePath) => {
//   try {
//     const { secure_url: image, public_id: cloudinary_id } = await cloudinary.uploader.upload(filePath);
//     return { image, cloudinary_id };
//   } catch (error) {
//     throw new Error('Error uploading image to cloudinary');
//   }
// };

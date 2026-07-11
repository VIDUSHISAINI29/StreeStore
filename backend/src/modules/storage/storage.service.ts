import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

/*
   R2 storage service.
   Uses AWS SDK v3 with Cloudflare R2's S3-compatible API.
   All file uploads go through the backend — R2 credentials
   never touch the frontend.
*/

const r2 = new S3Client({
   region: "auto",
   endpoint: `https://${process.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
   credentials: {
      accessKeyId: process.env.R2_ACCESS_KEY_ID as string,
      secretAccessKey: process.env.R2_SECRET_ACCESS_KEY as string,
   },
});

const BUCKET = process.env.R2_BUCKET_NAME as string;
const PUBLIC_URL = process.env.R2_PUBLIC_URL as string;

export const uploadToR2 = async (
   buffer: Buffer,
   key: string,
   contentType: string,
): Promise<string> => {
   await r2.send(
      new PutObjectCommand({
         Bucket: BUCKET,
         Key: key,
         Body: buffer,
         ContentType: contentType,
      }),
   );

   // Return the public URL for the uploaded file
   return `${PUBLIC_URL}/${key}`;
};

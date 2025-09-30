// lib/storage.ts
import cloudinary from 'cloudinary'

const hasCloudinary =
  process.env.CLOUDINARY_CLOUD_NAME &&
  process.env.CLOUDINARY_API_KEY &&
  process.env.CLOUDINARY_API_SECRET

if (hasCloudinary) {
  cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
    api_key: process.env.CLOUDINARY_API_KEY!,
    api_secret: process.env.CLOUDINARY_API_SECRET!,
    secure: true,
  })
}

export async function uploadBufferToCloudinary(buffer: Uint8Array, filename: string) {
  if (!hasCloudinary) throw new Error('Cloudinary not configured')
  const res = await new Promise<cloudinary.UploadApiResponse>((resolve, reject) => {
    const stream = cloudinary.v2.uploader.upload_stream(
      { resource_type: 'raw', public_id: filename.replace('.pdf', ''), format: 'pdf' },
      (error, result) => {
        if (error || !result) reject(error)
        else resolve(result)
      }
    )
    stream.end(Buffer.from(buffer))
  })
  return res.secure_url
}
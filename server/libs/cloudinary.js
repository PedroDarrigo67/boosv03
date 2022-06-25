import {v2 as cloudinary} from 'cloudinary'

cloudinary.config ({
  cloud_name: "inmobiproy",
  api_key: "393114377118966",
  api_secret: "0DMbZZbdaBQHICPLarFCH8gaqGM"
})

export const uploadImage = async filePath => {
  return await cloudinary.uploader.upload(filePath, {
    folder: 'posts'
  })
}

export const deleteImage = async id => {
  return await cloudinary.uploader.destroy(id)
}
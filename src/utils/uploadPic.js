import axios from "axios";

const uploadPic = async (media) => {
  try {
    const form = new FormData();
    form.append("file", media);
    form.append("upload_preset", process.env.NEXT_PUBLIC_UPLOAD_PRESET);
    form.append("cloud_name", process.env.NEXT_PUBLIC_CLOUD_NAME);

    const res = await axios.post(process.env.NEXT_PUBLIC_CLOUDINARY_URL, form);
    return res.data.secure_url;
  } catch (error) {
    throw new Error(error);
  }
};

export default uploadPic;

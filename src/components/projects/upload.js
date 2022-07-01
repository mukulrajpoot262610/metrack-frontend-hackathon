import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { BsGithub, BsGlobe } from "react-icons/bs";
import { uploadProject } from "services/api";
import uploadPic from "utils/uploadPic";
import Editor from "editor";

export default function Submission() {
  const [tags, setTags] = useState([]);
  const { handleSubmit, register } = useForm();
  const [description, setDescription] = useState("");

  const router = useRouter();
  const { courseId } = router.query;

  const [url, setUrl] = useState("");
  const [image, setImage] = useState();
  const [media, setMedia] = useState();
  const [imageLoading, setImageLoading] = useState(false);

  const uploadImage = async () => {
    if (!image) {
      return toast.error("Please add a image");
    }
    setImageLoading(true);

    try {
      const uploadedPic = await uploadPic(media);
      setUrl(uploadedPic);
      toast.success("Image uploaded. Continue editing!");
      setImageLoading(false);
    } catch (err) {
      setImageLoading(false);
      toast.error("Error in Upload");
    }
  };

  const captureImage = (e) => {
    const file = e.target.files[0];
    setMedia(file);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = function () {
      setImage(reader.result);
    };
  };

  const onSubmit = async (data) => {
    if (!courseId) {
      return toast.error("course unavailable");
    }

    if (!url) {
      return toast.error("Please add a project thumbnail");
    }

    if (!data?.title) {
      return toast.error("Please add a project title");
    }

    try {
      await uploadProject({
        ...data,
        description,
        tags,
        thumbnail: url,
        courseId,
        url,
      });
      toast.success("Project submitted");
      router.push(`/explore/${courseId}`);
    } catch (err) {
      // console.log(err);
      toast.error(err?.response?.data?.msg);
    }
  };

  const tagElements = tags.map((i) => {
    return (
      <>
        {i && (
          <p
            key={i}
            className="p-1 px-2 text-sm border border-blue-500 border-opacity-50 rounded-lg bg-base-200"
          >
            {i}
          </p>
        )}
      </>
    );
  });

  return (
    <>
      <div className="w-full max-w-4xl col-span-8 mx-auto space-y-4">
        <div className="flex justify-between">
          <h3 className="text-2xl font-extrabold text-blue-500">
            Submit your project
          </h3>
        </div>
        <section id="about" className="space-y-6">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-2">
              <h2 className="text-xs font-bold text-blue-500 uppercase">
                Thumbnail
              </h2>
              <label className="flex flex-col items-center w-full p-1 border rounded-lg cursor-pointer lg:w-1/2 text-blue border-blue">
                {image ? (
                  <img src={image} alt="preview" className="rounded-lg" />
                ) : (
                  <div className="flex flex-col items-center m-4">
                    <span className="text-5xl">+</span>
                    <span className="text-xs">Select a file</span>
                  </div>
                )}
                <input type="file" onChange={captureImage} className="hidden" />
              </label>
              <div
                onClick={uploadImage}
                className={`${
                  imageLoading ? "loading" : ""
                } btn btn-sm w-fit mt-2 `}
              >
                Upload
              </div>
            </div>

            <div className="space-y-2">
              <h2 className="text-xs font-bold text-blue-500 uppercase">
                title
              </h2>
              <input
                type="text"
                {...register("title")}
                placeholder="title of the project"
                className="w-full input-bordered input"
              />
            </div>
            <div className="space-y-2">
              <h2 className="text-xs font-bold text-blue-500 uppercase">
                detailed description
              </h2>
              <Editor data={description} setData={setDescription} />
            </div>
            <div className="space-y-4">
              <h2 className="text-xs font-bold text-blue-500 uppercase">
                tags
              </h2>
              <p className="text-sm text-base-content text-opacity-70">
                Tags help us rank, filter and show your projects in search
                results. Add upto 5 tags to be more visible in the search
                results.
              </p>
              <div className="flex space-x-2">{tagElements}</div>
              <input
                type="text"
                value={tags.join(",")}
                onChange={(e) => setTags(e.target.value.split(","))}
                placeholder="tags (separated by comma)"
                className="w-full input-bordered input"
              />
            </div>
            <div className="space-y-2">
              <h2 className="text-xs font-bold text-blue-500 uppercase">
                github url
              </h2>
              <p className="text-sm text-base-content text-opacity-70">
                Add the Github url for your project.
              </p>
              <div className="flex">
                <button className="rounded-r-none btn">
                  <BsGithub className="w-6 h-6" />
                </button>
                <input
                  type="text"
                  {...register("githubUrl")}
                  placeholder="https://"
                  className="flex-1 w-full rounded-l-none input-bordered focus:outline-none input"
                />
              </div>
            </div>
            <div className="space-y-2">
              <h2 className="text-xs font-bold text-blue-500 uppercase">
                live url
              </h2>
              <p className="text-sm text-base-content text-opacity-70">
                Add the url on which your project is hosted. This helps your
                peers provide feedback on your project.
              </p>
              <div className="flex">
                <button className="rounded-r-none btn">
                  <BsGlobe className="w-6 h-6" />
                </button>
                <input
                  type="text"
                  {...register("webUrl")}
                  placeholder="https://"
                  className="flex-1 w-full rounded-l-none input-bordered focus:outline-none input"
                />
              </div>
            </div>

            <div className="flex justify-end">
              <button className="btn btn-primary">upload</button>
            </div>
          </form>
        </section>
        <div className="py-5"></div>
      </div>
    </>
  );
}

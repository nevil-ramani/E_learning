import React from 'react'
// import { useForm } from "react-hook-form";
import { useState } from 'react';
import axios from "axios";


// const Tutor_Course_video = () => {
//     const [file, setFile] = useState();
//     const {
//         handleSubmit,
//         formState: { errors },
//       } = useForm();


//       const onSubmit = () => {
//         const newdata = { content: { video: file } };
//         console.log(newdata);
//         // const contentId = 123456
    
//         axios
//           .post(`http://localhost:3001/videos`, newdata)
//           .then(function (response) {
//             console.log(response);
//           })
//           .catch(function (error) {
//             console.log(error);
//           });
//       };

const Tutor_Course_video = () => {
  const [videoFile, setVideoFile] = useState(null);

  const handleVideoFileChange = (event) => {
    setVideoFile(event.target.files[0]);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('video', videoFile);

    try {
      const response = await axios.post('http://localhost:3001/api/videos', formData, {
        // const response = await axios.put('http://localhost:3001/update_content/64266bd2fe442c0359b8383d', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(response.data.path);
      const newdata = { content: { video: response.data.path } };

       const updateContent = await axios.put('http://localhost:3001/update_content/64266bd2fe442c0359b8383d', newdata, {
       
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(newdata);
    } catch (error) {
      console.log(error);
    }
  };

 
  return (
    <>
    <div>
      <section className="max-w-4xl p-6 mx-auto rounded-md shadow hover:shadow-lg">
        <h1 className="text-xl text-center font-bold capitalize dark:">
          Account settings
        </h1>
        <h2 className="text-sm text-center capitalize dark:">
          {`This is Course > Topic > SubTopic > video Form!`}
        </h2>
        <form onSubmit={handleFormSubmit}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-1">

          <div>
                <label className="block text-sm font-medium ">Video</label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    <svg
                      className="mx-auto h-12 w-12 "
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {/* <div className="flex text-sm text-gray-600"> */}
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                    >
                      <span className>Upload a file</span>
                      <input
                       type="file" id="videoFile" onChange={handleVideoFileChange}
                        name='video'
                      />
                    </label>
                    {/* </div> */}
                    <p className="text-xs ">mp3/mp4 up to 1 GB</p>
                  </div>
                </div>
                {/* {errors.fileVideo && (
                  <span className="text-red-900">{errors.fileVideo.message}</span>
                )} */}
              </div>
          
          </div>
            <div className="flex justify-center mt-6">
              <button
                type="submit"
                className="px-3 py-2 leading-5 text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-700 focus:outline-none"
              >
                Submit
              </button>
            </div>
          </form>
        </section>
      </div>

    </>
  )
}

export default Tutor_Course_video
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const Course = () => {

  const [file, setFile] = useState();



  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) =>  {
    // data.append("image", data.image);
// console.log(data)

const formData = new FormData();
formData.append("image", file);
formData.append("title", data.title);
formData.append("price", data.price);
formData.append("tutor_name", data.tutor_name);



    axios.post('http://localhost:3001/course', formData)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
    console.log(data)};

  return (
    <>
      <div className=" ">
        <section className="max-w-4xl p-6 mx-auto rounded-md shadow-2xl my-12 ">
          <h1 className="text-xl text-center font-bold capitalize dark:">
            Account settings
          </h1>
          <h2 className="text-sm text-center capitalize dark:">
            This is Course Form!
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-1">
              <div>
                <label htmlFor="coursename">Course Name</label>
                <input
                  id="coursename"
                  name="title"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 border rounded-md   focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring border-gray-300"
                  {...register("title", {
                    required: "this field is required.",
                    minLength: {
                      value: 4,
                      message: "Please Enter Username minimum 4 characters",
                    },
                  })}
                 
                />
                {errors.title && (
                  <span className="text-red-900">{errors.title.message}</span>
                )}
                {/* <span>wrong</span> */}
              </div>
              <div>
                <label className="block text-sm font-medium ">
                  Thumbnail Image
                </label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed rounded-md border-gray-300">
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
                        id="file-upload"
                        type="file"
                        className="sr-only"
                        name="image"
                        // {...register("image", {
                        //   required: "this field is required.",
                        // })}
                        onChange={(e) => setFile(e.target.files[0])}
                      />
                    </label>
                    {/* </div> */}
                    <p className="text-xs ">PNG, JPG, GIF up to 10MB</p>
                  </div>
                </div>
                {/* {errors.fileImg && (
                  <span className="text-red-900">{errors.fileImg.message}</span>
                )} */}
              </div>
             
              <div>
                <label htmlFor="price">Price</label>
                <input
                  id="price"
                  name="price"
                  type="number"
                  className="block w-full px-4 py-2 mt-2 border rounded-md   focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring border-gray-300"
                  {...register("price", {
                    required: "this field is required.",
                  })}
                />
                {/* <span>wrong</span> */}
              </div>
              <div>
                <label htmlFor="tutorname">Tutor Name</label>
                <input
                  id="tutorname"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 border rounded-md   focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring border-gray-300"
                  {...register("tutor_name", {
                    required: "this field is required.",
                  })}
                />
                {errors.tutorname && (
                  <span className="text-red-900">{errors.tutor_name.message}</span>
                )}
                {/* <span>wrong</span> */}
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
  );
};

export default Course;


// <div>
// <label className="block text-sm font-medium ">Video</label>
// <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed rounded-md">
//   <div className="space-y-1 text-center">
//     <svg
//       className="mx-auto h-12 w-12 "
//       stroke="currentColor"
//       fill="none"
//       viewBox="0 0 48 48"
//       aria-hidden="true"
//     >
//       <path
//         d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
//         strokeWidth={2}
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />
//     </svg>
//     {/* <div className="flex text-sm text-gray-600"> */}
//     <label
//       htmlFor="file-upload"
//       className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
//     >
//       <span className>Upload a file</span>
//       <input
//         id="file-upload"
//         type="file"
//         className="sr-only"
//         {...register("fileVideo", {
//           required: "this field is required.",
//         })}
//       />
//     </label>
//     {/* </div> */}
//     <p className="text-xs ">mp3/mp4 up to 1 GB</p>
//   </div>
// </div>
// {errors.fileVideo && (
//   <span className="text-red-900">{errors.fileVideo.message}</span>
// )}
// </div>
"use client"
import React, { useEffect } from "react";
import { Bs2Circle } from "react-icons/bs";
import flatpickr from "flatpickr";
import "flatpickr/dist/themes/material_blue.css"; // Ensure to import a style for flatpickr
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function BlogForm() {
  useEffect(() => {
    flatpickr("#date-picker", {
      altInput: true,
      altFormat: "F j, Y",
      dateFormat: "Y-m-d",
      onClose: function (selectedDates, dateStr, instance) {
        instance.close(); // Ensure the calendar is closed.
      },
    });
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  
    const formData = new FormData(event.currentTarget);
    const blogImage = formData.get('BlogImage');
  
    if (blogImage instanceof File) {
      formData.delete('BlogImage');
      formData.append('image', blogImage);
    }
  
    try {
      const response = await fetch('https://vgf59b03-5001.uks1.devtunnels.ms/api/blog', {
        method: 'POST',
        body: formData
      });
  
      if (!response.ok) throw new Error('Network response was not ok.');
  
      const result = await response.json();
      console.log('Success:', result);
      toast.success('Blog added successfully!'); // Display success message
    } catch (error) {
      console.error('Error:', error);
      toast.error('Failed to add the blog.'); // Display error message
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Detail Information
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Write details information about the blog.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                  Title
                </label>
                <input
                  type="text"
                  name="BlogTitle"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="date-picker" className="block text-sm font-medium leading-6 text-gray-900">
                  Date
                </label>
                <input
                  type="text"
                  name="createdAt"
                  id="date-picker"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                  Post status
                </label>
                <select
                  id="country"
                  name="BlogCategory"
                  autoComplete="country-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>Tech</option>
                  <option>General</option>
                </select>
              </div>

              <div className="col-span-full">
                <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                  Description about the blog
                </label>
                <textarea
                  id="about"
                  name="BlogDescription"
                  rows={3}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>

              <div className="col-span-full">
                <label htmlFor="file-upload" className="block text-sm font-medium leading-6 text-gray-900">
                  Upload photo
                </label>
                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                  <div className="text-center">
                    <Bs2Circle className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                    <div className="mt-4 flex text-sm leading-6 text-gray-600">
                      <label htmlFor="file-upload" className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                        <span>Upload a file</span>
                        <input
                          id="file-upload"
                          name="BlogImage"
                          type="file"
                          className="sr-only"
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs leading-5 text-gray-600">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
            Cancel
          </button>
          <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Add new blog
          </button>
        </div>
      </form>
      <ToastContainer /> {/* Add ToastContainer here */}
    </div>
  );
}

export default BlogForm;

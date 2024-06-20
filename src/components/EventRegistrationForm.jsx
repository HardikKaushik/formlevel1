import React, { useState } from "react";

const EventRegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    attendingWithGuest: "no",
    guestName: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name) errors.name = "Name is required";
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }
    if (!formData.age) {
      errors.age = "Age is required";
    } else if (isNaN(formData.age) || formData.age <= 0) {
      errors.age = "Age must be a number greater than 0";
    }
    if (formData.attendingWithGuest === "yes" && !formData.guestName) {
      errors.guestName = "Guest Name is required";
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="p-8 max-w-lg top-60 relative mx-auto  hover:bg-pink-100 bg-slate-100 rounded-xl shadow-xl">
        <div className=" space-y-4">
          <h1 className="text-2xl font-bold mb-4 ">
            Registration done!! Here's Summary
          </h1>
          <p>
            <strong>Name:</strong> {formData.name}
          </p>
          <p>
            <strong>Email:</strong> {formData.email}
          </p>
          <p>
            <strong>Age:</strong> {formData.age}
          </p>
          <p>
            <strong>Attending with Guest:</strong>{" "}
            {formData.attendingWithGuest === "yes" ? "Yes" : "No"}
          </p>
          {formData.attendingWithGuest === "yes" && (
            <p>
              <strong>Guest Name:</strong> {formData.guestName}
            </p>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-full mx-auto p-8 bg-pink-800  h-[100vh]">
      <form
        onSubmit={handleSubmit}
        className="p-8 max-w-lg mx-auto   hover:bg-pink-100 bg-slate-100 rounded-xl shadow-xl"
      >
        <h1 className="text-2xl font-bold mb-4">Event Registration Form</h1>

        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 p-2 block w-full border border-gray-300 rounded shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
          {formErrors.name && (
            <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 p-2 block w-full border border-gray-300 rounded shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
          {formErrors.email && (
            <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="age"
            className="block text-sm font-medium text-gray-700"
          >
            Age
          </label>
          <input
            type="number"
            name="age"
            id="age"
            value={formData.age}
            onChange={handleChange}
            className="mt-1 p-2 block w-full border border-gray-300 rounded shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
          {formErrors.age && (
            <p className="text-red-500 text-sm mt-1">{formErrors.age}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Are you attending with a guest?
          </label>
          <div className="mt-1 flex items-center">
            <input
              type="radio"
              name="attendingWithGuest"
              value="yes"
              checked={formData.attendingWithGuest === "yes"}
              onChange={handleChange}
              className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
            />
            <label
              htmlFor="yes"
              className="ml-3 block text-sm font-medium text-gray-700"
            >
              Yes
            </label>
          </div>
          <div className="mt-1 flex items-center">
            <input
              type="radio"
              name="attendingWithGuest"
              value="no"
              checked={formData.attendingWithGuest === "no"}
              onChange={handleChange}
              className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
            />
            <label
              htmlFor="no"
              className="ml-3 block text-sm font-medium text-gray-700"
            >
              No
            </label>
          </div>
        </div>

        {formData.attendingWithGuest === "yes" && (
          <div className="mb-4">
            <label
              htmlFor="guestName"
              className="block text-sm font-medium text-gray-700"
            >
              Guest Name
            </label>
            <input
              type="text"
              name="guestName"
              id="guestName"
              value={formData.guestName}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
            {formErrors.guestName && (
              <p className="text-red-500 text-sm mt-1">
                {formErrors.guestName}
              </p>
            )}
          </div>
        )}

        <button
          type="submit"
          className="mt-4 w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default EventRegistrationForm;

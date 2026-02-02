import React, { useEffect, useState } from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

export default function BecomeADriverForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    state: "",
    phone: "",
    email: "",
    password: "",
    vehicleType: "",
    brand: "",
    modelYear: "",
    km: "",
    milage: "",
    numberplate: "",
    carColor: "",
    carRego: "",
    carCof: "",
    tsl: "",
    driverLicense: "",
    logebook: "",
    visaType: "",
    city: "",
    referralCode: "",
  });
   useEffect(() => {
          window.scrollTo(0, 0);
      }, []);

  // For files, use separate state for simplicity
  const [files, setFiles] = useState({
    driverPhoto: null,
    frontLicense: null,
    backLicense: null,
    pEndorsement: null,
    carInsurance: null,
    visaUpload: null,
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleFileChange(e) {
    const { name, files: selectedFiles } = e.target;
    setFiles((prev) => ({ ...prev, [name]: selectedFiles[0] }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // You can handle the form submission logic here,
    // e.g., form validation and API call with formData and files.
    console.log("Form submitted", formData, files);
  }

  return (
    <>
    <Header/>
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-6">Become a Driver</h2>

      {/* Upload Driver Photo */}
      <div className="mb-6">
        <label className="block mb-2 font-semibold">Upload Driver Photo</label>
        <input type="file" name="driverPhoto" onChange={handleFileChange} />
      </div>

      {/* Personal Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block mb-1 font-semibold">
            First Name <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">
            Last Name <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">
            Address <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">
            State <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">
            Phone No. <span className="text-red-600">*</span>
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">
            Email <span className="text-red-600">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">
            Password <span className="text-red-600">*</span>
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full border px-3 py-2 rounded"
          />
        </div>
      </div>

      {/* Driver Car Details */}
      <h3 className="font-semibold mb-4 border-t pt-6">Driver Car Details</h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div>
          <label className="block mb-1 font-semibold">
            Vehicle Type <span className="text-red-600">*</span>
          </label>
          <select
            name="vehicleType"
            value={formData.vehicleType}
            onChange={handleChange}
            required
            className="w-full border px-3 py-2 rounded"
          >
            <option value="">Select Type</option>
            <option value="sedan">Sedan</option>
            <option value="hatchback">Hatchback</option>
            <option value="suv">SUV</option>
            <option value="van">Van</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 font-semibold">Brand</label>
          <input
            type="text"
            name="brand"
            value={formData.brand}
            onChange={handleChange}
            placeholder="Sedan"
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Car model year</label>
          <input
            type="number"
            name="modelYear"
            value={formData.modelYear}
            onChange={handleChange}
            placeholder="1990"
            className="w-full border px-3 py-2 rounded"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div>
          <label className="block mb-1 font-semibold">
            KM <span className="text-red-600">*</span>
          </label>
          <input
            type="number"
            name="km"
            value={formData.km}
            onChange={handleChange}
            placeholder="Insert Kilometer"
            required
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">
            Milage <span className="text-red-600">*</span>
          </label>
          <input
            type="number"
            name="milage"
            value={formData.milage}
            onChange={handleChange}
            placeholder="Insert Milage"
            required
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">
            Numberplate <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            name="numberplate"
            value={formData.numberplate}
            onChange={handleChange}
            placeholder="Insert Numberplate"
            required
            className="w-full border px-3 py-2 rounded"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div>
          <label className="block mb-1 font-semibold">Car Color</label>
          <input
            type="text"
            name="carColor"
            value={formData.carColor}
            onChange={handleChange}
            placeholder="Black"
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Car REGO</label>
          <input
            type="date"
            name="carRego"
            value={formData.carRego}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Car COF</label>
          <input
            type="date"
            name="carCof"
            value={formData.carCof}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div>
          <label className="block mb-1 font-semibold">
            TSL <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            name="tsl"
            value={formData.tsl}
            onChange={handleChange}
            required
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Driver License</label>
          <input
            type="text"
            name="driverLicense"
            value={formData.driverLicense}
            onChange={handleChange}
            placeholder="Driver License"
            className="w-full border px-3 py-2 rounded"
          />
        </div>
      </div>

      {/* File Uploads */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div>
          <label className="block mb-1 font-semibold">Upload Front Driver License</label>
          <input type="file" name="frontLicense" onChange={handleFileChange} />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Upload Back Driver License</label>
          <input type="file" name="backLicense" onChange={handleFileChange} />
        </div>
        <div>
          <label className="block mb-1 font-semibold">P Endorsement</label>
          <input type="file" name="pEndorsement" onChange={handleFileChange} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div>
          <label className="block mb-1 font-semibold">Car Insurance</label>
          <input type="file" name="carInsurance" onChange={handleFileChange} />
        </div>

        <div>
          <label className="block mb-1 font-semibold">VISA Upload</label>
          <input type="file" name="visaUpload" onChange={handleFileChange} />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Do You have your own Logebook?</label>
          <select
            name="logebook"
            value={formData.logebook}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          >
            <option value="">Please Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block mb-1 font-semibold">VISA Type</label>
          <select
            name="visaType"
            value={formData.visaType}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          >
            <option value="">Please Select</option>
            <option value="work">Work Visa</option>
            <option value="resident">Resident Visa</option>
            <option value="student">Student Visa</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 font-semibold">In which City you want to drive in?</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="City Name"
            className="w-full border px-3 py-2 rounded"
          />
        </div>
      </div>

      <div className="mb-6">
        <label className="block mb-1 font-semibold">
          Referral Code <span className="text-red-600">*</span>
        </label>
        <input
          type="text"
          name="referralCode"
          value={formData.referralCode}
          onChange={handleChange}
          placeholder="Referral Code"
          required
          className="w-full border px-3 py-2 rounded"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-3 rounded"
      >
        Submit
      </button>
    </form>
    <Footer/>
    </>
  );
}

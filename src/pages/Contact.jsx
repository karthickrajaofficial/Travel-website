// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { packages } from '../data/packages';

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: { 
//     opacity: 1,
//     transition: { 
//       duration: 0.5,
//       staggerChildren: 0.3 
//     }
//   }
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { 
//     opacity: 1, 
//     y: 0,
//     transition: { duration: 0.7 }
//   }
// };

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     mainPackage: '',
//     subPackage: '',
//     numberOfPersons: '',
//     monthOfTravel: '',
//     message: ''
//   });

//   const [selectedMainPackage, setSelectedMainPackage] = useState(null);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState({ status: '', message: '' });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleMainPackageChange = (e) => {
//     const { value } = e.target;
//     const selected = packages.find(pkg => pkg.name === value);
//     setSelectedMainPackage(selected);
//     setFormData(prev => ({
//       ...prev,
//       mainPackage: value,
//       subPackage: ''
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setSubmitStatus({ status: '', message: '' });

//     // Create FormData object for Google Forms
//     const googleFormData = new FormData();
    
//     // Map your form fields to Google Form fields
//     // Replace 'entry.XXXXXXXX' with your actual Google Form field IDs
//     googleFormData.append('entry.123456789', formData.name);        // Name field
//     googleFormData.append('entry.987654321', formData.email);       // Email field
//     googleFormData.append('entry.456789123', formData.phone);       // Phone field
//     googleFormData.append('entry.789123456', formData.mainPackage); // Main Package field
//     googleFormData.append('entry.321654987', formData.subPackage);  // Sub Package field
//     googleFormData.append('entry.159753468', formData.numberOfPersons); // Number of Persons field
//     googleFormData.append('entry.357951246', formData.monthOfTravel);   // Month of Travel field
//     googleFormData.append('entry.852963741', formData.message);     // Message field

//     try {
//       // Replace with your Google Form URL
//       const response = await fetch('https://forms.gle/qQ4xdAtjQv1Pb5UZ7', {
//         method: 'POST',
//         mode: 'no-cors', // Important for Google Forms
//         body: googleFormData
//       });

//       // Since mode is 'no-cors', we can't actually check the response
//       // We'll assume success if no error was thrown
//       setSubmitStatus({
//         status: 'success',
//         message: 'Thank you for your inquiry! We will get back to you soon.'
//       });

//       // Reset form
//       setFormData({
//         name: '',
//         email: '',
//         phone: '',
//         mainPackage: '',
//         subPackage: '',
//         numberOfPersons: '',
//         monthOfTravel: '',
//         message: ''
//       });
//       setSelectedMainPackage(null);

//     } catch (error) {
//       console.error('Submission error:', error);
//       setSubmitStatus({
//         status: 'error',
//         message: 'Something went wrong. Please try again later.'
//       });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-blue-950">
//       <div className="max-w-7xl mx-auto px-8 py-24">
//         {/* Header Section */}
//         <motion.div 
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//           className="text-center mb-16"
//         >
//           <motion.div variants={itemVariants} className="mb-8">
//             <div className="flex items-center justify-center gap-3 mb-6">
//               <div className="h-px w-12 bg-yellow-400"></div>
//               <span className="text-yellow-400 tracking-[0.3em] text-sm">CONNECT WITH US</span>
//               <div className="h-px w-12 bg-yellow-400"></div>
//             </div>
//             <h1 className="text-5xl font-light text-white tracking-wide mb-6">Begin Your Royal Journey</h1>
//             <p className="text-gray-400 max-w-2xl mx-auto">
//               Let us craft an extraordinary travel experience tailored to your desires. 
//               Our luxury travel specialists await your correspondence.
//             </p>
//           </motion.div>
//         </motion.div>

//         {/* Contact Grid */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
//           {/* Contact Information */}
//           <motion.div 
//             variants={containerVariants}
//             initial="hidden"
//             animate="visible"
//             className="space-y-12"
//           >
//             <motion.div variants={itemVariants} className="space-y-8">
//               {[
//                 {
//                   title: "LUXURY INQUIRIES",
//                   content: "+91 91599 73503",
//                   icon: (
//                     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//                     </svg>
//                   )
//                 },
//                 {
//                   title: "EMAIL",
//                   content: "info@grandroyaltours.com",
//                   icon: (
//                     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                     </svg>
//                   )
//                 },
//                 {
//                   title: "LOCATION",
//                   content: "Hyderabad, Telangana, India",
//                   icon: (
//                     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//                     </svg>
//                   )
//                 }
//               ].map((item, index) => (
//                 <div key={index} className="flex items-start gap-6 group">
//                   <div className="w-12 h-12 rounded-full bg-yellow-400/10 flex items-center justify-center text-yellow-400">
//                     {item.icon}
//                   </div>
//                   <div>
//                     <h3 className="text-sm text-yellow-400 tracking-wider mb-2">{item.title}</h3>
//                     <p className="text-white text-lg">{item.content}</p>
//                   </div>
//                 </div>
//               ))}
//             </motion.div>
//           </motion.div>

//           {/* Contact Form */}
//           <motion.div
//             variants={containerVariants}
//             initial="hidden"
//             animate="visible"
//             className="relative"
//           >
//             <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-blue-600/10 rounded-lg blur-xl"></div>
            
//             {/* Status Message */}
//             {submitStatus.message && (
//               <div className={`mb-4 p-4 rounded ${
//                 submitStatus.status === 'success' 
//                   ? 'bg-green-500/20 text-green-200' 
//                   : 'bg-red-500/20 text-red-200'
//               }`}>
//                 {submitStatus.message}
//               </div>
//             )}

//             <motion.form 
//               onSubmit={handleSubmit}
//               className="relative bg-blue-900/20 p-8 rounded-lg border border-yellow-400/20"
//             >
//               {/* Name and Email */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//                 <div>
//                   <label className="block text-sm text-yellow-400 tracking-wider mb-2">NAME</label>
//                   <input
//                     type="text"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     className="w-full bg-blue-900/50 border border-yellow-400/20 rounded px-4 py-3 text-white focus:outline-none focus:border-yellow-400/50"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm text-yellow-400 tracking-wider mb-2">EMAIL</label>
//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     className="w-full bg-blue-900/50 border border-yellow-400/20 rounded px-4 py-3 text-white focus:outline-none focus:border-yellow-400/50"
//                     required
//                   />
//                 </div>
//               </div>

//               {/* Phone and Main Package */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//                 <div>
//                   <label className="block text-sm text-yellow-400 tracking-wider mb-2">PHONE</label>
//                   <input
//                     type="tel"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     className="w-full bg-blue-900/50 border border-yellow-400/20 rounded px-4 py-3 text-white focus:outline-none focus:border-yellow-400/50"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm text-yellow-400 tracking-wider mb-2">DESTINATION</label>
//                   <select
//                     name="mainPackage"
//                     value={formData.mainPackage}
//                     onChange={handleMainPackageChange}
//                     className="w-full bg-blue-900/50 border border-yellow-400/20 rounded px-4 py-3 text-white focus:outline-none focus:border-yellow-400/50"
//                     required
//                   >
//                     <option value="">Select Destination</option>
//                     {packages.map(pkg => (
//                       <option key={pkg.name} value={pkg.name}>
//                         {pkg.name} 
//                       </option>
//                     ))}
//                   </select>
//                 </div>
//               </div>

//               {/* Sub Package and Number of Persons */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//                 {selectedMainPackage && (
//                   <div>
//                     <label className="block text-sm text-yellow-400 tracking-wider mb-2">SUB PACKAGE</label>
//                     <select
//                       name="subPackage"
//                       value={formData.subPackage}
//                       onChange={handleChange}
//                       className="w-full bg-blue-900/50 border border-yellow-400/20 rounded px-4 py-3 text-white focus:outline-none focus:border-yellow-400/50"
//                     >
//                       <option value="">Select Sub Package</option>
//                       {selectedMainPackage.subPlaces.map(subPlace => (
//                         <option key={subPlace.name} value={subPlace.name}>
//                           {subPlace.name} 
//                         </option>
//                       ))}
//                     </select>
//                   </div>
//                 )}
//                 <div>
//                   <label className="block text-sm text-yellow-400 tracking-wider mb-2">NUMBER OF PERSONS</label>
//                   <input
//                     type="number"
//                     name="numberOfPersons"
//                     value={formData.numberOfPersons}
//                     onChange={handleChange}
//                     min="1"
//                     className="w-full bg-blue-900/50 border border-yellow-400/20 rounded px-4 py-3 text-white focus:outline-none focus:border-yellow-400/50"
//                     required
//                   />
//                 </div>
//               </div>

//               {/* Month of Travel */}
//               <div className="mb-6">
//                 <label className="block text-sm text-yellow-400 tracking-wider mb-2">MONTH OF TRAVEL</label>
//                 <select
//                   name="monthOfTravel"
//                   value={formData.monthOfTravel}
//                   onChange={handleChange}
//                   className="w-full bg-blue-900/50 border border-yellow-400/20 rounded px-4 py-3 text-white focus:outline-none focus:border-yellow-400/50"
//                   required
//                 >
//                   <option value="">Select Month</option>
//                   {Array.from({ length: 12 }, (_, i) => new Date(0, i).toLocaleString('default', { month: 'long' }))
//                     .map(month => (
//                       <option key={month} value={month}>{month}</option>
//                     ))
//                   }
//                 </select>
//               </div>

//               {/* Message */}
//               <div className="mb-6">
//                 <label className="block text-sm text-yellow-400 tracking-wider mb-2">MESSAGE</label>
//                 <textarea
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   rows="4"
//                   className="w-full bg-blue-900/50 border border-yellow-400/20 rounded px-4 py-3 text-white focus:outline-none focus:border-yellow-400/50"
//                   required
//                 ></textarea>
//               </div>

//               {/* Submit Button */}
//               <button
//                 type="submit"
//                 disabled={isSubmitting}
//                 className={`w-full bg-yellow-400 text-blue-950 py-4 rounded tracking-wider transition-colors duration-300 ${
//                   isSubmitting 
//                     ? 'opacity-75 cursor-not-allowed' 
//                     : 'hover:bg-yellow-300'
//                 }`}
//               >
//                 {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
//               </button>
//             </motion.form>
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { packages } from '../data/packages';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      duration: 0.5,
      staggerChildren: 0.3 
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.7 }
  }
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    mainPackage: '',
    subPackage: '',
    numberOfPersons: '',
    monthOfTravel: '',
    message: ''
  });

  const [selectedMainPackage, setSelectedMainPackage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ status: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleMainPackageChange = (e) => {
    const { value } = e.target;
    const selected = packages.find(pkg => pkg.name === value);
    setSelectedMainPackage(selected);
    setFormData(prev => ({
      ...prev,
      mainPackage: value,
      subPackage: ''
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ status: '', message: '' });

    try {
      const response = await fetch('http://localhost:3001/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          status: 'success',
          message: 'Thank you for your inquiry! We will get back to you soon.'
        });

        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          mainPackage: '',
          subPackage: '',
          numberOfPersons: '',
          monthOfTravel: '',
          message: ''
        });
        setSelectedMainPackage(null);
      } else {
        throw new Error(data.error || 'Failed to send message');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus({
        status: 'error',
        message: 'Something went wrong. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-blue-950">
      <div className="max-w-7xl mx-auto px-8 py-24">
        {/* Header Section */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="mb-8">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-12 bg-yellow-400"></div>
              <span className="text-yellow-400 tracking-[0.3em] text-sm">CONNECT WITH US</span>
              <div className="h-px w-12 bg-yellow-400"></div>
            </div>
            <h1 className="text-5xl font-light text-white tracking-wide mb-6">Begin Your Royal Journey</h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Let us craft an extraordinary travel experience tailored to your desires. 
              Our luxury travel specialists await your correspondence.
            </p>
          </motion.div>
        </motion.div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-12"
          >
            <motion.div variants={itemVariants} className="space-y-8">
              {[
                {
                  title: "LUXURY INQUIRIES",
                  content: "+91 91599 73503",
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  )
                },
                {
                  title: "EMAIL",
                  content: "info@grandroyaltours.com",
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  )
                },
                {
                  title: "LOCATION",
                  content: "Hyderabad, Telangana, India",
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  )
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-6 group">
                  <div className="w-12 h-12 rounded-full bg-yellow-400/10 flex items-center justify-center text-yellow-400">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-sm text-yellow-400 tracking-wider mb-2">{item.title}</h3>
                    <p className="text-white text-lg">{item.content}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-blue-600/10 rounded-lg blur-xl"></div>
            
            {/* Status Message */}
            {submitStatus.message && (
              <div className={`mb-4 p-4 rounded ${
                submitStatus.status === 'success' 
                  ? 'bg-green-500/20 text-green-200' 
                  : 'bg-red-500/20 text-red-200'
              }`}>
                {submitStatus.message}
              </div>
            )}

            <motion.form 
              onSubmit={handleSubmit}
              className="relative bg-blue-900/20 p-8 rounded-lg border border-yellow-400/20"
            >
              {/* Name and Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm text-yellow-400 tracking-wider mb-2">NAME</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-blue-900/50 border border-yellow-400/20 rounded px-4 py-3 text-white focus:outline-none focus:border-yellow-400/50"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm text-yellow-400 tracking-wider mb-2">EMAIL</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-blue-900/50 border border-yellow-400/20 rounded px-4 py-3 text-white focus:outline-none focus:border-yellow-400/50"
                    required
                  />
                </div>
              </div>

              {/* Phone and Main Package */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm text-yellow-400 tracking-wider mb-2">PHONE</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-blue-900/50 border border-yellow-400/20 rounded px-4 py-3 text-white focus:outline-none focus:border-yellow-400/50"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm text-yellow-400 tracking-wider mb-2">DESTINATION</label>
                  <select
                    name="mainPackage"
                    value={formData.mainPackage}
                    onChange={handleMainPackageChange}
                    className="w-full bg-blue-900/50 border border-yellow-400/20 rounded px-4 py-3 text-white focus:outline-none focus:border-yellow-400/50"
                    required
                  >
                    <option value="">Select Destination</option>
                    {packages.map(pkg => (
                      <option key={pkg.name} value={pkg.name}>
                        {pkg.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Sub Package and Number of Persons */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {selectedMainPackage && (
                  <div>
                    <label className="block text-sm text-yellow-400 tracking-wider mb-2">SUB PACKAGE</label>
                    <select
                      name="subPackage"
                      value={formData.subPackage}
                      onChange={handleChange}
                      className="w-full bg-blue-900/50 border border-yellow-400/20 rounded px-4 py-3 text-white focus:outline-none focus:border-yellow-400/50"
                    >
                      <option value="">Select Sub Package</option>
                      {selectedMainPackage.subPlaces.map(subPlace => (
                        <option key={subPlace.name} value={subPlace.name}>
                          {subPlace.name}
                        </option>
                      ))}
                    </select>
                  </div>
                )}
                <div>
                  <label className="block text-sm text-yellow-400 tracking-wider mb-2">NUMBER OF PERSONS</label>
                  <input
                    type="number"
                    name="numberOfPersons"
                    value={formData.numberOfPersons}
                    onChange={handleChange}
                    min="1"
                    className="w-full bg-blue-900/50 border border-yellow-400/20 rounded px-4 py-3 text-white focus:outline-none focus:border-yellow-400/50"
                    required
                  />
                </div>
              </div>

              {/* Month of Travel */}
              <div className="mb-6">
                <label className="block text-sm text-yellow-400 tracking-wider mb-2">MONTH OF TRAVEL</label>
                <select
                  name="monthOfTravel"
                  value={formData.monthOfTravel}
                  onChange={handleChange}
                  className="w-full bg-blue-900/50 border border-yellow-400/20 rounded px-4 py-3 text-white focus:outline-none focus:border-yellow-400/50"
                  required
                >
                  <option value="">Select Month</option>
                  {Array.from({ length: 12 }, (_, i) => new Date(0, i).toLocaleString('default', { month: 'long' }))
                    .map(month => (
                      <option key={month} value={month}>{month}</option>
                    ))
                  }
                </select>
              </div>

              {/* Message */}
              <div className="mb-6">
                <label className="block text-sm text-yellow-400 tracking-wider mb-2">MESSAGE</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full bg-blue-900/50 border border-yellow-400/20 rounded px-4 py-3 text-white focus:outline-none focus:border-yellow-400/50"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-yellow-400 text-blue-950 py-4 rounded tracking-wider transition-colors duration-300 ${
                  isSubmitting 
                    ? 'opacity-75 cursor-not-allowed' 
                    : 'hover:bg-yellow-300'
                }`}
              >
                {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
              </button>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
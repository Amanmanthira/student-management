import React from 'react';
import HomeNav from '../components/HomeNav';
import { FaCheckCircle, FaCloud, FaMobileAlt, FaChartBar, FaSyncAlt, FaShieldAlt } from 'react-icons/fa';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="area">
        <HomeNav />
        <div>
          <ul className="circles">
            <div className='p-6 py-20'>
              <div className="text-center">
                <h1 className="text-4xl text-white font-bold md:hidden">Free Online School Management Software</h1>
                <h1 className="hidden md:block text-4xl text-white md:font-extrabold md:text-6xl space-y-4">Free Online<br />School Management Software</h1>
              </div>
              <div className='text-center md:space-y-4'>
                <p className='text-gray-400 md:hidden py-7'>Now you can manage your school, college, or any educational center with eSkooly. It's 100% free for a lifetime with no limitations</p>
                <p className='text-gray-400 md:block hidden py-7 text-xl'>Now you can manage your school, college, or any educational center with<br /> eSkooly. It's 100% free for a lifetime with no limitations</p>
              </div>
              <div className="flex flex-col items-center gap-4 md:flex-row md:justify-center">
                <button className="bg-indigo-700 rounded-sm px-5 py-2 text-white md:w-auto">Sign Up Now, it's Free!</button>
                <button className="bg-white rounded-sm px-5 py-2 text-black md:w-auto">Learn More</button>
              </div>
              <div className='3dmodel w-full max-w-2xl mx-auto max-sm:mt-11'>
                <img src="/heroimg.png" alt="Hero" className="mb-5 w-full h-auto object-cover md:max-h-full floating" />
              </div>
            </div>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
      {/* Hero Section End */}

      {/* Features Section */}
      <div className='bg-indigo-600 w-full py-16 px-5 md:h-screen md:py-24'>
        <div className='text-center mb-16 '>
          <h1 className='text-4xl text-white font-bold md:text-5xl'>Features Of School Management Software</h1>
        </div>
        <div className='flex flex-wrap justify-center items-center space-y-14'>
          <div className='w-full md:w-1/3 flex justify-center mb-8 md:mb-0 md:hidden'>
            <img src="https://eskooly.com/assets/images/play1.png" alt="Central" className="w-72 h-auto object-cover" />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' >
            <div className='flex flex-col items-center text-center'>
            <div className='w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 floating'>
              <FaCheckCircle className="text-blue-600 w-8 h-8 " />
            </div>
              <h2 className='text-lg text-white font-bold'>Absolutely Free</h2>
              <p className='text-gray-200 mt-2'>eSkooly is an absolutely 100% free school management software for a lifetime with no limitations. No need to buy anything. Just Sign Up</p>
            </div>
            <div className='flex flex-col items-center text-center'>
            <div className='w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 floating'>
               <FaCloud className="text-blue-600 w-8 h-8" />
            </div>
              <h2 className='text-lg text-white font-bold'>Cloud Based Software</h2>
              <p className='text-gray-200 mt-2'>eSkooly is free school software that is always online, you can access it from anywhere, anytime. We will take care of your data and backups.</p>
            </div>
            <div className='flex flex-col items-center text-center'>
            <div className='w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 floating'>
              <FaMobileAlt className="text-blue-600 w-8 h-8" />
            </div>
              <h2 className='text-lg text-white font-bold'>Responsive Web Design</h2>
              <p className='text-gray-200 mt-2'>You can use our free school management software on any device, like Mobile, Tablet, Laptop, or desktop due to its responsive design.</p>
            </div>
            <div className='flex flex-col items-center text-center'>
            <div className='w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 floating'>
             <FaChartBar className="text-blue-600 w-8 h-8" />
            </div>
              <h2 className='text-lg text-white font-bold'>Infographics & Animations</h2>
              <p className='text-gray-200 mt-2'>We use infographics and animations to explain student's reports and results. Our free school software facilitates you with the optimized result.</p>
            </div>
            <div className='flex flex-col items-center text-center'>
            <div className='w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 floating'>
              <FaSyncAlt className="text-blue-600 w-8 h-8" />
            </div>
              <h2 className='text-lg text-white font-bold'>Regular Updates & Support</h2>
              <p className='text-gray-200 mt-2'>We add new and awesome features regularly to make our school administrative software unmatchable. Free online 24/7 support for users.</p>
            </div>
            <div className='flex flex-col items-center text-center'>
            <div className='w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 floating'>
              <FaShieldAlt className="text-blue-600 w-8 h-8" />
            </div>
              <h2 className='text-lg text-white font-bold'>Fast, Secure & Easy</h2>
              <p className='text-gray-200 mt-2'>We use advanced tools and technologies to build up this free school software. It is super fast, secure, reliable, and easy to use and manage.</p>
            </div>
          </div>
        </div>
      </div>
      {/* Features Section End */}

      {/* intro Section  */}
      <div className='bg-indigo-800 w-full py-16 px-5 md:h-screen md:py-24 md:px-32'>
        <div className='flex flex-wrap justify-center items-center'>
          <div className='grid grid-cols-1 md:grid-cols-2  gap-8' >
            <div className='flex flex-col md:px-6'>
              <h1 className='text-white font-bold text-3xl md:text-4xl '>Single Stop Solution For School Management</h1>
              <p className='text-white text-sm mt-4 leading-relaxed'>Managing any educational institute is not a piece of cake. Managing students, staff, timetable, exams, class test, attendance, fees collection, accounts, etc. It does not end here. Parents are always worried about their child's performance and they need satisfaction. They care about their child's academic statics. Moreover, we have seen schools using huge registers to mark the attendance of their students and staff. And we have also seen that schools manage their admission, exams data, class tests data, etc, manually. We know it takes a lot of time and is very difficult to manage.
              Well! it's time to put check on these worries. eSkooly presents you a free online school management software to make conventional tasks easier. This is the one-stop solution to manage, track and record everything within your school or organization. Our free online school management software includes admin, staff and students panel, exams module, attendance module, fees collection module, salary and expense management, class tests management, inventory management, students and staff data record system, and many more. It is very easy to use and manage because eskooly is a free online school management software for end-users. If you can send an email you can use eskooly.</p>
              <button className='border border-white rounded-3xl w-52 py-3 mt-4 text-white font-bold hover:bg-white hover:text-black transition duration-700'>Get started for free</button>
            </div>
            <div className='flex flex-col'>
            <img src="https://eskooly.com/assets/images/illustrations/mockups/landing3/online-class.png" alt="Hero" className="mb-5 w-full h-auto object-cover md:max-h-full md:px-9 floating" />
            </div>
          </div>

        </div>

      </div>
      {/* intro Section End */}

      {/* Contact Section  */}
<div className='bg-indigo-600 w-full py-16 md:h-screen md:py-24 md:px-9 m-0'>
  <div className='text-center py-5 md:mb-9'>
    <h1 className='text-3xl md:text-5xl text-white font-bold'>Drop us a Line.</h1>
    <p className='text-white font-semibold md:text-2xl mt-2'>Ask us a question, or just say Hello.</p>
  </div>

  <div className='flex flex-wrap justify-center items-center'>
          <div className='grid grid-cols-1 md:grid-cols-2  gap-8 px-6' >
            <div className='flex flex-col md:px-6'>
              <div className='md:flex md:space-x-4  '>
                <div className='flex flex-col w-full'>
                  <label htmlFor='firstName' className='text-white text-sm mb-2'>First Name</label>
                  <input type='text' id='firstName' name='firstName' className='border border-white rounded-full w-full py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300' required/>
                </div>
                <div className='flex flex-col w-full'>
                  <label htmlFor='lastName' className='text-white text-sm mb-2 '>Last Name</label>
                  <input type='text' id='lastName' name='lastName' className='border border-white rounded-full w-full py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300' required/>
                </div>
              </div>
              <div className='md:flex md:space-x-4 '>
                <div className='flex flex-col w-full'>
                  <label htmlFor='email' className='text-white text-sm mb-2'>Email</label>
                  <input type='email' id='email' name='email' className='border border-white rounded-full w-full py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300' required/>
                </div>
                <div className='flex flex-col w-full'>
                  <label htmlFor='phone' className='text-white text-sm mb-2'>Phone</label>
                  <input type='tel' id='phone' name='phone' className='border border-white rounded-full w-full py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300' required/>
                </div>
              </div>
        <div className='flex flex-col'>
          <label htmlFor='message' className='text-white text-sm mb-2'>Message*</label>
          <textarea id='message' name='message' className='border border-white rounded-2xl w-full py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 h-32' required></textarea>
        </div>
        <button type='submit' className=' w-40 bg-indigo-900 text-white rounded-full py-3 px-6 text-sm font-semibold hover:bg-indigo-50 transition duration-300 mt-5'>
          Submit
        </button>
            </div>
            <div className='flex flex-col'>
            <img src="https://eskooly.com/assets/images/illustrations/mockups/landing3/language.png" alt="Hero"  className="cimg mb-5 object-cover md:max-h-full md:px-9 md:ml-16 floating py-5 md:py-1  w-auto h-auto " />
            </div>
          </div>

        </div>
        </div>
{/* Contact Section End*/}

    </>
  );
}

export default Home;

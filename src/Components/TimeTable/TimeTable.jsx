import React from 'react'
import bannerImage from "../../assets/banner-bg.png";


const TimeTable = () => {
  return (
    <div>
        <div  className="bg-gray-100 p-6 min-h-screen">
      {/* Timetable Container */}
      <div style={{ backgroundImage: `url(${bannerImage})` }} className="container mx-auto bg-white p-4 shadow-md rounded-lg">
        <h2 className="text-white text-2xl font-bold text-center mb-6">Class Timetable</h2>

        {/* Timetable Grid */}
        <div className="grid grid-cols-6 gap-4 text-center">
          {/* Header Row */}
          <div className="font-semibold bg-blue-500 text-black p-2 rounded">Time</div>
          <div className="font-semibold bg-blue-500 text-black p-2 rounded">Monday</div>
          <div className="font-semibold bg-blue-500 text-black p-2 rounded">Tuesday</div>
          <div className="font-semibold bg-blue-500 text-black p-2 rounded">Wednesday</div>
          <div className="font-semibold bg-blue-500 text-black p-2 rounded">Thursday</div>
          <div className="font-semibold bg-blue-500 text-black p-2 rounded">Friday</div>

          {/* Time Slots and Classes */}
          {/* Time Slot 1 */}
          <div className="font-semibold bg-gray-400 p-2 rounded">08:00 - 09:00</div>
          <div className="bg-white hover:bg-green-300 p-2 rounded">Math</div>
          <div className="bg-white hover:bg-yellow-300 p-2 rounded">Physics</div>
          <div className="bg-white hover:bg-pink-300 p-2 rounded">Chemistry</div>
          <div className="bg-white hover:bg-purple-300 p-2 rounded">History</div>
          <div className="bg-white hover:bg-red-300 p-2 rounded">Biology</div>

          {/* Time Slot 2 */}
          <div className="font-semibold bg-gray-400 p-2 rounded">09:00 - 10:00</div>
          <div className="bg-white hover:bg-yellow-300 p-2 rounded">English</div>
          <div className="bg-white hover:bg-green-300 p-2 rounded">Math</div>
          <div className="bg-white hover:bg-blue-300 p-2 rounded">PE</div>
          <div className="bg-white hover:bg-orange-300 p-2 rounded">Art</div>
          <div className="bg-white hover:bg-pink-300 p-2 rounded">Physics</div>

          {/* Time Slot 3 */}
          <div className="font-semibold bg-gray-400 p-2 rounded">10:00 - 11:00</div>
          <div className="bg-white hover:bg-purple-300 p-2 rounded">History</div>
          <div className="bg-white hover:bg-red-300 p-2 rounded">Biology</div>
          <div className="bg-white hover:bg-green-300 p-2 rounded">Math</div>
          <div className="bg-white hover:bg-blue-300 p-2 rounded">PE</div>
          <div className="bg-white hover:bg-yellow-300 p-2 rounded">Chemistry</div>

          {/* Time Slot 4 */}
          <div className="font-semibold bg-gray-400 p-2 rounded">11:00 - 12:00</div>
          <div className="bg-white hover:bg-pink-100 p-2 rounded">Chemistry</div>
          <div className="bg-white hover:bg-purple-100 p-2 rounded">Art</div>
          <div className="bg-white hover:bg-green-100 p-2 rounded">Math</div>
          <div className="bg-white hover:bg-orange-100 p-2 rounded">Physics</div>
          <div className="bg-white hover:bg-red-100 p-2 rounded">Biology</div>

          {/* Time Slot 5 */}
          <div className="font-semibold bg-gray-400 p-2 rounded">01:00 - 02:00</div>
          <div className="bg-white hover:bg-blue-300 p-2 rounded">PE</div>
          <div className="bg-white hover:bg-yellow-300 p-2 rounded">Chemistry</div>
          <div className="bg-white hover:bg-green-300 p-2 rounded">Math</div>
          <div className="bg-white hover:bg-red-300 p-2 rounded">Biology</div>
          <div className="bg-white hover:bg-purple-300 p-2 rounded">History</div>

          {/* Time Slot 6 */}
          <div className="font-semibold bg-gray-400 p-2 rounded">02:00 - 03:00</div>
          <div className="bg-white hover:bg-orange-300 p-2 rounded">Art</div>
          <div className="bg-white hover:bg-pink-300 p-2 rounded">English</div>
          <div className="bg-white hover:bg-purple-300 p-2 rounded">History</div>
          <div className="bg-white hover:bg-blue-300 p-2 rounded">PE</div>
          <div className="bg-white hover:bg-green-300 p-2 rounded">Math</div>
        </div>
      </div>
    </div>



    <form className='py-10  px-10' action="" autoComplete="on" method='post'>
          <div className="form w-full h-fit  shadow-inner bg-gray-500 mt-4 p-4 rounded-xl ">
            <h2 className="text-white font-bold text-3xl text-center px-10 mb-6 ">
              Request A Free Quote
            </h2>

            <div className="grid grid-cols-2 gap-4">

              {/* Row 1 */}

              
              <div className="flex flex-col">
                <label
                  htmlFor="select1"
                  className="text-gray-700 mb-2 font-medium"
                >
                  What Do You Need?
                </label>
                <select
                  id="select1"
                  className="border border-gray-300   p-2 rounded-md"
                >
                  <option value="">Vinyl Fence</option>
                  <option value="option1">Aluminium Fence</option>
                  <option value="option2">Wood Fence</option>
                  <option value="option3">Chain Link Fence</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="select1"
                  className="text-gray-700 mb-2 font-medium"
                >
                  How Soon?
                </label>
                <select
                  id="select1"
                  className="border border-gray-300 p-2 rounded-md"
                >
                  <option value="">As Soon as</option>
                  <option value="option1">With in the next month</option>
                  <option value="option2">In the next 3-6 months</option>
                  <option value="option3">just getting budget idea</option>
                </select>
              </div>

              {/* Row 2 */}
              <div className="flex flex-col">
                <label
                  htmlFor="input3"
                  className="text-gray-700 mb-2 font-medium"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="input3"
                  placeholder="Full Name"
                  className="border border-gray-300 p-2 rounded-md"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="input4"
                  className="text-gray-700 mb-2 font-medium"
                >
                  Phone
                </label>
                <input
                  type="text"
                  id="input4"
                  placeholder="Phone"
                  className="border border-gray-300 p-2 rounded-md"
                />
              </div>

              {/* Row 3 */}
              <div className="flex flex-col">
                <label
                  htmlFor="input5"
                  className="text-gray-700 mb-2 font-medium"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="input5"
                  placeholder="Email"
                  className="border border-gray-300 p-2  rounded-md"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="input6"
                  className="text-gray-700 mb-2 font-medium"
                >
                  Zip Code
                </label>
                <input
                  type="text"
                  id="input6"
                  placeholder="Zip Code"
                  className="border border-gray-300 p-2  rounded-md"
                />
              </div>


              <label htmlFor="checkbox" className='font-bold text-white'>Are you a Human</label>
              <input type="checkbox" id='checkbox'  />


              <label htmlFor="radio" className='font-bold text-white'>Fill in the black</label>
              <input type="radio" id='radio'  />
              


              {/* Button Row - Spans 2 columns */}
              <button className="col-span-2 font-medium text-base bg-white hover:bg-blue-600 text-black p-2 rounded mt-4 ">
                Submit
              </button>
            </div>
          </div>
          </form>
    </div>
  )
}

export default TimeTable

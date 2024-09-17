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
    </div>
  )
}

export default TimeTable

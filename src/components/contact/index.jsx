import React from 'react'

const index = () => {
  return (
    <div className="max-w-screen-xl mx-auto my-7 lg:px-20" id="contact">
  <form action="" method="post">
    <div className="w-full p-8 my-4 mr-auto shadow-2xl md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 rounded-2xl bg-white">
      <div className="flex">
        <h1 className="text-5xl text-[#A85168] font-bold ">Contact Me</h1>
      </div>
      <div className="grid grid-cols-1 gap-5 mt-5 md:grid-cols-2">
        <input className="w-full p-3 mt-2 text-gray-900 bg-gray-100 rounded-lg focus:outline-none focus:border-outline" type="text" placeholder="First Name" name="firstName" autocomplete="name" />
        <input className="w-full p-3 mt-2 text-gray-900 bg-gray-100 rounded-lg focus:outline-none focus:shadow-outline" type="text" placeholder="Last Name" name="lastName" autocomplete="family-name" />
        <input className="w-full p-3 mt-2 text-gray-900 bg-gray-100 rounded-lg focus:outline-none focus:shadow-outline" type="email" placeholder="Email" name="email" autocomplete="email" />
        <input className="w-full p-3 mt-2 text-gray-900 bg-gray-100 rounded-lg focus:outline-none focus:shadow-outline" type="tel" placeholder="Phone" name="phone" autocomplete="tel" />
      </div>
      <div className="my-4">
        <textarea placeholder="Message" className="w-full h-32 p-3 mt-2 text-gray-900 bg-gray-100 rounded-lg focus:outline-none focus:shadow-outline" name="message" autocomplete="message"></textarea>
      </div>
      <div className="w-1/2 my-2 lg:w-1/4">
        <button type="submit" className="w-full p-3 text-sm font-bold tracking-wide text-gray-100 uppercase bg-[#A12347] rounded-xl hover:bg-blue-700-lg focus:outline-none focus:shadow-outline">
                        Send Message
                    </button>
      </div>
    </div>
  </form>
  <div className="w-full px-8 py-12 ml-auto bg-[#1B6485] lg:-mt-96 lg:w-2/6 rounded-2xl">
    <div className="flex flex-col text-white">
      <div className="flex w-2/3 my-4 lg:w-1/2">
        <img className="pt-2 pr-2 h-7 w-7" src="https://icons8.com/icon/OBmVbH2qOGwK/location" alt="location"/>
        <div>
          <h2 className="text-2xl">Office</h2>
          <p className="text-gray-200 white-space: nowrap">Ulaanbaatar, Mongolia</p>
        </div>
      </div>
      <div className="flex w-2/3 my-4 lg:w-1/2">
        <img className="pt-2 pr-2 h-7 w-7 " src="https://icons8.com/icon/letUS1DJO1ou/call" alt="call us"/>
        <div>
          <h2 className="text-2xl">Call</h2>
          <p className="text-gray-200 white-space: nowrap">Tel:+976 95669607</p>
        </div>
      </div>
      <div className="flex w-2/3 my-4 lg:w-1/2">
        <img className="pt-2 pr-2 h-7 w-7" src="https://icons8.com/icon/LPcVDft9Isqt/email" alt="Email us"/>
        <div>
          <h2 className="text-2xl">Email</h2>
          <p className="text-gray-200 white-space: nowrap">Email:otgoohghg.com</p>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default index

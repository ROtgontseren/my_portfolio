import React from 'react'

const index = () => {
  return (
    <div className="py-24 mt-24 w-full h-[100vh]" id='project'>
        <div className="mx-auto px-4 z-10 flex flex-col w-full bg-inherit justify-center items-center">
            <h2 class="text-4xl font-bold mb-8 text-center text-white z-10">My Project</h2>
            <div className="flex gap-8 opacity-100 ">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <img src="nomad.png" alt="Project Image" className="w-[320px] h-64"/>
                    <div className="p-6">
                        <h3 className="text-2xl font-bold mb-4">Nomad tour</h3>
                        <p className="text-gray-700">Travel and booking website</p>
                        <a href="https://nomad-tour-front.vercel.app" className="block text-blue-600 hover:underline mt-4">https://nomad-tour-front.vercel.app</a>
                    </div>
                </div>     
            </div>
        </div>
    </div>
  )
}

export default index;

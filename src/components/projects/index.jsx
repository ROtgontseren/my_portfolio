import React from 'react'

const index = () => {
  return (
    <section className="py-24 mt-24 w-full h-[100vh]" id='project'>
        <div className="mx-auto px-4 z-10 flex flex-col w-full bg-inherit justify-center items-center">
            <h2 class="text-4xl font-bold mb-8 text-center text-white z-10">🚀 Featured Projects</h2>
            <div className="flex gap-8 opacity-100 ">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <img src="https://picsum.photos/seed/picsum/400/400" alt="Project Image" className="w-full h-64 object-cover"/>
                    <div className="p-6">
                        <h3 className="text-2xl font-bold mb-4">Project Title</h3>
                        <p className="text-gray-700">This project is so cool, even my cat approves! 🐱</p>
                        <a href="#" className="block text-blue-600 hover:underline mt-4">Check it out! 🚀</a>
                    </div>
                </div>     
            </div>
        </div>
    </section>
  )
}

export default index;

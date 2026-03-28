import React from 'react'

function Card(btnText, channel) {
  console.log("btnText", btnText)
  console.log("channel", channel)
  return (
    <div className="md:max-w-sm w-full p-6 rounded-xl shadow-xl bg-black border border-zinc-800">
      <img
        src="https://picsum.photos/400/300?random=90"
        alt="Featured"
        className="w-full h-48 object-cover rounded-lg mb-6"
      />

      <h2 className="text-white text-xl font-bold" btnText= "click me">
        TechNexus
        
      </h2>

      <p className="text-gray-400 text-sm mt-2">
        center point of technology and innovation.
      </p>
    </div>
  )
}

export default Card
    

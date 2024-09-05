import React from 'react'

const skill = ({skill} : {skill : string}) => {
  return (
    <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-white text-black hover:bg-white/80">{skill}</div>
  )
}

export default skill

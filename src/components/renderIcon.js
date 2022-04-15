import React from 'react'

const RenderIcon = (props) => {
    return (
        <div className="flex flex-col items-center justify-center p-5 shadow-md shadow-black w-[200px] bg-black hover:scale-110 cursor-pointer duration-300">
            <img src={props.image} className="max-w-[100px] w-full" alt="" />
            <p className="mt-5 font-bold text-2xl text-white">{props.name}</p>
        </div>
    )
}

export default RenderIcon
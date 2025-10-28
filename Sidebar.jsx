import React from 'react'
import { CiSearch } from "react-icons/ci";
import SingleChat from './SingleChat';
import { chatdata } from './data/chatdata';

const Sidebar = () => {
  return (
    <>
    <div className="w-[90%] sm:w-[70%] md:w-[55%] lg-w[45%] xl:w-[35%] p-10 shadow-red-500 shadow-2xl 
    mx-auto my-10">
        <div className="flex border p-2 rounded-full border-gray-full">
            <CiSearch className='text-2xl' />
            <input type="text" className='w-full outline-0 ps-35' placeholder='search or start a new chat' />
        </div>
        {
            chatdata.map((item,index)=>{
                return <SingleChat {...item}/>
            })
        }
        <SingleChat/>
    </div>
    </>
  )
}

export default Sidebar
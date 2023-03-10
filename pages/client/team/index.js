import Image from "next/image"
import { members } from "../../../components/data/dataContents"
import { AiOutlinePlus, AiOutlineClose, AiOutlineMore } from "react-icons/ai";
import { picImg } from '../../../public/img/user/Avatar_team.png'
import Popup from "reactjs-popup";
import React, { useState } from "react";
const Team = () => {
    const [open, setOpen] = useState(false)
    const closeModal = () => setOpen(false)
   
    return (
        <React.Fragment>
            <div className="flex gap-4 p-4 pt-4 mt-20 font-play overflow-y-auto">
                <div className="flex flex-col w-full bg-white shadow-sm p-2">
                      <p className="text-gray-400">Team</p>
                    <div className="overflow-x-auto py-2 sm:flex sm:items-center sm:justify-between">    
                        <h2 className="md:text-3xl text-xl font-semibold">Team Member(8)</h2>
                        <button className="px-4 py-3 bg-blue-500 text-white flex items-center space-x-2 sm:mt-0 mt-4" onClick={() => setOpen(o => !o)}><AiOutlinePlus size={24} /><span>Add Member</span></button>    
                    </div>
                    <div className="overflow-x-auto p-2">
                        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8 hidden lg:block">
                            <div className="overflow-hidden">
                                <table className="min-w-full">
                                    <thead>
                                        <tr>
                                            <th scope="col" className="text-lg font-bold text-back font-bold px-6 py-4 text-left">
                                                Name
                                            </th>
                                            <th scope="col" className="text-lg font-bold text-gray-900 px-6 py-4 text-left">
                                                Country
                                            </th>
                                            <th scope="col" className="text-lg font-bold text-gray-900 px-6 py-4 text-left">
                                                Email
                                            </th>
                                            <th scope="col" className="text-lg font-bold text-gray-900 px-6 py-4 text-left flex justify-center items-center">
                                                Action
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {members.map((member, index) => {
                                            return (
                                                <>
                                                    <tr>
                                                        <td className="flex items-center space-x-2 text-base px-6 py-4 whitespace-nowrap">
                                                            <Image src='/img/user/Avatar_team.png' alt="pic" width={32} height={32} />
                                                            <span className="font-bold">{member.name}</span>
                                                        </td>
                                                        <td className="text-base text-gray-500 font-medium fonr-normal px-6 py-4 whitespace-nowrap">
                                                            {member.country}
                                                        </td>
                                                        <td className="text-base text-gray-500 font-medium fonr-normal px-6 py-4 whitespace-nowrap">
                                                            {member.email}
                                                        </td>
                                                        <td className="text-base text-gray-500 font-medium fonr-normal px-6 py-4 whitespace-nowrap flex justify-center items-center">
                                                            {member.act}
                                                        </td>
                                                    </tr>
                                                </>
                                            )
                                        })}

                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="lg:hidden block">                
                        {members.map((member, index) => {
                            return (
                                <div className="py-2 flex gap-2 border mt-2 mb-2 p-2 relative">
                        
                                    <Image width={70} height={70} alt="pic" src='/img/user/Avatar_5.png' />
                                    <div className="py-1.5">
                                        <p className="text-base text-black">{member.name}</p>
                                        <p className="text-sm text-gray-400">{member.email}</p>
                                        <p className="text-sm text-gray-400">{member.country}</p>
                                    </div>
                                    <AiOutlineMore size={24} className="absolute right-2" />
                               </div>
                            )
                        })}
                        </div>
                    </div>
                    
                </div>
            </div>
            <Popup open={open} closeOnDocumentClick onClose={closeModal}>
                <div className="md:w-[600px] shadow-md p-4 bg-white z-50">
                    <div className="flex items-center justify-between w-full">
                        <span className="text-md text-black">Add Members</span>
                        <a className="close" onClick={closeModal}>
                           <AiOutlineClose />
                        </a>
                    </div> 
                    <div className="flex items-center justify-between w-full py-4">
                        <input type="email" placeholder="Email" className="py-1 p-2 w-2/3 border" />
                        <button className="bg-blue-500 text-white py-1 w-36 px-6">Search</button>
                    </div>
                    <div className="flex items-center justify-between w-full py-2">
                        <div className="flex items-center space-x-2">
                            <Image src="/img/user/Avatar_team.png" width={48} height={48} alt="pic" />
                            <span className="font-medium text-sm">David Morgan</span>
                        </div>
                        <button className="text-blue-500 border border-blue-500 px-2 w-20 py-1 text-sm">Add</button>
                    </div>
                    <div className="flex items-center justify-between w-full py-2">
                        <div className="flex items-center space-x-2">
                            <Image src="/img/user/Avatar_team.png" width={48} height={48} alt="pic" />
                            <span className="font-medium text-sm">David Morgan</span>
                        </div>
                        <button className="text-blue-500 border border-blue-500 px-2 w-20 py-1 text-sm">Invite</button>
                    </div>
                </div>
            </Popup>
        </React.Fragment>

    )
}
export default Team
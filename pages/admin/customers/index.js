import React from "react"
import { BsSearch } from "react-icons/bs";
const Customer = () => {
    return (
        <React.Fragment>
            <div className="p-4 pt-4 bg-[#FAFAFA] h-full">
        <div className="flex flex-col w-full">
          <div className="overflow-x-auto font-play">
            <p className="text-gray-400">Overview</p>
            <div className="py-2 inline-block min-w-full flex justify-between items-center">
              <h3 className="text-4xl">My Projects</h3>
              <div className="flex items-center space-x-3">
                <div className="relative text-gray-600 focus-within:text-gray-400">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
                      <BsSearch />
                    </button>
                  </span>
                  <input type="search" name="q" className="py-3 border text-sm text-white pl-10 focus:outline-none focus:bg-white focus:text-gray-900" placeholder="Search..." autoComplete="off" />
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
        </React.Fragment>
    )
}
export default Customer
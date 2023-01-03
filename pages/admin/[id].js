import { ordersdata, dataUser } from "../../components/data/dataContents"
import DetailProject from "../../components/card/DetailProject"
import ProgressBar from "../../components/ProgressBar"
import ListTeam from "../../components/ListTeam"
import Image from "next/image"
import Invoice from "../../components/Invoice"
import Requiretment from "../../components/Requiretment"
import Discussion from "../../components/Discussion"
import Delivery from '../../components/Delivery'
import OrderRating from "../../components/OrderRating"
import InputMessage from "../../components/InputMessage"
import Satisfied from "../../components/Satisfied"
import CardExtendDeliver from "../../components/card/CardExtendDeliver"
import WorkDelivery from "../../components/WorkDelivery"
import { BsChevronRight } from "react-icons/bs";

import React, { useState } from "react"
export const getStaticPaths = async () => {
    const paths = ordersdata.map(itemData => ({
        params: { id: itemData.id.toString() },
    }))
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id
    const data = ordersdata.filter(p => p.id.toString() === id)
    return {
        props: {
            itemData: JSON.parse(JSON.stringify(data[0])),
        },
    }
}


const ProjectDetailAdmin = ({ itemData }) => {
    
    return (
        <React.Fragment>

            <div className="p-4 pt-4 bg-[#FAFAFA] h-full">
                <div className="w-full py-4">
                    <p className="text-gray-400 flex items-center space-x-2 py-1"><span>Order</span> <BsChevronRight /> <span>#{itemData.order_id}</span></p>
                    <h3 className="text-3xl">Project Name 1</h3>
                </div>
                <div className="flex w-full space-x-2">
                    <div className="w-2/3">
                        <div className="py-2">
                            <Requiretment />
                        </div>
                        <div className="py-2">
                            <Invoice />
                        </div>
                        <div className="py-2">
                            <Discussion />
                        </div>
                        <div className="py-2">
                            <Delivery />
                        </div>
                        <div className="py-2">
                            <WorkDelivery />
                        </div>
                        <div className="py-2">
                            <Satisfied />
                        </div>
                        
                        <div className="py-2">
                            <OrderRating />
                        </div>
                        <div className="py-2">
                            <InputMessage />
                        </div>
                    </div>
                    <div className="w-1/3 flex flex-col pl-16">
                        {itemData.status != 'Completed' ? (
                            <div className="p-2">
                                <CardExtendDeliver />
                            </div>
                             
                        ) : null}
                      
                        <div className="p-2">
                            <DetailProject itemData={itemData} />
                        </div>
                        <div className="p-2">
                            <div className="bg-white shadow-sm border font-play p-4 font-medium">
                                <p className="py-2">Your order is on progress.</p>
                                <ProgressBar progressPercentage={itemData.progress} />
                            </div>
                        </div>
                        <div className="py-2">
                             <ListTeam team={itemData.team} /> 
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}

export default ProjectDetailAdmin

import React from 'react'
import { Tabs } from 'antd';
import TopSale from '../TopSale'
import BestSeller from '../BestSeller'
import NewArrival from '../NewArrival'
export default function index() {
    const { TabPane } = Tabs;
    return (
        <>
            <div className="productSelction container mt-2 text-center align-items-center">
                <h2 className="fw-bolder lh-lg">SELECT YOUR BEST</h2>
                <div className="mt-5">
                    <Tabs defaultActiveKey="1" centered>
                        <TabPane tab="Top Sale" key="1">
                            <TopSale />
                        </TabPane>
                        <TabPane tab="New Arrival" key="2">
                            <BestSeller />
                        </TabPane>
                        <TabPane tab="Best Seller" key="3">
                            <NewArrival />
                        </TabPane>
                    </Tabs>
                </div>
            </div>
        </>
    )
}

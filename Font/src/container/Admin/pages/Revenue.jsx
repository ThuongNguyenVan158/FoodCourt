import React from 'react'

import Chart from 'react-apexcharts'

import { useSelector } from 'react-redux'

import DitgitRevenue from '../../../components/ditgit-revenue/DitgitRevenue'

import Table from '../../../components/table/Table'

import ditgitRevenues from '../../../assets/JsonData/ditgit-revenue.json'

const chartOptions = {
    series: [{
        name: 'Doanh thu theo tháng',
        data: [40,70,20,90,36,80,30,91,60,90,100,120]
    }],
    options: {
        color: ['#6ab04c', '#2980b9'],
        chart: {
            background: 'transparent'
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep','Oct','Nov','Dec']
        },
        legend: {
            position: 'top'
        },
        grid: {
            show: false
        }
    }
}

const hoadon = {
    head: [
        'Tên món',
        'Mã danh mục',
        'Giá tiền',
        'Số lượng',
        'Thành tiền',
        'Phương thức tt',
        'Ngày tt'
    ],
    body: [
        {
            "name": "Phở bò",
            "category": "Món nước",
            "Unitprice": "$25000",
            "Quantity": "2",
            "price": "$50000",
            "Payment": "Mono",
            "Datett":"11-05-2021"

        },
        {
            "name": "Cơm chiên",
            "category": "Món chiên",
            "Unitprice": "$20000",
            "Quantity": "2",
            "price": "$40000",
            "Payment": "Mono",
            "Datett":"11-05-2021"
        },
        {
            "name": "Bún bò bò",
            "category": "Món nước",
            "Unitprice": "$25000",
            "Quantity": "1",
            "price": "$25000",
            "Payment": "Mono",
            "Datett":"11-05-2021"
        },
        {
            "name": "Cơm chiên",
            "category": "Món chiên",
            "Unitprice": "$20000",
            "Quantity": "3",
            "price": "$60000",
            "Payment": "Mono",
            "Datett":"11-05-2021"
        },
        {
            "name": "Trà sửa thái xanh",
            "category": "Đồ uống",
            "Unitprice": "$20000",
            "Quantity": "3",
            "price": "$60000",
            "Payment": "Mono",
            "Datett":"11-05-2021"
        },
        {
            "name": "Trà chanh",
            "category": "Đồ uống",
            "Unitprice": "$20000",
            "Quantity": "3",
            "price": "$60000",
            "Payment": "Mono",
            "Datett":"11-05-2021"
        },
 ]
}

const renderBillHead = (item, index) => (
    <th key={index}>{item}</th>
)

const renderBillBody = (item, index) => (
    <tr key={index}>
        <td>{item.name}</td>
        <td>{item.category}</td>
        <td>{item.Unitprice}</td>
        <td>{item.Quantity}</td>
        <td>{item.price}</td>
        <td>{item.Payment}</td>
        <td>{item.Datett}</td>
    </tr>
)
 
const Revenue = () => {

    const themeReducer = useSelector(state => state.ThemeReducer.mode)

    return (
        <div>
            <h2 className="page-header">Quản lí doanh thu</h2>
            <div className="row">
                <div className="col-5">
                    <div className="row">
                        {
                            ditgitRevenues.map((item, index) => (
                                <div className="col-12" key={index}>
                                    <DitgitRevenue
                                        title={item.title}
                                        icon={item.icon}                                       
                                        count={item.count}                                       
                                    />
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="col-7">
                    <div className="card full-height">
                        {/* chart */}
                        <Chart
                            options={themeReducer === 'theme-mode-dark' ? {
                                ...chartOptions.options,
                                theme: { mode: 'dark'}
                            } : {
                                ...chartOptions.options,
                                theme: { mode: 'light'}
                            }}
                            series={chartOptions.series}
                            type='line'
                            height='100%'
                        />
                    </div>
                </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            </div>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card__header">
                            <h3>Danh sách hoá đơn trong ngày</h3>
                        </div>
                        <div className="card__body">
                            <Table
                                limit='5'
                                headData={hoadon.head}
                                renderHead={(item, index) => renderBillHead(item, index)}
                                bodyData={hoadon.body}
                                renderBody={(item, index) => renderBillBody(item, index)}
                            />
                            </div>                                            
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Revenue

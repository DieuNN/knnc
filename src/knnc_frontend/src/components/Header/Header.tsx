import { Col, Row, Button, Space,PageHeader } from 'antd';
import { blue } from '@ant-design/colors';
import 'antd/dist/antd.css';
import React, { useState } from 'react';
import "./Header.css"
// const gutters: Record<string, number> = {};
// const vgutters: Record<string, number> = {};
// const colCounts: Record<string, number> = {};

// [8, 16, 24, 32, 40, 48].forEach((value, i) => {
//     gutters[i] = value;
// });
// [8, 16, 24, 32, 40, 48].forEach((value, i) => {
//     vgutters[i] = value;
// });
// [2, 3, 4, 6, 8, 12].forEach((value, i) => {
//     colCounts[i] = value;
// });
type Props = {}


const Header = (props: Props) => {
    console.log(blue);
    const [size, setSize] = useState(12);
    // const [gutterKey, setGutterKey] = useState(1);
    // const [vgutterKey, setVgutterKey] = useState(1);
    // const [colCountKey, setColCountKey] = useState(2);

    // const cols = [];
    // const colCount = colCounts[colCountKey];
    // let colCode = '';
    // for (let i = 0; i < colCount; i++) {
    //     cols.push(
    //         <Col key={i.toString()} span={24 / colCount}>
    //             <div>Column</div>
    //         </Col>,
    //     );
    //     colCode += `  <Col span={${24 / colCount}} />\n`;
    // }

    return (
        <>
            <p>NqDyy^^</p>

            <header className='header'>
                <Row gutter={[4, 16]}>
                    <Col span={8}>
                        <div className='bl-logo'>
                            <span className="logo">Logo</span>
                        </div>
                    </Col>
                    <Col span={8}>
                        <nav className="menu">
                            <ul>
                                <li><a href="#">Trang chủ</a></li>
                                <li><a href="#">Hòm Quỹ</a></li>
                                <li><a href="#">Chợ tình thương</a></li>
                            </ul>
                        </nav>
                    </Col>
                    <Col span={8}>
                        <div className="btn-login">
                            <Button className="login">
                                <Space size={size}>
                                    Authenticate <img src="https://res.cloudinary.com/dielvkumg/image/upload/v1660903783/IC_1_rxetca.png" alt="" />
                                </Space>
                            </Button>
                        </div>
                    </Col>
                </Row>
            </header>
        </>
    );
};


export default Header



{/* <header className='header'>
<div className='header-grid'>
    <div className='bl-logo'>
        <span className="logo">Logo</span>
    </div>
    <nav className="menu">
        <ul>
            <li><a href="#">Trang chủ</a></li>
            <li><a href="#">Hòm Quỹ</a></li>
            <li><a href="#">Chợ tình thương</a></li>
        </ul>
    </nav>
    <div className="btn-login">
        <button>Authenticate <img src="https://res.cloudinary.com/dielvkumg/image/upload/v1660903783/IC_1_rxetca.png" alt="" /></button>
    </div>
</div>
</header> */}
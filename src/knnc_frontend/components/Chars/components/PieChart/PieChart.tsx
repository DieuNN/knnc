import React, { useState, useEffect } from 'react';
import { Pie } from '@ant-design/charts';

const PieChars: React.FC = () => {
    var data = [
        {
            type: 'Fund',
            value: 27,
        },
        {
            type: 'User',
            value: 25,
        },
        {
            type: 'Total NFT',
            value: 18,
        },
        {
            type: 'Total Post',
            value: 15,
        },
       
    ];
    var config = {
        appendPadding: 10,
        data: data,
        angleField: 'value',
        colorField: 'type',
        radius: 1,
        innerRadius: 0.6,
        label: {
            type: 'inner',
            offset: '-50%',
            content: '{value}',
            style: {
                textAlign: 'center',
                fontSize: 14,
            },
        },
        interactions: [{ type: 'element-selected' }, { type: 'element-active' }],
        statistic: {
            title: false,
            content: {
                style: {
                    whiteSpace: 'pre-wrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                },
                content: '',
            },
        },
    };
    return <Pie {...config} />;
};

export default PieChars;

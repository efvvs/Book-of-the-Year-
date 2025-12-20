import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

export default function () {
    const chartRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!chartRef.current) return;

        // 1. 初始化图表 DOM
        const chartDom = chartRef.current;
        const myChart = echarts.init(chartDom);

        // 2. 模拟数据：12个月的读书时长（小时）和读书本数（本）
        const months = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];

        const readingHours = [7.8, 21.9, 27.5, 35.9, 38.3, 32.95, 13.45, 1.8, 9.6, 33.4,16.7,7.9]; // 读书时长（小时）
        const booksRead = [1, 2, 9, 11, 7, 10, 2, 0, 4, 5, 4, 8]; // 读书本数（本）

        // 3. ECharts 配置项
        const option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    // type: 'cross', // 鼠标悬浮时显示十字准星
                },
            },
            legend: {
                data: ['阅读时长（小时）', '阅读量（本）'],
                top: 15,
                right: 0,
            },
            grid: {
                top: 90,
            },
            xAxis: {
                type: 'category',
                data: months,
                axisLabel: {
                    interval: 0, // 显示所有月份
                },
            },
            yAxis: [
                {
                    type: 'value',
                    name: '阅读时长（小时）',
                    position: 'left',
                    axisLabel: {
                        formatter: '{value} ',
                    },
                },
                {
                    type: 'value',
                    name: '阅读量（本）',
                    position: 'right',
                    axisLabel: {
                        formatter: '{value} ',
                    },
                    splitLine: {
                        show: false,
                    }
                },
            ],
            series: [
                {
                    name: '阅读时长（小时）',
                    type: 'bar',
                    data: readingHours,
                    itemStyle: {
                        color: '#4CAF50', // 柱状图颜色
                    },
                },
                {
                    name: '阅读量（本）',
                    type: 'line',
                    yAxisIndex: 1, // 使用右侧 Y 轴
                    data: booksRead,
                    itemStyle: {
                        color: '#FF9800', // 折线图颜色
                    },
                    lineStyle: {
                        width: 3,
                    },
                    symbol: 'circle',
                    symbolSize: 6,
                },
            ],
        };

        // 4. 设置配置项并渲染图表
        myChart.setOption(option);

        // 5. 响应式处理
        const handleResize = () => myChart.resize();
        window.addEventListener('resize', handleResize);

        // 6. 清理函数
        return () => {
            window.removeEventListener('resize', handleResize);
            myChart.dispose();
        };
    }, []);

    // 7. 返回图表容器
    return (
        <div>
            <div ref={chartRef} style={{ width: '100%', height: '450px',  }} />
        </div>
    );
}
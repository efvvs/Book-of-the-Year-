import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

export default function CalendarHeatmapChart() {
    const chartRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!chartRef.current) return;

        // 1. 获取 DOM 元素
        const chartDom = chartRef.current;

        // 2. 初始化 ECharts 实例
        const myChart = echarts.init(chartDom);

        // 3. 定义生成模拟数据的函数
        const getVirtualData = (year: string) => {
            const date = +echarts.time.parse(year + '-01-01');
            const end = +echarts.time.parse(+year + 1 + '-01-01');
            const dayTime = 3600 * 24 * 1000;
            const data: [string, number][] = [];
            for (let time = date; time < end; time += dayTime) {
                data.push([
                    echarts.time.format(time, '{yyyy}-{MM}-{dd}', false),
                    Math.floor(Math.random() * 10000),
                ]);
            }
            return data;
        };

        // 4. 定义 ECharts 配置项
        const option = {
            //   title: {
            //     top: 30,
            //     left: 'center',
            //     text: 'Daily Step Count - 2016',
            //   },
            tooltip: {
                show:false,
            },
            visualMap: {
                show:false,
                min: 0,
                max: 10000,
                type: 'piecewise', // 分段型视觉映射
                textStyle: {
                    color: 'green',
                },
            },
            calendar: {
                top: 30,
                left: 30,
                right: 30,
                cellSize: ['auto', 18],
                range: '2025', // 显示 2016 年
                itemStyle: {
                    borderWidth: 0.5,
                },
                yearLabel: { show: false },
            },
            series: {
                type: 'heatmap',
                coordinateSystem: 'calendar',
                data: getVirtualData('2025'),
            },
        };

        // 5. 设置配置项，渲染图表
        myChart.setOption(option);

        // 6. 响应式处理（可选）：窗口大小变化时重新调整图表
        const handleResize = () => {
            myChart.resize();
        };
        window.addEventListener('resize', handleResize);

        // 7. 清理函数：组件卸载时销毁图表 + 移除监听
        return () => {
            window.removeEventListener('resize', handleResize);
            myChart.dispose();
        };
    }, []); // 空依赖数组，只在组件挂载时运行一次

    // 8. 返回图表容器 div
    return <div ref={chartRef} style={{ width: '90%', height: '200px', margin: '20px auto' }} />;
} 
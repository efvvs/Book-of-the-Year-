import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

export default function() {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const chartDom = chartRef.current;
    const myChart = echarts.init(chartDom);

    const data = [
      { name: '阅读', actual: 20, target: 24 },
      { name: '写作', actual: 8, target: 12 },
    ];

    const option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: { type: 'shadow' },
      },
      legend: { show: false },
      xAxis: {
        type: 'value',
        // name: '数量（本 / 篇）',
        nameLocation: 'middle',
        nameGap: 30,
        min: 0,
      },
      yAxis: {
        type: 'category',
        data: data.map(item => item.name), // ['阅读', '写作']
      },
      series: [
        // 1. 柱状图：实际完成数量
        {
          name: '实际完成',
          type: 'bar',
          data: data.map(item => item.actual), // [20, 8]
          itemStyle: { color: '#4CAF50' },
        },
        // 2. 目标线：每个类目一个竖直线（x = 目标值，y = 类目索引）
        ...data.map((item, index) => ({
          name: '计划完成',
          type: 'line',
          data: [[item.target, index]], // [x = 目标值, y = 类目索引]
          lineStyle: {
            color: 'red',
            type: 'dashed',
            width: 10,
          },
          symbol: ['none', 'none'], // 不显示线两端符号
        })),
      ],
    };

    myChart.setOption(option);

    const handleResize = () => myChart.resize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      myChart.dispose();
    };
  }, []);

  return (
    <div>
      <div ref={chartRef} style={{ width: '100%', height: '400px'}} />
    </div>
  );
}
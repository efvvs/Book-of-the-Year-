import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

export default function() {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const chartDom = chartRef.current;
    const myChart = echarts.init(chartDom);

    const data = [
      { name: '读过', value: 154 },
      { name: '读完', value: 55 },
    ];

    const option = {
      tooltip: {
        trigger: 'item',
        // formatter: '{a} <br/>{b}: {c} 本 ({d}%)',
      },
      legend: {
        // orient: 'vertical',
        left: 'middle',
        top:20,
      },
      series: [
        {
          name: '读书状态',
          type: 'pie',
          radius: ['40%', '60%'],             // ✅ 关键：内半径 40%，外半径 70% → 形成“环形”
          center: 'center',  
          color: ['#d5cfe1', '#a09abc'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 5,
            borderColor: '#fff',
            borderWidth: 2,
          },
          label: {
            fontSize: 14,
            show: true,
            formatter: '{b}: {c} '+'本', // 扇形上显示：读过: 30
          },
          emphasis: {
            label: {
              show: true,
              fontSize: '18',
              fontWeight: 'bold',
            },
            scale: true,
          },
          labelLine: {
            show: true,
          },
          data: data, // 数据：读过、没读完
        },
      ],
      graphic: {
        elements: [
          {
            type: 'text',            // 文本类型
            left: 'center',          // 水平居中
            top: 'center',           // 垂直居中
            style: {
              text: `完成率 26%`, // 你要显示的文字
              fontSize: 28,          // 字体大小
              fontWeight: 'bold',    // 字体粗细
              fill: '#333',          // 字体颜色（黑色）
              textAlign: 'center',   // 文字对齐
            },
          },
        ],
      },
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
      <div ref={chartRef} style={{ width: '100%', height: '450px', }} />
    </div>
  );
}
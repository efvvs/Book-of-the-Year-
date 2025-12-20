import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { Tooltip } from 'recharts';

export default function () {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const chartDom = chartRef.current;
    const myChart = echarts.init(chartDom);

    // 📚 书籍类型（维度）
    const indicators = [
      { name: '文学', max: 60 },
      { name: '社会文化', max: 60 },
      { name: '历史', max: 60 },
      { name: '心理', max: 60 },
      { name: '个人成长', max: 60 },
      { name: '社会小说', max: 60 },
      { name: '悬疑推理', max: 60 },
      { name: '影视原著', max: 60 },
    ];

    // 📊 你在这几种类型上的阅读数量 / 兴趣评分（示例数据，可自定义）
    const data = [56.9, 20.5, 56.9, 20.9, 27.6, 18.3, 28.8, 17.3]; // 对应上面的 8 个类型

    const option = {
      tooltip: {
        trigger: 'item',
      },
    //   legend: {
    //     data: ['我的阅读'],
    //     top: 30,
    //   },
      radar: {
        // 雷达图坐标系配置
        indicator: indicators, // 各个维度（书籍类型）
        radius: '68%', // 雷达图大小
        center: ['45%', '48%'], // 图表位置微调
        axisName: {
          color: '#333',
          fontSize: 12,
        },
        grid:{
            top:10
        },
        splitLine: {
          lineStyle: {
            color: '#ddd', // 网格线颜色
          },
        },
        splitArea: {
          show: false, // 不显示分割区域颜色（可选）
        },
      },
      series: [
        {
          name: '阅读类型（时长）',
          type: 'radar',
          data: [
            {
              value: data,
            //   name: '我的阅读',
              itemStyle: {
                color: '#468faf', // 图形颜色
              },
              areaStyle: {
                color: 'rgba(70, 143, 175, 0.2)', // 填充区域透明度
              },
            },
          ],
        },
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
      <div ref={chartRef} style={{ width: '100%', height: '420px'}} />
    </div>
  );
}
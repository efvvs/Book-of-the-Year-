import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

export default function () {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const chartDom = chartRef.current;
    const myChart = echarts.init(chartDom);

    // 🕒 1. 定义一天中的时间段（8个区间，可根据需求调整）
    const timeSlots = [
      '0:00-3:00',   // 深夜
      '3:00-6:00',   // 凌晨
      '6:00-9:00',   // 早晨
      '9:00-12:00',  // 上午
      '12:00-15:00', // 中午
      '15:00-18:00', // 下午
      '18:00-21:00', // 傍晚
      '21:00-24:00', // 晚上（通常读书高峰）
    ];

    const readingValues = [
      5,  // 0:00-3:00（深夜） 
      5,  // 3:00-6:00（凌晨）  // ❗ 图片中无明显柱子，需实际数据补充
      60,  // 6:00-9:00（早晨）
      80,  // 9:00-12:00（上午）  // ❗ 图表显示上午为阅读峰值
      30,  // 12:00-15:00（中午） // ❗ 图片中无明显柱子，需实际数据补充
      50,  // 15:00-18:00（下午）
      70,  // 18:00-21:00（傍晚）
      90   // 21:00-24:00（晚上） // ❗ 图表显示夜晚为次高峰
    ];

    // 🎯 3. ECharts 极坐标面积图配置
    const option = {
      // title: {
      //   text: '我一天中不同时间段的阅读时间分布',
      //   left: 'center',
      //   textStyle: { fontSize: 16 },
      // },
      tooltip: {
        trigger: 'item',
        // formatter: function (params: any) {
        //   return `${params.name}<br/>阅读时间：${params.value} 分钟`;
        // },
      },
      // legend: {
      //   orient: 'vertical',
      //   left: 'left',
      //   top: 'middle',
      // },
      polar: {
        // ✅ 启用极坐标系统
        radius: '60%',
      },
      angleAxis: {
        type: 'category',
        data: timeSlots,         // 比如 ['20:00-24:00', '16:00-20:00', ...]
        startAngle: 0,           // 从顶部开始（可调整，比如 90 表示从右侧开始）
      },
      radiusAxis: {
        type: 'value',
        min: 0,
        axisLabel: {
          show: false, // ✅ 不显示刻度数字（比如 0, 20, 40...）
        },
        axisTick: {
          show: false, // ✅ 可选：不显示刻度线（小竖线）
        },
        axisLine: {
          show: false, // ✅ 可选：不显示最外面的那条轴线（从顶部到底部的径向线）
        },
      },

      series: [
        {
          name: '阅读时间（分钟）',
          type: 'bar', // 注意：在极坐标中，用 bar 类型实现“极坐标面积/柱状”
          data: readingValues,
          coordinateSystem: 'polar', // 关键：使用极坐标
          itemStyle: {
            color: (params: any) => {
              // 可选：为每个扇形设置不同颜色
              const colors = [
                '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4',
                '#FFEAA7', '#DDA0DD', '#98D8C8', '#F7DC6F',
              ];
              return colors[params.dataIndex];
            },
            borderRadius: 4,
          },
          emphasis: {
            scale: true,
          },
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
      <div ref={chartRef} style={{ width: '100%', height: '450px', }} />
    </div>
  );
}
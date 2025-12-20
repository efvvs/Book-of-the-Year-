import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

export default function() {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const chartDom = chartRef.current;
    const myChart = echarts.init(chartDom);

    // ✅ 你提供的核心配置：graphic + text + 描边动画 + keyframe
    const option = {
      graphic: {
        elements: [
          {
            type: 'text',
            left: 'center',
            top: 'center',
            style: {
              text: '关键词', // ✅ 你可以改成任意文字，比如“我的读书统计”
              fontSize: 80,
              fontWeight: 'bold',
              lineDash: [0, 200], // 初始：没有实线，只有空白
              lineDashOffset: 0,
              fill: 'transparent', // 初始填充透明
              stroke: '#000',      // 描边颜色：黑色
              lineWidth: 1,        // 描边宽度
            },
            keyframeAnimation: {
              duration: 3000,      // 动画时长 3 秒
              loop: true,          // 循环播放
              keyframes: [
                {
                  percent: 0.7,
                  style: {
                    fill: 'transparent',         // 前 70%：文字仍透明
                    lineDashOffset: 200,         // 描边逐渐绘制出来
                    lineDash: [200, 0],          // 实线长度 200
                  },
                },
                {
                  percent: 0.8,
                  style: {
                    fill: 'transparent',         // 80%：停顿一下，还是透明
                  },
                },
                {
                  percent: 1,
                  style: {
                    fill: 'black',               // 100%：最后填充黑色，文字完全显现
                  },
                },
              ],
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
      <div ref={chartRef} style={{ width: '800px', height: '400px', margin: '50px auto' }} />
    </div>
  );
}
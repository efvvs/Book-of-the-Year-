import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import worldJson from "../map/world.json";

const authorData = [
  { 
    name: "日本", 
    value: [138.2529, 36.2048, 7], 
    color: "rgba(74, 144, 226, 0.85)"  // 蓝色，带透明度
  },
  { 
    name: "中国", 
    value: [104.1954, 35.8617, 11], 
    color: "rgba(231, 76, 60, 0.85)"   // 红色，带透明度
  },
  { 
    name: "瑞典", 
    value: [18.6435, 60.1282, 5], 
    color: "rgba(155, 89, 182, 0.85)"  // 紫色，带透明度
  },
  { 
    name: "韩国", 
    value: [127.7669, 36.9075, 2], 
    color: "rgba(241, 196, 15, 0.85)"  // 黄色/金色，带透明度
  },
  { 
    name: "英国", 
    value: [-0.118092, 51.509865, 1], 
    color: "rgba(230, 126, 34, 0.85)"  // 橙色，带透明度
  },
  { 
    name: "法国", 
    value: [2.2137, 46.2276, 2], 
    color: "rgba(52, 152, 219, 0.85)"  // 浅蓝色，带透明度
  },
  { 
    name: "美国", 
    value: [-95.6650, 39.5000, 4], 
    color: "rgba(46, 204, 113, 0.85)"  // 绿色，带透明度
  }
];

// 作者统计说明：
// 日本 (7)：秋吉理香子(1)，叶真中显(4)，绫辻行人(1)，浅仓秋成(1)，东野圭吾(1)，高野和明(1)
// 中国 (11)：胡安焉(1)，余华(1)，马伯庸(4)，黄仁宇(1)，路遥(1)，兰小欢(1)，黄治军(2)，姚尧(1)，王慧玲(1)，张宏杰(1)，袁了凡(1)，《人物》杂志(1)
// 瑞典 (5)：弗雷德里克·巴克曼(4)，约翰·斯坦贝克(1)
// 韩国 (2)：赵南柱(1)，金草叶(1)
// 英国 (1)：威廉·萨默塞特·毛姆(1)
// 法国 (2)：安托万·德·圣埃克苏佩里(1)，波利娜·阿尔芒日(1)
// 美国 (4)：史蒂文·普莱斯菲尔德(1)，郎达·拜恩(1)，露露·米勒(1)，摩根·豪泽尔(1)

export default function WorldAuthorMap() {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const chart = echarts.init(chartRef.current);

    // 注册世界地图
    echarts.registerMap("world", worldJson as any);

    const option = {
      tooltip: {
        trigger: "item",
        formatter: (params: any) => {
          return `
            <div style="font-weight:bold;margin-bottom:5px">${params.data.name}</div>
            <div>作者数量：<span style="color:#FF6B6B;font-weight:bold">${params.data.value[2]}</span> 位</div>
          `;
        }
      },
   
      geo: {
        map: "world",
        zoom: 1.3,
        center: [10, 30],
        itemStyle: {
          areaColor: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
              offset: 0, color: 'rgba(52, 152, 219, 0.1)' // 浅蓝
            }, {
              offset: 1, color: 'rgba(23, 147, 229, 0.2)' // 深蓝
            }]
          },
          borderColor: 'rgba(255, 255, 255, 0.3)',
          borderWidth: 1,
          shadowColor: 'rgba(0, 0, 0, 0.3)',
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowOffsetY: 5
        },
        emphasis: {
          itemStyle: {
            areaColor: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [{
                offset: 0, color: 'rgba(46, 213, 115, 0.3)'
              }, {
                offset: 1, color: 'rgba(39, 174, 96, 0.2)'
              }]
            },
            borderColor: '#2ecc71',
            borderWidth: 1
          }
        },
        label: {
          show: false
        },
      },
      series: [
        {
          name: "作者分布",
          type: "scatter",
          coordinateSystem: "geo",
          data: authorData.map((item) => ({
            name: item.name,
            value: item.value, // [经度, 纬度, 作者数量]
            itemStyle: {
              color: item.color
            }
          })),
          symbolSize: (val: number[]) => {
            const count = val[2] || 1;
            return Math.max(count * 6, 12);
          },
          
          emphasis: {
            itemStyle: {
              opacity: 1,
              shadowBlur: 20,
            },
            scale: true,
          },
          label: {
            show: true,
            position: "top",
            formatter: "{b}",
            fontSize: 12,
            color: "#333",
            fontWeight: "bold",
          },
        },
      ],
    };

    chart.setOption(option);

    const handleResize = () => chart.resize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      chart.dispose();
    };
  }, []);

  return <div ref={chartRef} style={{ width: "100%", height: "500px" }} />;
}

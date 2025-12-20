// import React, { useEffect, useRef } from "react";
// import * as echarts from "echarts";
// import '../map/world.json'

// // 示例数据：作者地理分布（可替换后端数据）
// // 格式：[{ name: "城市/国家", value: [经度, 纬度, 数量] }]
// const authorData = [
//   { name: "北京", value: [116.4074, 39.9042, 10] },
//   { name: "上海", value: [121.4737, 31.2304, 6] },
//   { name: "纽约", value: [-74.006, 40.7128, 3] },
//   { name: "伦敦", value: [-0.1276, 51.5074, 4] },
//   { name: "东京", value: [139.6917, 35.6895, 5] },
// ];

// export default function() {
//   const chartRef = useRef(null);

//   useEffect(() => {
//     const chart = echarts.init(chartRef.current);

//     // 气泡大小缩放函数
//     const sizeScale = (val) => Math.sqrt(val) * 5 + 5;

//     const option = {
//       backgroundColor: "#f7f7f7",
//       tooltip: {
//         trigger: "item",
//         formatter: (p) => `${p.name}<br/>作者数量：${p.value[2]}`,
//       },

//       geo: {
//         map: "world",
//         // roam: true, // 可以缩放拖动
//         itemStyle: {
//           areaColor: "#e0e0e0",
//           borderColor: "#999",
//         },
//         emphasis: {
//           itemStyle: {
//             areaColor: "#c8e6c9",
//           },
//         },
//       },

//       series: [
//         {
//           name: "作者分布",
//           type: "scatter",
//           coordinateSystem: "geo",
//           symbolSize: (val) => sizeScale(val[2]),
//           itemStyle: {
//             color: "#ff7043",
//             shadowBlur: 10,
//             shadowColor: "rgba(0,0,0,0.2)",
//           },
//           data: authorData,
//         },
//       ],
//     };

//     chart.setOption(option);
//     return () => chart.dispose();
//   }, []);

//   return (
//     <div>
//       <div ref={chartRef} style={{ width: '100%', height: '450px'}} />
//     </div>
//   );
// }


import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import worldJson from "../map/world.json";

// 📊 作者分布数据（国家、经纬度、作者数量）

const authorData = [
  // 日本
  { name: "日本", value: [138.2529, 36.2048, 7] },
  
  // 中国
  { name: "中国", value: [104.1954, 35.8617, 11] },
  
  // 瑞典
  { name: "瑞典", value: [18.6435, 60.1282, 5] },
  
  // 韩国
  { name: "韩国", value: [127.7669, 36.9075, 2] },
  
  // 英国
  { name: "英国", value: [-0.118092, 51.509865, 1] },
  
  // 法国
  { name: "法国", value: [2.2137, 46.2276, 2] },
  
  // 美国
  { name: "美国", value: [-95.6650, 39.5000, 4] }
];

// 作者统计说明：
// 日本 (7)：秋吉理香子(1)，叶真中显(4)，绫辻行人(1)，浅仓秋成(1)，东野圭吾(1)，高野和明(1)
// 中国 (11)：胡安焉(1)，余华(1)，马伯庸(4)，黄仁宇(1)，路遥(1)，兰小欢(1)，黄治军(2)，姚尧(1)，王慧玲(1)，张宏杰(1)，袁了凡(1)，《人物》杂志(1)
// 瑞典 (5)：弗雷德里克·巴克曼(4)，约翰·斯坦贝克(1)
// 韩国 (2)：赵南柱(1)，金草叶(1)
// 英国 (1)：威廉·萨默塞特·毛姆(1)
// 法国 (2)：安托万·德·圣埃克苏佩里(1)，波利娜·阿尔芒日(1)
// 美国 (4)：史蒂文·普莱斯菲尔德(1)，郎达·拜恩(1)，露露·米勒(1)，摩根·豪泽尔(1)

// 注：部分国家的经纬度坐标为大致位置
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
      },
      geo: {
        map: "world",
        // roam: true, // 允许缩放和拖拽
        zoom: 1.2,
        center: [0, 20],
        itemStyle: {
          areaColor: "#f0f0f0",
          borderColor: "#999",
          borderWidth: 0.5,
        },
        emphasis: {
          itemStyle: {
            areaColor: "#389BB7",
            borderColor: "#333",
          },
          label: {
            show: false,
          },
        },
        label: {
          show: false,
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
          })),
          symbolSize: (val: number[]) => {
            const count = val[2] || 1;
            return Math.max(count * 6, 12);
          },
          itemStyle: {
            color: "#FF6B6B",
            opacity: 0.8,
            shadowBlur: 10,
            shadowColor: "rgba(255, 107, 107, 0.5)",
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

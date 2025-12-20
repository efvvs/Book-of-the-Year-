import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
// 需要安装 echarts-wordcloud 插件
// npm install echarts-wordcloud
import 'echarts-wordcloud';

// 📚 模拟数据：2024年你读过的书籍中提取的年度关键词 & 权重（出现次数 or 重要性）
const wordCloudData = [
    { name: '女性', value: 65 },
    { name: '社会', value: 60 },
    { name: '历史', value: 55 },
    { name: '人性', value: 50 },
    { name: '推理', value: 48 },
    { name: '基层', value: 45 },
    { name: '命运', value: 42 },
    { name: '成长', value: 40 },
    { name: '现实', value: 38 },
    { name: '权力', value: 36 },
    { name: '人生', value: 35 },
    { name: '悬疑', value: 33 },
    { name: '家庭', value: 30 },
    { name: '改革', value: 28 },
    { name: '心理', value: 26 },
    { name: '职场', value: 24 },
    { name: '罪恶', value: 22 },
    { name: '经济', value: 20 },
    { name: '独立', value: 18 },
    { name: '生存', value: 16 },
    { name: '情感', value: 15 },
    { name: '选择', value: 14 },
    { name: '孤独', value: 12 },
    { name: '秘密', value: 10 },
    { name: '抗争', value: 9 },
    { name: '治愈', value: 8 },
    { name: '真相', value: 7 },
    { name: '官场', value: 6 },
    { name: '明朝', value: 5 },
    { name: '晚清', value: 5 }
];

export default function BookWordCloud() {
    const chartRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!chartRef.current) return;

        const chartDom = chartRef.current;
        const myChart = echarts.init(chartDom);

        const option = {
            tooltip: {
                show: false,
                formatter: function (params: any) {
                    return `<strong>${params.name}</strong><br/>权重: ${params.value}`;
                },
            },
            series: [
                {
                    grid: {
                        top: 10,
                        right: 0,
                    },
                    type: 'wordCloud',
                    // 词云的形状（可选）：'circle', 'cardioid', 'diamond', 'triangle-forward', 'triangle', 'pentagon', 'star'
                    shape: 'circle',
                    // 词云大小
                    width: '100%',
                    height: '100%',
                    left: 'right',
                    top: 'top',
                    // 词云数据
                    data: wordCloudData,
                    // 文字样式
                    textStyle: {
                        fontFamily: 'Arial, sans-serif',
                        fontWeight: 'bold',
                        // 颜色函数
                        color: function () {
                            const colors = [
                                '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4',
                                '#FFEAA7', '#DDA0DD', '#98D8C8', '#F7DC6F',
                                '#BB8FCE', '#85C1E9', '#F8C471', '#82E0AA',
                            ];
                            return colors[Math.floor(Math.random() * colors.length)];
                        },
                    },
                    // 每个词的最小/最大字号
                    sizeRange: [45, 90],
                    // 词之间的间距
                    gridSize: 2,
                    // 是否旋转
                    rotationRange: [-90, 90],
                    rotationStep: 45,
                    // 鼠标交互
                    emphasis: {
                        focus: 'self',
                        textStyle: {
                            shadowBlur: 10,
                            shadowColor: '#333',
                        },
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
            <div ref={chartRef} style={{ width: '100%', height: '550px' }} />
        </div>
    );
}
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import img1 from '../images/1.jpg'
import img2 from '../images/2.png'
import img3 from '../images/3.jpg'
import img4 from '../images/4.jpg'
import img5 from '../images/5.jpg'
import img6 from '../images/6.jpg'
import img7 from '../images/7.jpg'
import img8 from '../images/8.jpg'
import img9 from '../images/9.jpg'
import img10 from '../images/10.jpg'
import img11 from '../images/11.jpg'
import img12 from '../images/12.jpg'
import img13 from '../images/6.jpg'
import img14 from '../images/14.jpg'
import img15 from '../images/15.jpg'
import img16 from '../images/16.jpg'
import img17 from '../images/17.png'
import img18 from '../images/18.jpg'
import img19 from '../images/19.png'
import img20 from '../images/20.jpg'
import img21 from '../images/21.png'
import img22 from '../images/22.png'
import img23 from '../images/23.png'
import img24 from '../images/24.png'
import img25 from '../images/25.png'

import img26 from '../images/wanqing.png'

interface Article {
  id: number;
  title: string;
  book: string;
  link: string;
  emoji: string;
  coverColor: string;
}

const articlesData: Article[] = [
  {
    id: 1,
    title: '《一生之敌》最大的敌人是自己',
    book: '一生之敌',
    link: 'https://mp.weixin.qq.com/s/WtbrUuiIf5MhFlzDxhbTAQ',
    emoji: '💰',
    coverColor: img1,
  },
  {
    id: 2,
    title: '"赌赛道不如赌人"从天使轮投资人张鹏的视角了解宇树科技',
    book: '早期的王兴兴和宇树科技是怎么样的',
    link: 'https://mp.weixin.qq.com/s/fQ9HXrm6356uX1zOXnXEBw',
    emoji: '🐸',
    coverColor: img2,
  },
  {
    id: 3,
    title: '《重口味心理学》超有趣的心理学知识',
    book: '重口味心理学',
    link: 'https://mp.weixin.qq.com/s/aj7Pb5_WOytKhafLmkpzBw',
    emoji: '⚡',
    coverColor: img3,
  },
  {
    id: 4,
    title: '《宋玉章》这一生有无数人爱他,他挑挑拣拣,也零星的爱过几个',
    book: '宋玉章',
    link: 'https://mp.weixin.qq.com/s/owYj_vvYrp3Ryu5WYsP7BA',
    emoji: '🌟',
    coverColor: img4
  },
  {
    id: 5,
    title: '《男性性行为》男性性行为的现代性反思',
    book: '男性性行为',
    link: 'https://mp.weixin.qq.com/s/7-hrvE1C6wMf-fha1M9NKA',
    emoji: '🎯',
    coverColor: img5,
  },
  {
    id: 6,
    title: '《小镇喧嚣》小镇政治的社会学切片',
    book: '小镇喧嚣',
    link: 'https://mp.weixin.qq.com/s/5aq8xjpSmcUe9Xe28mJkZA',
    emoji: '📖',
    coverColor: img6,
  },
  {
    id: 7,
    title: '《六个说谎大学生》学会欺骗，是成人世界的第一张门票？',
    book: '六个说谎大学生',
    link: 'https://mp.weixin.qq.com/s/EDOWwNgL2Lg53NHYZdbYpg',
    emoji: '📖',
    coverColor: img7
  }, 
  {
    id: 8,
    title: '《假面山庄》每个人都戴着面具，直到死亡揭穿一切',
    book: '假面山庄',
    link: 'https://mp.weixin.qq.com/s/yRt9aR8fne_UPRXOX9I_vw',
    emoji: '📖',
    coverColor: img8
  },
  {
    id: 9,
    title: '《基层女性》即使生于尘埃，也要活出光芒',
    book: '基层女性',
    link: 'https://mp.weixin.qq.com/s/tvI9GoEZhgy-Kn45tzetAg',
    emoji: '📖',
    coverColor: img9
  },
  {
    id: 10,
    title: '《秘密》“相信” 是改变的开始',
    book: '秘密',
    link: 'https://mp.weixin.qq.com/s/1wIS7AgNWJGN_pNnUb3bCA',
    emoji: '📖',
    coverColor: img10
  },
  {
    id: 11,
    title: '《六小时后你会死》当生命进入倒计时',
    book: '六小时后你会死',
    link: 'https://mp.weixin.qq.com/s/Lvdn3shAv4lP5NPEt1H2EA',
    emoji: '📖',
    coverColor: img11
  },
  {
    id: 12,
    title: '《人生海海》不过是一场与自己的和解',
    book: '人生海海',
    link: 'https://mp.weixin.qq.com/s/Rr8e_K__kVjhxrkLx2ofEA',
    emoji: '📖',
    coverColor: img12
  },
  {
    id: 13,
    title: '《大明王朝七张面孔》历史的面孔，人性的底片',
    book: '大明王朝七张面孔',
    link: 'https://mp.weixin.qq.com/s/oDbSySNXai313m-NXtJpIA',
    emoji: '📖',
    coverColor: img13
  },
  {
    id: 14,
    title: '《咖喱的女神》叶真中显的短篇小说',
    book: '咖喱的女神',
    link: 'https://mp.weixin.qq.com/s/aAfUWGZXA4b0TL8IXwAOLg',
    emoji: '📖',
    coverColor: img14
  },
  {
    id: 15,
    title: '《长期摆烂如何恢复动力》你是否也有这样的苦恼',
    book: '长期摆烂如何恢复动力',
    link: 'https://mp.weixin.qq.com/s/qiBfOSwSC4YLCSlVibWxFw',
    emoji: '📖',
    coverColor: img15
  },
  {
    id: 16,
    title: '《始于极限：女性主义往复书简》',
    book: '始于极限：女性主义往复书简',
    link: 'https://mp.weixin.qq.com/s/j9NYMr_-nx9m9Vy1GkiWkw',
    emoji: '📖',
    coverColor: img16
  },
  {
    id: 17,
    title: '《显微镜下的大明》从小处窥探明朝',
    book: '显微镜下的大明',
    link: 'https://mp.weixin.qq.com/s/hez2c9HNbAhPHFq7FHzQOw',
    emoji: '📖',
    coverColor: img17
  },
  {
    id: 18,
    title: '读《了凡四训》：从“认命”到“改命”的觉醒',
    book: '了凡四训',
    link: 'https://mp.weixin.qq.com/s/tU9N0C0dExXmo4GGUisVCQ',
    emoji: '📖',
    coverColor: img18
  },
  {
    id: 19,
    title: '他是明朝最聪明的人，却没走出命运的局',
    book: '解缙：被冻死的明朝第一才子',
    link: 'https://mp.weixin.qq.com/s/3HfJa9cDUksQR4R4gS7pFQ',
    emoji: '📖',
    coverColor: img19
  },
  {
    id: 20,
    title: '读完《金钱心理学》，我开始理解富人为什么越来越富',
    book: '金钱心理学',
    link: 'https://mp.weixin.qq.com/s/kqGANm07DKDUt1Z2-JqMtA',
    emoji: '📖',
    coverColor: img20
  },
  {
    id: 21,
    title: '马伯庸的“限时任务”，十五日，两京，无限可能',
    book: '两京十五日',
    link: 'https://mp.weixin.qq.com/s/dX4bm4zvEvq2HiljO6nPvw',
    emoji: '📖',
    coverColor: img21
  },
  {
    id: 22,
    title: '总觉得写得烂？《学会写作》里藏着新手逆袭的4个秘诀',
    book: '学会写作',
    link: 'https://mp.weixin.qq.com/s/O2mLX_hC0TAh40cOQ9QoIw',
    emoji: '📖',
    coverColor: img22
  },
  {
    id: 23,
    title: '《万历十五年》人物志：一章一人，还原明朝最真实的官场生态',
    book: '万历十五年',
    link: 'https://mp.weixin.qq.com/s/bshXJRXhAbxyI5pGaQmDZw',
    emoji: '📖',
    coverColor: img23
  },
  {
    id: 24,
    title: '原来科学的尽头，是承认自己“一无所知”',
    book: '鱼不存在',
    link: 'https://mp.weixin.qq.com/s/9uafVo9nRAa_g-p-GXBF3Q',
    emoji: '📖',
    coverColor: img24
  },
  {
    id: 25,
    title: '她的“堕落”里，藏着所有被忽视的女性疼痛',
    book: '绝叫',
    link: 'https://mp.weixin.qq.com/s/txhl1S9mZRfBfCIZj-As0Q',
    emoji: '📖',
    coverColor: img25,
  },
  {
    id: 26,
    title: '《晚清最后十六年》一个王朝如何亲手埋葬自己？',
    book: '晚清最后十六年',
    link: 'https://mp.weixin.qq.com/s/PZ3C-A3qR7mwTvCwh7rT6w',
    emoji: '📖',
    coverColor: img26,
  },
];

export const PersonalWorksModule = () => {
  const itemsPerPage = 6; // 2 rows x 3 columns
  const totalPages = Math.ceil(articlesData.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(0);

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentArticles = articlesData.slice(startIndex, endIndex);

  const goToPrevious = () => {
    setCurrentPage((prev) => Math.max(0, prev - 1));
  };

  const goToNext = () => {
    setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1));
  };

  return (
    <section className="py-16 md:py-24 px-4 md:px-8">
      <style scoped>{`
        .book-card-wrapper {
          --background: linear-gradient(to right, #74ebd5 0%, #acb6e5 100%);
          width: 100%;
          padding: 5px;
          border-radius: 1rem;
          overflow: visible;
          background: #74ebd5;
          background: var(--background);
          position: relative;
          z-index: 1;
        }
        
        .book-card-wrapper::before,
        .book-card-wrapper::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 1rem;
          z-index: -1;
          transition: opacity 0.3s ease;
        }
        
        .book-card-wrapper::before {
          background: linear-gradient(to bottom right, #f6d365 0%, #fda085 100%);
          transform: rotate(2deg);
        }
        
        .book-card-wrapper::after {
          background: linear-gradient(to top right, #84fab0 0%, #8fd3f4 100%);
          transform: rotate(-2deg);
        }
        
        .book-card-info {
          --color: #ffffff;
          background: var(--color);
          color: var(--color);
          display: flex;
          flex-direction: column;
          width: 100%;
          height: 100%;
          overflow: hidden;
          border-radius: 0.7rem;
          position: relative;
          z-index: 2;
        }
        
        .book-card-wrapper:hover::before,
        .book-card-wrapper:hover::after {
          opacity: 0;
        }
        
        .book-card-wrapper:hover .book-card-info {
          color: #74ebd5;
          transition: color 1s;
        }
        
        /* Tooltip styles */
        .tooltip-container {
          position: relative;
          cursor: pointer;
          transition: all 0.2s;
          font-size: 17px;
          border-radius: 10px;
          display: inline-block;
        }
        
        .tooltip {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          padding: 0;
          opacity: 0;
          pointer-events: none;
          transition: all 0.3s;
          border-radius: 15px;
          box-shadow: inset 5px 5px 5px rgba(0, 0, 0, 0.2),
            inset -5px -5px 15px rgba(255, 255, 255, 0.1),
            5px 5px 15px rgba(0, 0, 0, 0.3), -5px -5px 15px rgba(255, 255, 255, 0.1);
          min-width: 160px;
          white-space: nowrap;
        }
        
        .profile {
          background: #2a2b2f;
          border-radius: 10px 15px;
          padding: 10px;
          border: 1px solid #52382f;
        }
        
        .tooltip-container:hover .tooltip {
          top: -150px;
          opacity: 1;
          visibility: visible;
          pointer-events: auto;
        }
        
        .tooltip-container .icon {
          text-decoration: none;
          color: #fff;
          display: block;
          position: relative;
        }
        
        .tooltip-container .layer {
          width: 55px;
          height: 55px;
          transition: transform 0.3s;
        }
        
        .tooltip-container .icon:hover .layer {
          transform: rotate(-35deg) skew(20deg);
        }
        
        .tooltip-container .layer span {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          border: 1px solid #fff;
          border-radius: 15px;
          transition: all 0.3s;
        }
        
        .tooltip-container .layer span,
        .tooltip-container .text {
          color: #e6683c;
          border-color: #e6683c;
        }
        
        .tooltip-container .icon:hover .layer span {
          box-shadow: -1px 1px 3px #e6683c;
        }
        
        .tooltip-container .icon .text {
          position: absolute;
          left: 50%;
          bottom: -5px;
          opacity: 0;
          font-weight: 500;
          transform: translateX(-50%);
          transition: bottom 0.3s ease, opacity 0.3s ease;
        }
        
        .tooltip-container .icon:hover .text {
          bottom: -35px;
          opacity: 1;
        }
        
        .tooltip-container .icon:hover .layer span:nth-child(1) {
          opacity: 0.2;
        }
        
        .tooltip-container .icon:hover .layer span:nth-child(2) {
          opacity: 0.4;
          transform: translate(5px, -5px);
        }
        
        .tooltip-container .icon:hover .layer span:nth-child(3) {
          opacity: 0.6;
          transform: translate(10px, -10px);
        }
        
        .tooltip-container .icon:hover .layer span:nth-child(4) {
          opacity: 0.8;
          transform: translate(15px, -15px);
        }
        
        .tooltip-container .icon:hover .layer span:nth-child(5) {
          opacity: 1;
          transform: translate(20px, -20px);
        }
        
        .tooltip-container .instagramSVG {
          font-size: 25px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: -webkit-linear-gradient(
            45deg,
            #f09433 0%,
            #e6683c 25%,
            #dc2743 50%,
            #cc2366 75%,
            #bc1888 100%
          );
          background: linear-gradient(
            45deg,
            #f09433 0%,
            #e6683c 25%,
            #dc2743 50%,
            #cc2366 75%,
            #bc1888 100%
          );
        }
        
        .tooltip-container .user {
          display: flex;
          gap: 10px;
        }
        
        .tooltip-container .img {
          width: 50px;
          height: 50px;
          font-size: 25px;
          font-weight: 700;
          border: 1px solid #e6683c;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #fff;
        }
        
        .tooltip-container .name {
          font-size: 17px;
          font-weight: 700;
          color: #e6683c;
        }
        
        .tooltip-container .details {
          display: flex;
          flex-direction: column;
          gap: 0;
          color: #fff;
        }
        
        .tooltip-container .about {
          color: #ccc;
        }
      `}</style>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="tooltip-container">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-reading-darkblue mb-4">
              ✍️ 读后小记
            </h2>
            <div className="tooltip">
              <div className="profile">
                <div className="user">
                  <div className="img">🚶‍♀️</div>
                  <div className="details">
                    <div className="about">穿过窄门</div>
                    <div className="about">步入原野</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="text-reading-darkgreen font-serif italic text-base md:text-lg">
            在微信公众号分享关于阅读的思考和感悟
          </p>
          <div className="w-12 h-1 bg-reading-lightbrown mx-auto mt-6"></div>
        </div>

        {/* Articles Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          {totalPages > 1 && (
            <>
              <button
                onClick={goToPrevious}
                disabled={currentPage === 0}
                className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 ${currentPage === 0
                  ? 'opacity-50 cursor-not-allowed'
                  : 'hover:scale-110'
                  }`}
                aria-label="Previous page"
              >
                <ChevronLeft className="w-6 h-6 text-reading-darkblue" />
              </button>
              <button
                onClick={goToNext}
                disabled={currentPage === totalPages - 1}
                className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 ${currentPage === totalPages - 1
                  ? 'opacity-50 cursor-not-allowed'
                  : 'hover:scale-110'
                  }`}
                aria-label="Next page"
              >
                <ChevronRight className="w-6 h-6 text-reading-darkblue" />
              </button>
            </>
          )}

          {/* Articles Grid - 2 rows x 3 columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {currentArticles.map((article) => (
              <a
                key={article.id}
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full hover:scale-[1.02] flex flex-col">
                  {/* Cover */}
                  <div
                  className={`h-40 md:h-44 bg-cover bg-center flex items-center justify-center relative overflow-hidden`}
                  style={{ backgroundImage: `url(${article.coverColor})` }}
                  >
                    {/* Decorative pattern overlay */}
                    {/* <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/10"></div> */}

                    {/* Background emoji - decorative */}
                    {/* <div className="absolute top-4 right-4 opacity-20">
                      <span className="text-6xl md:text-7xl">{article.emoji}</span>
                    </div>
                    
                    {/* Main emoji */}
                    {/* <span className="text-5xl md:text-6xl relative z-10 group-hover:scale-110 transition-transform duration-300 drop-shadow-lg">
                      {article.emoji}
                    </span> */}
                  </div>

                  {/* Content */}
                  <div className="p-5 md:p-6 bg-white flex flex-col flex-grow">
                    {/* Title */}
                    <h3 className="text-base md:text-lg font-serif font-bold text-reading-darkblue mb-0 line-clamp-2 group-hover:text-reading-lightbrown transition-colors">
                      {article.title}
                    </h3>

                    {/* Book Reference */}
                    <div className="mt-auto pt-3 border-t border-gray-100">
                      <p className="text-reading-darkgreen font-serif text-xs md:text-sm">
                        <span className="font-semibold">相关书籍：</span>《{article.book}》
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Pagination Indicators */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-8">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${index === currentPage
                    ? 'w-8 bg-reading-lightbrown'
                    : 'w-2 bg-gray-300 hover:bg-gray-400'
                    }`}
                  aria-label={`Go to page ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Footer Message */}
        <div className="mt-12 text-center">
          <p className="text-reading-darkgreen font-serif text-sm">
            点击卡片阅读全文 | 微信公众号更新中
          </p>
        </div>
      </div>
    </section>
  );
};

import { useMemo, useState } from 'react';
import book1 from '../images/yubucunzai.jpg'
import book2 from '../images/xiaozhenxuanxiao.jpg'
import book3 from '../images/haimianyuedufa.jpg'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from '@/components/ui/dialog';

interface Book {
  rank: number;
  title: string;
  author: string;
  recommendation: string;
  bgUrl: string;
  description?: string;
  readDate?: string;
  readDuration?: string;
  wordCount?: string;
  readDays?: string;
}

const books: Book[] = [
  {
    rank: 1,
    title: '鱼不存在',
    author: '[美] 露露·米勒',
    recommendation: '告诉我如何在一个混乱永远盛行的世界里坚持下去。',
    bgUrl: book1,
    description: '大卫·斯塔尔·乔丹是斯坦福大学的建校校长，也是一位分类学家，一个执着于给自然世界带来秩序的人——他发现了当时人类已知鱼类的近五分之一。但他发现的隐藏生命蓝图越多，宇宙似乎就越想阻止他。他收藏的标本毁于闪电、大火，最终被1906年旧金山地震摧毁——那场地震让近千个装着鱼标本的易碎玻璃罐坠落在地。刹那间，他毕生的收藏毁于一旦。其他人可能已经放弃，屈服于绝望。但是乔丹检查了脚下的残骸，找到了他辨认出的第一条鱼，并开始自信地重建他的收藏——他用一根缝衣针将标签缝在鱼身上。当世界陷入混乱，他用一根针来重建秩序。记者露露·米勒第一次听到这则逸事时，她把它当作一个傲慢或拒绝接受现实的警示故事。但当她自己的生活慢慢瓦解，她开始对大卫感到好奇。她对他的生活的挖掘将改变她对历史、道德和她脚下世界的理解。本书是传记、回忆录和科学冒险的奇妙结合，也是一则温暖人心的寓言，讲述了如何在一个混乱永远盛行的世界里坚持下去。',
    readDate: '2025年6月',
    readDuration: '4小时52分钟',
    wordCount: '约9.6万字',
    readDays: '3天',
  },
  {
    rank: 2,
    title: '小镇喧嚣',
    author: '吴毅',
    recommendation: '深度阐释了21世纪初中国中部地区某乡镇“乡域政治”的运作实践与支配逻辑。',
    bgUrl: book2,
    description: '基层迎检、开发纷争、征收税费、产业调整、征地“种房”、维权争利……“喧嚣”一词，释尽乡镇日常政治种种人事与结构交织碰撞的众声嘈杂。本书以后现代叙事策略，围绕基层政权、村级组织和农民在复杂的乡村权力场域中博弈共生的过程和状况，深度阐释了21世纪初中国中部地区某乡镇“乡域政治”的运作实践与支配逻辑。本书出版十年来，获得学术界内外的广泛好评，被权威专家和普通读者誉为数十年来少见的以“抵近现场”“深度描写”的方式、以“比小说还精彩”的叙述来“复杂化理解”中国基层社会的作品。重读此书，不难发现，虽然它研究的是十多年前的乡镇，但是，对于“故事”背后种种复杂因素的颇有见地的理论探讨，让它在今天仍然极具启示。',
    readDate: '2025年6月',
    readDuration: '13小时32分钟',
    wordCount: '约39.3万字',
    readDays: '27天',
  },
  {
    rank: 3,
    title: '海绵阅读法',
    author: '李小墨',
    recommendation: '成长遇到瓶颈，想要靠阅读实现自我提升的读者阅读和学习。',
    bgUrl: book3,
    description: '本书针对大多数人在阅读过程中遇到的问题，如读得慢、忘得快、输出吃力、笔记低效、不会独立思考、不知道如何建立知识体系、无法学以致用、难以养成阅读习惯等，讲解了高效阅读需要的七大能力，致力于提供一套系统的阅读方法。本书共分为七章，包括高效做读书笔记的能力、独立思考的能力、掌握阅读速度的能力、阅读不同书籍的能力、建立知识体系的能力、让读书有用的能力、长期持续稳定阅读的能力，旨在帮助读者最大程度吸收一本书的精华，最大程度从阅读中获益。本书适合缺乏系统阅读方法，读得慢、忘得快、输出难的学生、职场人，以及有旺盛成长需求、对成长速度不满意、成长遇到瓶颈，想要靠阅读实现自我提升的读者阅读和学习。',
    readDate: '2024年11月',
    readDuration: '7小时9分钟',
    wordCount: '约13.9万字',
    readDays: '10天',
  },
];

export const Top3BooksModule = () => {
  const [hoveredRank, setHoveredRank] = useState<number | null>(null);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  const displayOrder = [books[1], books[0], books[2]];

  const handleCardClick = (book: Book) => {
    setSelectedBook(book);
  };

  const dialogHero = useMemo(() => {
    if (!selectedBook) return null;
    return {
      backgroundImage: `linear-gradient(135deg, rgba(5, 34, 52, 0.85), rgba(27, 92, 63, 0.75)), url(${selectedBook.bgUrl})`,
    };
  }, [selectedBook]);

  return (
    <section className="relative py-16 md:py-24 px-4 md:px-8 overflow-hidden">
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

        .floating-bubbles::before,
        .floating-bubbles::after {
          content: "";
          position: absolute;
          inset: -200px;
          background:
            radial-gradient(110px 110px at 10% 20%, rgba(116, 235, 213, 0.12), transparent),
            radial-gradient(150px 150px at 90% 30%, rgba(172, 182, 229, 0.12), transparent),
            radial-gradient(120px 120px at 30% 80%, rgba(248, 180, 104, 0.1), transparent);
          filter: blur(40px);
          z-index: 0;
          animation: float 22s ease-in-out infinite alternate;
        }

        .floating-bubbles::after {
          animation-duration: 26s;
          animation-delay: 3s;
        }

        @keyframes float {
          from { transform: translateY(-10px) translateX(-15px); }
          to { transform: translateY(15px) translateX(12px); }
        }

        .rank-badge {
          background: linear-gradient(145deg, #f6d365, #fda085);
          color: #0f172a;
          box-shadow: 0 15px 40px rgba(248, 180, 104, 0.35);
        }

        .card-overlay {
          background: linear-gradient(180deg, rgba(7, 21, 36, 0.1) 0%, rgba(7, 21, 36, 0.65) 70%, rgba(7, 21, 36, 0.8) 100%);
        }

        .dialog-grid {
          display: grid;
          gap: 16px;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
        }
      `}</style>
      <div className="floating-bubbles absolute inset-0 opacity-80 pointer-events-none" aria-hidden="true"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <div className="tooltip-container">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-reading-darkblue mb-4">
            🎖️ 年度TOP 3
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
            最私人的共鸣，最想分享的相遇
          </p>
          <div className="w-12 h-1 bg-reading-lightbrown mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-8 items-end max-w-5xl mx-auto">
          {displayOrder.map((book, displayIndex) => {
            const isCenter = displayIndex === 1;
            const isHovered = hoveredRank === book.rank;
            const podiumHeight = isCenter ? 'md:mt-0' : 'md:mt-12';
            const cardHeight = isCenter ? 'h-[21rem] md:h-[20rem]' : 'h-[20rem] md:h-[19rem]';
            
            return (
              <div
                key={book.rank}
                className={`transform transition-all duration-300 cursor-pointer ${podiumHeight} ${
                  isCenter 
                    ? `${isHovered ? 'md:scale-[1.05]' : ''} md:z-10` 
                    : `${isHovered ? 'scale-105 z-20' : ''} opacity-90 hover:opacity-100`
                }`}
                onMouseEnter={() => setHoveredRank(book.rank)}
                onMouseLeave={() => setHoveredRank(null)}
                onClick={() => handleCardClick(book)}
              >
                <div className="rounded-2xl overflow-hidden shadow-[0_10px_45px_rgba(15,23,42,0.18)] hover:shadow-[0_18px_60px_rgba(15,23,42,0.25)] transition-all duration-500 relative bg-white/90 backdrop-blur-xl border border-white/60">
                  <div 
                    className={`${cardHeight} relative overflow-hidden group`}
                    style={{
                      backgroundImage: `url(${book.bgUrl})`,
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  >
                    <div className="absolute inset-0 card-overlay"></div>
                    
                    <div className="absolute inset-0 transition-all duration-500 opacity-0 group-hover:opacity-20 bg-white"></div>
                  </div>

                  <div className="p-6 md:p-7 bg-gradient-to-br from-white via-white/90 to-reading-lightbrown/10 space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-reading-lightbrown/15 flex items-center justify-center font-serif text-reading-darkblue font-bold">
                        {book.rank}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl md:text-2xl font-serif font-bold text-reading-darkblue leading-snug">
                          《{book.title}》
                        </h3>
                        <p className="text-reading-darkgreen/80 font-serif text-sm md:text-base mt-1">
                          {book.author}
                        </p>
                      </div>
                    </div>
                    <p className="text-reading-darkblue/90 text-sm md:text-base leading-relaxed italic line-clamp-3">
                      “{book.recommendation}”
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <p className="text-reading-darkgreen text-sm md:text-base italic">
          衡量了一年，唯有这三本书的重量，让我的天平发生了不可逆的倾斜。
          </p>
        </div>
      </div>

      <Dialog open={selectedBook !== null} onOpenChange={(open) => !open && setSelectedBook(null)}>
        <DialogContent className="max-w-3xl max-h-[92vh] p-0 border-0 shadow-2xl overflow-hidden">
          <DialogClose className="absolute right-4 top-4 z-20 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/85 text-reading-darkblue shadow-lg border border-reading-lightbrown/40 transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-reading-lightbrown/60">
            ×
          </DialogClose>
          {selectedBook && (
            <div className="max-h-[92vh] flex flex-col">
              <div className="relative h-60 md:h-72 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={dialogHero || undefined}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/35 to-black/70"></div>
                <div className="absolute inset-0 flex flex-col justify-end px-8 py-8 text-white space-y-4">
                  <div className="space-y-2">
                    <DialogTitle className="text-3xl md:text-4xl font-serif font-bold drop-shadow-lg">
                      《{selectedBook.title}》
                    </DialogTitle>
                    <p className="text-sm md:text-base text-white/85 font-medium flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full bg-white/15 border border-white/25">
                        {selectedBook.author}
                      </span>
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs md:text-sm text-white/90">
                    {[
                      { label: '字数', value: selectedBook.wordCount ?? '——' },
                      { label: '阅读总时长', value: selectedBook.readDuration ?? '——' },
                      { label: '阅读天数', value: selectedBook.readDays ?? '——' },
                      { label: '读完日期', value: selectedBook.readDate ?? '——' },
                    ].map((item) => (
                      <div key={item.label} className="flex items-center gap-2">
                        <span className="text-white/70">{item.label}：</span>
                        <span className="font-semibold">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="px-8 py-7 space-y-7 bg-white overflow-y-auto flex-1">
                {selectedBook.description && (
                  <div className="bg-gradient-to-br from-reading-lightbrown/8 to-reading-lightbrown/2 p-6 rounded-2xl border border-reading-lightbrown/25 shadow-sm">
                    <h3 className="text-lg font-serif font-bold text-reading-darkblue mb-4 flex items-center gap-3">
                      <span className="w-1 h-7 bg-reading-lightbrown rounded-full"></span>
                      书籍简介
                    </h3>
                    <p className="text-reading-darkblue/90 leading-relaxed text-base max-h-70 md:max-h-90 overflow-y-auto pr-1">
                      {selectedBook.description}
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

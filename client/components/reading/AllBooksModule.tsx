import { useState, useEffect, useMemo } from "react";
import {booksData,Book} from './enum'

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
} from '@/components/ui/dialog';

type Season = "spring" | "summer" | "autumn" | "winter";

interface SeasonInfo {
  name: string;
  chineseName: string;
  emoji: string;
  colors: string;
  bgGradient: string;
}

const seasonInfo: Record<Season, SeasonInfo> = {
  spring: {
    name: "Spring",
    chineseName: "春",
    emoji: "🌸",
    colors: "from-green-300 to-green-500",
    bgGradient: "from-green-50 to-green-100",
  },
  summer: {
    name: "Summer",
    chineseName: "夏",
    emoji: "☀️",
    colors: "from-yellow-300 to-orange-500",
    bgGradient: "from-yellow-50 to-orange-100",
  },
  autumn: {
    name: "Autumn",
    chineseName: "秋",
    emoji: "🍂",
    colors: "from-orange-400 to-red-500",
    bgGradient: "from-orange-50 to-red-100",
  },
  winter: {
    name: "Winter",
    chineseName: "冬",
    emoji: "❄️",
    colors: "from-blue-300 to-cyan-500",
    bgGradient: "from-blue-50 to-cyan-100",
  },
};

function getSeasonFromDate(dateString: string): Season {
  const date = new Date(dateString);
  const month = date.getMonth() + 1;

  if (month >= 3 && month <= 5) return "spring";
  if (month >= 6 && month <= 8) return "summer";
  if (month >= 9 && month <= 11) return "autumn";
  return "winter";
}

function groupBooksBySeason(books: Book[]): Record<Season, Book[]> {
  const grouped: Record<Season, Book[]> = {
    spring: [],
    summer: [],
    autumn: [],
    winter: [],
  };

  books.forEach((book) => {
    const season = getSeasonFromDate(book.readDate);
    grouped[season].push(book);
  });

  return grouped;
}

interface SeasonModalProps {
  season: Season | null;
  books: Book[];
  onClose: () => void;
  onBookClick: (book: Book) => void;
}

const SeasonModal = ({ season, books, onClose, onBookClick }: SeasonModalProps) => {
  const info = seasonInfo[season || "spring"];

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (season) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "unset";
      };
    }
  }, [season]);

  if (!season) return null;

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
      onScroll={(e) => e.stopPropagation()}
    >
      <div
        className="bg-white rounded-xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden flex flex-col my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header - Fixed height */}
        <div
          className={`bg-gradient-to-br ${info.colors} p-6 md:p-8 text-white relative overflow-hidden flex-shrink-0 h-32 md:h-36`}
        >
          <div className="absolute top-0 right-0 opacity-20">
            <span className="text-9xl">{info.emoji}</span>
          </div>
          <div className="relative z-10 flex items-center justify-between h-full">
            <div className="flex items-center gap-4">
              <div>
                <span className="text-5xl md:text-6xl block">{info.emoji}</span>
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-1">
                  {info.chineseName}季
                </h2>
                <p className="text-base md:text-lg opacity-90">
                  共阅读{" "}
                  <span className="font-bold text-xl">{books.length}</span> 本书
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full p-2 border border-white/30 transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 overflow-y-auto flex-1 bg-gray-50">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-4">
            {books.map((book, index) => (
              <div
                key={`${index}`}
                onClick={(e) => {
                  e.stopPropagation();
                  onBookClick(book);
                }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] group cursor-pointer"
              >
                {/* Top section with background image */}
                <div
                  className="h-48 md:h-56 relative overflow-hidden"
                  style={{
                    backgroundImage: `url(${book.bgUrl})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  {/* Dark overlay for better readability */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40"></div>
                </div>

                {/* Bottom section with content */}
                <div className="p-4 md:p-5 bg-white">
                  {/* Title */}
                  <h3 className="text-base md:text-lg font-serif font-bold text-reading-darkblue mb-3 line-clamp-2">
                    《{book.title}》
                  </h3>

                  {/* Author and Reading hours */}
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-reading-darkgreen font-serif text-xs md:text-sm">
                      {book.author}
                    </p>
                    <p className="text-xs text-reading-darkgreen font-medium">
                      {book.readDuration}
                    </p>
                  </div>

                  {/* Tags */}
                  {/* <div className="flex flex-wrap gap-2">
                    <span className="px-2.5 py-1 bg-reading-lightbrown/15 text-reading-lightbrown text-xs rounded-full font-medium border border-reading-lightbrown/20">
                      {book.type}
                    </span>
                  </div> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const AllBooksModule = () => {
  const [selectedSeason, setSelectedSeason] = useState<Season | null>(null);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const seasonedBooks = groupBooksBySeason(booksData);
  const dialogHero = useMemo(() => {
    if (!selectedBook) return null;
    return {
      backgroundImage: `linear-gradient(135deg, rgba(5, 34, 52, 0.85), rgba(27, 92, 63, 0.75)), url(${selectedBook.bgUrl})`,
    };
  }, [selectedBook]);
  const handleBookClick = (book: Book) => {
    setSelectedBook(book);
  };

  const formatReadDate = (dateString: string) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    return `${year}年${month}月`;
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
              🧩 全部书籍
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
          “以书为伴，走过我的春夏秋冬。”
          </p>
          <div className="w-12 h-1 bg-reading-lightbrown mx-auto mt-6"></div>
        </div>

        {/* Season Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {(Object.keys(seasonInfo) as Season[]).map((season) => {
            const info = seasonInfo[season];
            const count = seasonedBooks[season].length;

            return (
              <div
                key={season}
                onClick={() => setSelectedSeason(season)}
                className="cursor-pointer group"
              >
                <div
                  className={`bg-gradient-to-br ${info.colors} rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] p-6 md:p-8 h-72 md:h-96 flex flex-col justify-between text-white relative`}
                >
                  {/* Background emoji - decorative */}
                  <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-30 transition-opacity duration-300">
                    <span className="text-8xl md:text-9xl">{info.emoji}</span>
                  </div>

                  {/* Gradient overlay for better text readability */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20"></div>

                  {/* Top section */}
                  <div className="flex items-start justify-between relative z-10">
                    <div className="flex items-center gap-3">
                      <span className="text-5xl md:text-6xl group-hover:scale-110 transition-transform duration-300 drop-shadow-lg">
                        {info.emoji}
                      </span>
                      <div>
                        <h3 className="text-2xl md:text-3xl font-serif font-bold leading-tight">
                          {info.chineseName}季
                        </h3>
                      </div>
                    </div>
                    <div className="text-right bg-white/20 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/30">
                      <p className="text-3xl md:text-4xl font-serif font-bold mb-0.5 leading-none">
                        {count}
                      </p>
                      <p className="text-xs md:text-sm opacity-90 font-medium">
                        本书
                      </p>
                    </div>
                  </div>

                  {/* Bottom section */}
                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="h-1 w-8 bg-white/60 rounded-full"></div>
                      <p className="text-sm md:text-base opacity-90 font-medium">
                        点击查看详情
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Statistics */}
        <div className="mt-16 text-center">
          <p className="text-reading-darkgreen font-serif text-lg">
            全年共阅读{" "}
            <span className="font-bold text-reading-darkblue">
              {booksData.length}
            </span>{" "}
            本书
          </p>
        </div>
      </div>

      {/* Season Modal */}
      <SeasonModal
        season={selectedSeason}
        books={selectedSeason ? seasonedBooks[selectedSeason] : []}
        onClose={() => setSelectedSeason(null)}
        onBookClick={handleBookClick}
      />

      {/* Book Detail Dialog */}
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
                      { label: '读完日期', value: formatReadDate(selectedBook.readDate) ?? '——' },
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
                    {selectedBook.description.map((item, index) => {
                      return (
                        <p key={index} className="text-reading-darkblue/90 leading-relaxed text-base max-h-70 md:max-h-90 overflow-y-auto pr-1">
                          {item}
                        </p>
                      )
                    })}

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

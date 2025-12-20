import { useMemo, useState } from 'react';
import {books,Book} from './enum'
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogClose,
} from '@/components/ui/dialog';


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
      <div className="floating-bubbles absolute inset-0 opacity-80 pointer-events-none" aria-hidden="true"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 md:mb-20">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-reading-darkblue mb-4">
            🎖️ 年度TOP 3
            </h2>
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
            
            return (
              <div
                key={book.rank}
                className={`transform transition-all duration-300 cursor-pointer ${podiumHeight} ${
                  isCenter 
                    ? `${isHovered ? 'md:scale-[1.25]' : ''} md:z-10` 
                    : `${isHovered ? 'scale-105 z-20' : ''} opacity-90 hover:opacity-100`
                }`}
                onMouseEnter={() => setHoveredRank(book.rank)}
                onMouseLeave={() => setHoveredRank(null)}
                onClick={() => handleCardClick(book)}
              >
                <div className="w-[280px] h-[360px] p-4 bg-[rgba(223, 11, 11, 0.34)] rounded-lg backdrop-blur-[5px] border-b-[3px] border-b-[rgba(255,255,255,0.44)] border-l-[2px] border-l-[rgba(255,255,255,0.545)] shadow-[-40px_50px_30px_rgba(0,0,0,0.28)] skew-x-[10deg] transition-all duration-400 overflow-hidden text-white hover:skew-x-0 hover:skew-y-0 relative group flex flex-col">
                  
                  {/* Background image overlay */}
                  <div 
                    className="absolute inset-0 -z-10 opacity-60"
                    style={{
                      backgroundImage: `url(${book.bgUrl})`,
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  ></div>
                  
                  {/* Gradient overlay for better text readability */}
                  <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/30 via-black/20 to-black/50"></div>
                  
                  {/* Book content */}
                  <div className="flex-1 flex flex-col justify-between pt-6 pb-4 px-3 relative z-10">
                    <div className="space-y-3">
                      <div className="flex items-center justify-center">
                        <span className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center font-serif text-white font-bold text-sm border border-white/30">
                          {book.rank}
                        </span>
                      </div>
                      <h1 className="text-center text-xl md:text-2xl font-serif font-bold text-white leading-tight" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}>
                        《{book.title}》
                      </h1>
                      <p className="text-sm text-center text-white/90 font-serif">
                        {book.author}
                      </p>
                    </div>
                    
                    <div className="mt-auto pt-4">
                      <p className="text-xs text-center text-white/90 italic leading-relaxed opacity-0 max-h-0 transition-all duration-400 group-hover:opacity-100 group-hover:max-h-32 overflow-hidden">
                        "{book.recommendation}"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-36 text-center">
          <p className="text-reading-darkgreen text-sm md:text-base italic">
          在混乱中建立秩序，在喧嚣中看清本质，在阅读中升级思维。
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

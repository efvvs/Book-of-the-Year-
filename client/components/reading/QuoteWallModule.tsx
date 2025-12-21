import {quotesData,Quote} from './enum'

// Duplicate quotes for seamless infinite scroll
const extendedQuotesData = [...quotesData, ...quotesData];

export const QuoteWallModule = () => {

  // Split into two rows
  const row1 = extendedQuotesData.filter((_, index) => index % 2 === 0);
  const row2 = extendedQuotesData.filter((_, index) => index % 2 === 1);

  const scrollStyle = `
    @keyframes scroll-left {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-50%);
      }
    }

    .animate-scroll {
      animation: scroll-left 80s linear infinite;
    }

    .scroll-row {
      display: flex;
      gap: 1rem;
      width: fit-content;
    }
  `;

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
        

        /* Quote Card Hover Animation */
        .quote-card {
          position: relative;
          overflow: hidden;
        }

        .quote-card::before,
        .quote-card::after {
          position: absolute;
          content: "";
          width: 20%;
          height: 20%;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 1;
          pointer-events: none;
        }

        .quote-card:hover::before {
          z-index: 2;
        }

        .quote-card::before {
          top: 0;
          right: 0;
          background: linear-gradient(135deg, rgba(116, 235, 213, 0.15) 0%, rgba(172, 182, 229, 0.15) 100%);
          border-radius: 0 15px 0 100%;
        }

        .quote-card::after {
          bottom: 0;
          left: 0;
          background: linear-gradient(135deg, rgba(172, 182, 229, 0.15) 0%, rgba(116, 235, 213, 0.15) 100%);
          border-radius: 0 100% 0 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          color: #1a365d;
          font-size: 14px;
          line-height: 1.8;
          font-style: italic;
          font-family: serif;
          text-align: center;
          white-space: normal;
          word-wrap: break-word;
          opacity: 0;
          content: attr(data-content);
        }

        .quote-card:hover::before,
        .quote-card:hover::after {
          width: 100%;
          height: 100%;
          border-radius: 15px;
          opacity: 1;
        }

        .quote-card:hover::after {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(248, 249, 250, 0.98) 100%);
          backdrop-filter: blur(10px);
          box-shadow: 
            0 20px 60px rgba(0, 0, 0, 0.15),
            0 0 40px rgba(116, 235, 213, 0.2);
          z-index: 3;
        }

        /* Hide original content on hover */
        .quote-card-content {
          position: relative;
          z-index: 2;
          transition: opacity 0.3s ease 0.1s;
        }

        .quote-card:hover .quote-card-content {
          opacity: 0;
          transition: opacity 0.2s ease;
        }
      `}</style>
      <style>{scrollStyle}</style>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-reading-darkblue mb-4">
              💬 年度金句墙
            </h2>
          <p className="text-reading-darkgreen font-serif italic text-base md:text-lg">
            这些文字片段成为了我思想的灯指引我穿过2025年的每个困惑时刻
          </p>
          <div className="w-12 h-1 bg-reading-lightbrown mx-auto mt-6"></div>
        </div>

        {/* Auto-Scrolling Two Rows */}
        <div className="space-y-4 overflow-hidden">
          {/* Row 1 */}
          <div className="overflow-hidden">
            <div className="scroll-row animate-scroll">
              {row1.map((quote, index) => (
                <div
                  key={`row1-${index}`}
                  className="flex-shrink-0 w-80 cursor-pointer group"
                >
                  <div 
                    className="quote-card bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-reading-beige overflow-hidden h-full hover:scale-105 hover:-translate-y-1"
                    data-content={`"${quote.content}"`}
                  >
                    <div className="quote-card-content p-4 h-full flex flex-col">
                      {/* Quote Content - 2 lines max */}
                      <p className="text-reading-darkblue font-serif text-sm italic leading-relaxed mb-3 line-clamp-2">
                        "{quote.content}"
                      </p>

                      {/* Source Info */}
                      <div className="border-t border-reading-beige pt-3 mt-auto">
                        <p className="text-reading-darkgreen font-semibold text-xs">
                          《{quote.source}》
                        </p>
                        <p className="text-reading-darkgreen text-xs">
                          ——{quote.author}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 */}
          <div className="overflow-hidden">
            <div className="scroll-row animate-scroll" style={{ animationDelay: '-20s' }}>
              {row2.map((quote, index) => (
                <div
                  key={`row2-${index}`}
                  className="flex-shrink-0 w-80 cursor-pointer group"
                >
                  <div 
                    className="quote-card bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-reading-beige overflow-hidden h-full hover:scale-105 hover:-translate-y-1"
                    data-content={`"${quote.content}"`}
                  >
                    <div className="quote-card-content p-4 h-full flex flex-col">
                      {/* Quote Content - 2 lines max */}
                      <p className="text-reading-darkblue font-serif text-sm italic leading-relaxed mb-3 line-clamp-2">
                        "{quote.content}"
                      </p>

                      {/* Source Info */}
                      <div className="border-t border-reading-beige pt-3 mt-auto">
                        <p className="text-reading-darkgreen font-semibold text-xs">
                          《{quote.source}》
                        </p>
                        <p className="text-reading-darkgreen text-xs">
                          ——{quote.author}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Message */}
        <div className="mt-16 text-center">
          <p className="text-reading-darkgreen text-base md:text-lg font-serif italic max-w-2xl mx-auto">
            每一句话都是某一时刻的共鸣。这些金句陪伴我度过了2025年的思想之旅。
          </p>
        </div>
      </div>

      {/* Quote Detail Modal */}
    </section>
  );
};

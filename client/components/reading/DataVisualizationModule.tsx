import DataCalendar from '../ui/data-calendar';
import DataMonth from '../ui/data-month'
import DataType from '../ui/data-type';
import DataDaytime from '../ui/data-daytime';
import DataBookstatus from '../ui/data-bookstatus';
import DataGoal from '../ui/data-goal';
import DataAuthor from '../ui/data-author';
export const DataVisualizationModule = () => {
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
        <div className="text-center mb-16 md:mb-20">
          <div className="tooltip-container">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-reading-darkblue mb-4">
            🫧 阅读分析
            </h2>
            <div className="tooltip">
              <div className="profile">
                <div className="user">
                  <div className="img">🕓</div>
                  <div className="details">
                    <div className="about">字里行间</div>
                    <div className="about">时光有痕</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="text-reading-darkgreen font-serif italic text-base md:text-lg">
            用数据讲述我的阅读故事——习惯、趋势与偏好
          </p>
          <div className="w-12 h-1 bg-reading-lightbrown mx-auto mt-6"></div>
        </div>

        <div className="space-y-12 md:space-y-16">
          {/* 热力图 */}
          {/* <div>
            <div className="mb-6">
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-reading-darkblue mb-2">
                👣 阅读足迹
              </h3>
              <p className="text-reading-darkgreen text-sm md:text-base">
                坦白说，我的阅读热力图并不均衡，但它诚实记录了我如何分配有限注意力，在已知与未知之间反复跋涉。
              </p>
            </div>
            <DataCalendar></DataCalendar>
          </div> */}
          {/* 四个子模块 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            <div>
              <div className="mb-6">
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-reading-darkblue mb-2">
                  🌾 阅读趋势
                </h3>
                <p className="text-reading-darkgreen text-sm md:text-base">
                  “分析每个月的阅读时长和阅读量，记录我的阅读情况。”
                </p>
              </div>
              <DataMonth></DataMonth>
            </div>
            <div>
              <div className="mb-6">
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-reading-darkblue mb-2">
                  🪢 阅读类型
                </h3>
                <p className="text-reading-darkgreen text-sm md:text-base">
                  “按书籍类型划分，呈现我在不同领域的阅读情况。”
                </p>
              </div>
              <DataType></DataType>
            </div>
            <div>
              <div className="mb-6">
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-reading-darkblue mb-2">
                  🕓 阅读时间分布
                </h3>
                <p className="text-reading-darkgreen text-sm md:text-base">
                  “一天中不同时间段的阅读时间分布，揭示我的阅读习惯。”
                </p>
              </div>
              <DataDaytime></DataDaytime>
            </div>
            <div>
              <div className="mb-6">
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-reading-darkblue mb-2">
                  💥 阅读状态
                </h3>
                <p className="text-reading-darkgreen text-sm md:text-base">
                  “包括读过和读完的书籍比例，反映我的阅读完成率。”
                </p>
              </div>
              <DataBookstatus></DataBookstatus>
            </div>
          </div>

          <div>
            <div className="mb-6">
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-reading-darkblue mb-2">
                🌎 作者地域分布
              </h3>
              <p className="text-reading-darkgreen text-sm md:text-base">
                “书籍作者分布，展示对不同地区文化的阅读偏好。”
              </p>
            </div>
            <DataAuthor></DataAuthor>
          </div>
        </div>
      </div>
    </section>
  );
};

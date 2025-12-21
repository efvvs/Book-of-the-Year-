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
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-20">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-reading-darkblue mb-4">
            🫧 阅读分析
            </h2>
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

import { useEffect, useRef } from 'react';
import BookWordCloud from '../ui/word-cloud';
import keyWorddata from '../ui/animate-key';
import AnimateKey from '../ui/animate-key';
export const OverviewModule = () => {

  return (
    <section className="min-h-screen px-4 md:px-8 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-reading-darkblue text-sm md:text-base font-serif mb-2 tracking-widest uppercase">
            Reading Summary 2025
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-reading-darkblue mb-4">
            efvv的2025年度阅读总览
          </h1>
          <div className="w-12 h-1 bg-reading-lightbrown mx-auto"></div>
        </div>

        {/* Top Section: Left Statistics + Right Word Cloud */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-24">
          {/* Left Column: Two Statistics */}
          <div className="flex flex-col">
            {/* Year Statistics Title */}
            <div className="mb-6 md:mb-8">
              <h3 className="text-xl md:text-2xl font-serif font-bold text-reading-darkblue mb-2">
                年度统计
              </h3>
              <div className="w-8 h-0.5 bg-reading-lightbrown"></div>
            </div>

            {/* Statistics Cards Container */}
            <div className="flex flex-col gap-4 md:gap-5">
              {/* Books Read */}
              <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 p-4 md:p-5 border border-reading-beige">
                <div className="flex items-baseline gap-3">
                <p className="text-reading-darkblue font-serif text-base md:text-lg font-semibold">读完</p>
                  <span className="text-4xl md:text-5xl font-bold text-reading-lightbrown">45</span>
                  <p className="text-reading-darkblue font-serif text-base md:text-lg font-semibold">本书</p>
                </div>
              </div>

              {/* Reading Hours */}
              <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 p-4 md:p-5 border border-reading-beige">
                <div className="flex items-baseline gap-3">
                <p className="text-reading-darkblue font-serif text-base md:text-lg font-semibold">阅读</p>
                  <span className="text-4xl md:text-5xl font-bold text-reading-darkgreen">254</span>
                  <p className="text-reading-darkblue font-serif text-base md:text-lg font-semibold">小时</p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 p-4 md:p-5 border border-reading-beige">
                <div className="flex items-baseline gap-3">
                <p className="text-reading-darkblue font-serif text-base md:text-lg font-semibold">阅读</p>
                  <span className="text-4xl md:text-5xl font-bold text-reading">303</span>
                  <p className="text-reading-darkblue font-serif text-base md:text-lg font-semibold">天</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Word Cloud with transparent background */}
          <div className="md:col-span-2">
            <BookWordCloud />
          </div>
        </div>

        {/* Bottom Quote Section */}
        <div className="text-center mt-16 md:mt-20">
          <p className="text-2xl md:text-3xl text-reading-darkblue font-serif italic">
            "未经审视的阅读，<br />不过是他人思想的复读。"
          </p>
        </div>
      </div>
    </section>
  );
};

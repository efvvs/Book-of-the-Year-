import { useState } from 'react';

interface Quote {
  id: number;
  content: string;
  source: string;
  author: string;
  context?: string;
}

const quotesData: Quote[] = [
  {
    id: 1,
    content: '越复杂的规则，越容易被经手胥吏玩出花样来',
    source: '显微镜下的大明',
    author: '马伯庸',
  },
  {
    id: 2,
    content: '按照大明官场的标准，没暴露的问题，就不是问题。',
    source: '显微镜下的大明',
    author: '马伯庸',
  },
  {
    id: 3,
    content: '黄册最重要的功能，不只是户籍登记，更在于强化徭役管理。',
    source: '显微镜下的大明',
    author: '马伯庸',
  },
  {
    id: 4,
    content: '总体来说，这次判决维护了好人利益，但也没让坏人受罚。',
    source: '显微镜下的大明',
    author: '马伯庸',
  },
  {
    id: 5,
    content: '想要读懂大明，想要读懂中国古代政治，不可只注目于朝堂，亦要听到最底层的呐喊。在一个个普通人的遭遇中，才蕴藏着最真实的规律。',
    source: '显微镜下的大明',
    author: '马伯庸',
  },
  {
    id: 6,
    content: '政治的残酷，从不因个人境遇而动摇；正如天地之不仁，以万物为刍狗。身处其中的每一个人，都只能随波逐流，只要稍微流露一点人性，便会被旋涡所吞噬。',
    source: '食南之徒',
    author: '马伯庸',
  },
  {
    id: 7,
    content: '名分看似虚无缥缈，却是万事之本。名不正则言不顺，言不顺则事不谐。',
    source: '食南之徒',
    author: '马伯庸',
  },
  {
    id: 8,
    content: '从前种种，譬如昨日死；从后种种，譬如今日生，此义理再生之身。',
    source: '了凡四训',
    author: '袁了凡',
  },
  {
    id: 8,
    content: '一旦你开始了解并且真正主宰你的思想和感觉时，你就会明白，你就是你自己现实的创造者。这也就是你的自由和所有力量之所在。',
    source: '秘密',
    author: '朗达·拜恩',
  },
  {
    id: 8,
    content: '如果某事发生在你的身上，那是你吸引来的——通过持续性的思想。吸引力法则是精确无误的。',
    source: '秘密',
    author: '朗达·拜恩',
  },
  {
    id: 8,
    content: '如果想改变生命中的任何事，就借由改变你的思想，来转换频道和频率。',
    source: '秘密',
    author: '朗达·拜恩',
  },
  {
    id: 8,
    content: '社会，就是我们做出的所有选择的总和。',
    source: '熊镇2',
    author: '弗雷德里克·巴克曼',
  },
  {
    id: 9,
    content: '这里只供应一种威士忌，却提供各种不同的悲痛情绪。',
    source: '熊镇2',
    author: '弗雷德里克·巴克曼',
  },
  {
    id: 10,
    content: '当政治对我们有利时，我们称之为“合作”；当它对他人有利时，我们称之为“贪腐”。',
    source: '熊镇2',
    author: '弗雷德里克·巴克曼',
  },
  {
    id: 11,
    content: '胜利能够治愈一切。',
    source: '熊镇2',
    author: '弗雷德里克·巴克曼',
  },
  {
    id: 12,
    content: '歧视与垄断财富也一样。因为肤色或者与生俱来的身体特征、个性而歧视他人，只让我觉得愚不可及。',
    source: '恶女的告白',
    author: '叶真中显',
  },
  {
    id: 13,
    content: '知识这个东西，一旦知晓就再也无法回到无知的时光',
    source: '恶女的告白',
    author: '叶真中显',
  },
  {
    id: 14,
    content: '都说女人的下午很长，那么我的下午是从几时开始的呢',
    source: '恶女的告白',
    author: '叶真中显',
  },
  {
    id: 15,
    content: '其实这世上最赤裸的阶级差距就体现在老人身上。尤其是需要护理的老人，他们的差别是冷酷无情的。有的老人身处安全地带的高级老年公寓，生活中享受着无微不至的照顾；有的老人却因为过重的护理负担而家破人亡。',
    source: '失控的照护',
    author: '叶真中显',
  },
  {
    id: 16,
    content: '惯例……那应该叫特权吧。',
    source: 'blue',
    author: '叶真中显',
  },
  {
    id: 17,
    content: '或许，或许，或许。无论重复多少个“if”，已经发生的事情都无法改变。',
    source: 'blue',
    author: '叶真中显',
  },
  {
    id: 18,
    content: '布里特-玛丽一夜没睡，她已经习惯了，为别人而活的人迟早都会习惯。',
    source: '清单人生',
    author: '弗雷德里克·巴克曼',
  },
  {
    id: 19,
    content: '到了一定的年龄，人生的所有疑惑几乎可以全部浓缩成一个问题：应该如何生活？',
    source: '清单人生',
    author: '弗雷德里克·巴克曼',
  },
  {
    id: 20,
    content: '如果一个人闭上眼睛，就会想起她一生中做过的所有选择，意识到她每次的选择都是为了别人做出的。',
    source: '清单人生',
    author: '弗雷德里克·巴克曼',
  },
  {
    id: 21,
    content: '怪不得满天神佛个个清静无为、不昧诸缘。只有不主动做事，才不会沾染因果啊！',
    source: '太白金星有点烦',
    author: '马伯庸',
  },
  {
    id: 22,
    content: '一切不合理的事情背后，都有一个合理的理由，只是你不知道罢了。',
    source: '太白金星有点烦',
    author: '马伯庸',
  },
  {
    id: 23,
    content: '不过，以后再嫁人就别图什么爱情了，那没多大用处；还是要找个能依靠终生、能抬高你地位的伴侣。',
    source: '情迷翡冷翠',
    author: '毛姆',
  },
  {
    id: 24,
    content: '从我十六岁起，就不断地有男人向我求爱。无论年龄多大，长相如何，他们似乎都认为我的存在仅仅是为了满足他们的欲望，而毫不关心我作为人的价值。',
    source: '情迷翡冷翠',
    author: '毛姆',
  },
  {
    id: 25,
    content: '从我十六岁起，就不断地有男人向我求爱。无论年龄多大，长相如何，他们似乎都认为我的存在仅仅是为了满足他们的欲望，而毫不关心我作为人的价值。',
    source: '情迷翡冷翠',
    author: '毛姆',
  },
  {
    id: 26,
    content: '没有钱不仅仅是遗憾，还可能威胁到生存。',
    source: '她的名字是',
    author: '赵南柱',
  },
  {
    id: 26,
    content: '报纸说城市的防空洞里居住了起码两万多人，他们被称为鼠族，他们像老鼠一样从地下出来，工作一天后又回到地下。',
    source: '第七天',
    author: '余华',
  },
  {
    id: 26,
    content: '我问她：“这是什么地方？” 她说：“这里叫死无葬身之地。”',
    source: '第七天',
    author: '余华',
  },
  {
    id: 26,
    content: '我哭了，哭得很伤心，我哭不是生他的气，是哭这个社会太不公平。',
    source: '第七天',
    author: '余华',
  },
  {
    id: 26,
    content: '我这样的女人，注定就是在职场和男人争锋相对地抢夺成果。男人见到我，会有一种被威胁的感觉。他们不会把我当作一个他们愿意保护和照顾的娇弱女子。',
    source: '离婚而已',
    author: '伍雅涛',
  },
  {
    id: 26,
    content: '尽管我比我认识的绝大多数人都适应孤独，但这不代表我喜欢孤独。只是和人交往带来的精神负担太重，对我的生活妨碍很大，令我难以承受，我两害相权取其轻而已',
    source: '我比世界晚熟',
    author: '胡安焉',
  },
  {
    id: 26,
    content: '我不希望你因为围巾的事记住今天，所以，我想与其那样，倒不如因为外婆闯进一家动物园而记住今天这个日子……',
    source: '外婆的道歉信',
    author: '弗雷德里克·巴克曼',
  },
  {
    id: 26,
    content: '我不希望你因为围巾的事记住今天，所以，我想与其那样，倒不如因为外婆闯进一家动物园而记住今天这个日子……',
    source: '外婆的道歉信',
    author: '弗雷德里克·巴克曼',
  },
  {
    id: 26,
    content: '改写记忆是一种很不错的超能力，我觉得。外婆耸了耸肩。“如果你摆脱不了坏事，就必须用更多‘好料’去盖过它。”',
    source: '外婆的道歉信',
    author: '弗雷德里克·巴克曼',
  },
  {
    id: 26,
    content: '外婆从不说“再见”，只说“回见”。',
    source: '外婆的道歉信',
    author: '弗雷德里克·巴克曼',
  },
  {
    id: 26,
    content: '爱莎很小就学会，如果自己选择音轨，生活就会变得好过些。',
    source: '外婆的道歉信',
    author: '弗雷德里克·巴克曼',
  },
  {
    id: 26,
    content: '死亡最强大的力量不在于它能让人死去，而在于让留下来的人不想再活着。',
    source: '外婆的道歉信',
    author: '弗雷德里克·巴克曼',
  },
  {
    id: 26,
    content: '如果真的幸福，根本不需要动不动就挂在嘴上；如果真的幸福，根本不会叹气，皮笑肉不笑的。',
    source: '绝叫',
    author: '叶真中显',
  },
  {
    id: 26,
    content: '她口中的“幸福”，隐藏着某种不安定的暗潮。',
    source: '绝叫',
    author: '叶真中显',
  },
  {
    id: 26,
    content: '东京并不像你所想象的，是那么时髦、简约的都市。这里的确存在着摩登洗练的事物，但也同样肮脏、混乱。过度开发加工的街景非但不整洁，还塞满了人与物，发出噪声和恶臭。',
    source: '绝叫',
    author: '叶真中显',
  },
  {
    id: 26,
    content: '世界并没有震动，而是你的世界受到了撼动。',
    source: '绝叫',
    author: '叶真中显',
  },
  {
    id: 26,
    content: '我向前奔驰。奔向何方？奔向我的避风港。如果没有，打造一个就行了。',
    source: '绝叫',
    author: '叶真中显',
  },
  {
    id: 26,
    content: '为了守护女儿，母亲将无所不能。',
    source: '圣母',
    author: '秋吉理香子',
  },
];


// Duplicate quotes for seamless infinite scroll
const extendedQuotesData = [...quotesData, ...quotesData];

export const QuoteWallModule = () => {
  const [selectedQuote, setSelectedQuote] = useState<Quote | null>(null);

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
      <style>{scrollStyle}</style>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="tooltip-container">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-reading-darkblue mb-4">
              💬 年度金句墙
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
                  onClick={() => setSelectedQuote(quote)}
                  className="flex-shrink-0 w-80 cursor-pointer group"
                >
                  <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-reading-beige overflow-hidden h-full hover:scale-105 hover:-translate-y-1">
                    <div className="p-4">
                      {/* Quote Content - 2 lines max */}
                      <p className="text-reading-darkblue font-serif text-sm italic leading-relaxed mb-3 line-clamp-2">
                        "{quote.content}"
                      </p>

                      {/* Source Info */}
                      <div className="border-t border-reading-beige pt-3">
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
                  <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-reading-beige overflow-hidden h-full hover:scale-105 hover:-translate-y-1">
                    <div className="p-4">
                      {/* Quote Content - 2 lines max */}
                      <p className="text-reading-darkblue font-serif text-sm italic leading-relaxed mb-3 line-clamp-2">
                        "{quote.content}"
                      </p>

                      {/* Source Info */}
                      <div className="border-t border-reading-beige pt-3">
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

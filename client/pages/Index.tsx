import { OverviewModule } from '@/components/reading/OverviewModule';
import { Top3BooksModule } from '@/components/reading/Top3BooksModule';
import { DataVisualizationModule } from '@/components/reading/DataVisualizationModule';
import { AllBooksModule } from '@/components/reading/AllBooksModule';
import { PersonalWorksModule } from '@/components/reading/PersonalWorksModule';
import { QuoteWallModule } from '@/components/reading/QuoteWallModule';
import { ContactModule } from '@/components/reading/ContactModule';

export default function Index() {
  return (
    <div className="min-h-screen bg-reading-cream">
      {/* Navigation Header */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-reading-beige">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
          <h1 className="text-2xl md:text-3xl font-serif font-bold text-reading-darkblue">
            📖 My Reading 2025
          </h1>
          <nav className="hidden md:flex gap-8">
            <a href="#overview" className="text-reading-darkgreen hover:text-reading-lightbrown transition-colors font-serif">
              年度概览
            </a>
            <a href="#top3" className="text-reading-darkgreen hover:text-reading-lightbrown transition-colors font-serif">
              年度TOP 3
            </a>
            <a href="#analysis" className="text-reading-darkgreen hover:text-reading-lightbrown transition-colors font-serif">
              阅读分析
            </a>
            <a href="#allbooks" className="text-reading-darkgreen hover:text-reading-lightbrown transition-colors font-serif">
              全部书籍
            </a>
            <a href="#works" className="text-reading-darkgreen hover:text-reading-lightbrown transition-colors font-serif">
              读后小记
            </a>
            <a href="#quotes" className="text-reading-darkgreen hover:text-reading-lightbrown transition-colors font-serif">
              金句墙
            </a>
          </nav>
        </div>
      </header>

      {/* Modules */}
      <main>
        <section id="overview">
          <OverviewModule />
        </section>

        <section id="top3">
          <Top3BooksModule />
        </section>

        <section id="analysis">
          <DataVisualizationModule />
        </section>

        <section id="allbooks">
          <AllBooksModule />
        </section>

        <section id="works">
          <PersonalWorksModule />
        </section>

        <section id="quotes">
          <QuoteWallModule />
        </section>

        <section id="contact">
          <ContactModule />
        </section>
      </main>
    </div>
  );
}

import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TableOfContents from './components/TableOfContents';
import Introduction from './components/sections/Introduction';
import RiemannSumBasics from './components/sections/RiemannSumBasics';
import OptionPricing from './components/sections/OptionPricing';
import PresentValue from './components/sections/PresentValue';
import RiskMeasures from './components/sections/RiskMeasures';
import BondPricing from './components/sections/BondPricing';
import InteractiveDemo from './components/sections/InteractiveDemo';
import CodeExamples from './components/sections/CodeExamples';
import References from './components/sections/References';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('introduction');

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="lg:w-64 shrink-0">
            <TableOfContents 
              activeSection={activeSection} 
              setActiveSection={setActiveSection} 
            />
          </aside>
          
          {/* Main Content */}
          <main className="flex-1 min-w-0 prose">
            <div id="introduction">
              <Introduction />
            </div>
            <div id="riemann-sum-basics">
              <RiemannSumBasics />
            </div>
            <div id="option-pricing">
              <OptionPricing />
            </div>
            <div id="present-value">
              <PresentValue />
            </div>
            <div id="risk-measures">
              <RiskMeasures />
            </div>
            <div id="bond-pricing">
              <BondPricing />
            </div>
            <div id="interactive-demo">
              <InteractiveDemo />
            </div>
            <div id="code-examples">
              <CodeExamples />
            </div>
            <div id="references">
              <References />
            </div>
          </main>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

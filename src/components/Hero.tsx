export default function Hero() {
  return (
    <div className="bg-gradient-to-br from-[#0969da] to-[#0550ae] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 16 16">
                <path d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1h-8a1 1 0 00-1 1v6.708A2.486 2.486 0 014.5 9h8V1.5z"/>
              </svg>
              <span className="text-sm opacity-80">GitHub Pages</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-3">
              Riemann Integration in Finance
            </h1>
            <p className="text-xl opacity-90 max-w-2xl">
              A comprehensive exploration of how Riemann Integration theory underpins 
              fundamental calculations in quantitative finance, from option pricing to risk management.
            </p>
          </div>
          <div className="flex flex-col gap-2 shrink-0">
            <div className="bg-white/10 backdrop-blur rounded-lg px-4 py-3 text-center">
              <div className="text-2xl font-bold">∫</div>
              <div className="text-xs opacity-80">Riemann Integral</div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 flex flex-wrap gap-3">
          <span className="bg-white/15 backdrop-blur px-3 py-1 rounded-full text-sm">
            📐 Quantitative Finance
          </span>
          <span className="bg-white/15 backdrop-blur px-3 py-1 rounded-full text-sm">
            📊 Option Pricing
          </span>
          <span className="bg-white/15 backdrop-blur px-3 py-1 rounded-full text-sm">
            💰 Present Value
          </span>
          <span className="bg-white/15 backdrop-blur px-3 py-1 rounded-full text-sm">
            ⚠️ Risk Management
          </span>
          <span className="bg-white/15 backdrop-blur px-3 py-1 rounded-full text-sm">
            🏦 Bond Pricing
          </span>
        </div>
      </div>
    </div>
  );
}

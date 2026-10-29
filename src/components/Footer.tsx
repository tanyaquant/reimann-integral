export default function Footer() {
  return (
    <footer className="bg-[#24292f] text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <svg height="24" viewBox="0 0 16 16" width="24" fill="white">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
              </svg>
              <span className="text-white font-semibold">riemann-integration-finance</span>
            </div>
            <p className="text-sm text-gray-400">
              Exploring the mathematical foundations of quantitative finance through the lens 
              of Riemann Integration.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-3">Topics</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#introduction" className="hover:text-white transition-colors">Introduction</a></li>
              <li><a href="#option-pricing" className="hover:text-white transition-colors">Option Pricing</a></li>
              <li><a href="#present-value" className="hover:text-white transition-colors">Present Value</a></li>
              <li><a href="#risk-measures" className="hover:text-white transition-colors">Risk Measures</a></li>
              <li><a href="#bond-pricing" className="hover:text-white transition-colors">Bond Pricing</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-3">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#interactive-demo" className="hover:text-white transition-colors">Interactive Demo</a></li>
              <li><a href="#code-examples" className="hover:text-white transition-colors">Code Examples</a></li>
              <li><a href="#references" className="hover:text-white transition-colors">References</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © 2024 Riemann Integration in Finance Project. Educational resource.
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <span>Built with React + TypeScript</span>
            <span>•</span>
            <span>Math by KaTeX</span>
            <span>•</span>
            <span>Styled with Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

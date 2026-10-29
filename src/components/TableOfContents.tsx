interface TableOfContentsProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const sections = [
  { id: 'introduction', label: 'Introduction', icon: '📖' },
  { id: 'riemann-sum-basics', label: 'Riemann Sum Basics', icon: '📐' },
  { id: 'option-pricing', label: 'Option Pricing', icon: '📊' },
  { id: 'present-value', label: 'Present Value & DCF', icon: '💰' },
  { id: 'risk-measures', label: 'Risk Measures', icon: '⚠️' },
  { id: 'bond-pricing', label: 'Bond Pricing', icon: '🏦' },
  { id: 'interactive-demo', label: 'Interactive Demo', icon: '🎮' },
  { id: 'code-examples', label: 'Code Examples', icon: '💻' },
  { id: 'references', label: 'References', icon: '📚' },
];

export default function TableOfContents({ activeSection, setActiveSection }: TableOfContentsProps) {
  return (
    <nav className="sticky top-24 bg-gray-50 rounded-lg border border-gray-200 p-4">
      <h3 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
          <path d="M0 1.75A.75.75 0 01.75 1h4.253c1.227 0 2.317.59 3 1.501A3.744 3.744 0 0111.006 1h4.245a.75.75 0 01.75.75v10.5a.75.75 0 01-.75.75h-4.507a2.25 2.25 0 00-1.591.659l-.622.621a.75.75 0 01-1.06 0l-.622-.621A2.25 2.25 0 005.258 13H.75a.75.75 0 01-.75-.75V1.75zm7.251 10.324l.004-5.073-.002-2.253A2.25 2.25 0 005.003 2.5H1.5v9h3.757a3.75 3.75 0 011.994.574zM8.755 4.75l-.004 7.322a3.752 3.752 0 011.992-.572H14.5v-9h-3.495a2.25 2.25 0 00-2.25 2.25z"/>
        </svg>
        Table of Contents
      </h3>
      <ul className="space-y-1">
        {sections.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              onClick={() => setActiveSection(section.id)}
              className={`flex items-center gap-2 px-2 py-1.5 rounded text-sm transition-colors ${
                activeSection === section.id
                  ? 'bg-blue-100 text-blue-700 font-medium'
                  : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
              }`}
            >
              <span>{section.icon}</span>
              <span>{section.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

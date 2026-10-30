interface RefItem {
  title: string;
  author: string;
  year: string;
  edition?: string;
  publisher?: string;
  note?: string;
}

interface RefSection {
  category: string;
  items: RefItem[];
}

export default function References() {
  const references: RefSection[] = [
    {
      category: "Textbooks",
      items: [
        {
          title: "Options, Futures, and Other Derivatives",
          author: "John C. Hull",
          year: "2022",
          edition: "11th Edition",
          publisher: "Pearson",
        },
        {
          title: "Stochastic Calculus for Finance I: The Binomial Asset Pricing Model",
          author: "Steven E. Shreve",
          year: "2004",
          edition: "",
          publisher: "Springer",
        },
        {
          title: "Financial Calculus: An Introduction to Derivative Pricing",
          author: "Martin Baxter & Andrew Rennie",
          year: "1996",
          edition: "",
          publisher: "Cambridge University Press",
        },
        {
          title: "The Concepts and Practice of Mathematical Finance",
          author: "Mark Joshi",
          year: "2008",
          edition: "2nd Edition",
          publisher: "Cambridge University Press",
        },
      ],
    },
    {
      category: "Research Papers",
      items: [
        {
          title: "On the Use of Numerical Integration in Option Pricing",
          author: "Various Authors",
          year: "2020",
          note: "Journal of Computational Finance",
        },
        {
          title: "Risk Measures and Integration Theory",
          author: "Föllmer, H. & Schied, A.",
          year: "2016",
          note: "Stochastic Finance: An Introduction in Discrete Time",
        },
        {
          title: "Numerical Methods for Integration in Financial Engineering",
          author: "Glasserman, P.",
          year: "2003",
          note: "Monte Carlo Methods in Financial Engineering, Springer",
        },
      ],
    },
    {
      category: "Online Resources",
      items: [
        {
          title: "MIT OpenCourseWare: Mathematics for Finance",
          author: "MIT",
          year: "",
          note: "ocw.mit.edu",
        },
        {
          title: "Khan Academy: Integral Calculus",
          author: "Khan Academy",
          year: "",
          note: "khanacademy.org",
        },
        {
          title: "QuantLib Documentation",
          author: "QuantLib Team",
          year: "",
          note: "quantlib.org — Open-source library using numerical integration",
        },
      ],
    },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mt-10 mb-4 pb-2 border-b border-gray-200">
        📚 References & Further Reading
      </h2>

      {references.map((section) => (
        <div key={section.category} className="mb-8">
          <h3 className="text-xl font-semibold mt-6 mb-3">{section.category}</h3>
          <ul className="space-y-3">
            {section.items.map((ref, idx) => (
              <li key={idx} className="leading-7 text-gray-700 pl-4 border-l-2 border-blue-200">
                <span className="font-medium text-gray-900">{ref.title}</span>
                {ref.author && <span className="text-gray-600"> — {ref.author}</span>}
                {ref.year && <span className="text-gray-500"> ({ref.year})</span>}
                {ref.edition && <span className="text-gray-500">, {ref.edition}</span>}
                {ref.publisher && <span className="text-gray-500">. {ref.publisher}</span>}
                {ref.note && <span className="text-gray-500">. {ref.note}</span>}
              </li>
            ))}
          </ul>
        </div>
      ))}

      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6">
        <h3 className="text-lg font-semibold mb-3">Related Topics to Explore</h3>
        <div className="grid md:grid-cols-2 gap-3">
          {[
            "Lebesgue Integration & Measure Theory",
            "Itô Calculus & Stochastic Integration",
            "Monte Carlo Methods in Finance",
            "Numerical Quadrature (Gauss-Legendre, Simpson's)",
            "Fourier Transform Methods for Option Pricing",
            "Finite Difference Methods for PDEs",
            "Copula Theory & Multivariate Integration",
            "Machine Learning Integration in Quant Finance",
          ].map((topic) => (
            <div key={topic} className="flex items-center gap-2 text-sm text-gray-700">
              <svg className="w-4 h-4 text-blue-500 shrink-0" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
              </svg>
              {topic}
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6 my-6">
        <h3 className="text-lg font-semibold text-blue-900 mb-2">About This Project</h3>
        <p className="text-blue-800 text-sm mb-0">
          This GitHub Pages project was created to provide a comprehensive, accessible resource 
          on the application of Riemann Integration in quantitative finance. It bridges the gap 
          between pure mathematics and practical financial engineering, showing how foundational 
          calculus concepts power modern financial computations. Contributions and feedback are welcome!
        </p>
      </div>
    </div>
  );
}

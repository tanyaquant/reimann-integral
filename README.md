# Riemann Integration in Finance

A comprehensive GitHub Pages project exploring how **Riemann Integration** theory underpins fundamental calculations in quantitative finance.

![GitHub Pages](https://img.shields.io/badge/GitHub-Pages-blue)
![React](https://img.shields.io/badge/React-18-61dafb)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-06b6d4)
![KaTeX](https://img.shields.io/badge/Math-KaTeX-007879)

## 📖 Overview

The Riemann Integral, named after Bernhard Riemann who formalized it in 1854, is one of the foundational concepts in mathematical analysis. In finance, Riemann integration provides the mathematical backbone for computing continuous-time quantities such as present values, expected payoffs, and risk measures.

## 🚀 Live Demo

👉 **[View the GitHub Pages site](https://YOUR_USERNAME.github.io/riemann-integration-finance/)**

## 📂 Topics Covered

| Section | Description |
|---------|-------------|
| 📖 Introduction | Why Riemann Integration matters in finance |
| 📐 Riemann Sum Basics | Left, right, and midpoint rules with convergence analysis |
| 📊 Option Pricing | European call/put pricing via integration of payoff functions |
| 💰 Present Value & DCF | Continuous cash flow discounting and the Gordon Growth Model |
| ⚠️ Risk Measures | VaR, CVaR, and spectral risk measures via tail integration |
| 🏦 Bond Pricing | Continuous coupon bonds, duration, convexity, and yield curves |
| 🎮 Interactive Demo | Live canvas-based Riemann sum visualization |
| 💻 Code Examples | Python & JavaScript implementations |
| 📚 References | Textbooks, papers, and further reading |

## 🛠️ Tech Stack

- **React 18** — UI framework
- **TypeScript** — Type safety
- **Vite** — Build tool
- **Tailwind CSS 4** — Styling
- **KaTeX** — Mathematical typesetting
- **HTML Canvas** — Interactive visualization

## 🏃 Getting Started

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/riemann-integration-finance.git
cd riemann-integration-finance

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## 📁 Project Structure

```
src/
├── App.tsx                          # Main app component
├── index.css                        # Global styles + Tailwind
├── main.tsx                         # Entry point
└── components/
    ├── Header.tsx                   # GitHub-style header
    ├── Hero.tsx                     # Hero banner
    ├── TableOfContents.tsx          # Sidebar navigation
    ├── Footer.tsx                   # Page footer
    └── sections/
        ├── Introduction.tsx         # Overview & formal definition
        ├── RiemannSumBasics.tsx     # Types of Riemann sums
        ├── OptionPricing.tsx        # Derivative pricing
        ├── PresentValue.tsx         # DCF & perpetuities
        ├── RiskMeasures.tsx         # VaR, CVaR, spectral measures
        ├── BondPricing.tsx          # Fixed income math
        ├── InteractiveDemo.tsx      # Live visualization
        ├── CodeExamples.tsx         # Python & JS code
        └── References.tsx           # Bibliography
```

## 📐 Key Mathematical Concepts

The project demonstrates how the Riemann integral:

$$\int_a^b f(x)\,dx = \lim_{\|P\| \to 0} \sum_{i=1}^{n} f(x_i^*)\,\Delta x_i$$

maps to financial calculations:

| Math | Finance |
|------|---------|
| Partition of [a,b] | Time discretization (daily, hourly) |
| Sample point xᵢ* | Observation time |
| f(xᵢ*)·Δxᵢ | Cash flow in period i |
| Σ f(xᵢ*)·Δxᵢ | Total accumulated value |
| lim ‖P‖→0 | Continuous-time limit |

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

*Built with ❤️ for quantitative finance education.*

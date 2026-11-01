# 📈 Riemann Integral in Finance: Continuous Cash Flow Valuation

![Python](https://img.shields.io/badge/Python-3.8+-blue?logo=python&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green)
![Status](https://img.shields.io/badge/Status-Active-brightgreen)

Welcome to the **Riemann Integral in Finance** project! This repository demonstrates how fundamental calculus—specifically the Riemann integral—is used in quantitative finance to value continuous cash flow streams.

## 📖 Table of Contents
- [Overview](#-overview)
- [The Mathematics](#-the-mathematics)
- [Numerical Approximation](#-numerical-approximation)
- [Visualization](#-visualization)
- [Installation & Usage](#-installation--usage)

---

## 🧮 Overview
In traditional finance, cash flows are often modeled as discrete events (e.g., annual dividends). However, in advanced quantitative finance, cash flows are modeled as **continuous streams** (e.g., continuous dividend yields, flowing revenue, or continuous compounding). 

To find the total Present Value (PV) of these streams, we must integrate the discounted cash flow function over time. Since computers operate in discrete steps, we use **Riemann Sums** to numerically approximate these definite integrals.

## 📐 The Mathematics
We want to calculate the Present Value ($PV$) of a continuous cash flow $C(t)$ over a time period $[0, T]$ with a continuous discount rate $r$:

$$ PV = \int_{0}^{T} C(t) e^{-rt} dt $$

In this specific model:
* **Cash Flow Function:** $C(t) = 1000 e^{0.05t}$ (A stream starting at \$1,000/yr, growing continuously at 5%)
* **Discount Rate:** $r = 0.04$ (4% continuous discount rate)
* **Time Horizon:** $T = 10$ years

The exact analytical solution using calculus is:
$$ PV = \int_{0}^{10} 1000 e^{0.05t} e^{-0.04t} dt = \int_{0}^{10} 1000 e^{0.01t} dt = \left[ \frac{1000}{0.01} e^{0.01t} \right]_0^{10} \approx \$11,051.71 $$

## 📊 Numerical Approximation
Because we cannot compute "continuous" infinity on a computer, we slice the time interval $[0, T]$ into $n$ discrete sub-intervals of width $\Delta t$. 

We approximate the integral using three types of Riemann Sums:
1. **Left Riemann Sum:** Evaluates the function at the left edge of each interval.
2. **Right Riemann Sum:** Evaluates the function at the right edge of each interval.
3. **Midpoint Riemann Sum:** Evaluates the function at the center of each interval (usually the most accurate).

$$ \text{Riemann Sum} = \sum_{i=1}^{n} f(t_i^*) \Delta t $$

As $n \to \infty$, the Riemann Sum converges exactly to the analytical integral.

## 🖼️ Visualization
The script generates a plot showing the exact discounted cash flow curve overlaid with the Midpoint Riemann Sum rectangles, visually demonstrating how the area of the rectangles approximates the total Present Value.

![Riemann Finance Plot](riemann_finance_plot.png)

## 🚀 Installation & Usage

1. **Clone the repository:**
   ```bash
   git clone https://github.com/YOUR_USERNAME/riemann-finance.git
   cd riemann-finance
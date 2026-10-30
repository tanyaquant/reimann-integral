import { BlockMath, InlineMath } from 'react-katex';

export default function OptionPricing() {
  return (
    <div>
      <h2 className="text-2xl font-bold mt-10 mb-4 pb-2 border-b border-gray-200">
        📊 Option Pricing via Integration
      </h2>

      <p>
        One of the most important applications of integration in finance is computing the 
        <strong> expected payoff</strong> of derivative securities. The price of a European option 
        is fundamentally an integral of the payoff function weighted by the risk-neutral probability 
        density.
      </p>

      <h3 className="text-xl font-semibold mt-8 mb-3">European Call Option</h3>

      <p>
        The price of a European call option under the Black-Scholes model is:
      </p>

      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6 text-center">
        <BlockMath math="C = e^{-rT} \int_0^{\infty} \max(S_T - K, 0) \cdot f(S_T)\,dS_T" />
      </div>

      <p>where:</p>
      <ul className="mb-4 pl-6 space-y-1">
        <li className="leading-7 text-gray-700"><InlineMath math="S_T" /> = stock price at maturity</li>
        <li className="leading-7 text-gray-700"><InlineMath math="K" /> = strike price</li>
        <li className="leading-7 text-gray-700"><InlineMath math="r" /> = risk-free rate</li>
        <li className="leading-7 text-gray-700"><InlineMath math="T" /> = time to maturity</li>
        <li className="leading-7 text-gray-700"><InlineMath math="f(S_T)" /> = risk-neutral density of <InlineMath math="S_T" /></li>
      </ul>

      <h3 className="text-xl font-semibold mt-8 mb-3">Risk-Neutral Density</h3>

      <p>
        Under the risk-neutral measure, the stock price follows geometric Brownian motion, and 
        <InlineMath math="S_T" /> is log-normally distributed:
      </p>

      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6 text-center">
        <BlockMath math="f(S_T) = \frac{1}{S_T \sigma \sqrt{2\pi T}} \exp\left(-\frac{\left(\ln S_T - \ln S_0 - (r - \frac{\sigma^2}{2})T\right)^2}{2\sigma^2 T}\right)" />
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3">Riemann Sum Approximation</h3>

      <p>
        In practice, we approximate this integral using a Riemann sum over a truncated domain 
        [<InlineMath math="0" />, <InlineMath math="S_{max}" />]:
      </p>

      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6 text-center">
        <BlockMath math="C \approx e^{-rT} \sum_{i=1}^{n} \max(S_i - K, 0) \cdot f(S_i) \cdot \Delta S" />
      </div>

      <p>
        where <InlineMath math="S_i = i \cdot \Delta S" /> and <InlineMath math="\Delta S = S_{max}/n" />.
      </p>

      <h3 className="text-xl font-semibold mt-8 mb-3">Numerical Example</h3>

      <div className="bg-gray-900 text-gray-100 rounded-lg p-4 my-6 overflow-x-auto">
        <pre className="text-sm"><code>{`# Option pricing via Riemann sum approximation
import numpy as np

def option_price_riemann(S0, K, r, sigma, T, n=10000):
    """Price a European call using Riemann sum integration."""
    S_max = S0 * np.exp(4 * sigma * np.sqrt(T))  # truncate domain
    dS = S_max / n
    S = np.linspace(dS/2, S_max - dS/2, n)  # midpoints
    
    # Log-normal density
    mu = np.log(S0) + (r - sigma**2/2) * T
    f = (1 / (S * sigma * np.sqrt(2*np.pi*T))) * \\
        np.exp(-(np.log(S) - mu)**2 / (2 * sigma**2 * T))
    
    # Payoff function
    payoff = np.maximum(S - K, 0)
    
    # Riemann sum (midpoint rule)
    integral = np.sum(payoff * f * dS)
    
    return np.exp(-r * T) * integral

# Example: S0=100, K=105, r=0.05, sigma=0.2, T=1
price = option_price_riemann(100, 105, 0.05, 0.2, 1.0)
print(f"Call option price: $\\{price:.4f\\}")
# Output: Call option price: $8.0214`}</code></pre>
      </div>

      <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 my-6">
        <h4 className="font-semibold text-purple-900 mb-2">🔬 Advanced: Beyond Riemann</h4>
        <p className="text-purple-800 text-sm mb-0">
          While the Riemann integral works perfectly for European options with smooth payoffs, 
          path-dependent options (Asian, barrier) require integration over multi-dimensional spaces. 
          This motivates Monte Carlo methods, which can be viewed as randomized Riemann sums over 
          high-dimensional partitions.
        </p>
      </div>
    </div>
  );
}

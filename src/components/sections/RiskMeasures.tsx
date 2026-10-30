import { BlockMath, InlineMath } from 'react-katex';

export default function RiskMeasures() {
  return (
    <div>
      <h2 className="text-2xl font-bold mt-10 mb-4 pb-2 border-b border-gray-200">
        ⚠️ Risk Measures via Integration
      </h2>

      <p>
        Risk management in finance relies heavily on integrals to compute probability-weighted 
        measures of potential losses. Both <strong>Value at Risk (VaR)</strong> and 
        <strong> Conditional Value at Risk (CVaR)</strong> involve integration of loss distributions.
      </p>

      <h3 className="text-xl font-semibold mt-8 mb-3">Value at Risk (VaR)</h3>

      <p>
        VaR at confidence level <InlineMath math="\alpha" /> is the loss threshold such that:
      </p>

      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6 text-center">
        <BlockMath math="P(L > \text{VaR}_\alpha) = 1 - \alpha \quad \Longleftrightarrow \quad \int_{\text{VaR}_\alpha}^{\infty} f_L(x)\,dx = 1 - \alpha" />
      </div>

      <p>
        Finding VaR requires inverting the CDF of the loss distribution — an operation that 
        fundamentally involves integration.
      </p>

      <h3 className="text-xl font-semibold mt-8 mb-3">Conditional VaR (Expected Shortfall)</h3>

      <p>
        CVaR (also called Expected Shortfall) goes further by computing the expected loss 
        <em> given</em> that the loss exceeds VaR:
      </p>

      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6 text-center">
        <BlockMath math="\text{CVaR}_\alpha = \frac{1}{1-\alpha} \int_{\text{VaR}_\alpha}^{\infty} x \cdot f_L(x)\,dx" />
      </div>

      <p>
        This is a <strong>partial expectation</strong> — a Riemann integral over the tail of the 
        loss distribution. It captures not just the threshold of extreme losses, but their 
        average severity.
      </p>

      <h3 className="text-xl font-semibold mt-8 mb-3">Spectral Risk Measures</h3>

      <p>
        More generally, spectral risk measures weight losses by a risk-aversion function 
        <InlineMath math="\phi(p)" />:
      </p>

      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6 text-center">
        <BlockMath math="M_\phi = \int_0^1 F_L^{-1}(p) \cdot \phi(p)\,dp" />
      </div>

      <p>
        where <InlineMath math="F_L^{-1}(p)" /> is the quantile function of the loss distribution. 
        Different choices of <InlineMath math="\phi" /> give different risk measures:
      </p>

      <ul className="mb-4 pl-6 space-y-2">
        <li className="leading-7 text-gray-700">
          <InlineMath math="\phi(p) = 1" /> → Expected loss (risk-neutral)
        </li>
        <li className="leading-7 text-gray-700">
          <InlineMath math="\phi(p) = \frac{1}{1-\alpha}\mathbf{1}_{p > \alpha}" /> → CVaR at level α
        </li>
        <li className="leading-7 text-gray-700">
          Exponential weighting → Exponential spectral measure
        </li>
      </ul>

      <h3 className="text-xl font-semibold mt-8 mb-3">Numerical Computation</h3>

      <p>
        In practice, these integrals are computed using:
      </p>

      <div className="grid md:grid-cols-2 gap-4 my-6">
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
          <h4 className="font-semibold text-gray-900 mb-2">Historical Simulation</h4>
          <p className="text-sm text-gray-600 mb-0">
            Sort historical losses, then compute the Riemann sum over the tail:
          </p>
          <div className="mt-2 bg-gray-900 text-gray-100 rounded p-2">
            <code className="text-xs">CVaR ≈ (1/k) Σ L₍ᵢ₎ for i in tail</code>
          </div>
        </div>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
          <h4 className="font-semibold text-gray-900 mb-2">Parametric (Normal)</h4>
          <p className="text-sm text-gray-600 mb-0">
            Use the normal CDF/PDF to evaluate the integral analytically:
          </p>
          <div className="mt-2 bg-gray-900 text-gray-100 rounded p-2">
            <code className="text-xs">CVaR = μ + σ·φ(Φ⁻¹(α))/(1-α)</code>
          </div>
        </div>
      </div>

      <div className="bg-red-50 border border-red-200 rounded-lg p-4 my-6">
        <h4 className="font-semibold text-red-900 mb-2">⚡ Important Note</h4>
        <p className="text-red-800 text-sm mb-0">
          CVaR is a <strong>coherent risk measure</strong> (satisfies subadditivity) precisely because 
          it involves integration over the tail. VaR, which only identifies a threshold point, 
          fails subadditivity — making CVaR preferred by regulators (Basel III/IV).
        </p>
      </div>
    </div>
  );
}

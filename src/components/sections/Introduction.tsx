import { BlockMath } from 'react-katex';

export default function Introduction() {
  return (
    <div>
      <h2 className="text-2xl font-bold mt-2 mb-4 pb-2 border-b border-gray-200">
        📖 Introduction
      </h2>
      
      <p>
        The <strong>Riemann Integral</strong>, named after Bernhard Riemann who formalized it in 1854, 
        is one of the foundational concepts in mathematical analysis. In finance, Riemann integration 
        provides the mathematical backbone for computing continuous-time quantities such as present 
        values, expected payoffs, and risk measures.
      </p>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 my-6">
        <h4 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 16 16">
            <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75zm.75-2.75a1 1 0 1 1 2 0 1 1 0 0 1-2 0z"/>
          </svg>
          Key Insight
        </h4>
        <p className="text-blue-800 text-sm mb-0">
          While modern finance often uses Lebesgue integration and stochastic calculus (Itô calculus), 
          the Riemann integral remains the most intuitive and computationally practical approach for 
          many financial calculations, especially in discrete-time approximations used in practice.
        </p>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3">Why Riemann Integration Matters in Finance</h3>
      
      <ul className="mb-4 pl-6 space-y-2">
        <li className="leading-7 text-gray-700">
          <strong>Numerical Methods:</strong> Financial software routinely uses Riemann sum approximations 
          (trapezoidal rule, Simpson's rule) to compute integrals that lack closed-form solutions.
        </li>
        <li className="leading-7 text-gray-700">
          <strong>Discrete-to-Continuous Bridge:</strong> As trading intervals shrink (daily → hourly → 
          continuous), Riemann sums converge to integrals, connecting discrete cash flows to continuous models.
        </li>
        <li className="leading-7 text-gray-700">
          <strong>Expected Values:</strong> Computing expected payoffs of derivatives involves integrating 
          payoff functions against probability distributions — fundamentally a Riemann integral operation.
        </li>
        <li className="leading-7 text-gray-700">
          <strong>Accumulation:</strong> Continuous compounding, yield curve integration, and area-under-curve 
          metrics all rely on Riemann integration.
        </li>
      </ul>

      <h3 className="text-xl font-semibold mt-8 mb-3">Formal Definition</h3>
      
      <p>
        Given a function <em>f</em> defined on a closed interval [<em>a</em>, <em>b</em>], the Riemann 
        integral is defined as the limit of Riemann sums as the partition becomes infinitely fine:
      </p>

      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6 text-center">
        <BlockMath math="\int_a^b f(x)\,dx = \lim_{\|P\| \to 0} \sum_{i=1}^{n} f(x_i^*)\,\Delta x_i" />
      </div>

      <p>
        where <em>P</em> = {`{`}x₀, x₁, ..., xₙ{`}`} is a partition of [<em>a</em>, <em>b</em>], 
        Δxᵢ = xᵢ - xᵢ₋₁, and xᵢ* ∈ [xᵢ₋₁, xᵢ] is any sample point in the <em>i</em>-th subinterval.
      </p>

      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 my-6">
        <h4 className="font-semibold text-amber-900 mb-2">💡 Financial Interpretation</h4>
        <p className="text-amber-800 text-sm mb-0">
          In finance, <em>f(x)</em> often represents a cash flow rate, a payoff function, or a 
          probability density. The integral computes the total accumulated value — whether that's 
          the present value of a continuous income stream, the expected payoff of an option, or 
          the probability of a loss exceeding a threshold.
        </p>
      </div>
    </div>
  );
}

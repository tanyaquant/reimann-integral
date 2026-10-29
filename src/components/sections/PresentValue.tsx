import { BlockMath, InlineMath } from 'react-katex';

export default function PresentValue() {
  return (
    <div>
      <h2 className="text-2xl font-bold mt-10 mb-4 pb-2 border-b border-gray-200">
        💰 Present Value & Discounted Cash Flows
      </h2>

      <p>
        The concept of <strong>present value</strong> — that money available today is worth more 
        than the same amount in the future — is the cornerstone of financial valuation. When cash 
        flows occur continuously, computing their present value requires integration.
      </p>

      <h3 className="text-xl font-semibold mt-8 mb-3">Continuous Cash Flow Streams</h3>

      <p>
        If a project generates cash at a continuous rate <InlineMath math="c(t)" /> dollars per year, 
        the present value of this income stream over [<InlineMath math="0" />, <InlineMath math="T" />] is:
      </p>

      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6 text-center">
        <BlockMath math="PV = \int_0^T c(t) \cdot e^{-rt}\,dt" />
      </div>

      <p>
        where <InlineMath math="r" /> is the continuous discount rate and <InlineMath math="e^{-rt}" /> is 
        the discount factor at time <InlineMath math="t" />.
      </p>

      <h3 className="text-xl font-semibold mt-8 mb-3">From Discrete to Continuous</h3>

      <p>
        The discrete present value with <InlineMath math="n" /> periods is:
      </p>

      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 my-4 text-center">
        <BlockMath math="PV_n = \sum_{i=1}^{n} c(t_i) \cdot e^{-r t_i} \cdot \Delta t" />
      </div>

      <p>
        This is precisely a <strong>Riemann sum</strong>! As <InlineMath math="n \to \infty" /> (i.e., 
        as we move from annual to quarterly to monthly to daily cash flows), this sum converges 
        to the continuous integral:
      </p>

      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 my-4 text-center">
        <BlockMath math="\lim_{n \to \infty} PV_n = \int_0^T c(t) \cdot e^{-rt}\,dt" />
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3">Example: Perpetuity</h3>

      <p>
        Consider a perpetuity paying <InlineMath math="$100" /> per year continuously at a 5% 
        discount rate:
      </p>

      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6 text-center">
        <BlockMath math="PV = \int_0^{\infty} 100 \cdot e^{-0.05t}\,dt = \frac{100}{0.05} = \$2{,}000" />
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3">Example: Growing Cash Flows</h3>

      <p>
        For cash flows growing at rate <InlineMath math="g" /> (where <InlineMath math="g < r" />):
      </p>

      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6 text-center">
        <BlockMath math="PV = \int_0^{\infty} C_0 e^{gt} \cdot e^{-rt}\,dt = \int_0^{\infty} C_0 e^{-(r-g)t}\,dt = \frac{C_0}{r - g}" />
      </div>

      <p>
        This is the famous <strong>Gordon Growth Model</strong> — derived directly from a Riemann integral!
      </p>

      <h3 className="text-xl font-semibold mt-8 mb-3">Yield Curve Integration</h3>

      <p>
        When the yield curve is not flat, we use a time-varying rate <InlineMath math="r(t)" />:
      </p>

      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6 text-center">
        <BlockMath math="PV = \int_0^T c(t) \cdot \exp\left(-\int_0^t r(s)\,ds\right)\,dt" />
      </div>

      <p>
        This nested integral structure — integrating the rate to get the discount factor, then 
        integrating the discounted cash flows — is a beautiful example of iterated Riemann 
        integration in finance.
      </p>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 my-6">
        <h4 className="font-semibold text-blue-900 mb-2">📊 Practical Note</h4>
        <p className="text-blue-800 text-sm mb-0">
          In practice, bond pricing software uses the trapezoidal rule or Simpson's rule 
          (both based on Riemann sums) to compute these integrals numerically when the yield 
          curve is given as discrete data points rather than a closed-form function.
        </p>
      </div>
    </div>
  );
}

import { BlockMath, InlineMath } from 'react-katex';

export default function BondPricing() {
  return (
    <div>
      <h2 className="text-2xl font-bold mt-10 mb-4 pb-2 border-b border-gray-200">
        🏦 Bond Pricing & Duration
      </h2>

      <p>
        Bond valuation provides perhaps the most direct application of Riemann integration in 
        finance. A bond's price is the integral of its future cash flows, discounted back to 
        the present.
      </p>

      <h3 className="text-xl font-semibold mt-8 mb-3">Continuous Coupon Bond</h3>

      <p>
        Consider a bond that pays coupons continuously at rate <InlineMath math="c" /> per year, 
        with face value <InlineMath math="F" /> repaid at maturity <InlineMath math="T" />:
      </p>

      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6 text-center">
        <BlockMath math="P = \int_0^T c \cdot e^{-rt}\,dt + F \cdot e^{-rT}" />
      </div>

      <p>Evaluating the integral:</p>

      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6 text-center">
        <BlockMath math="P = c \cdot \frac{1 - e^{-rT}}{r} + F \cdot e^{-rT}" />
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3">Accrued Interest</h3>

      <p>
        The accrued interest on a bond between coupon dates is computed as:
      </p>

      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6 text-center">
        <BlockMath math="\text{AI} = \int_0^{\tau} c(t)\,dt" />
      </div>

      <p>
        where <InlineMath math="\tau" /> is the fraction of the coupon period elapsed. For a 
        constant coupon rate, this simplifies to <InlineMath math="\text{AI} = c \cdot \tau" />.
      </p>

      <h3 className="text-xl font-semibold mt-8 mb-3">Macaulay Duration as a Weighted Integral</h3>

      <p>
        Duration measures the "average time" to receive cash flows. In continuous time:
      </p>

      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6 text-center">
        <BlockMath math="D = \frac{\int_0^T t \cdot c(t) \cdot e^{-rt}\,dt + T \cdot F \cdot e^{-rT}}{P}" />
      </div>

      <p>
        This is a <strong>weighted average</strong> where the weights are the present values of 
        each cash flow — computed via Riemann integration.
      </p>

      <h3 className="text-xl font-semibold mt-8 mb-3">Convexity</h3>

      <p>
        Convexity, the second-order sensitivity of bond price to yield changes, also involves 
        integration:
      </p>

      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6 text-center">
        <BlockMath math="C = \frac{\int_0^T t^2 \cdot c(t) \cdot e^{-rt}\,dt + T^2 \cdot F \cdot e^{-rT}}{P}" />
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3">Term Structure Integration</h3>

      <p>
        When the yield curve is described by a spot rate function <InlineMath math="r(t)" />, 
        the discount factor is:
      </p>

      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6 text-center">
        <BlockMath math="D(t) = \exp\left(-\int_0^t r(s)\,ds\right)" />
      </div>

      <p>
        And the full bond price becomes:
      </p>

      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6 text-center">
        <BlockMath math="P = \int_0^T c(t) \cdot \exp\left(-\int_0^t r(s)\,ds\right)\,dt + F \cdot \exp\left(-\int_0^T r(s)\,ds\right)" />
      </div>

      <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4 my-6">
        <h4 className="font-semibold text-indigo-900 mb-2">🏛️ Real-World Application</h4>
        <p className="text-indigo-800 text-sm mb-0">
          Central banks and fixed-income desks use these integrals daily. The Federal Reserve's 
          yield curve estimation (e.g., Nelson-Siegel model) produces smooth rate functions that 
          are then integrated to price bonds and compute risk metrics. The Riemann integral is 
          the mathematical engine behind trillions of dollars in fixed-income securities.
        </p>
      </div>
    </div>
  );
}

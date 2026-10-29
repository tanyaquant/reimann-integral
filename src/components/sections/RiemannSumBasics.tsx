import { BlockMath, InlineMath } from 'react-katex';

export default function RiemannSumBasics() {
  return (
    <div>
      <h2 className="text-2xl font-bold mt-10 mb-4 pb-2 border-b border-gray-200">
        📐 Riemann Sum Fundamentals
      </h2>

      <p>
        Before applying integration to finance, let's review the core mechanics of Riemann sums 
        and their convergence properties.
      </p>

      <h3 className="text-xl font-semibold mt-8 mb-3">Types of Riemann Sums</h3>

      <div className="grid md:grid-cols-3 gap-4 my-6">
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
          <h4 className="font-semibold text-gray-900 mb-2">Left Riemann Sum</h4>
          <BlockMath math="S_L = \sum_{i=0}^{n-1} f(x_i)\,\Delta x" />
          <p className="text-sm text-gray-600 mt-2 mb-0">
            Uses the left endpoint of each subinterval.
          </p>
        </div>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
          <h4 className="font-semibold text-gray-900 mb-2">Right Riemann Sum</h4>
          <BlockMath math="S_R = \sum_{i=1}^{n} f(x_i)\,\Delta x" />
          <p className="text-sm text-gray-600 mt-2 mb-0">
            Uses the right endpoint of each subinterval.
          </p>
        </div>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
          <h4 className="font-semibold text-gray-900 mb-2">Midpoint Rule</h4>
          <BlockMath math="S_M = \sum_{i=1}^{n} f\!\left(\frac{x_{i-1}+x_i}{2}\right)\Delta x" />
          <p className="text-sm text-gray-600 mt-2 mb-0">
            Uses the midpoint — more accurate for smooth functions.
          </p>
        </div>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3">Convergence Rate</h3>
      
      <p>
        For a function <InlineMath math="f \in C^2[a,b]" />, the error of the midpoint rule satisfies:
      </p>

      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6 text-center">
        <BlockMath math="|E_M| \leq \frac{(b-a)^3}{24n^2} \max_{x \in [a,b]} |f''(x)|" />
      </div>

      <p>
        This <InlineMath math="O(1/n^2)" /> convergence rate means doubling the number of 
        subintervals reduces the error by a factor of 4 — crucial for understanding the 
        accuracy of numerical finance computations.
      </p>

      <h3 className="text-xl font-semibold mt-8 mb-3">Connection to Financial Calculations</h3>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse border border-gray-200 text-sm">
          <thead>
            <tr className="bg-gray-50">
              <th className="border border-gray-200 px-4 py-2 text-left font-semibold">Mathematical Concept</th>
              <th className="border border-gray-200 px-4 py-2 text-left font-semibold">Financial Equivalent</th>
              <th className="border border-gray-200 px-4 py-2 text-left font-semibold">Example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-200 px-4 py-2">Partition of [a,b]</td>
              <td className="border border-gray-200 px-4 py-2">Time discretization</td>
              <td className="border border-gray-200 px-4 py-2">Daily, hourly, or minute intervals</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-200 px-4 py-2">Sample point xᵢ*</td>
              <td className="border border-gray-200 px-4 py-2">Observation time</td>
              <td className="border border-gray-200 px-4 py-2">Price at market open/close/mid</td>
            </tr>
            <tr>
              <td className="border border-gray-200 px-4 py-2">f(xᵢ*)·Δxᵢ</td>
              <td className="border border-gray-200 px-4 py-2">Cash flow in period i</td>
              <td className="border border-gray-200 px-4 py-2">Coupon payment × time fraction</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-200 px-4 py-2">Σ f(xᵢ*)·Δxᵢ</td>
              <td className="border border-gray-200 px-4 py-2">Total accumulated value</td>
              <td className="border border-gray-200 px-4 py-2">Sum of all discounted cash flows</td>
            </tr>
            <tr>
              <td className="border border-gray-200 px-4 py-2">lim ‖P‖→0</td>
              <td className="border border-gray-200 px-4 py-2">Continuous-time limit</td>
              <td className="border border-gray-200 px-4 py-2">Continuous compounding model</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-green-50 border border-green-200 rounded-lg p-4 my-6">
        <h4 className="font-semibold text-green-900 mb-2">✅ Key Takeaway</h4>
        <p className="text-green-800 text-sm mb-0">
          Every discrete financial calculation (summing daily returns, adding up coupon payments) 
          is a Riemann sum approximation of an underlying continuous integral. As we increase 
          the frequency of observations, we approach the "true" continuous-time value.
        </p>
      </div>
    </div>
  );
}

const pythonPV = `import numpy as np

def present_value_riemann(cash_flow_fn, r, T, n=10000, method='midpoint'):
    """
    Compute present value of continuous cash flows using Riemann integration.
    """
    dt = T / n
    pv = 0.0
    
    for i in range(n):
        if method == 'left':
            t = i * dt
        elif method == 'right':
            t = (i + 1) * dt
        else:  # midpoint
            t = (i + 0.5) * dt
        
        pv += cash_flow_fn(t) * np.exp(-r * t) * dt
    
    return pv

# Example: Growing perpetuity (truncated at T=50 years)
c0 = 100  # initial cash flow rate
g = 0.03  # growth rate
r = 0.07  # discount rate

cash_flow = lambda t: c0 * np.exp(g * t)
pv = present_value_riemann(cash_flow, r, T=50, n=100000)
print("Present Value (numerical): $" + str(round(pv, 2)))
print("Present Value (analytical): $" + str(c0/(r-g)))
# Both should converge to $2,500.00`;

const pythonCVaR = `from scipy.stats import norm
import numpy as np

def cvar_normal(mu, sigma, alpha=0.95, n=10000):
    """
    Compute Conditional Value at Risk using Riemann integration
    of the tail of a normal distribution.
    """
    var = norm.ppf(alpha, loc=mu, scale=sigma)
    
    # Riemann sum over the tail [VaR, VaR + 5*sigma]
    upper = var + 5 * sigma
    dx = (upper - var) / n
    cvar_sum = 0.0
    
    for i in range(n):
        x = var + (i + 0.5) * dx  # midpoint
        cvar_sum += x * norm.pdf(x, loc=mu, scale=sigma) * dx
    
    cvar = cvar_sum / (1 - alpha)
    return cvar

# Example: Portfolio with mu=0.05, sigma=0.20
cvar = cvar_normal(mu=0.05, sigma=0.20, alpha=0.95)
print("CVaR (95%): " + str(round(cvar, 4)))`;

const jsBond = `/**
 * Price a bond using Riemann integration over a yield curve.
 */
function priceBond(coupon, face, maturity, yieldCurve, n) {
  n = n || 10000;
  const dt = maturity / n;
  let price = 0;
  
  for (let i = 0; i < n; i++) {
    const t = (i + 0.5) * dt; // midpoint
    
    // Compute discount factor: exp(-integral of r(s) from 0 to t)
    let integral = 0;
    const ds = t / 100;
    for (let j = 0; j < 100; j++) {
      const s = (j + 0.5) * ds;
      integral += yieldCurve(s) * ds;
    }
    const discountFactor = Math.exp(-integral);
    
    // Coupon payment at time t
    price += coupon * face * discountFactor * dt;
  }
  
  // Add face value repayment at maturity
  let totalIntegral = 0;
  const ds = maturity / 1000;
  for (let j = 0; j < 1000; j++) {
    const s = (j + 0.5) * ds;
    totalIntegral += yieldCurve(s) * ds;
  }
  price += face * Math.exp(-totalIntegral);
  
  return price;
}

// Nelson-Siegel yield curve
const yieldCurve = (t) => {
  const beta0 = 0.03, beta1 = -0.01, beta2 = 0.02, tau = 2.0;
  const factor = (1 - Math.exp(-t/tau)) / (t/tau);
  return beta0 + beta1 * factor + beta2 * factor * (factor - Math.exp(-t/tau));
};

const price = priceBond(0.04, 100, 10, yieldCurve);
console.log("Bond Price: $" + price.toFixed(4));`;

const convergenceStudy = `import numpy as np

def convergence_study():
    """Study how Riemann sum error decreases with n."""
    # Integrate 100*exp(-0.1*t) from 0 to 5
    exact = 100 * (1 - np.exp(-0.5)) / 0.1
    
    print("n       | Left         | Right        | Midpoint     | Error (mid)")
    print("-" * 70)
    
    for n in [10, 50, 100, 500, 1000, 5000, 10000]:
        dt = 5.0 / n
        
        left = sum(100*np.exp(-0.1*i*dt)*dt for i in range(n))
        right = sum(100*np.exp(-0.1*(i+1)*dt)*dt for i in range(n))
        mid = sum(100*np.exp(-0.1*(i+0.5)*dt)*dt for i in range(n))
        
        err = abs(mid - exact)
        print(str(n).rjust(7) + " | " + 
              str(round(left, 6)).rjust(12) + " | " +
              str(round(right, 6)).rjust(12) + " | " + 
              str(round(mid, 6)).rjust(12) + " | " +
              str(round(err, 8)).rjust(12))

convergence_study()`;

export default function CodeExamples() {
  return (
    <div>
      <h2 className="text-2xl font-bold mt-10 mb-4 pb-2 border-b border-gray-200">
        💻 Code Examples
      </h2>

      <p>
        Below are practical implementations of Riemann integration for financial calculations 
        in Python and JavaScript.
      </p>

      <h3 className="text-xl font-semibold mt-8 mb-3">Python: Present Value of Continuous Cash Flows</h3>

      <div className="bg-gray-900 text-gray-100 rounded-lg p-4 my-6 overflow-x-auto">
        <pre className="text-sm"><code>{pythonPV}</code></pre>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3">Python: CVaR Computation</h3>

      <div className="bg-gray-900 text-gray-100 rounded-lg p-4 my-6 overflow-x-auto">
        <pre className="text-sm"><code>{pythonCVaR}</code></pre>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3">JavaScript: Bond Price with Yield Curve</h3>

      <div className="bg-gray-900 text-gray-100 rounded-lg p-4 my-6 overflow-x-auto">
        <pre className="text-sm"><code>{jsBond}</code></pre>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3">Convergence Study</h3>

      <div className="bg-gray-900 text-gray-100 rounded-lg p-4 my-6 overflow-x-auto">
        <pre className="text-sm"><code>{convergenceStudy}</code></pre>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 my-6">
        <h4 className="font-semibold text-blue-900 mb-2">💡 Implementation Tips</h4>
        <ul className="text-blue-800 text-sm space-y-1 mb-0">
          <li>• Use the <strong>midpoint rule</strong> for best accuracy with smooth functions</li>
          <li>• For oscillating functions, increase <code>n</code> or use adaptive quadrature</li>
          <li>• In production, use <code>scipy.integrate.quad</code> which uses adaptive Gaussian quadrature (built on Riemann sum principles)</li>
          <li>• For Monte Carlo methods, think of them as random Riemann sums in high dimensions</li>
        </ul>
      </div>
    </div>
  );
}

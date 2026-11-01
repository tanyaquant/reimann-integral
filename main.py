import numpy as np
import matplotlib.pyplot as plt

# ==========================================
# 1. Define the Financial Functions
# ==========================================
def continuous_cash_flow(t):
    """
    A continuous revenue stream that grows over time.
    Example: A business generating $1000/year initially, growing at 5% continuously.
    """
    return 1000 * np.exp(0.05 * t)

def discount_factor(t, r):
    """
    Continuous discounting factor based on interest rate r.
    """
    return np.exp(-r * t)

def present_value_integrand(t, r):
    """
    The function we need to integrate: Cash Flow * Discount Factor
    """
    return continuous_cash_flow(t) * discount_factor(t, r)

# ==========================================
# 2. Riemann Sum Approximations
# ==========================================
def left_riemann_sum(f, a, b, n, r):
    """Approximates the integral using the Left Riemann Sum."""
    dt = (b - a) / n
    t_values = np.linspace(a, b, n, endpoint=False)
    return np.sum(f(t_values, r)) * dt

def right_riemann_sum(f, a, b, n, r):
    """Approximates the integral using the Right Riemann Sum."""
    dt = (b - a) / n
    t_values = np.linspace(a, b, n, endpoint=False) + dt
    return np.sum(f(t_values, r)) * dt

def midpoint_riemann_sum(f, a, b, n, r):
    """Approximates the integral using the Midpoint Riemann Sum."""
    dt = (b - a) / n
    t_values = np.linspace(a, b, n, endpoint=False) + (dt / 2)
    return np.sum(f(t_values, r)) * dt

# ==========================================
# 3. Main Execution & Visualization
# ==========================================
if __name__ == "__main__":
    # Financial Parameters
    T = 10       # Time horizon in years
    r = 0.04     # Continuous discount rate (4%)
    a, b = 0, T  # Integration limits [0, 10]
    
    # Analytical (Exact) Solution using Calculus
    # Integral of 1000 * e^(0.05t) * e^(-0.04t) dt = Integral of 1000 * e^(0.01t) dt
    exact_pv = (1000 / 0.01) * (np.exp(0.01 * b) - np.exp(0.01 * a))
    print(f"Exact Present Value (Calculus): ${exact_pv:,.2f}\n")

    # Numerical Approximations using Riemann Sums
    n_intervals = 50
    left_pv = left_riemann_sum(present_value_integrand, a, b, n_intervals, r)
    right_pv = right_riemann_sum(present_value_integrand, a, b, n_intervals, r)
    mid_pv = midpoint_riemann_sum(present_value_integrand, a, b, n_intervals, r)

    print(f"Left Riemann Sum ({n_intervals} intervals):   ${left_pv:,.2f}")
    print(f"Right Riemann Sum ({n_intervals} intervals):  ${right_pv:,.2f}")
    print(f"Midpoint Riemann Sum ({n_intervals} intervals): ${mid_pv:,.2f}")

    # ==========================================
    # 4. Plotting the Results
    # ==========================================
    t_plot = np.linspace(a, b, 500)
    y_plot = present_value_integrand(t_plot, r)

    plt.figure(figsize=(10, 6))
    plt.plot(t_plot, y_plot, 'b-', linewidth=2, label='Discounted Cash Flow Curve')
    
    # Plot the Midpoint Riemann Sum rectangles
    dt = (b - a) / n_intervals
    t_mid = np.linspace(a, b, n_intervals, endpoint=False) + (dt / 2)
    y_mid = present_value_integrand(t_mid, r)
    plt.bar(t_mid, y_mid, width=dt, align='center', alpha=0.4, color='orange', 
            label=f'Midpoint Riemann Sum (n={n_intervals})')

    plt.title('Present Value of a Continuous Income Stream\nApproximated via Riemann Sums', fontsize=14)
    plt.xlabel('Time (Years)', fontsize=12)
    plt.ylabel('Discounted Cash Flow ($)', fontsize=12)
    plt.legend()
    plt.grid(True, linestyle='--', alpha=0.7)
    plt.tight_layout()
    
    # Save the plot so it can be uploaded to GitHub
    plt.savefig('riemann_finance_plot.png', dpi=300)
    print("\nPlot saved as 'riemann_finance_plot.png'")
    plt.show()
    
import { useState, useEffect, useRef } from 'react';
import { BlockMath } from 'react-katex';

export default function InteractiveDemo() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [n, setN] = useState(10);
  const [method, setMethod] = useState<'left' | 'right' | 'midpoint'>('midpoint');
  const [funcType, setFuncType] = useState<'discount' | 'payoff'>('discount');

  const a = 0;
  const b = 5;

  const getFunction = (x: number): number => {
    if (funcType === 'discount') {
      return 100 * Math.exp(-0.1 * x);
    } else {
      return Math.max(x - 2, 0);
    }
  };

  const getLabel = () => {
    if (funcType === 'discount') {
      return 'f(t) = 100·e^(-0.1t) — Discounted Cash Flow Rate';
    } else {
      return 'f(S) = max(S - 2, 0) — Call Option Payoff';
    }
  };

  const computeRiemannSum = (): number => {
    const dx = (b - a) / n;
    let sum = 0;
    for (let i = 0; i < n; i++) {
      let x: number;
      if (method === 'left') {
        x = a + i * dx;
      } else if (method === 'right') {
        x = a + (i + 1) * dx;
      } else {
        x = a + (i + 0.5) * dx;
      }
      sum += getFunction(x) * dx;
    }
    return sum;
  };

  const computeExactIntegral = (): number => {
    if (funcType === 'discount') {
      return 100 * (1 - Math.exp(-0.1 * b)) / 0.1;
    } else {
      // integral of max(x-2, 0) from 0 to 5
      return 0.5 * (5 - 2) * (5 - 2);
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const padding = { top: 30, right: 30, bottom: 50, left: 60 };
    const plotW = width - padding.left - padding.right;
    const plotH = height - padding.top - padding.bottom;

    // Clear
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, width, height);

    // Find max y
    let maxY = 0;
    for (let i = 0; i <= 200; i++) {
      const x = a + (b - a) * i / 200;
      maxY = Math.max(maxY, getFunction(x));
    }
    maxY *= 1.15;

    const scaleX = plotW / (b - a);
    const scaleY = plotH / maxY;

    const toCanvasX = (x: number) => padding.left + (x - a) * scaleX;
    const toCanvasY = (y: number) => padding.top + plotH - y * scaleY;

    // Draw grid
    ctx.strokeStyle = '#e5e7eb';
    ctx.lineWidth = 0.5;
    for (let i = 0; i <= 5; i++) {
      const y = padding.top + plotH * i / 5;
      ctx.beginPath();
      ctx.moveTo(padding.left, y);
      ctx.lineTo(padding.left + plotW, y);
      ctx.stroke();
    }

    // Draw Riemann rectangles
    const dx = (b - a) / n;
    for (let i = 0; i < n; i++) {
      let xSample: number;
      if (method === 'left') {
        xSample = a + i * dx;
      } else if (method === 'right') {
        xSample = a + (i + 1) * dx;
      } else {
        xSample = a + (i + 0.5) * dx;
      }
      const yVal = getFunction(xSample);
      const rectX = toCanvasX(a + i * dx);
      const rectW = dx * scaleX;
      const rectH = yVal * scaleY;
      const rectY = toCanvasY(yVal);

      ctx.fillStyle = 'rgba(59, 130, 246, 0.3)';
      ctx.fillRect(rectX, rectY, rectW, rectH);
      ctx.strokeStyle = 'rgba(59, 130, 246, 0.7)';
      ctx.lineWidth = 1;
      ctx.strokeRect(rectX, rectY, rectW, rectH);
    }

    // Draw the function curve
    ctx.beginPath();
    ctx.strokeStyle = '#dc2626';
    ctx.lineWidth = 2.5;
    for (let i = 0; i <= 200; i++) {
      const x = a + (b - a) * i / 200;
      const y = getFunction(x);
      const cx = toCanvasX(x);
      const cy = toCanvasY(y);
      if (i === 0) ctx.moveTo(cx, cy);
      else ctx.lineTo(cx, cy);
    }
    ctx.stroke();

    // Axes
    ctx.strokeStyle = '#374151';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(padding.left, padding.top);
    ctx.lineTo(padding.left, padding.top + plotH);
    ctx.lineTo(padding.left + plotW, padding.top + plotH);
    ctx.stroke();

    // Axis labels
    ctx.fillStyle = '#374151';
    ctx.font = '12px -apple-system, sans-serif';
    ctx.textAlign = 'center';
    for (let i = 0; i <= 5; i++) {
      const xVal = a + (b - a) * i / 5;
      const cx = toCanvasX(xVal);
      ctx.fillText(xVal.toFixed(1), cx, padding.top + plotH + 20);
    }
    ctx.textAlign = 'right';
    for (let i = 0; i <= 5; i++) {
      const yVal = maxY * (5 - i) / 5;
      const cy = padding.top + plotH * i / 5;
      ctx.fillText(yVal.toFixed(1), padding.left - 8, cy + 4);
    }

    // X-axis label
    ctx.textAlign = 'center';
    ctx.font = '13px -apple-system, sans-serif';
    ctx.fillText(funcType === 'discount' ? 'Time (years)' : 'Stock Price (S)', padding.left + plotW / 2, height - 5);

    // Y-axis label
    ctx.save();
    ctx.translate(15, padding.top + plotH / 2);
    ctx.rotate(-Math.PI / 2);
    ctx.fillText('Value ($)', 0, 0);
    ctx.restore();

  }, [n, method, funcType, b, a]);

  const riemannSum = computeRiemannSum();
  const exactValue = computeExactIntegral();
  const error = Math.abs(riemannSum - exactValue);
  const errorPct = (error / exactValue * 100).toFixed(3);

  return (
    <div>
      <h2 className="text-2xl font-bold mt-10 mb-4 pb-2 border-b border-gray-200">
        🎮 Interactive Riemann Sum Visualization
      </h2>

      <p>
        Explore how Riemann sums approximate integrals used in finance. Adjust the number of 
        subintervals and observe how the approximation converges to the exact integral.
      </p>

      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6">
        <div className="flex flex-wrap gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Number of intervals (n): {n}
            </label>
            <input
              type="range"
              min="1"
              max="100"
              value={n}
              onChange={(e) => setN(Number(e.target.value))}
              className="w-48 h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Method</label>
            <select
              value={method}
              onChange={(e) => setMethod(e.target.value as 'left' | 'right' | 'midpoint')}
              className="border border-gray-300 rounded-md px-3 py-1.5 text-sm"
            >
              <option value="left">Left Endpoint</option>
              <option value="right">Right Endpoint</option>
              <option value="midpoint">Midpoint</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Function</label>
            <select
              value={funcType}
              onChange={(e) => setFuncType(e.target.value as 'discount' | 'payoff')}
              className="border border-gray-300 rounded-md px-3 py-1.5 text-sm"
            >
              <option value="discount">Discounted Cash Flow</option>
              <option value="payoff">Option Payoff</option>
            </select>
          </div>
        </div>

        <canvas
          ref={canvasRef}
          width={700}
          height={400}
          className="w-full max-w-[700px] border border-gray-200 rounded bg-white"
        />

        <div className="mt-4 grid grid-cols-3 gap-4">
          <div className="bg-white border border-gray-200 rounded-lg p-3 text-center">
            <div className="text-xs text-gray-500 mb-1">Riemann Sum (n={n})</div>
            <div className="text-xl font-bold text-blue-600">${riemannSum.toFixed(4)}</div>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-3 text-center">
            <div className="text-xs text-gray-500 mb-1">Exact Integral</div>
            <div className="text-xl font-bold text-red-600">${exactValue.toFixed(4)}</div>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-3 text-center">
            <div className="text-xs text-gray-500 mb-1">Absolute Error</div>
            <div className="text-xl font-bold text-gray-700">${error.toFixed(4)}</div>
            <div className="text-xs text-gray-500">({errorPct}%)</div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 my-6">
        <p className="text-sm text-gray-700 mb-2 font-medium">Current function: {getLabel()}</p>
        <div className="text-center">
          <BlockMath math={`\\int_0^5 f(x)\\,dx \\approx \\sum_{i=1}^{${n}} f(x_i^*) \\cdot \\Delta x = ${riemannSum.toFixed(4)}`} />
        </div>
      </div>

      <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 my-6">
        <h4 className="font-semibold text-emerald-900 mb-2">📈 Convergence Observation</h4>
        <p className="text-emerald-800 text-sm mb-0">
          Try increasing <em>n</em> and observe how the blue rectangles better approximate the area 
          under the red curve. The midpoint rule typically converges fastest (O(1/n²)) because it 
          balances over- and under-estimation within each interval. This is exactly how financial 
          software computes present values and expected payoffs numerically.
        </p>
      </div>
    </div>
  );
}

import type { SVGProps } from "react";

export const LineChartIllustration = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 980 328"
    {...props}
  >
    {/* Background grid lines */}
    <path d="M62.27 302.49H980" stroke="#E6E6E6" strokeWidth="1" />
    <path d="M62.27 236.27H980" stroke="#E6E6E6" strokeWidth="1" />
    <path d="M62.27 170.05H980" stroke="#E6E6E6" strokeWidth="1" />
    <path d="M62.27 103.82H980" stroke="#E6E6E6" strokeWidth="1" />
    <path d="M62.27 37.60H980" stroke="#E6E6E6" strokeWidth="1" />

    {/* Three data lines – reusing the original paths for illustration.
        These curves now represent digital metrics rather than “bushels.” */}
    <path
      d="M79.36 271.59L95.14 259.18L110.92 230.54L126.69 244.95L142.47 217.45L158.25 215.65L174.03 241.72L189.80 213.88L205.58 210.08L221.36 210.89L237.14 208.59L252.92 208.10L268.69 206.25L284.47 204.86L300.25 197.64L316.03 185.73L331.80 151.09L347.58 150.57L363.36 147.80L379.14 139.97L394.91 203.88L410.69 200.94L426.47 185.73L442.25 169.74L458.03 167.13L473.80 161.85L489.58 155.92L505.36 154.82L521.14 151.74L536.91 154.17L552.69 138.63L568.47 120.79L584.25 117.16L600.02 125.26L615.80 123.76L631.58 118.69L647.36 114.88L663.14 112.16L678.91 110.76L694.69 105.11L710.47 101.63L726.25 100.16L742.02 109.00L757.80 113.54L773.58 119.60L789.36 125.71L805.13 128.82L820.91 153.82L836.69 123.95L852.47 112.64L868.24 109.23L884.02 94.52L899.80 92.85L915.58 91.63L931.36 82.48L947.13 67.51L962.91 47.17"
      stroke="#10B981"
      strokeWidth="1.71"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M79.36 237.24L95.14 229.59L110.92 212.72L126.69 230.24L142.47 197.96L158.25 191.62L174.03 193.41L189.80 187.20L205.58 182.42L221.36 180.93L237.14 170.56L252.92 184.92L268.69 187.12L284.47 194.42L300.25 200.90L316.03 210.17L331.80 215.66L347.58 218.14L363.36 221.21L379.14 222.70L394.91 223.99L410.69 229.74L426.47 231.68L442.25 262.33L458.03 270.44L473.80 270.73L489.58 271.58L505.36 259.31L521.14 255.06L536.91 246.88L552.69 240.83L568.47 231.28L584.25 226.66L600.02 225.46L615.80 221.87L631.58 218.01L647.36 203.25L663.14 187.22L678.91 170.88L694.69 156.33L710.47 153.28L726.25 148.84L742.02 141.59L757.80 139.53L773.58 138.72L789.36 134.55L805.13 147.96L820.91 171.17L836.69 152.21L852.47 153.83L868.24 123.95L884.02 108.05L899.80 123.49L915.58 154.80L931.36 170.27L947.13 159.74L962.91 141.45"
      stroke="#F59E0B"
      strokeWidth="1.71"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M79.36 185.60L95.14 170.72L110.92 168.23L126.69 192.44L142.47 162.62L158.25 156.16L174.03 153.68L189.80 151.06L205.58 150.18L221.36 149.22L237.14 145.96L252.92 142.08L268.69 140.02L284.47 134.87L300.25 134.39L316.03 123.92L331.80 125.39L347.58 140.44L363.36 128.33L379.14 120.20L394.91 140.14L410.69 153.35L426.47 156.49L442.25 147.24L458.03 141.08L473.80 139.74L489.58 127.32L505.36 123.79L521.14 112.21L536.91 104.99L552.69 89.94L568.47 88.63L584.25 92.29L600.02 95.30L615.80 98.53L631.58 103.25L647.36 101.71L663.14 87.20L678.91 102.19L694.69 118.31L710.47 138.50L726.25 171.09L742.02 170.88L757.80 185.67L773.58 191.63L789.36 198.00L805.13 206.36L820.91 238.73L836.69 187.01L852.47 196.19L868.24 200.95L884.02 215.19L899.80 220.42L915.58 222.45L931.36 236.81L947.13 241.81L962.91 244.58"
      stroke="#FACC15"
      strokeWidth="1.71"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* Title */}
    <text
      x="490"
      y="20"
      fill="#374151"
      fontSize="24"
      fontFamily="sans-serif"
      textAnchor="middle"
    >
      Digital Metrics Overview
    </text>

    {/* Legend */}
    <g>
      <rect x="843" y="9" width="14" height="3" rx="1.5" fill="#10B981" />
      <text x="863" y="12" fill="#374151" fontSize="10" fontFamily="sans-serif">
        Loyalty Sign Ups
      </text>
    </g>
    <g>
      <rect x="843" y="20" width="14" height="3" rx="1.5" fill="#F59E0B" />
      <text x="863" y="23" fill="#374151" fontSize="10" fontFamily="sans-serif">
        Product Sales
      </text>
    </g>
    <g>
      <rect x="843" y="31" width="14" height="3" rx="1.5" fill="#FACC15" />
      <text x="863" y="34" fill="#374151" fontSize="10" fontFamily="sans-serif">
        Customer Engagement
      </text>
    </g>

    {/* New Y‑axis labels (example values) */}
    <text
      x="30"
      y="310"
      fill="#4B5563"
      fontSize="12"
      fontFamily="sans-serif"
      textAnchor="end"
    >
      0
    </text>
    <text
      x="30"
      y="250"
      fill="#4B5563"
      fontSize="12"
      fontFamily="sans-serif"
      textAnchor="end"
    >
      500
    </text>
    <text
      x="30"
      y="190"
      fill="#4B5563"
      fontSize="12"
      fontFamily="sans-serif"
      textAnchor="end"
    >
      1000
    </text>
    <text
      x="30"
      y="130"
      fill="#4B5563"
      fontSize="12"
      fontFamily="sans-serif"
      textAnchor="end"
    >
      1500
    </text>
    <text
      x="30"
      y="70"
      fill="#4B5563"
      fontSize="12"
      fontFamily="sans-serif"
      textAnchor="end"
    >
      2000
    </text>
  </svg>
);

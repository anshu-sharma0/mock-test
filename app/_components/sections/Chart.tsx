export function Chart() {
  return (
    <div className="stack">
      <h3 className="h3">Score trend</h3>
      <div className="chart-line">
        <svg viewBox="0 0 600 220" preserveAspectRatio="none" aria-hidden="true">
          <polyline
            points="0,170 100,140 200,155 300,112 400,88 500,96 600,62"
            fill="none"
            stroke="var(--primary)"
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <polyline
            points="0,190 100,160 200,148 300,130 400,118 500,90 600,74"
            fill="none"
            stroke="var(--success)"
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.8"
          />
        </svg>
      </div>
    </div>
  );
}

export default function Logo() {
  return (
    <svg
      className="ops-logo"
      width="300"
      height="80"
      viewBox="0 0 300 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="OpsGuardian Animated Logo"
    >
      <title>OpsGuardian Animated Logo</title>

      <defs>
        <path id="pulsePath" d="M12 32H18L23 24L28 40L33 28L38 32H48" />
      </defs>

      <g transform="translate(10, 10)">
        <path
          className="shield-body"
          d="M30 0L55.98 14.5V35C55.98 49.5 44.5 58.5 30 64C15.5 58.5 4.02 49.5 4.02 35V14.5L30 0Z"
        />

        <path
          className="shield-border"
          d="M30 58C41.5 54 50 47 50 35V17.5L30 6L10 17.5V35C10 47 18.5 54 30 58Z"
        />

        <path
          className="pulse-line"
          d="M12 32H18L23 24L28 40L33 28L38 32H48"
        />

        <circle className="pulse-dot" r="3">
          <animateMotion dur="3s" repeatCount="indefinite">
            <mpath href="#pulsePath" />
          </animateMotion>
        </circle>
      </g>

      <g className="logo-text" transform="translate(75, 42)">
        <text className="text-ops" x="0" y="0" dominantBaseline="middle">
          Ops
        </text>
        <text className="text-guardian" x="58" y="0" dominantBaseline="middle">
          Guardian
        </text>
      </g>
    </svg>
  );
}

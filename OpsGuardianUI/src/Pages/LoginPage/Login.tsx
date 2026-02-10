import type { FormEvent } from "react";
import "./Login.css";

function Login() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className="login-page">
      <div className="login-backdrop" aria-hidden="true" />
      <main className="login-shell">
        <section className="login-card">
          <div className="login-logo" aria-hidden="true">
            <svg
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

                <style>{`
                  @keyframes fillFade {
                    0% { opacity: 0; transform: scale(0.9); transform-origin: center; }
                    100% { opacity: 1; transform: scale(1); transform-origin: center; }
                  }

                  @keyframes drawBorder {
                    0% { stroke-dasharray: 200; stroke-dashoffset: 200; opacity: 0; }
                    10% { opacity: 1; }
                    100% { stroke-dasharray: 200; stroke-dashoffset: 0; opacity: 1; }
                  }

                  @keyframes drawPulse {
                    0% { stroke-dasharray: 100; stroke-dashoffset: 100; }
                    100% { stroke-dasharray: 100; stroke-dashoffset: 0; }
                  }

                  @keyframes fadeInSmooth {
                    0% { opacity: 0; filter: blur(4px); }
                    100% { opacity: 1; filter: blur(0px); }
                  }

                  @keyframes pulseOpacity {
                    0%, 100% { opacity: 0.4; }
                    50% { opacity: 1; }
                  }

                  .anim-shield-body {
                    animation: fillFade 1s ease-out forwards;
                  }

                  .anim-border {
                    stroke-dasharray: 200;
                    stroke-dashoffset: 200;
                    animation: drawBorder 1.5s ease-out 0.3s forwards;
                  }

                  .anim-pulse-line {
                    stroke-dasharray: 100;
                    stroke-dashoffset: 100;
                    animation: drawPulse 0.8s ease-out 1.2s forwards;
                  }

                  .anim-text-group {
                    opacity: 0;
                    animation: fadeInSmooth 0.8s ease-out 1.8s forwards;
                  }

                  .anim-monitor {
                    opacity: 0;
                    animation: fadeIn 0.5s ease-out 2.1s forwards, pulseOpacity 2s ease-in-out 2.6s infinite;
                  }

                  @keyframes fadeIn { to { opacity: 1; } }
                `}</style>
              </defs>

              <g transform="translate(10, 10)">
                <path
                  className="anim-shield-body"
                  d="M30 0L55.98 14.5V35C55.98 49.5 44.5 58.5 30 64C15.5 58.5 4.02 49.5 4.02 35V14.5L30 0Z"
                  fill="#0F172A"
                />

                <path
                  className="anim-border"
                  d="M30 58C41.5 54 50 47 50 35V17.5L30 6L10 17.5V35C10 47 18.5 54 30 58Z"
                  stroke="#14B8A6"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                <path
                  className="anim-pulse-line"
                  d="M12 32H18L23 24L28 40L33 28L38 32H48"
                  stroke="#14B8A6"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                <circle className="anim-monitor" r="3" fill="#FFFFFF">
                  <animateMotion
                    dur="3s"
                    repeatCount="indefinite"
                    calcMode="spline"
                    keyTimes="0;1"
                    keySplines="0.4 0 0.2 1"
                  >
                    <mpath href="#pulsePath" />
                  </animateMotion>
                </circle>
              </g>

              <g className="anim-text-group" transform="translate(75, 42)">
                <text
                  x="0"
                  y="0"
                  dominantBaseline="middle"
                  fontFamily="'Space Grotesk', 'Segoe UI', sans-serif"
                  fontWeight="700"
                  fontSize="28"
                  fill="#0F172A"
                  letterSpacing="-0.5"
                >
                  Ops
                </text>

                <text
                  x="58"
                  y="0"
                  dominantBaseline="middle"
                  fontFamily="'Space Grotesk', 'Segoe UI', sans-serif"
                  fontWeight="400"
                  fontSize="28"
                  fill="#334155"
                  letterSpacing="-0.5"
                >
                  Guardian
                </text>
              </g>
            </svg>
          </div>

          <div className="login-title">
            <p className="login-eyebrow">Secure Console</p>
            <h1>Sign in to OpsGuardian</h1>
            <p className="login-subtext">
              Production access only. Confirm your identity to continue.
            </p>
          </div>

          <form className="login-form" onSubmit={handleSubmit}>
            <label className="login-field">
              <span>User Name</span>
              <input type="text" name="username" placeholder="Enter your user name" autoComplete="username" />
            </label>

            <label className="login-field">
              <span>Password</span>
              <input type="password" name="password" placeholder="Enter your password" autoComplete="current-password" />
            </label>

            <div className="login-row">
              <label className="login-check">
                <input type="checkbox" name="remember" defaultChecked />
                <span>Keep me signed in</span>
              </label>
              <a className="login-link" href="#">
                Forgot password?
              </a>
            </div>

            <button className="login-button" type="submit">
              Sign in
            </button>

            <div className="login-helper">
              <span className="login-pill">Production</span>
              <span>Protected by OpsGuardian security mesh</span>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
}

export default Login;

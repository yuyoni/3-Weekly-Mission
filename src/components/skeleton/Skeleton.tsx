import styles from "./skeleton.module.css";

export default function Skeleton() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80">
      <rect x="0" y="0" width="80" height="80" fill="#f0f0f0" />
      <rect
        x="0"
        y="0"
        width="20"
        height="80"
        fill="#fdfdfd91"
        opacity="0"
        filter="url(#blur)"
      >
        <animate
          attributeName="opacity"
          from="0"
          to="1"
          dur="0.5s"
          begin="0s"
          fill="freeze"
        />
        <animate
          attributeName="x"
          from="-20"
          to="90"
          dur="2s"
          repeatCount="indefinite"
          calcMode="spline"
          keyTimes="0; 1"
          keySplines="0.42 0 0.58 1"
        />
      </rect>
      <defs>
        <filter id="blur" x="-10" y="0" width="80" height="80">
          <feGaussianBlur in="SourceGraphic" stdDeviation="8" />
        </filter>
      </defs>
    </svg>
  );
}

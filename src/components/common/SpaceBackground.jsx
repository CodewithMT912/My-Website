"use client";

import "./SpaceBackground.css";

export default function SpaceBackground() {
  return (
    <div className="space-background" aria-hidden="true">
      {/* Main star layers */}
      <div className="space-stars space-stars-small"></div>
      <div className="space-stars space-stars-medium"></div>
      <div className="space-stars space-stars-large"></div>

      {/* Subtle nebula glows */}
      <div className="nebula nebula-one"></div>
      <div className="nebula nebula-two"></div>
      <div className="nebula nebula-three"></div>

      {/* Soft ambient glow */}
      <div className="space-glow"></div>
    </div>
  );
}
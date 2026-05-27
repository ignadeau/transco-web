import React from 'react';

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
}

export default function Logo({ className, width = 250, height = 80 }: LogoProps) {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 400 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Constructora Cumbres"
      style={{ '--logo-primary': 'var(--primary-blue, #11265F)', '--logo-text': 'currentColor' } as React.CSSProperties}
    >
      {/* Isotipo: Representación de "Cumbres" (montañas/picos) y construcción */}
      <path d="M10 75L45 25L80 75H10Z" fill="var(--logo-primary)" />
      <path d="M40 75L65 40L90 75H40Z" fill="#00a651" />
      
      {/* Texto: CUMBRES */}
      <text 
        x="105" 
        y="65" 
        fontFamily="Arial, sans-serif" 
        fontWeight="900" 
        fontSize="44" 
        fill="var(--logo-primary)" 
        letterSpacing="-2"
      >
        CUMBRES
      </text>
      
      {/* Subtexto: CONSTRUCTORA */}
      <rect x="105" y="72" width="260" height="15" fill="var(--logo-primary)" />
      <text 
        x="110" 
        y="84" 
        fontFamily="Arial, sans-serif" 
        fontWeight="bold" 
        fontSize="12" 
        fill="#ffffff" 
        letterSpacing="4"
      >
        CONSTRUCTORA
      </text>
      
      {/* Slogan debajo */}
      <text 
        x="10" 
        y="95" 
        fontFamily="Arial, sans-serif" 
        fontSize="10" 
        fill="#666666"
      >
        Obras Civiles y Soluciones Viales
      </text>
    </svg>
  );
}

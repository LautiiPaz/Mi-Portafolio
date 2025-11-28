'use client';

import React, { useRef } from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver'; // Importamos nuestro hook

type FadeInSectionProps = {
  children: React.ReactNode;
  className?: string; // Para pasar clases CSS adicionales
};

export default function FadeInSection({ children, className = '' }: FadeInSectionProps) {
  
  // 1. Creamos una referencia al elemento que vamos a observar
  const sectionRef = useRef<HTMLDivElement>(null); // <--- Arreglo 1

  // 2. Usamos nuestro hook para saber si es visible
  const isVisible = useIntersectionObserver(sectionRef, { // <--- Arreglo 2 (era "sectionRef")
    threshold: 0.1, // 10% del elemento debe estar visible
    freezeOnceVisible: true, // La animación solo ocurre una vez
  }); // <--- Arreglo 3 (Aquí faltaba el ')' )

  return (
    // 3. Aplicamos las clases:
    // - 'fadeInSection' (el estado oculto por defecto)
    // - 'isVisible' (cuando nuestro hook nos dice que se ve)
    <div
      ref={sectionRef}
      className={`fadeInSection ${isVisible ? 'isVisible' : ''} ${className}`}
    >
      {children}
    </div>
  );
}
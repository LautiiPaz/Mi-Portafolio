'use client';

import Link from 'next/link';
import styles from '../styles/components.module.scss';
import { useState, useEffect } from 'react'; //  Hooks de React

export default function Navbar() {
  // 2.estado para saber si la página está "scrolleada"
  const [isScrolled, setIsScrolled] = useState(false);

  // 3. useEffect para añadir un "detector" de scroll
  useEffect(() => {
    // Función que se ejecuta cada vez que el usuario hace scroll
    const handleScroll = () => {
      // Si el scroll vertical (scrollY) es mayor de 10px...
      if (window.scrollY > 10) {
        setIsScrolled(true); // ...marca sí está scrolleada
      } else {
        setIsScrolled(false); // ...marca que no
      }
    };

    // Añade el detector al navegador (cuando el componente se carga)
    window.addEventListener('scroll', handleScroll);

    // Limpia el detector (cuando el componente se "desmonta")
    // crucial para el rendimiento.
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // El [] vacío significa que este efecto solo se ejecuta una vez

  return (
    // 4. Se añade la clase .scrolled dinámicamente
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <Link href="/">
        <span className={styles.logo}>Lautaro Paz.Dev</span>
      </Link>
      <div className={styles.navLinks}>
        <Link href="/">Home</Link>
        <Link href="/#projects">Projects</Link>
        <Link href="/#contact">Contact</Link>
      </div>
    </nav>
  );
}
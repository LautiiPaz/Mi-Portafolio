import { useState, useEffect, useRef, RefObject } from 'react';

// Opciones para el observador
interface Args extends IntersectionObserverInit {
  freezeOnceVisible?: boolean;
}

// --- ESTA LÍNEA ES LA QUE CAMBIAMOS PARA HACERLA GENÉRICA ---
function useIntersectionObserver<T extends Element>(
  elementRef: RefObject<T>, // Acepta cualquier tipo de elemento (div, span, etc.)
  {
    threshold = 0.1,
    root = null,
    rootMargin = '0%',
    freezeOnceVisible = true,
  }: Args,
): boolean {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const currentElement = elementRef.current; // Guardamos la referencia

    if (!currentElement) return;

    if (isIntersecting && freezeOnceVisible) {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      return;
    }

    const observerCallback = ([entry]: IntersectionObserverEntry[]): void => {
      if (entry.isIntersecting) {
        setIsIntersecting(true);
      } else if (!freezeOnceVisible) {
        setIsIntersecting(false);
      }
    };

    observerRef.current = new IntersectionObserver(observerCallback, {
      threshold,
      root,
      rootMargin,
    });

    observerRef.current.observe(currentElement); // Observamos el elemento

    // Limpieza
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [elementRef, threshold, root, rootMargin, isIntersecting, freezeOnceVisible]);

  return isIntersecting;
}

export default useIntersectionObserver;
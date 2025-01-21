import { useState, useCallback } from 'react';

export const useScroll = (ref) => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = useCallback((e) => {
    if (!ref.current) return;
    
    setIsDragging(true);
    setStartX(e.pageX - ref.current.offsetLeft);
    setScrollLeft(ref.current.scrollLeft);
    ref.current.style.cursor = 'grabbing';
  }, [ref]);

  const handleMouseUp = useCallback(() => {
    if (!ref.current) return;

    setIsDragging(false);
    ref.current.style.cursor = 'grab';
  }, [ref]);

  const handleMouseMove = useCallback((e) => {
    if (!isDragging || !ref.current) return;
    
    e.preventDefault();
    const x = e.pageX - ref.current.offsetLeft;
    const walk = (x - startX);
    ref.current.scrollLeft = scrollLeft - walk;
  }, [isDragging, startX, scrollLeft, ref]);

  const handleMouseLeave = useCallback(() => {
    if (!ref.current) return;

    setIsDragging(false);
    ref.current.style.cursor = 'grab';
  }, [ref]);

  return {
    isDragging,
    handlers: {
      onMouseDown: handleMouseDown,
      onMouseUp: handleMouseUp,
      onMouseMove: handleMouseMove,
      onMouseLeave: handleMouseLeave
    }
  };
};
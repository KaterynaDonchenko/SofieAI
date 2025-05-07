// import { useEffect, useState } from 'react';

// export function useWindowWidth() {
//   const [width, setWidth] = useState<number>(window.innerWidth);

//   useEffect(() => {
//     const handleResize = () => setWidth(window.innerWidth);

//     window.addEventListener('resize', handleResize);
    
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   return width;
// }

import { useEffect, useState } from 'react';

export function useWindowWidth() {
  const [width, setWidth] = useState<number | null>(null);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
}


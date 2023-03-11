import { useEffect, useState } from 'react';

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}

// function getWindowSizeD() {
//   const { clientWidth, clientHeight } = document.documentElement;
//   return { clientWidth, clientHeight };
// }

export const useWindowWide = () => {
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  console.log('#####################', document.documentElement.clientWidth)
  console.log('##################### WINDOW', windowSize.innerWidth)

  return windowSize.innerWidth;
};

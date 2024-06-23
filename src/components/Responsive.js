import { useMediaQuery } from 'react-responsive';

const useResponsive = () => {
  const isDesktop = useMediaQuery({ minWidth: 1224 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1224 });
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return { isDesktop, isTablet, isMobile };
};

export default useResponsive;

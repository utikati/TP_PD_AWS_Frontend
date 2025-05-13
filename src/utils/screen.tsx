export const isDesktop = () => window.innerWidth >= 992;
export const isMobile = () => window.innerWidth < 992;

/*
-- Update screen size and rerender --
useEffect(() => {
    const watchScreen = () => {
    setDesktopMode(isDesktop());
  };
  window.addEventListener("resize", watchScreen);
  return () => window.removeEventListener("resize", watchScreen);
})
*/

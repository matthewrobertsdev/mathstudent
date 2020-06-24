import { useEffect } from "react";
import { useLocation } from "react-router-dom";

//scrolls to top on page load
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  //no view
  return null;
}
export default ScrollToTop
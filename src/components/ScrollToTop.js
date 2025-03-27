/*=================================================================================================
                                    Alejandro Jimenez Brundin
                                    brundindev@gmail.com
                                    https://brundindev.vercel.app
=================================================================================================*/
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default ScrollToTop;
/*=================================================================================================
                                    Alejandro Jimenez Brundin
                                    brundindev@gmail.com
                                    https://brundindev.vercel.app
=================================================================================================*/

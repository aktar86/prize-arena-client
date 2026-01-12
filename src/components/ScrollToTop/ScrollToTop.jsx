import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";
import useAuth from "../../hooks/useAuth";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { darkMode } = useAuth();

  // Show button when page is scrolled up to given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // Very fast scroll to top
  const scrollToTop = () => {
    const scrollToTopAnimation = () => {
      const currentScroll = window.pageYOffset;
      if (currentScroll > 0) {
        // Much more aggressive scrolling - very fast
        const scrollStep = Math.max(currentScroll * 0.4, 50); // At least 50px per frame, or 40% of remaining
        window.scrollTo(0, Math.max(0, currentScroll - scrollStep));
        requestAnimationFrame(scrollToTopAnimation);
      }
    };
    requestAnimationFrame(scrollToTopAnimation);
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className={`fixed bottom-8 right-8 z-50 p-3 bg-primary  text-white rounded-full transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-2xl `}
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
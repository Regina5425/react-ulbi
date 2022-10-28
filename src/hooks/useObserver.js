import { useRef, useEffect } from "react";

export const useObserver = (ref, canLoad, isLodaing, callback) => {
	const observer = useRef();
  useEffect(() => {
    if (isLodaing) return;
    if (observer.current) observer.current.disconnect();
    let cb = function (entries, observer) {
      if (entries[0].isIntersecting && canLoad) {
        callback()
      }
    };
    observer.current = new IntersectionObserver(cb);
    observer.current.observe(ref.current);
  }, [isLodaing]);
};

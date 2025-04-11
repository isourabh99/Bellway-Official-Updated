// hooks/useImagesLoaded.js
import { useEffect, useState } from "react";

const useImagesLoaded = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const images = Array.from(document.images);

    if (images.length === 0) {
      setLoaded(true); // If there are no images, assume everything is loaded
      return;
    }

    let loadedCount = 0;
    const delayTime = 1000; // 1 second delay

    const onImageLoad = () => {
      loadedCount++;
      if (loadedCount === images.length) {
        // Add a delay of 1 second before marking everything as loaded
        setTimeout(() => setLoaded(true), delayTime);
      }
    };

    images.forEach((img) => {
      if (img.complete) {
        onImageLoad(); // If the image is already loaded
      } else {
        img.addEventListener("load", onImageLoad);
        img.addEventListener("error", onImageLoad); // Handle image loading errors as well
      }
    });

    return () => {
      images.forEach((img) => {
        img.removeEventListener("load", onImageLoad);
        img.removeEventListener("error", onImageLoad);
      });
    };
  }, []);

  return loaded;
};

export default useImagesLoaded;

import axios from "axios";
import { FunctionComponent, useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { UnsplashImageType } from "../../types/UnsplashImage";
import { SingleImage } from "./SingleImage";

interface ImagesGalleryProps {}

export const ImagesGallery: FunctionComponent<ImagesGalleryProps> = ({}) => {
  const [images, setImages] = useState<UnsplashImageType[]>([]);
  const [loading, setLoading] = useState(true);
  const resultsPerPage = 20;

  const fetchImages = async (page: number) => {
    try {
      const apiUrl = `https://api.unsplash.com/photos?client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}&page=${page}&per_page=${resultsPerPage}`;
      const { data: response } = await axios.get(apiUrl);
      return response;
    } catch (error) {
      console.error("Error fetching images:", error);
      return [];
    }
  };

  const loadMore = async () => {
    try {
      // images.length : This part of the code gets the current number of images that have already been loaded and stored in the images array.
      let pageToBeLoadedNext = images.length / resultsPerPage;
      const newImages = await fetchImages(pageToBeLoadedNext + 1); //this line of code calculates the next page number based on the number of images already loaded and the desired number of images per page
      setImages([...images, ...newImages]);
    } catch (error) {
      console.error("Error loading more images:", error);
    }
  };

  useEffect(() => {
    async function loadInitialImages() {
      setLoading(true);
      const newImages: UnsplashImageType[] = await fetchImages(1);
      setImages(newImages);
      setLoading(false);
    }

    loadInitialImages();
  }, []);

  if (loading) {
    return <span className="loader spin-loader"></span>;
  }

  return (
    <InfiniteScroll
      dataLength={images.length}
      next={loadMore}
      hasMore={true}
      loader={
        <div>
          <p className="loader spin-loader">Loading...</p>
        </div>
      }
      className="images-gallery-container"
    >
      {images?.map((image: UnsplashImageType) => (
        <SingleImage key={image.id} image={image} />
      ))}
    </InfiniteScroll>
  );
};

import axios from "axios";
import { FunctionComponent, useEffect, useState } from "react";
import { UnsplashImageType } from "../../types/UnsplashImage";
import { SingleImage } from "./SingleImage";

interface ImagesGalleryProps {}

export const ImagesGalleryCopy: FunctionComponent<
  ImagesGalleryProps
> = ({}) => {
  //   const { isConnected, setIsConnected } = useContext(AuthContext); // Assuming you're using your context for authentication

  let suffix = `https://api.unsplash.com/photos`;
  const [page, setPage] = useState<number>(11);
  // const [resultsPerPage, setResultsPerPage] = useState<number>(20);
  const [images, setImages] = useState<UnsplashImageType[]>([]);
  const [loading, setLoading] = useState(true);
  let resultsPerPage = 20;

  const apiUrl = `${suffix}?client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}&page=${page}&per_page=${resultsPerPage}`;
  // console.log(apiUrl, "apiUrl");

  const fetchData = async () => {
    try {
      const { data: response } = await axios.get(
        apiUrl
        // `${suffix}?client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}&page=${pageNumber}&per_page=${resultsPerPage}`
      );
      console.log(response);
      setImages(response);
    } catch (error) {
      console.error("Error fetching images:", error);
      return [];
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <span className="loader"></span>;
  } else {
    return (
      <div className="images-gallery-container">
        {images.length &&
          images.map((image: UnsplashImageType, index: number) => {
            return <SingleImage {...{ image }} key={image.id} />;
          })}
      </div>
    );
  }
};

// Three things to note here
// the variable must be prefixed with REACT_APP_
// eg: REACT_APP_WEBSITE_NAME=hello
// You need to restart the server to reflect the changes.
// Make sure you have the .env file in your root folder(same place where you have your package.json)
//  and NOT in your src folder.
// After that you can access the variable like this process.env.REACT_APP_SOME_VARIABLE
// Additional tips

// No need to wrap your variable value in single or double quotes.
// Do not put semicolon ; or comma , at the end of each line.

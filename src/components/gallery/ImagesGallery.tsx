import axios from "axios";
import { FunctionComponent, useEffect, useState } from "react";
import { SingleImage } from "./SingleImage";

interface ImagesGalleryProps {}

export const ImagesGallery: FunctionComponent<ImagesGalleryProps> = () => {
  //   const { isConnected, setIsConnected } = useContext(AuthContext); // Assuming you're using your context for authentication

  let dix = 9;
  let suffix = `https://api.unsplash.com/photos`;
  const [images, setImages] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  let url = `${suffix}?client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}&page=${dix}&per_page=15`;

  // useEffect to fetch wallet data from public API

  const fetchData = async () => {
    try {
      const { data: response } = await axios.get(url);
      setImages(response);
      console.log(response, "images Data");
    } catch (error) {
      console.error("Error fetching images:", error);
    } finally {
      setTimeout(() => {
        setLoading(false); // Delay transitioning from loading to showing images
      }, 1000); // Adjust the delay duration (in milliseconds) as needed
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
          images?.map((image: { id: string }, index: number) => {
            return <SingleImage {...{ image }} key={image.id} />;
          })}
        {/* {images[13]?.urls.thumbnail} */}
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

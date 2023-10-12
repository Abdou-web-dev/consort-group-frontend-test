import { Button } from "antd";
import { MouseEvent, useContext, useEffect, useState } from "react";
import Login from "../components/Login";
import { LeftDropDown } from "../components/dropdown/LeftDropDown";
import { FilterButton } from "../components/filters/FilterButton";
import { TopFilterButtons } from "../components/filters/TopFilterButtons";
import { ImagesGallery } from "../components/gallery/ImagesGallery";
import { AuthContext } from "../context/AuthContext";

// interface HomeProps {}

export const Home = () => {
  const { isConnected, setIsConnected } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  function handleLogout(
    event: MouseEvent<HTMLElement, MouseEvent> | any
  ): void {
    // throw new Error("Function not implemented.");
    setIsConnected(false);
    localStorage.removeItem("user");
    // localStorage.clear();
    // localStorage.removeItem("name of localStorage variable you want to remove");
  }
  useEffect(() => {
    const checkAuthentication = () => {
      // Check if the user is authenticated in local storage
      const storedUser = localStorage.getItem("user");

      if (storedUser && JSON.parse(storedUser).isConnected) {
        setIsConnected(true); // Update the global authentication state
      }
      setLoading(false); // Set loading to false to render the content
    };

    checkAuthentication();
  }, [setIsConnected]);

  if (loading) {
    // Render a loading indicator or placeholder component
    return <span className="loader"></span>;
  }

  return (
    <div className="home-container">
      {isConnected ? (
        <>
          <div className="top-bar">
            <div className="filter-btns">
              <LeftDropDown />
              <TopFilterButtons />
              <FilterButton />
            </div>
            <div className="logout-btn">
              <Button onClick={handleLogout}>
                <span>log out</span>
              </Button>
            </div>
          </div>
          <ImagesGallery />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
};

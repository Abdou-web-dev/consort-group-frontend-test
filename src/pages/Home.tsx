import { Button } from "antd";
import { MouseEvent, useContext } from "react";
import Login from "../components/Login";
import { AuthContext } from "../context/AuthContext";

// interface HomeProps {}

export const Home = () => {
  // let navigate = useNavigate();
  const { isConnected, setIsConnected } = useContext(AuthContext);
  // console.log(isConnected, "isConnected from Home");

  function handleLogout(
    event: MouseEvent<HTMLElement, MouseEvent> | any
  ): void {
    // throw new Error("Function not implemented.");
    setIsConnected(false);
    // localStorage.clear();
    // localStorage.removeItem("name of localStorage variable you want to remove");
  }

  if (isConnected) {
    return (
      <div>
        Images gallery
        <Button onClick={handleLogout}>logout</Button>
      </div>
    );
  } else {
    return <Login />;
  }
};

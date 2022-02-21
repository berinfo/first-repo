import { Fragment } from "react";

import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state) => state.user.isAuth);
  return (
    <Fragment>
      <Header />
      {!user && <Auth />}
      {user && <UserProfile />}
      <Counter />;
    </Fragment>
  );
}

export default App;

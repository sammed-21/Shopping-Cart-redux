import React, { useEffect } from "react";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import { useDispatch, useSelector } from "react-redux";
import Notification from "./components/Notification";
import { uiAction } from "./store/ui-slice";
let isFirstRequest = true;
function App() {
  const dispatch = useDispatch();
  const notification = useSelector((state) => state.ui.notification);
  const cart = useSelector((state) => state.cart);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  useEffect(async () => {
    if (isFirstRequest) {
      isFirstRequest = false;
      return;
    }
    const sendRequest = async () => {
      dispatch(
        uiAction.showNotification({
          open: true,
          message: "send request...",
          type: "warning",
        })
      );
      const res = await fetch(
        "https://redux-http-a34ef-default-rtdb.asia-southeast1.firebasedatabase.app/cartItems.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );
      const data = await res.json();
      dispatch(
        uiAction.showNotification({
          open: true,
          message: "sent request to database successfully",
          type: "successs",
        })
      );
    };
    sendRequest().catch((err) => {
      dispatch(
        uiAction.showNotification({
          open: true,
          message: "sending request failed",
          type: "error",
        })
      );
    });
  }, [cart]);
  const items = useSelector((state) => state.cart.itemList);
  console.log(items);
  console.log(isLoggedIn);
  return (
    <div className="App">
      <>
        {notification && (
          <Notification
            type={notification.type}
            message={notification.message}
          />
        )}

        {!isLoggedIn && <Auth />}
        {isLoggedIn && <Layout />}
      </>
    </div>
  );
}

export default App;

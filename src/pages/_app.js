import store from "../redux/store";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;

import { RouterProvider } from "react-router-dom";
import { mainRoute } from "./router/mainRouter";
import { Provider } from "react-redux/es/exports";
import { store } from "./global/store";

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <RouterProvider router={mainRoute} />
      </Provider>
    </div>
  );
};

export default App;

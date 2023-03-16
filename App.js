import { Provider } from "react-redux";
import initializeStore from "./src/store";
import Navigation from "./src/navigation/index";

const store = initializeStore();

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}

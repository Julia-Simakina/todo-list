import Header from "./components/Header";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers/reducers";
import TodoContainer from "./components/TodoContainer";

const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <TodoContainer />
      </div>
    </Provider>
  );
}

export default App;

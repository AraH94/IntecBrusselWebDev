import React from "react";
import { Provider } from "react-redux";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Content from "./components/content/Content";
import store from "./Store";

function App() {
  return (
    <Provider store={store}>
      <main>
        <Header />
        <Content />
        <Footer />
      </main>
    </Provider>
  );
}

export default App;

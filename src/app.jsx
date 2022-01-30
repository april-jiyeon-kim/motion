import styles from "./app.module.css";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import ItemList from "./components/item_list/item_list";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <ItemList />
      <Footer />
    </div>
  );
}

export default App;

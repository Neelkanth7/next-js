import styles from "../styles/Layout.module.css";
import Nav from "./Nav.js"
import Header from "./Header.js"

const Layout = ({ children }) => {
  return (
    <>
    <Nav/>
    <div className={styles.container}>
      <main className={styles.main}>
      <Header/>
      {children}</main>
    </div>
    </>
  );
};

export default Layout;

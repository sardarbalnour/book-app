import styles from "./Layout.module.css"

function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <h1>Book App</h1>
        <p>
          <a href="./">Sardar website</a> | React course project
        </p>
      </header>
      {children}
      <footer className={styles.footer}><p>Developed by Sardar balnour with 🩵</p></footer>
    </>
  );
}

export default Layout;

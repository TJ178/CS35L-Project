import NavigationBar from "./NavigationBar";
import Footer from "./Footer";
import classes from "./Layout.module.css";

function Layout(props) {
  return (
    <div className={ classes.root }>
      <NavigationBar />
      <div >
        <main className={classes.main}>{props.children}</main>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;

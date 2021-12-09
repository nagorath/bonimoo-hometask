import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";

const LayoutHOC = (ComposedComponent) => {
  const WithLayout = (props) => {
    return (
      <div className="site-container">
        <Header />
        <main>
          <ComposedComponent {...props} />
        </main>
        <Footer />
      </div>
    );
  };
  return WithLayout;
};

export default LayoutHOC;

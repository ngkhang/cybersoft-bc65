import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import Nav from "./Nav";

const HomePage = () => {
  return (
    <section id="homePage" className="container vh-100">
      <div className="h-100 row flex-column">
          <div className="mb-3 py-2 bg-slate shadow-lg">
            <Header />
          </div>
          <div className="container flex-grow-1">
            <div className="row h-100">
              <div className="col-4 p-2 bg-warning">
                <Nav />
              </div>
              <div className="col-8 p-2 bg-light text-center">
                <Content />
              </div>
            </div>
          </div>
          <div className=" py-4 bg-dark-subtle">
            <Footer />
          </div>
        </div>
    </section>
  );
};

export default HomePage;

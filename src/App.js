import ReactLogo from './assets/images/ironhack-logo.svg';
import ReactMenu from './assets/images/menu-top.svg'
import Declarative from './assets/images/icon1.png'
import ReactComponents from './assets/images/icon2.png'
import SingleWay from './assets/images/icon3.png'
import JSX from './assets/images/icon4.png'
import './App.css';

function App() {
  return (
    <div className="bg-color-body">
        <header className="header header-sticky bg-dark-iron">
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-dark">
              <a href="/" className="navbar-brand mr-8">
              <img src={ReactLogo} alt="React Logo" />
              </a>
              <div className="navbar-collapse nav-menu">            
                <button className="action underline text-white ml-auto">
                  <img src={ReactMenu} alt="Menu"/>
                </button>
              </div>   
            </nav>
          </div>
        </header>

        <section className="bg-dark-iron cover text-white overflow-hidden">
                <div className="bg-prime">
                  <div className="title-prime"><h1>Say hello to ReactJS</h1></div>
                  <div>You will learn how to use the most popular frontend library, and become a super Ninja developer.</div>
                  <div className="btn-awesome">
                    <a data-scroll="" href="#demo" class="btn btn-light btn-lg ">Awesome</a>
                  </div>
                </div>
        </section>   

        <section className="cover section-items overflow-hidden">
            <div className="row row-cols-md-3 box-items">
              <div className="col box-size-items">
                <div className="card">
                <img src={ Declarative } class="card-img-top img-size" alt="Declarative" />
                  <div className="card-body">
                    <h5 className="card-title">Declarative</h5>
                    <p className="card-text">React makes it painless to create interactive UIs.</p>
                  </div>
                </div>
              </div>
            
              <div className="col box-size-items">
                <div className="card">
                <img src={ ReactComponents } class="card-img-top img-size" alt="Components" />
                  <div className="card-body">
                    <h5 className="card-title">Components</h5>
                    <p className="card-text">React makes it painless to create interactive UIs.</p>
                  </div>
                </div>
              </div>
            
              <div className="col box-size-items">
                <div className="card">
                <img src={ SingleWay } class="card-img-top img-size" alt="Single-Way" />
                  <div className="card-body">
                    <h5 className="card-title">Single-Way</h5>
                    <p className="card-text">React makes it painless to create interactive UIs.</p>
                  </div>
                </div>
              </div>
            
              <div className="col box-size-items">
                <div className="card">
                <img src={ JSX } class="card-img-top img-size" alt="JavaScript eXtension" />
                  <div className="card-body">
                    <h5 className="card-title">JSX</h5>
                    <p className="card-text">React makes it painless to create interactive UIs.</p>
                  </div>
                </div>
              </div>
            </div>
        </section>     

    </div>
  );
}

export default App;

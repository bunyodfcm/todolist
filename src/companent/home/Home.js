import React from "react";
import "./Home.scss";
import Family from "../../assets/images/family.png";
import Mum from "../../assets/images/mum.png";
import Girle from "../../assets/images/girle.png";

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <div className="home-wrapper">
          <div className="home-logo">
            <span className="home-logo__t">t</span>
            <span className="home-logo__o">o</span>
            <span className="home-logo__d">d</span>
            <span className="home-logo__oo">o</span>
          </div>
          <p className="home-title">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe vel
            ducimus aspernatur molestiae iste iusto sit officiis placeat tempore
            dicta distinctio esse ea aut doloremque nulla voluptas, animi cumque
            dignissimos.
          </p>
          <button className="btn">Get started</button>
          <div className="home-footer">
            <img src={Family} alt="img" />
            <div className="home-list">

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

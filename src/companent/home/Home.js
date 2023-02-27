import React from "react";
import "./Home.scss";
import Family from "../../assets/images/family.png";
import EllipsisHorizontalIcon from "../../assets/companent-icon/EllipsisHorizontalIcon";

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
            ducimus aspernatur molestiae iste iusto sit officiis placeat
          </p>
          <button className="btn">Get started</button>
          <div className="home-footer">
            <img src={Family} alt="img" className="home-footer__img" />
            <div className="list">
              <div className="list-header">
                <p>Downlond todo lisy</p>
                <EllipsisHorizontalIcon className="list-header__icon" />
              </div>
              <div className="list-body">
                <p>the first step forbetter life</p>
              </div>
              <div className="list-footer">
                <div className="list-footer__left">
                  <span></span>
                  <span></span>
                </div>
                <label className="list-footer__right">
                  <input type="checkbox" />
                  <span></span>
                  Done
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

import { Component } from "react";
import "./NavbarStyles.css";
import { MenuItens } from "./Menuitems";
import { Link } from "react-router-dom";

//Menu mobile
class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav className="NavbarItens">
        <h1 className="navbar-logo">Trippy</h1>

        <div className="menu-icons" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>

        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItens.map((item, index) => {
            return (
              <li key={index}>
                <Link className={item.cName} to={item.url}>
                  <i class={item.icon}></i>
                  {item.title}
                </Link>
              </li>
            );
          })}
          <button>Inscreva-se</button>
        </ul>
      </nav>
    );
  }
}

export default Navbar;

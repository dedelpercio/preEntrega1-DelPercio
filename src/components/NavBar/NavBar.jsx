import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget.jsx';
import { Link, NavLink } from 'react-router-dom';

function NavBar() {

  // Menu items
  const menuItems = [
    {
      text: 'Arte',
      category: 'arte',
    },
    {
      text: 'Bazar',
      category: 'bazar',
    },
    {
      text: 'Deco',
      category: 'deco',
    },
    {
      text: 'Muebles',
      category: 'muebles',
    }
  ];

  // Menu element
  const menu = []

  /* Creating a list of menu items. */
  menuItems.map((item, index) => {
    const classes = `nav-item`;
    menu.push(
      <li className={classes} key={index}>
        <NavLink className={({isActive}) => isActive ? 'active nav-link' : 'nav-link'} to={`/category/${item.category}`}>{item.text}</NavLink>
      </li>
    );
  })

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <Link to='/' className="navbar-brand">
        <span >DeRegalos</span>
      </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          { menu }
        </ul>
        <span className="navbar-text">
          <CartWidget />
        </span>
      </div>
    </nav>
  )
}

export default NavBar;
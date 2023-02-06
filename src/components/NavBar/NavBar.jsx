import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget.jsx';

function NavBar() {

  // Menu items
  const menuItems = [
    {
      text: 'Arte',
      link: '#',
    },
    {
      text: 'Bazar',
      link: '#',
    },
    {
      text: 'Deco',
      link: '#',
    },
    {
      text: 'Muebles',
      link: '#',
    }
  ];;

  // Menu element
  const menu = []

  // Add UI for menu items into menu element
  menuItems.map((item, index) => {
    const classes = `nav-item`;
    menu.push(
      <li className={classes} key={index}>
        <a className='nav-link' href={item.link}>{item.text}</a>
      </li>
    );
  })

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <a className="navbar-brand" href="#">DeRegalos</a>
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
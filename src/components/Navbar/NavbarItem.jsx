import {Fragment} from 'react'

const NavbarItem = (props) => {
  return (
    <Fragment>
      <li className="nav-item">
        <p className="nav-link active" aria-current="page" href="#">{props.texto}</p>
      </li>
    </Fragment>
  )
}

export default NavbarItem
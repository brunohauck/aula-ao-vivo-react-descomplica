import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

function Sidebar() {
  return (
    <Nav className="flex-column sidebar">
      <NavLink exact to="/" className="nav-link" activeClassName="active">
        Home
      </NavLink>
      <NavLink to="/about" className="nav-link" activeClassName="active">
        About
      </NavLink>
      <NavLink to="/listUsers" className="nav-link" activeClassName="active">
        Listar Usuários
      </NavLink>
      <NavLink to="/register" className="nav-link" activeClassName="active">
        Cadastro Redux
      </NavLink>
    </Nav>
  );
}

export default Sidebar;
import React, {Component} from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styled from 'styled-components';

import Index from './Index'
import Request from './Request'
import ManageData from './ManageData'

const Nav = styled.div`
  margin: 40px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid gray;
`;
const Ul = styled.ul`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-bottom: 10px;
`
const Logo = styled.p`
    padding-bottom: 10px;
`
const Li = styled.li`
`
const Enlace = styled.p`
    margin: 2px;
    padding: 10px;
    color: #7a8900;
    transition: .25s linear;
    cursor: pointer;
    
    &:hover {
        color: white;
        background: #7a8900;
    }
`

class Menu extends React.Component {
    render(){
        return  <Router>
                    <Nav className="nav">
                        <Logo>DATA GATE</Logo>
                        <Ul className="ul">
                            <Li className="li">
                                <Link to="/">
                                    <Enlace>Review</Enlace>
                                </Link>
                            </Li>
                            <Li className="li">
                                <Link to="/request">
                                    <Enlace>Request</Enlace>
                                </Link>
                            </Li>
                            <Li className="li">
                                <Link to="/manage">
                                    <Enlace>Manage</Enlace>
                                </Link>
                            </Li>
                        </Ul>
                    </Nav>

                    <Route path="/" exact component={Index} />
                    <Route path="/request/" component={Request} />
                    <Route path="/manage/" component={ManageData} />
                </Router>
    }
}
export default Menu

/*
const App = () => <div>My component</div>

function App() {
    return (
        <div>My component</div>
    )
}
class App extends React.Component {
    render(
        return (
            <div>My component</div>
        )
    )
}
*/
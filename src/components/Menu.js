import React, {Component} from 'react'
import styled from 'styled-components';

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
const Link = styled.a`
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
        return  <Nav className="nav">
                    <Logo>DATA GATE</Logo>
                    <Ul className="ul">
                        <Li className="li">
                            <Link>Review</Link>
                        </Li>
                        <Li className="li">
                            <Link>Request</Link>
                        </Li>
                        <Li className="li">
                            <Link>Manage</Link>
                        </Li>
                    </Ul>
                </Nav>
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
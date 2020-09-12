import React, {Component} from 'react';
import { NavigationContainer, NavItem } from './NavigationBar.style';

class NavigationBar extends Component {
    render(){
        return (
            <NavigationContainer>
            <NavItem to="/">Home</NavItem>
            <NavItem to="/cakes">Cakes</NavItem>
            <NavItem to="/about">AboutMe</NavItem>
            <NavItem to="/contact">Contact</NavItem>
            </NavigationContainer>
        );
    }
}

export default NavigationBar;

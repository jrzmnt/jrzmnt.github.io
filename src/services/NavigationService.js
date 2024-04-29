import React from 'react';

export const NavigationContext = React.createContext({
    menu: 'home',
    toggleMenu: () => {},
});
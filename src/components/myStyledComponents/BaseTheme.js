import styled from "styled-components";

// creating lightTheme & darkTheme

/**
 * Add import {ThemeProvider} next to styled, from styled-components
 * Wrap the whole Application with <ThemeProvider
 * ThemeProvider comes with theme={} as a property
 * theme={___} takes in an object BaseTheme or DarkTheme
 * 
 * 
 * next thing to do it to:
 * create a new style-components
 * e.g. Container and pass the color & background values as props.
 * Possibly detructure
 */



// this is a javascript Object

export const BaseTheme = {
    color: '#222',
    background: '#fff',
}

export const DarkTheme = {
    color: '#fff',
    background: '#222',
}


//
export const SwitchLightAndDark = styled.div`
padding: 2rem;
color: ${(props) => props.theme.color};
background: ${({theme}) => theme.background};

`
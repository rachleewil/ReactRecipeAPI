import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import './App.css';
import Recipes from './components/Recipes';
import Favorites from './components/Favorites';
import Details from './components/Details'
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Switch, Route, BrowserRouter} from "react-router-dom"; {/* added Link */};


// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

//https://stackoverflow.com/questions/48640280/you-should-not-use-link-outside-a-router#54519524

test('tests if nav bar renders the search recipes link', () =>{
  
  render(<BrowserRouter><NavBar /></BrowserRouter>)
  const linkElement = screen.getByText(/Search Recipes/i);
  expect(linkElement).toBeInTheDocument();
} );

test('tests if nav bar renders the favorites link', () =>{
  render(<BrowserRouter><NavBar /></BrowserRouter>)
  const linkElement = screen.getByText(/My Favorites/i);
  expect(linkElement).toBeInTheDocument();
} );



test('tests if nav bar favorites link works', () =>{
  const { container } = (render(<App />))
  fireEvent.click(screen.getByText("My Favorites"));
 
  const headerText = screen.getByText("Favorite Recipes");
  expect(headerText).toBeInTheDocument();
  
  //expect(Favorites).toHaveClass("RecipeFavorites");
} );

test('tests if nav bar favorites link works and search part does not show', () =>{
  const { container } = (render(<App />))
  fireEvent.click(screen.getByText("Search Recipes"));
  const headerText = screen.getByText("Search by Recipe");
  fireEvent.click(screen.getByText("My Favorites"));
  
  expect(headerText).not.toBeInTheDocument();
  
} );

test('tests if nav bar search recipes link works', () =>{
  const { container } = (render(<App />))
  fireEvent.click(screen.getByText("My Favorites"));
  fireEvent.click(screen.getByText("Search Recipes"));
  const headerText = screen.getByText("Search by Recipe");
  expect(headerText).toBeInTheDocument();
  
} );

test('tests if nav bar search recipes link works and favorites part does not show', () =>{
  const { container } = (render(<App />))
  fireEvent.click(screen.getByText("My Favorites"));
  const headerText = screen.getByText("Favorite Recipes");
  fireEvent.click(screen.getByText("Search Recipes"));
  
  expect(headerText).not.toBeInTheDocument();
  
} );
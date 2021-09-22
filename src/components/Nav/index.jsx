import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { setCity } from '../../redux/modules/cities';

import { NavStyle, NavProfile, SearchBar, InputText, SearchButton } from './styles';


const Nav = () =>{
  
  //searchbar to store
  const dispatch = useDispatch()

  const [getState, setGetState] = useState('');

  const inputHandler = (e) =>{
    setGetState(e.target.value);
  }

  const submitHandler = () =>{
    dispatch(setCity(getState));
  }

  return(
    <NavStyle>
      <NavProfile>
        Bem Vindo, Kailera
      </NavProfile>

      <SearchBar>
        <InputText
          placeholder="Search..."
          onChange={inputHandler}
          value={getState}
        />
        <SearchButton
          onClick={submitHandler}
        />
      </SearchBar>
    </NavStyle>
  )
}

export default Nav;
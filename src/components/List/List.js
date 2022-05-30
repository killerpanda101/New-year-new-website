import React from 'react';
import './List.css';
import { Button } from '../../globalStyles';
import { Link } from 'react-router-dom';

import {
  ProjObjOne,
  ProjObjTwo,
  ProjObjThree,
  ProjObjFour,
  SocialObjOne,
  SocialObjTwo,
  SocialObjThree,
  SocialObjFour,
  ArticObjOne,
  ArticObjTwo,
  ArticObjThree,
  ArticObjFour
} from "./Data";

export const List = ({type}) => {
  let DataObjOne;
  let DataObjTwo;
  let DataObjThree;
  let DataObjFour;
  
  if(type === 'proj'){
      DataObjOne = ProjObjOne;
      DataObjTwo = ProjObjTwo;
      DataObjThree = ProjObjThree;
      DataObjFour = ProjObjFour;
  }
  else if(type === 'article'){
      DataObjOne = ArticObjOne;
      DataObjTwo = ArticObjTwo;
      DataObjThree = ArticObjThree;
      DataObjFour = ArticObjFour;
  }
  else{
      DataObjOne = SocialObjOne;
      DataObjTwo = SocialObjTwo;
      DataObjThree = SocialObjThree;
      DataObjFour = SocialObjFour;
  }
  const primary = true
  

  return (
    <div class='btn-group'>
     <Link to={{pathname: DataObjOne.link}} target="_blank"><Button big fontBig primary={primary}>{DataObjOne.title}</Button></Link>
     <Link to={{pathname: DataObjTwo.link}} target="_blank"><Button big fontBig primary={primary}>{DataObjTwo.title}</Button></Link>
     <Link to={{pathname: DataObjThree.link}} target="_blank"><Button big fontBig primary={primary}>{DataObjThree.title}</Button></Link>
     <Link to={{pathname: DataObjFour.link}} target="_blank"><Button big fontBig primary={primary}>{DataObjFour.title}</Button></Link>
    </div>
  );
};

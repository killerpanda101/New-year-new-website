import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from '../../globalStyles';
import { List } from '../List/List'
import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrapper,
  Img
} from './Card.elements';

function Card({
  primary,
  lightBg,
  topLine,
  lightTopLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  imgStart,
  start,
  link,
  btn,
  lst,
  lstType,
  id
}) { 

  let customButton;
  if(btn){
    customButton = <Link to={{pathname: link}} target="_blank"><Button big fontBig primary={primary}>{buttonLabel}</Button></Link>
  }
  else{
    customButton = false
  }

  let Info;
  if(lst){
    Info= <List type={lstType}/>
  }
  else{
    Info = <ImgWrapper start={start}>
    <Img src={img} alt={alt} />
  </ImgWrapper>;
  }

 
  return (
    <div id = {id}>
      <InfoSec lightBg={lightBg}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
                <Heading lightText={lightText}>{headline}</Heading>
                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                {customButton}
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              {Info}
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </div>
  );
}

export default Card;


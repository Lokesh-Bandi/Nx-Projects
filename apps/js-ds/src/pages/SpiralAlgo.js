import React, { useState, useEffect } from 'react';
import { StyledBody, StyledHeader } from '../CustomTags/UtilTags';
import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/react';

const anime = keyframes`
    from {
        background: white;
        opacity: 0.5;
    }
    to {
        opacity: 1;
        background: linear-gradient(
        90deg,
        rgba(184, 238, 174, 1) 0%,
        rgba(192, 214, 215, 1) 100%
        );
    }
`;
const StyledGrid = styled.div`
  display: grid;
  width: 350px;
  height: 350px;
  gap: 10px;
  border-radius: 15px;
  background: radial-gradient(
    circle,
    rgba(238, 174, 202, 1) 0%,
    rgba(54, 81, 113, 1) 100%
  );

  ${(props) => {
    return `grid-template-columns: repeat(${props.gridDimension}, auto);
            grid-template-rows: repeat(${props.gridDimension}, auto);`;
  }};

  padding: 20px;
  box-sizing: border-box;
  ${(props) => {
    return props.animeArray.map((item, index) => {
      return `.item:nth-of-type(${index + 1}){
          animation-delay: ${item / 10}s
        }`;
    });
  }}
`;

const StyledSelect = styled.select`
  width: 200px;
  height: 30px;
  background: linear-gradient(
    90deg,
    rgba(197, 174, 238, 1) 0%,
    rgba(226, 227, 235, 1) 100%
  );
  padding: 0 20px;
  color: #000;
  font-weight: bold;
  font-size: 20px;
`;
const StyledButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 180px;
  height: 30px;
  background-color: #000;
  color: white;
  border-radius: 20px;
  cursor: pointer;
`;

const StyledGridItem = styled.div`
  background-color: #fff;
  ${(props) =>
    props.startAnime &&
    css`
    animation: ${anime} 0.25s linear forwards;
    animation-delay: 1s;
    `}
  border-radius: 20%;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
`;

export default function SpiralAlgo() {
  const [gridDimension, setGridDimension] = useState(5);
  const [startAnime, setStartAnime] = useState(true);
  const [animeArray, setAnimeArray] = useState([]);

  const handleClick = () => {
    sprialTraversal(gridDimension);
  };

  const sprialTraversal = (dimension) => {
    let arr = Array(dimension).fill(Array(dimension).fill(0));
    let matrix = arr.map((item, index) => {
      return item.map((item1, index1) => {
        return '' + index + index1;
      });
    });
    let rS = 0,
      cS = 0,
      rE = dimension - 1,
      cE = dimension - 1;
    let count = 0;
    while (rS <= rE && cS <= cE) {
      for (let i = cS; i <= cE; i++) {
        matrix[rS][i] = count;

        count++;
      }
      rS = rS + 1;
      for (let i = rS; i <= rE; i++) {
        matrix[i][cE] = count;
        count++;
      }
      cE = cE - 1;
      if (rS <= rE) {
        for (let i = cE; i >= cS; i--) {
          matrix[rE][i] = count;
          count++;
        }
        rE = rE - 1;
      }
      if (cS <= cE) {
        for (let i = rE; i >= rS; i--) {
          matrix[i][cS] = count;
          count++;
        }
        cS = cS + 1;
      }
    }
    setAnimeArray(matrix.flat());
  };
  const handleSelect = (event) => {
    setStartAnime(false);
    setGridDimension(parseInt(event.target.value));
  };

  useEffect(() => {
    setStartAnime(!startAnime);
  }, [animeArray]);

  return (
    <>
      <StyledHeader>
        <h3>Spiral Traversal Algo Animation</h3>
      </StyledHeader>
      <StyledBody direction={'column'} gap={'5'}>
        <StyledSelect onChange={handleSelect}>
          <option value="5">5 * 5</option>
          <option value="6">6 * 6</option>
          <option value="8">8 * 8</option>
          <option value="10">10 * 10</option>
        </StyledSelect>
        <StyledGrid
          startAnime={startAnime}
          animeArray={animeArray}
          gridDimension={gridDimension}
        >
          {Array(gridDimension * gridDimension)
            .fill(0)
            .map((item, index) => {
              return (
                <StyledGridItem
                  key={index}
                  className="item"
                  startAnime={startAnime}
                ></StyledGridItem>
              );
            })}
        </StyledGrid>
        <StyledButton onClick={handleClick}>Start Animation</StyledButton>
      </StyledBody>
    </>
  );
}

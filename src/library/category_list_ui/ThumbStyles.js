import { Link } from "react-router-dom";
import styled from "styled-components/macro";

export const CategoryLink = styled(Link)`
  width: 100%;
  text-decoration: none;
  color: black;
  text-align: center;
  position: relative;
`;

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1198px) {
    width: 45%;
  }
  @media (max-width: 400px) {
    width: 100%;
  }
`;

export const CardContainer = styled.div`
  margin: 4px 4px;
  padding: 20px;
  width: 320px;
  background-color: #fdf6e9;
  border-bottom-left-radius: 25px;
  box-shadow: 0 6.7px 5.3px rgba(0, 0, 0, 0.048),
    0 12.5px 10px rgba(0, 0, 0, 0.06), 0 22.3px 17.9px rgba(0, 0, 0, 0.072),
    0 41.8px 33.4px rgba(0, 0, 0, 0.086), 0 100px 80px rgba(0, 0, 0, 0.12);

  @media (max-width: 550px) {
    margin: 8px;
    box-shadow: 0 5px 3px rgba(0, 0, 0, 0.072), 0 10px 8px rgba(0, 0, 0, 0.086);
  }
`;

export const LocalLink = styled(Link)`
  text-decoration: none;
`;

export const ThumbTextBox = styled.div`
  width: 85%;
  margin-top: 0;
  background-color: rgba(0, 0, 0, 0.9);
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;
export const ThumbImage = styled.div`
  height: 300px;
  background-image: url("${(props) => props.url}");
  background-size: ${(props) => props.imgSize};
  background-position: center;
  background-repeat: no-repeat;
  background-color: #fff;
  color: #fff;
  border: solid 1px #c7b89c;
  font-size: 28px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  filter: opacity(0.8);

  &:hover {
    filter: opacity(1);
    transition: 0.3s ease-in-out;
  }
  &:hover ${ThumbTextBox} {
    opacity: 0;
    transition: 0.3s ease-in-out;
  }

  @media (max-width: 550px) {
    width: 170px;
    height: ${(props) => props.xsImageHeight};
  }
`;

export const ThumbText = styled.p`
  width: 100%;
  height: 60px;
  margin: 15px 12px 8px;
  text-transform: uppercase;
  font-weight: 700;

  @media (max-width: 550px) {
    height: 70px;
    margin: 0 12px;
    font-size: 14px;
    
  }
`;

export const ThumbIcon = styled.span`
  margin-bottom: 20px;
`;
// Move up

export const Container = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FavouriteHeartButton = styled.div`
  align-self: flex-end;
  cursor: pointer;
  transition: transform 200ms ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

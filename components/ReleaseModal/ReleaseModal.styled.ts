import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  height: 100%;

  background-color: white;
  border-radius: 10px;
  display: flex;
  justify-content: center;
`;

export const LeftContainer = styled.div`
  width: 779px;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TopContainer = styled.div`
  width: 100%;
  height: 55px;

  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 10px;
`;

export const RightContainer = styled.div`
  width: 344px;
  height: 100%;
`;

export const CenterContainer = styled.div`
  width: 746px;
  height: 550px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border: 1px solid #e1e1e1;

  overflow-x: none;
`;

export const CenterContainerSection = styled.div`
  width: 746px;
  height: 550px;

  display: flex;
  justify-content: center;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(200, 199, 199, 0.3);
    height: 20px;
    border-radius: 400px;
    background-clip: padding-box;
  }

  &::-webkit-scrollbar-track {
    border-radius: 10px;
    box-shadow: inset 0px 0px 5px white;
  }
`;

export const BottomContainer = styled.div`
  width: 100%;
  height: 70px;
`;

export const RightBottomContainer = styled.div`
  width: 95%;
  height: 50px;

  display: flex;
  align-items: end;
  justify-content: end;

  margin-top: 20px;
`;

export const FinalButton = styled.div`
  font-size: 18px;

  width: 90px;
  height: 30px;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-left: 5px;
  background-color: #e23a3a;
  color: white;
  cursor: pointer;
`;

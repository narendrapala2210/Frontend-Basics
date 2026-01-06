import styled from "styled-components";

export const ImgContainer = styled.div`
  width: 100%;
  height: 85%;
  background-color: grey;
  background-size: cover;
  background-image: url(${(props) => props.url});
  box-sizing: border-box;
  display: flex;
  align-items: flex-start;
`;

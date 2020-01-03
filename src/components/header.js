import React from "react"
import colors from "../themes/colors";
import styled from "styled-components"
import { Link } from "gatsby"

const Header = () => (
  <MainContainer>
    <div>
      <Title>Tamerlan Gudabayev</Title>
      <Subtitle>Software Engineer</Subtitle>
    </div>
    <div>
      <ul>
        <ListItem>
          <StyledLink to="/">
            <h6>Home</h6>
          </StyledLink>
        </ListItem>
        <ListItem>
          <StyledLink to="/projects">
            <h6>Projects</h6>
          </StyledLink>
        </ListItem>
        <ListItem>
          <StyledLink to="/">
            <h6>Blog</h6>
          </StyledLink>
        </ListItem>
        <ListItem>
          <StyledLink to="/">
            <h6>Videos</h6>
          </StyledLink>
        </ListItem>
        <ListItem>
          <StyledLink to="/contact">
            <h6>Connect</h6>
          </StyledLink>
        </ListItem>
      </ul>
    </div>
  </MainContainer>
);

export default Header;

const MainContainer = styled.header`
    background: ${colors.WHITE};
    margin-bottom: 1.45rem;
    display: flex;
    flex-flow: row;
    margin: 0;
    padding: 20px;
    justify-content: space-between;
`
const Title = styled.h2`
  margin: 0;
  font-size: 16px;
  font-weight: 800;
`
const Subtitle = styled.h6`
  font-weight: 400;
`
const StyledLink = styled(props => <Link {...props} />)`
  color: #000;
`;
const ListItem = styled.li`
  list-style-type: none;
  display: inline-block;
  margin-right: 10px;
`
import React from 'react';
import styled from "styled-components"

const Footer = () => (
  <CustomFooter>
    <h6
      style={{
        marginBottom: 10,
        fontSize: 12,
        position: "absolute",
        bottom: 0,
        left: '50%',
        transform: `translate(-50%)`,
      }}>
      © {new Date().getFullYear()} Tamerlan Gudabayev
    </h6>
  </CustomFooter>
);

export default Footer;

const CustomFooter = styled.footer`
  text-align: center;
`
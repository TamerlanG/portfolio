import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import styled from "styled-components"
import colors from "../themes/colors";

const SecondPage = () => {

  return (
    <Layout>
      <SEO title="Contact" />
      <MainContainer>
        <h5>Hello, Let's get in Touch
          <span role="img" aria-label="peace sign">
            &#9996;
            </span>
        </h5>
        <form method="post" action="#">
          <CustomLabel htmlFor="name">
            Full Name
          </CustomLabel>
          <Input type="text" name="name" id="name" />
          <CustomLabel htmlFor="email">
            Email
          </CustomLabel>
          <Input type="email" name="email" id="email" />
          <CustomLabel htmlFor="subject">
            Subject
          </CustomLabel>
          <Input type="text" name="subject" id="subject" />
          <CustomLabel htmlFor="message">
            Message
          </CustomLabel>
          <TextArea name="message" id="message" rows="5" />
          <Button type="submit">
            Send Message
          </Button>
        </form>
      </MainContainer>
    </Layout>
  );
};

export default SecondPage

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const CustomLabel = styled.p`
  display: block;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 10px;
  font-weight: 800;
  color: rgba(0,0,0,0.6);
  margin: 5px 0px;
`
const Input = styled.input`
  width: 100%;
  height: 40px;
  border-width: 1px;
  border-radius: 5px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  padding: 5px;
  &:focus {
    outline: none !important;
    box-shadow: 0 0 5px rgba(232, 68, 65, 1);
    padding: 3px 0px 3px 3px;
    margin: 5px 1px 3px 0px;
    border: 1px solid rgba(232, 68, 65, 1);
  }
`
const TextArea = styled.textarea`
  width: 100%;
  height: 200px;
  border-radius: 5px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  padding: 5px;
  &:focus {
    outline: none !important;
    box-shadow: 0 0 5px rgba(232, 68, 65, 1);
    padding: 3px 0px 3px 3px;
    margin: 5px 1px 3px 0px;
    border: 1px solid rgba(232, 68, 65, 1);
  }
`
const Button = styled.button`
  width: 100%;
  background-color: ${colors.PRIMARY};
  color: ${colors.WHITE};
  border-radius: 5px;
  font-family: Arial, Helvetica, sans-serif;
  border-width: 0;
`
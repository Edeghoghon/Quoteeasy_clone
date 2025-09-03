"use client";
import styled from "styled-components";
import { FaArrowRight } from "react-icons/fa";

import React from "react";

const Getquote = () => {
  return (
    <Formcontainer>
      <Form action="">
        <Formtext>
          <h1>Get Your Free Quote</h1>
          <p>Choose your insurance type and get instant quotes</p>
        </Formtext>
        <Selectcontainer>
          <Selectheader>
            <h3>Insurance Type</h3>
          </Selectheader>
          <Select name="" id="">
            <option value="">Select insurance type</option>
            <option value="Car Insurance">Car insurance</option>
            <option value="Home Insurance">Home Insurance</option>
            <option value="Travel Insurance">Travel Insurance</option>
            <option value="Life Insurance">Life Insurance</option>
            <option value=" Health insurance">Health Insurance</option>
          </Select>

          <Buttoncontainer>
            <Button>
              Get quote
              <Arrow />
            </Button>
          </Buttoncontainer>
        </Selectcontainer>
      </Form>
    </Formcontainer>
  );
};

export default Getquote;

const Formcontainer = styled.div`
  background: #f8fafc;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 48px 0;
  margin-top: -32px;
`;

const Form = styled.form`
  background-color: rebeccapurple;
  background: #fff;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.08);
  border-radius: 16px;
  width: 100%;
  max-width: 500px;
  margin: 0px, auto;
  text-align: center;
`;

const Formtext = styled.div`
  padding: 32px;
  border-bottom: 1px solid rgb(226, 232, 240);
  background: rgb(248, 250, 252);

  h1 {
    font-size: 20px;
    font-weight: 700;
    color: #1a1a1a;
    margin-bottom: 8px;
  }

  p {
    font-size: 14px;
    color: #666;
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 12px;
  color: black;
  border: 2px solid rgb(229, 231, 235);
  border-radius: 8px;
  font-size: 16px;
  margin-bottom: 20px;
  background: white;

  option {
    color: black;
  }
`;

const Selectheader = styled.div`
  text-align: left;
  margin-bottom: 8px;

  h3 {
    font-size: 16px;
    font-weight: 600;
    color: #333;
  }
`;

const Button = styled.button`
  background-color: #2563eb;
  width: 100%;
  padding: 14px 24px;
  border-radius: 8px;
  gap: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Arrow = styled(FaArrowRight)``;

const Buttoncontainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Selectcontainer = styled.div`
  padding: 32px;
`;

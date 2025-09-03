"use client";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { HiArrowsRightLeft } from "react-icons/hi2";
import { FaCheckCircle } from "react-icons/fa";

import React from "react";

const HowitWorks = () => {
  return (
    <Infocontainer>
      <Infotext>
        <h2>How it works</h2>
        <p>Get insurance quotes in 3 simple steps</p>
      </Infotext>
      <Infocargrid>
        <Infocard>
          <Number>1</Number>
          <SearchIcon />
          <h3>Get Quotes</h3>
          <p>
            Fill out a simple form to get <br />
            personalized quotes from multiple <br />
            insurers
          </p>
        </Infocard>

        <Infocard>
          <Number>2</Number>
          <Arrows />
          <h3>Compare Options</h3>
          <p>
            Review and compare coverage options prices, and benefits side by
            side
          </p>
        </Infocard>

        <Infocard>
          <Number>3</Number>
          <Check />
          <h3>Choose & Buy</h3>
          <p>
            Select the best policy for your needs <br />
            and purchase securely online
          </p>
        </Infocard>
      </Infocargrid>
    </Infocontainer>
  );
};

export default HowitWorks;

const Infocontainer = styled.div`
  background: #f8fafc;
  padding: 64px 0px;
`;
const Infotext = styled.div`
  text-align: center;
  margin-bottom: 48px;

  h2 {
    color: black;
    font-weight: 700;
    margin-bottom: 8px;
  }

  p {
    font-size: 14px;
    color: #64748b;
    text-align: center;
  }
`;
const Infocard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 14px;

  h3 {
    color: black;
    margin-bottom: 8px;
  }
  p {
    /* color: #64748b; */
    color: #485a72;
    line-height: 1.5;
    text-align: center;
    max-width: 280px;
    //margin: 0 auto;
    font-size: 15px;
  }
`;

const Infocargrid = styled.div`
  display: grid;
  max-width: 900px;
  gap: 32px;
  margin: 0px auto;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`;

const Number = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: rgb(37, 99, 235);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  margin: 0px auto 16px;
  font-size: 0.9rem;
`;
const SearchIcon = styled(FaSearch)`
  font-size: 38px;
  color: rgb(37, 99, 235);
  margin-bottom: 16px;
`;
const Arrows = styled(HiArrowsRightLeft)`
  font-size: 38px;
  color: rgb(37, 99, 235);
  margin-bottom: 16px;
`;
const Check = styled(FaCheckCircle)`
  font-size: 38px;
  color: rgb(37, 99, 235);
  margin-bottom: 16px;
`;

"use client";
import Image from "next/image";
import styled from "styled-components";
import React, { use } from "react";

import { FaShieldHalved } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { MdPeople } from "react-icons/md";

const Hero = () => {
  return (
    <HeroSection>
      <Heroquote>
        <h1>Get the Best Insurance Quotes in Minutes</h1>
      </Heroquote>
      <Herosubquote>
        <p>
          Compare rates from top insurers for car, home, travel, life, and
          health <br />
          insurance. Save time and money with our simple quote process.
        </p>
      </Herosubquote>
      <Herodescription>
        <Descript>
          <Styledicon />
          <h1>50+</h1>
          <p>Insurance Partners</p>
        </Descript>

        <Descript>
          <Styledicon1 />
          <h1>4.9/5</h1>
          <p>Customer Rating</p>
        </Descript>

        <Descript>
          <Styledicon2 />
          <h1>100K+</h1>
          <p>Happy Customers</p>
        </Descript>
      </Herodescription>
    </HeroSection>
  );
};

export default Hero;

const HeroSection = styled.div`
  background: #2563eb;
  padding-top: 30px;
  padding-bottom: 100px;

  @media (max-width: 768px) {
    padding: 20px 16px 60px;
  }
`;
const Heroquote = styled.div`
  h1 {
    text-align: center;
    font-weight: 700;
    font-size: 40px;
    margin-top: 26px;
    margin-bottom: 16px;

    @media (max-width: 768px) {
      font-size: 24px;
    }
  }
`;
const Herosubquote = styled.div`
  p {
    text-align: center;
    line-height: 25px;
    font-weight: 300;
  }
  br {
    @media (max-width: 768px) {
      display: none;
    }
  }

  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 22px;
    max-width: 100%;
  }
`;

const Herodescription = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  gap: 9rem;

  @media (max-width: 768px) {
    gap: 2rem;
    margin-top: 40px;
    flex-wrap: wrap;
  }
`;
const Descript = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 200px;

  h1 {
    @media (max-width: 768px) {
      font-size: 24px;
      margin: 8px 0 4px;
    }
  }

  p {
    display: grid;
    font-weight: 300;
    font-size: 14px;
    margin: 0 auto;

    @media (max-width: 768px) {
      font-size: 13px;
      padding: 0 1rem;
      text-align: right;
    }
  }
`;

const Styledicon = styled(FaShieldHalved)`
  width: 30px;
  height: 30px;
  @media (max-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;

const Styledicon1 = styled(FaStar)`
  width: 30px;
  height: 30px;
  @media (max-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;

const Styledicon2 = styled(MdPeople)`
  width: 30px;
  height: 30px;
  @media (max-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;

"use client";
import React from "react";
import { FaCar, FaHome, FaPlane, FaUserShield } from "react-icons/fa";
import { FaHeartbeat } from "react-icons/fa";
import Link from "next/link";
import styled from "styled-components";

const Categories = () => {
  const categories = [
    {
      href: "/car-insurance",
      icon: FaCar,
      header: "Car Insurance",
      text: "Protect your vehicle with comprehensive coverage",
      hoverColor: "#2563eb",
      iconColor: "#2563eb",
      iconBg: "rgba(37, 99, 235, 0.1)",
    },
    {
      href: "/home-insurance",
      icon: FaHome,
      header: "Home Insurance",
      text: "Comprehensive healthcare package for you and your family",
      hoverColor: "#10B981",
      iconColor: "#10B981",
      iconBg: "#F0FBF7",
    },
    {
      href: "/travel-insurance",
      icon: FaPlane,
      header: "Travel Insurance",
      text: "Travel with confidence and peace of mind",
      hoverColor: "#F59E0B",
      iconColor: "#F59E0B",
      iconBg: "#FEF9F0",
    },
    {
      href: "/life-insurance",
      icon: FaUserShield,
      header: "Life Insurance",
      text: "Secure your family's financial future",
      hoverColor: "#7e22ce",
      iconColor: "#7e22ce",
      iconBg: "rgba(126, 34, 206, 0.1)",
    },
    {
      href: "/health-insurance",
      icon: FaHeartbeat,
      header: "Health Insurance",
      text: "Comprehensive healthcare package for you and your family",
      hoverColor: "#EF4444",
      iconColor: "#EF4444",
      iconBg: "#FEF3F3",
    },
  ];

  return (
    <Category>
      <Categorytext>
        <h2>Insurance Categories</h2>
        <p>Choose the type of insurance that fits your needs</p>
      </Categorytext>

      <Categorygridcontainer>
        {categories.map((category, index) => (
          <Categorycard
            key={index}
            href={category.href}
            $hovercolor={category.hoverColor}
          >
            <Iconcontainer
              $iconbg={category.iconBg}
              $iconcolor={category.iconColor}
            >
              <category.icon />
            </Iconcontainer>
            <Categgorygridtext>
              <h3>{category.header}</h3>
              <p>{category.text}</p>
            </Categgorygridtext>
          </Categorycard>
        ))}
      </Categorygridcontainer>
    </Category>
  );
};

export default Categories;

const Category = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Categorycontainer = styled.div`
  background: white;
  border-radius: 1rem;
  padding: 2rem;
  border: 2px solid rgb(241, 245, 249);
  transition: 0.3s;
  cursor: pointer;
`;

const Categorytext = styled.div`
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
  }
`;

const Categorygridcontainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1000px;
  margin: 0px auto;
`;

interface hovercolor {
  $hovercolor?: string;
}
const Categorycard = styled(Link)<hovercolor>`
  background: white;
  border-radius: 1rem;
  padding: 32px;
  border: 2px solid rgb(241, 245, 249);
  transition: 0.3s;
  cursor: pointer;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
    border: 2px solid ${(props) => props.$hovercolor};
  }
`;

const Categoryicon = styled.div``;
const Categgorygridtext = styled.div`
  h3 {
    color: black;
    margin-bottom: 8px;
  }
  p {
    color: #7d98b5;
    font-size: 13px;
  }
`;

const Styledicon = styled(FaCar)`
  width: 32px;
  height: 32px;
  color: #3131e6;
`;

interface IconContainerProps {
  $iconbg?: string;
  $iconcolor?: string;
}
const Iconcontainer = styled.div<IconContainerProps>`
  width: 4rem;
  height: 4rem;
  border-radius: 1rem;
  background: ${(props) => props.$iconbg || "transparent"};
  color: ${(props) => props.$iconcolor};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
`;

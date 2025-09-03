"use client";
import React from "react";
import styled from "styled-components";
import {
  FaFacebook,
  FaXTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa6";
import Link from "next/link";

const Footer2 = () => {
  const InsuranceTypes = [
    { name: "Car Insurance", href: "/car-insurance" },
    { name: "Home Insurance", href: "/home-insurance" },
    { name: "Travel Insurance", href: "/travel-insurance" },
    { name: "Life Insurance", href: "/life-insurance" },
    { name: "Health Insurance", href: "/health-insurance" },
  ];

  const supportLinks = [
    { name: "Help Center", href: "/help-center" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms of Service", href: "/terms-of-service" },
    { name: "FAQ", href: "/faq" },
  ];

  const companyLinks = [
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Careers", href: "/careers" },
    { name: "Press", href: "/press" },
  ];

  const Socialmedia = [
    { icon: FaFacebook, href: "/facebook" },
    { icon: FaXTwitter, href: "/twitter" },
    { icon: FaLinkedin, href: "/linkedin" },
    { icon: FaInstagram, href: "/instagram" },
  ];

  return (
    <Footer>
      <Footercontainer>
        <FooterLeft>
          <h2>QuoteEasy</h2>
          <p>
            Making insurance simple and accessible. Compare quotes from top
            insurers and find the perfect coverage for your needs.
          </p>
          <Icongroup>
            {Socialmedia.map(({ icon: Icon, href }, index) => (
              <Iconcontainer key={index} href={href}>
                <Icon size={15} />
              </Iconcontainer>
            ))}
          </Icongroup>
        </FooterLeft>

        <FooterRight>
          <FooterRightgrid>
            <FooterInsurance>
              <h4>Insurance Types</h4>
              <ul>
                {InsuranceTypes.map((item) => (
                  <li key={item.name}>
                    <a href={item.href}>{item.name}</a>
                  </li>
                ))}
              </ul>
            </FooterInsurance>

            <FooterInsurance>
              <h4>Company</h4>
              <ul>
                {supportLinks.map((item) => (
                  <li key={item.name}>
                    <a href={item.href}>{item.name}</a>
                  </li>
                ))}
              </ul>
            </FooterInsurance>

            <FooterInsurance>
              <h4>Support</h4>
              <ul>
                {companyLinks.map((item) => (
                  <li key={item.name}>
                    <a href={item.href}>{item.name}</a>
                  </li>
                ))}
              </ul>
            </FooterInsurance>
          </FooterRightgrid>
        </FooterRight>
      </Footercontainer>
      <Footerend>
        <Line />
        <p>© 2025 QuoteEasy. All rights reserved.</p>
      </Footerend>
    </Footer>
  );
};

export default Footer2;

const Footer = styled.div``;

const Footercontainer = styled.div`
  background: #1e293b;
  padding: 60px 60px 20px;
  display: flex;
  justify-content: space-between;
  gap: 70px;
  flex-wrap: wrap;
`;
const FooterLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex: 0 0 300px;
  margin-bottom: 2px;

  h2 {
    color: #2563eb;
  }
  p {
    color: #7d98b5;
    line-height: 1.6;
    margin-bottom: 5px;
    font-size: 15px;
  }
`;
const FooterRight = styled.div`
  flex: 1;
  min-width: 0;
  margin-bottom: 2px;
`;
const FooterRightgrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 10px;
  width: 100%;
`;
const FooterInsurance = styled.div`
  h4 {
    margin-bottom: 16px;
  }
  ul {
    list-style: none;
    color: #7d98b5;
  }
  li {
    margin-bottom: 15px;
    font-size: 15px;

    a {
      color: #7d98b5;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: white;
      }
    }
  }
`;
const FooterCompany = styled.div``;
const FooterSupport = styled.div``;
const Styledicon1 = styled(FaFacebook)`
  width: 16px;
  height: 16px;
`;
const Iconcontainer = styled(Link)`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background: #334155;
  color: #94a3b8;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
`;

const Icongroup = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Footerend = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #1e293b;

  p {
    color: #7d98b5;
    font-size: 14px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;

const Line = styled.div`
  border-top: 1px solid rgb(51, 65, 85);
  padding-top: 16px;
  text-align: center;
  width: 80%;
`;

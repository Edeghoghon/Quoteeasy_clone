"use client";
import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <Tagline>
          Making insurance simple and accessible. Compare quotes from top
          insurers and find the perfect coverage for your needs.
        </Tagline>

        <Divider />

        <FooterGrid>
          <div>
            <SectionTitle>Insurance Types</SectionTitle>
            <LinkList>
              <LinkItem>
                <Link href="#">Car Insurance</Link>
              </LinkItem>
              <LinkItem>
                <Link href="#">Home Insurance</Link>
              </LinkItem>
              <LinkItem>
                <Link href="#">Travel Insurance</Link>
              </LinkItem>
              <LinkItem>
                <Link href="#">Life Insurance</Link>
              </LinkItem>
              <LinkItem>
                <Link href="#">Health Insurance</Link>
              </LinkItem>
            </LinkList>
          </div>

          <div>
            <SectionTitle>Company</SectionTitle>
            <LinkList>
              <LinkItem>
                <Link href="#">About Us</Link>
              </LinkItem>
              <LinkItem>
                <Link href="#">Contact</Link>
              </LinkItem>
              <LinkItem>
                <Link href="#">Careers</Link>
              </LinkItem>
              <LinkItem>
                <Link href="#">Press</Link>
              </LinkItem>
            </LinkList>
          </div>

          <div>
            <SectionTitle>Support</SectionTitle>
            <LinkList>
              <LinkItem>
                <Link href="#">Help Center</Link>
              </LinkItem>
              <LinkItem>
                <Link href="#">Privacy Policy</Link>
              </LinkItem>
              <LinkItem>
                <Link href="#">Terms of Service</Link>
              </LinkItem>
              <LinkItem>
                <Link href="#">FAQ</Link>
              </LinkItem>
            </LinkList>
          </div>
        </FooterGrid>

        <Divider />

        <Copyright>© 2025 QuoteEasy. All rights reserved.</Copyright>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  background-color: #1e293b;
  padding: 40px 20px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, sans-serif;
  color: #333;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Tagline = styled.p`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 30px;
  color: #2c3e50;
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid #ddd;
  margin: 30px 0;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

const SectionTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 20px;
  color: #2c3e50;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const LinkList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const LinkItem = styled.li`
  margin-bottom: 12px;
`;

const Link = styled.a`
  color: #555;
  text-decoration: none;
  font-size: 14px;
  transition: color 0.2s;

  &:hover {
    color: #0066cc;
  }
`;

const Copyright = styled.p`
  text-align: center;
  font-size: 14px;
  color: #777;
  margin-top: 30px;
`;

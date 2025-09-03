"use client";

import React from "react";
import { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <PageWrapper>
        <Navbarcontainer>
          <Navheader>
            <h2>QuoteEasy</h2>
          </Navheader>

          <HamburgerButton onClick={toggleMenu}>
            {menuOpen ? (
              <AiOutlineClose size={24} />
            ) : (
              <RxHamburgerMenu size={24} />
            )}
          </HamburgerButton>

          <Navlinks className={menuOpen ? "open" : ""}>
            <Navlist>
              <li>
                <Link href="/" onClick={() => setMenuOpen(false)}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/categories" onClick={() => setMenuOpen(false)}>
                  Categories
                </Link>
              </li>
              <li>
                <Link href="/about" onClick={() => setMenuOpen(false)}>
                  About
                </Link>
              </li>
              <li>
                <Link href="/login" onClick={() => setMenuOpen(false)}>
                  Login
                </Link>
              </li>
              <li>
                <button>Signup</button>
              </li>
            </Navlist>
          </Navlinks>
        </Navbarcontainer>
      </PageWrapper>

      {menuOpen && <Overlay onClick={() => setMenuOpen(false)} />}
    </>
  );
};

const PageWrapper = styled.div`
  padding-top: 70px;
`;

const Navbarcontainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  background: rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 10px;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 1000;
  padding: 0 1rem;
`;

const Navheader = styled.div`
  h2 {
    color: #2563eb;
  }
`;

const HamburgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  color: #4b5563;
  z-index: 1001;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Navlinks = styled.div`
  @media (max-width: 768px) {
    position: fixed;
    top: 70px;
    left: 0;
    width: 100%;
    height: 0;
    background: white;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px;
    overflow: hidden;
    transition: height 0.3s ease-in-out;

    &.open {
      height: auto;
      max-height: 80vh;
    }
  }
`;

const Navlist = styled.ul`
  display: flex;
  list-style: none;
  gap: 1.5rem;
  margin: 0;

  li {
    font-weight: 500;
    display: flex;
    align-items: center;

    a {
      color: #4b5563;
      font-size: 16px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: #2563eb;
      }
    }

    button {
      padding: 10px;
      width: 90px;
      border-radius: 10px;
      border: none;
      background-color: #2563eb;
      color: white;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
        background-color: #1d4ed8;
      }
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 2rem;
    gap: 2rem;

    li {
      a {
        font-size: 1.2rem;
      }

      button {
        width: 100%;
        padding: 12px;
      }
    }
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 70px;
  left: 0;
  width: 100%;
  height: calc(100vh - 70px);
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;

  @media (min-width: 769px) {
    display: none;
  }
`;

export default Navbar;

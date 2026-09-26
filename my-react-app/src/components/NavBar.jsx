import React from "react";
import { FaFacebookF, FaLinkedinIn, FaGithub, FaDribbble } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import NavLogo from "../assets/hero.png";
import Button from "./Button";
import Container from "./Container";

const NavBar = () => {
  const navLinks = ["Services", "Works", "Resume", "Skills", "Testimonials", "Contact"];

  const socials = [
    { icon: <FaFacebookF />, href: "#" },
    { icon: <FaLinkedinIn />, href: "#" },
    { icon: <FaGithub />, href: "#" },
    { icon: <FaDribbble />, href: "#" },
  ];

  return (
    <header className="w-full bg-black py-4">
      <Container>

      <nav className="mx-auto flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src={NavLogo} alt="Gerold" className="" />
        </div>

        {/* Nav Links */}
        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="text-sm text-gray-400 transition-colors hover:text-white"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Socials + Button */}
        <div className="flex items-center gap-4">
          {/* Social Icons */}
          <div className="hidden items-center gap-3 md:flex">
            {socials.map((social, i) => (
              <a
                key={i}
                href={social.href}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-700 text-xs text-gray-300 transition-colors hover:border-purple-500 hover:text-purple-400"
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Lets Talk Button */}
          <Button>
            Lets Talk
            <FiArrowUpRight className="text-base" />
          </Button>
        </div>

      </nav>
      </Container>
    </header>
  );
};

export default NavBar;
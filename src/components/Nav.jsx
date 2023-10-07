import { useState } from 'react';
import { headerLogo } from '../assets/images';
import { navLinks } from '../constants/index';
import { hamburger } from '../assets/icons';

const Nav = () => {
  const [activeLink, setActiveLink] = useState('home');
  const handleLinkClick = label => {
    setActiveLink(label);
  };
  return (
    <header className="padding-x py-8 absolute w-full z-10">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map(item => (
            <li key={item.label}>
              <a
                href={item.href}
                className={`font-montserrat leading-normal text-lg ${
                  activeLink === item.label
                    ? 'text-coral-red'
                    : 'text-slate-gray'
                }`}
                onClick={() => handleLinkClick(item.label)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block">
          <img src={hamburger} alt="hamburger" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;

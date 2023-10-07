import { useState } from 'react';
import { headerLogo } from '../assets/images';
import { navLinks } from '../constants/index';
import { hamburger, close } from '../assets/icons';

const Nav = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [toggle, setToggle] = useState(false);
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
                className={`font-montserrat leading-normal text-lg hover:text-coral-red ${
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
          <img
            src={toggle ? close : hamburger}
            alt="hamburger"
            width={25}
            height={25}
            className="cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? 'hidden' : 'flex'
            } pink-gradient absolute top-20 right-0 mx-4 justify-center 
          my-2 rounded-xl min-w-[320px] min-h-[400px] p-10 z-100
          `}
          >
            <ul className="flex items-center flex-col gap-8">
              {navLinks.map(item => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className={`font-montserrat leading-normal text-3xl sm:text-2xl
                     text-white font-semibold hover:text-black cursor-pointer ${
                       activeLink === item.label
                         ? 'text-black '
                         : 'text-slate-gray'
                     }`}
                    onClick={() => {
                      setToggle(!toggle);
                      handleLinkClick(item.label);
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;

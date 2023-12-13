import { useState } from "react";
import { NavLink } from 'react-router-dom';
import { close, menu } from "../../assets";
import { navLinks } from "../../constants";
import * as rdd from 'react-device-detect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import themeLogo from '../../assets/img/logo.webp';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [dropdown, setDropDown] = useState(false);
  let linkStyleClasses = `font-poppins cursor-pointer uppercase rounded-3xl px-5 py-1 text-linkBlack ${rdd.isMobile ? 'font-semibold text-[30px] mb-16 last:mb-0' : 'font-medium mr-10 last:mr-0'} `;

  return (
    <nav role="menu" className="w-full flex py-8 md:py-14 justify-between items-center navbar px-7 md:px-20" aria-label="app-menu">
      <div className="custom-shape-divider-top-1668835711">
        <svg role="presentation" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
        </svg>
      </div>
      <div className="custom-shape-divider-top-1668836727">
        <svg role="presentation" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
        </svg>
      </div>
      <img src={themeLogo} alt="metric" className="w-auto h-[48px] mr-2" />

      <ul role="group" className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li className='px-5' key={index} role="menuitem">
            <NavLink to={nav.path} end={nav.path !== 'products' ? true : false} id={nav.id} aria-label={'nav-item-' + index}
              className={({ isActive }) => isActive ? `${linkStyleClasses}` + 'bg-primaryGreen' : `${linkStyleClasses}` + 'bg-white'}
              onClick={() => nav.subMenu ? setDropDown(!dropdown) : setDropDown(false)}>
              {nav.title}
              {
                nav.subMenu ? <FontAwesomeIcon className="ml-2" icon={dropdown ? faChevronUp : faChevronDown} /> : null
              }
            </NavLink>
            {
              nav.subMenu && dropdown ?
                <ul role="group" className="products-menu absolute shadow-xl bg-white rounded-xl p-4 mt-2 z-50">
                  {
                    nav.subMenu.map((menu, menuIndex) => (
                      <li role="menuitem" className="mb-3 last:mb-0 hover:text-primaryGreen w-full hover:cursor-pointer" key={menuIndex}>
                        <NavLink to={menu.path} end={nav.path !== 'products' ? true : false} aria-label={'sub-nav-item-' + menuIndex} className="font-poppins w-full"
                          onClick={() => setDropDown(!dropdown)} >{menu.title}</NavLink>
                      </li>
                    ))
                  }
                </ul> : null
            }
          </li>
          // <NavigationLink to={nav.path} title={nav.title} index={index} key={index} />
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          role="button"
          aria-label="navigation-menu-button"
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
          accesskey="j"
        />

        <div role="menu" className={`${!toggle ? "hidden" : "flex"} px-3 py-6 bg-white/80 shadow-lg absolute top-20 right-0 my-5 w-full h-[89%] min-w-[140px] rounded-xl z-40 sidebar`}>
          <ul role="group" className="list-none flex justify-center items-center flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <NavLink role="menuitem" to={nav.path} end={nav.path !== 'products' ? true : false} aria-label={'mobile-menu-item-' + index}
                className={({ isActive }) => isActive ? `${linkStyleClasses}` + 'text-white bg-primaryGreen rounded-4xl px-10 py-0.5' : `${linkStyleClasses}` + 'text-black'}
                key={index} onClick={() => setToggle(!toggle)}>
                {nav.title}
              </NavLink>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


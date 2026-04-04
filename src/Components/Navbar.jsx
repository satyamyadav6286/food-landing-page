import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaCartShopping } from "react-icons/fa6";
import logo from "../assets/Logo.svg";
import { RxHamburgerMenu } from "react-icons/rx";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRounded from "@mui/icons-material/CommentRounded";
import PhoneRounded from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import Home from "./Home";

const Navbar = () => {
  let [openMenu, setOpenMenu] = useState(false);

  let menuOption = [
    {
      text: "Home",
      icon: <HomeIcon />,
    },
    {
      text: "About",
      icon: <InfoIcon />,
    },
    {
      text: "Testimonials",
      icon: <CommentRounded />,
    },
    {
      text: "Contact",
      icon: <PhoneRounded />,
    },
    {
      text: "Cart",
      icon: <ShoppingCartRoundedIcon />,
    },
  ];
  return (
    <nav>
      <div className="nav-logo-container">
        <img src={logo} alt="" />
      </div>
      <div className="nav-links-container">
        <Link to={"home"} smooth duration={1000}>
          Home
        </Link>
        <Link to={"about"} smooth duration={1000}>
          About
        </Link>
        <Link to={"work"} smooth duration={1000}>
          Work
        </Link>
        <Link to={"testimonials"} smooth duration={1000}>
          Testimonial
        </Link>
        <Link to={"contact"} smooth duration={1000}>
          Contact
        </Link>
        <Link>
          <FaCartShopping className="cart" />
        </Link>
        <button className="primary-button">Book Now</button>
      </div>
      <div className="navbar-menu-container">
        <RxHamburgerMenu
          onClick={() => {
            setOpenMenu(true);
          }}
        />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOption.map((item) => {
              return (
                <List to={item.link} smooth={true} duration={1000}>
                  <ListItem>
                    <ListItemButton>
                      <ListItemButton>{item.icon}</ListItemButton>
                      <ListItemText>{item.text}</ListItemText>
                    </ListItemButton>
                  </ListItem>
                </List>
              );
            })}
          </List>
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;

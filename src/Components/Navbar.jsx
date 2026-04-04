import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaCartShopping } from "react-icons/fa6";
import logo from "../assets/Logo.svg";
import { RxHamburgerMenu } from "react-icons/rx";

// MUI
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";

// Icons
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRounded from "@mui/icons-material/CommentRounded";
import PhoneRounded from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  // ✅ Added link field (IMPORTANT)
  const menuOption = [
    { text: "Home", icon: <HomeIcon />, link: "home" },
    { text: "About", icon: <InfoIcon />, link: "about" },
    { text: "Work", icon: <HomeIcon />, link: "work" },
    { text: "Testimonials", icon: <CommentRounded />, link: "testimonials" },
    { text: "Contact", icon: <PhoneRounded />, link: "contact" },
    { text: "Cart", icon: <ShoppingCartRoundedIcon />, link: "home" },
  ];

  return (
    <nav>
      {/* LOGO */}
      <div className="nav-logo-container">
        <img src={logo} alt="logo" />
      </div>

      {/* DESKTOP NAV */}
      <div className="nav-links-container">
        <Link to="home" smooth duration={1000}>
          Home
        </Link>
        <Link to="about" smooth duration={1000}>
          About
        </Link>
        <Link to="work" smooth duration={1000}>
          Work
        </Link>
        <Link to="testimonials" smooth duration={1000}>
          Testimonial
        </Link>
        <Link to="contact" smooth duration={1000}>
          Contact
        </Link>

        <FaCartShopping className="cart" />
        <button className="primary-button">Book Now</button>
      </div>

      {/* MOBILE MENU ICON */}
      <div className="navbar-menu-container">
        <RxHamburgerMenu onClick={() => setOpenMenu(true)} />
      </div>

      {/* DRAWER */}
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
        >
          <List>
            {menuOption.map((item, index) => (
              <ListItem key={index} disablePadding>
                {/* ✅ IMPORTANT: Wrap with Link */}
                <Link
                  to={item.link}
                  smooth={true}
                  duration={1000}
                  style={{
                    width: "100%",
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  <ListItemButton>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.text} />
                  </ListItemButton>
                </Link>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;

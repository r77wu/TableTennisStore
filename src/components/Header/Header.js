import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useTheme} from "@material-ui/core/styles";
import {makeStyles} from "@material-ui/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';

import logo from '../../assets/image/logo.svg';


const useStyles = makeStyles(theme => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "2em"
  },
  title: {
    marginLeft: "1em",
    color: theme.palette.common.blue
  },
  logoContainer: {
    "&:hover": {
      backgroundColor: "transparent"
    }
  },
  logo: {
    height: "5em",
    margin: "0.5em 0.5em 0.5em 2em"
  },
  tabContainer: {
    marginLeft: "auto"
  },
  tab: {
    ...theme.typography.tab
  },
  menu: {
    backgroundColor: theme.palette.common.green,
    width: "12em",
    color: theme.palette.common.blue,
    borderRadius: "0px"
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    "&:hover": {
      opacity: 1
    }
  },
  drawer: {
    backgroundColor: theme.palette.common.green
  },
  drawerItem: {
    ...theme.typography.tab,
    color: theme.palette.common.blue,
    opacity: 0.7,
    margin: "1em 0"
  },
  drawerItemSelected: {
    "& .MuiListItemText-root" : {
      opacity: 1
    }
  },
  appbar: {
    zIndex: theme.zIndex.modal + 1
  }
}))

const Header = () => {
  const classes = useStyles();
  const theme = useTheme();
  const match = useMediaQuery(theme.breakpoints.down("md"));
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  const [tabValue, setTabValue] = useState(0);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  useEffect(() => {
    switch (window.location.pathname){
      case "/" :
        setTabValue(0);
        break;
      case "/products":
        setTabValue(1);
        break;
      case "/cart":
        setTabValue(2);
        break;
      default:
        setTabValue(1);
    }
  }, []);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleMouseOver = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const routes = [
    {
      name: 'Home',
      path: '/',
      activeIndex: 0
    },
    {
      name: 'Products',
      path: '/products',
      activeIndex: 1,
      ariaOwns: anchorEl ? "simple-menu" : undefined,
      ariaPopup: anchorEl ? "true" : undefined,
      mouseOver: event => handleMouseOver(event)
    },
    {
      name: 'Cart',
      path: '/cart',
      activeIndex: 2
    }
  ];

  const products = [
    {
      name: 'Products',
      path: '/products',
      activeIndex: 0
    },
    {
      name: 'Blades',
      path: '/blades',
      activeIndex: 1
    },
    {
      name: 'Rubber',
      path: '/rubber',
      activeIndex: 2
    },
    {
      name: 'Balls',
      path: '/balls',
      activeIndex: 3
    },
    {
      name: 'Tables',
      path: '/tables',
      activeIndex: 4
    }
  ]

  const tabs = (
    <React.Fragment>
      <Tabs value={tabValue} onChange={handleTabChange} indicatorColor="primary" className={classes.tabContainer}>
        {routes.map((route) => (
          <Tab key={route.activeIndex} label={route.name} component={Link} to={route.path} aria-owns={route.ariaOwns}
               aria-haspopup={route.ariaPopup} onMouseOver={route.mouseOver} className={classes.tab}/>
        ))}
      </Tabs>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        classes={{paper: classes.menu}}
        style={{zIndex: theme.zIndex.modal + 1}}
      >
        {products.map(product => (
          <MenuItem key={product.activeIndex} onClick={() => {
            handleClose(); setTabValue(1);
          }} component={Link} to={product.path}
                    className={classes.menuItem}>{product.name}</MenuItem>
        ))}
      </Menu>
    </React.Fragment>
  );

  const drawer = (
    <React.Fragment>

      <Button onClick={() => {setOpenDrawer(prev => !prev)}} style={{marginLeft: "auto"}}>
        <MenuIcon color="secondary" fontSize="large"/>
      </Button>

      <SwipeableDrawer onClose={() => setOpenDrawer(false)} onOpen={() => setOpenDrawer(true)} open={openDrawer} disableBackdropTransition={!iOS} disableDiscovery={iOS} classes={{paper: classes.drawer}}>
        <div className={classes.toolbarMargin}/>
        <List disablePadding>
          {routes.map(route => (
            <ListItem component={Link} to={route.path} key={route.activeIndex} selected={tabValue === route.activeIndex} onClick={() => { setOpenDrawer(false); setTabValue(route.activeIndex)}} classes={{selected:classes.drawerItemSelected}} aria-owns={route.ariaOwns}
                      aria-haspopup={route.ariaPopup} onMouseOver={route.mouseOver}>
              <ListItemText primary={route.name} className={classes.drawerItem}/>
            </ListItem>

          ))}
        </List>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
          onClick={() => {setOpenDrawer(false)}}
          classes={{paper: classes.menu}}
          style={{zIndex: theme.zIndex.modal + 1}}
        >
          {products.map(product => (
            <MenuItem key={product.activeIndex} onClick={() => {
              handleClose(); setTabValue(1);
            }} component={Link} to={product.path}
                      className={classes.menuItem}>{product.name}</MenuItem>
          ))}
        </Menu>
      </SwipeableDrawer>
    </React.Fragment>
  )

  return (
    <React.Fragment>
      <AppBar className={classes.appbar}>
        <Toolbar disableGutters>
          <Button className={classes.logoContainer} component={Link} to="/">
            <img src={logo} alt="logo" className={classes.logo}/>
          </Button>
          <Typography variant="h5" className={classes.title}> MyTableTennis Store</Typography>
          {match ? drawer : tabs}
        </Toolbar>
      </AppBar>
      <div className={classes.toolbarMargin}/>
    </React.Fragment>
  )
}

export default Header;

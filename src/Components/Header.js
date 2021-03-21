import React from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import SettingsIcon from '@material-ui/icons/Settings';
import AppsIcon from '@material-ui/icons/Apps';
import logo from '../logo.png';
import { Avatar, IconButton } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser, logout } from '../features/userSlice';
import { auth } from '../firebase';


function Header() {
    const user = useSelector(selectUser);
    const dispatch = useDispatch()
    function Logout() {
        auth.signOut();
        dispatch(logout());
    }
    return (
        <div className='header'>
            <div className="header__leftSide">
                <IconButton>
                    <MenuIcon />
                </IconButton>
                <img src={logo} alt="logo" className="header__logo"/>
            </div>
            <div className="header__middle">
                <IconButton>
                    <SearchIcon />  
                </IconButton>
                <input 
                    type="text" 
                    className="header__searchInput"
                    placeholder="Search in messages"
                />
                <IconButton>
                    <ArrowDropDownIcon />  
                </IconButton>
            </div>
            <div className="header__rightSide">
                <IconButton>
                    <HelpOutlineIcon />
                </IconButton>
                <IconButton>
                    <SettingsIcon />
                </IconButton>
                <IconButton>
                    <AppsIcon />
                </IconButton>
                <Avatar className='header__avatar' src={user.photoUrl} onClick={Logout} />
            </div>
        </div>
    )
}

export default Header;

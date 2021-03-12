import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import PeopleIcon from '@material-ui/icons/People';
import VideogameAssetIcon from '@material-ui/icons/VideogameAsset';
import AddIcon from '@material-ui/icons/Add';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import './Header.css';
function Header(){
    return(
        <header className="header">
            <div className="header__left">
                <img />
                <SearchIcon />
            </div>
            <div className="header__center">
                <HomeIcon />
                <OndemandVideoIcon />
                <PeopleIcon />
                <VideogameAssetIcon />
            </div>
            <div className="header__right">
                <AddIcon />
                <ChatBubbleIcon />
                <NotificationsIcon />
                <ArrowDropDownIcon />
            </div>
        </header>
    )
}

export default Header;
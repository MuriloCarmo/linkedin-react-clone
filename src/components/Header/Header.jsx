import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import LinkedinLogo from "../../images/linkedin.png";
import HeaderOptions from "./HeaderOptions";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import




function Header() {
	return (
		<div className="header">
			<div className="header__left">
				<img src={LinkedinLogo} alt="" />

				<div className="header__search">
					<SearchIcon />
					<input type="text" />
				</div>
			</div>

			<div className="header__right">
                <HeaderOptions Icon={HomeIcon} title="Home"/>
                <HeaderOptions Icon={SupervisorAccountIcon} title="My Network"/>
                <HeaderOptions Icon={BusinessCenterIcon} title="Jobs"/>
                <HeaderOptions Icon={ChatIcon} title="Messaging"/>
                <HeaderOptions Icon={NotificationsIcon} title="Notifications"/>



            </div>
		</div>
	);
}

export default Header;

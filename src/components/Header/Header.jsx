import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import LinkedinLogo from "../../images/linkedin.png";
import HeaderOptions from "./HeaderOptions";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";

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
				<HeaderOptions Icon={HomeIcon} title="Home" />
				<HeaderOptions
					Icon={SupervisorAccountIcon}
					title="My Network"
				/>
				<HeaderOptions Icon={BusinessCenterIcon} title="Jobs" />
				<HeaderOptions Icon={ChatIcon} title="Messaging" />
				<HeaderOptions Icon={NotificationsIcon} title="Notifications" />
				<HeaderOptions
					avatar="https://secure.gravatar.com/avatar/6b87b87d75353ff2bc3fd782fda436e0?s=64"
					title="Me"
				/>
			</div>
		</div>
	);
}

export default Header;

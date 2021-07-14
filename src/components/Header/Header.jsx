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
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../features/userSlice";
import { auth } from "../../config/firebase";

function Header() {
	const dispatch = useDispatch();

	const logoutOfApp = () => {
		dispatch(logout());
		auth.signOut();
	};

	return (
		<div className="header">
			<div className="header__left">
				<img src={LinkedinLogo} alt="" />

				<div className="header__search">
					<SearchIcon />
					<input placeholder="Search" type="text" />
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
				<HeaderOptions avatar={true} title="Me" onClick={logoutOfApp} />
			</div>
		</div>
	);
}

export default Header;

import React from "react";
import { Lock,Trash2 } from "react-feather";
import "../User/User.css";
import { useDispatch } from "react-redux";
import { cardActions } from "../../store/UserProfileCardSlice";
import { PropTypes } from 'prop-types';


const User = (props) => {

	// This will be the const to useDispatch Methd of React Redux
	const dispatch = useDispatch();

// This Function will handle the  onMouseEvent 
	const MouseEntereHandler = () =>{
		dispatch(cardActions.setUser({ name: props.fname+" "+props.lname, email:props.email, avatar:props.avatar }));
	}

	const MouseLeaveHandler = () =>{
		dispatch(cardActions.removeUser())
	}


	return (
		<div className="UserDetails">
			<div onMouseEnter={MouseEntereHandler} onMouseLeave={MouseLeaveHandler} className="NameColumn">
				<img className="Avatar" src={props.avatar} alt="" />
				<div className="PersonalDetails">
					<div className="name">{props.fname + " " + props.lname}</div>
					<div className="email">{props.email}</div>
				</div>
			</div>
			<div className="Status">
				{props.id === 1 && <div className="OwnerUser">Active</div>}
				{props.id > 1 && (
					<div>
						<select name="Status" className="dropdown" >
							<option value="Active" className="dropdown-content">Active</option>
							<option value="Inactive" className="dropdown-content">Inactive</option>
						</select>
					</div>
				)}
			</div>
			<div className="Access">
				{props.id === 1 && <div className="OwnerAccess">Owner</div>}
				{props.id > 1 && (
					<div>
						<select name="Access " className="dropdown">
							<option value="Manager" className="dropdown-content">Manager</option>
							<option value="Read" className="dropdown-content">Read</option>
							<option value="Write" className="dropdown-content">Write</option>
						</select>
					</div>
				)}
			</div>
			<div className="AccessIcon">
				{props.id === 1 && <Lock className="Lock"/>}
				{props.id > 1 && <Trash2 color="red" className="Trash"/> }
			</div>
		</div>
	);
};


User.propTypes = {
	fname: PropTypes.string,
	lname: PropTypes.string,
	avatar: PropTypes.string,
	email: PropTypes.string
}

export default User;

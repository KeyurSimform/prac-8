import React from "react";
import User from "../User/User";
import "../UserDataContainer/UserDataContainer.css";
import UserDataHeader from "../UserDataHeader/UserDataHeader";
import UserProfileCard from "../UserProfileCard/UserProfileCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchAsyncUser } from "../../store/UserSlice";
import PropagateLoader from "react-spinners/PropagateLoader";
import { css } from "@emotion/react";
import Pagination from "../Pagination/Pagination";

// Here the UserDataContainer is the componenet which hold all the main component of the app

// User componenet will render the users in the list of user

// UserProfileCard will display the card on hovering the user

// here the use selector hook will allow to use the state which is dispatched from any componenet.

const UserDataContainer = () => {
	const dispatch = useDispatch();
	const currentPage = useSelector((state)=> state.newUser.currentPage);
	// const postsPerPage = useSelector((state) => state.newUser.postPerPage);

	useEffect(() => {
		dispatch(fetchAsyncUser(currentPage));
	}, [currentPage,dispatch]);
	// console.log(currentPage);

	const UserCard = useSelector((state) => state.UserProfileCard.User);

	const UserList = useSelector((state) => state.newUser.newUser);

	const ApiReqStatus = useSelector((state) => state.newUser.reqStatus);

	const cssLoader = css`
		display: flex;
		justify-content: center;
		align-self: center;
		margin-top: 8rem;
	`;

	

	return (
		<div className="UserDataContainer">
			<UserDataHeader />
			{ApiReqStatus === "loading" && (
				<PropagateLoader color={"orange"} css={cssLoader} size={25} />
			)}
			{ApiReqStatus === "successfull" &&
				UserList.map((user) => (
					<User
						key={user.id}
						id={user.id}
						avatar={user.avatar}
						fname={`${user.first_name}`}
						lname={`${user.last_name}`}
						email={user.email}
					/>
				))}
			{ApiReqStatus === "failed" && (
				<h1 className="reqfailed">Opps :( Something went wrong</h1>
			)}
			{UserCard && (
				<UserProfileCard
					name={UserCard.name}
					avatar={UserCard.avatar}
					email={UserCard.email}
				/>
			)}

			{ApiReqStatus === "successfull" && (
				<Pagination/>
			)}
		</div>
	);
};

export default UserDataContainer;

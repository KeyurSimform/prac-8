import React from "react";
import "../UserProfileCard/UserProfileCard.css";
import { PropTypes } from 'prop-types';

const UserProfileCard = (props) => {
	return (
		<div className="UserProfileCard">
			<div className="UserProfileCardContent">
				<div className="ProfileCardAvatarContainer">
					<img alt="" src={props.avatar} className="ProfileCardAvatar" />
				</div>
				<div className="ProfileCardName">{props.name}</div>
				<div className="ProfileCardEmail">{props.email}</div>
				<div className="ProfileCardYourPlan">Your Plan : Standard</div>
				<button className="ActiveButton">Active User</button>
				<div className="PlanUsage">Plan Usage : </div>
				<div className="PlanUsageOuterContainer">
					<div className="PlanUsageInnerContainer"></div>
				</div>
				<div className="CliksDetails">
					<div className="ReviwedClicks">
						<div className="ReviwedNumberOfClicks">2400</div>
						<div className="ClicksReviewed">Clicks Reviewed</div>
					</div>
					<div className="VerticalLine"></div>
					<div className="MonthlyClicksContainer">
						<div className="MonthlyNumberOfClicks">6000</div>
						<div className="MonthlyClicks">Monthly Clicks</div>
					</div>
				</div>
			</div>
		</div>
	);
};

UserProfileCard.propTypes = {
	name: PropTypes.string,
	avatar: PropTypes.string,
	email: PropTypes.string
}

export default UserProfileCard;

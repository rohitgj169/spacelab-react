import React from "react";

import "./memberCard.scss";

export default function MemberCard(props) {
    const { member } = props;
    return (
        <div className="member-card">
            <img src={member.image} alt={`${member.fullName}.png`}></img>
            <div className="member-card-text">
                <p className="member-card-text-name">{member.fullName}</p>
                <p className="member-card-text-title">{member.title}</p>
            </div>
        </div>
    );
}
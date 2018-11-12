import React, { Component } from "react";
import WorkExperience from "../components/profile/WorkExperience";
import ProfileFollowers from "../components/profile/ProfileFollowers";
import ProfileFollowing from "../components/profile/ProfileFollowing";
import ProfileProjects from "../components/profile/ProfileProjects";

class Profile extends Component {
  render() {
    const { user } = this.props;

    return (
      <div>
        <img src={user.images["138"]} alt={user.display_name} />
        <h2>
          <a href={user.url} target="_blank" rel="noopener noreferrer">
            {user.display_name}
          </a>
        </h2>
        <p>{user.location}</p>
        <p>{user.sections["About Me"]}</p>
        {Object.keys(user.stats).map(key => (
          <p key={key}>{`${key}: ${user.stats[key]}`}</p>
        ))}
        <WorkExperience user={user} />
        <ProfileFollowers user={user} />
        <ProfileFollowing user={user} />
        <ProfileProjects user={user} />
      </div>
    );
  }
}

export default Profile;

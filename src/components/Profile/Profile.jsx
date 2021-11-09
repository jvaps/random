import React from "react";
import "./Profile.css";
import Button from '@material-ui/core/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from "react-router-dom";

const Profile = ({ profile }) => {
  return (
    <div className="Profile">
      {profile.map((data) => {
        const {
          id,
          avatar_url,
          name,
          login,
          bio,
          following,
          followers,
          company,
          location,
          email,
          blog,
          twitter_username,
        } = data;
        return (
          <div className="cardProfile" key={id}>
            <img className="imgProfile" src={avatar_url} />

            <div className="nameProfile">
              {/* Nome do dev */}
              {name}
            </div>
            {/* Username */}
            <div className="loginProfile">
              {"@"}
              {login}
            </div>
            {/* Bio */}
            {bio ? <div className="bioProfile">{bio}</div> : null}
            {/* Seguindo */}
            <div className="contentProfile">
              <div className="gridProfile">
                <div>
                  <span className="material-icons">people</span>
                  {following} {"following"}
                </div>
                {/* Seguidores */}
                <div>
                  <span className="material-icons">groups</span>
                  {followers} {"followers"}
                </div>
              </div>
              {/* Empresa */}
              {company ? (
                <div>
                  <span className="material-icons">location_city</span>
                  {company}
                </div>
              ) : null}
              {/* Localidade */}
              {location ? (
                <div>
                  <span className="material-icons">location_on</span>
                  {location}
                </div>
              ) : null}
              {/* Email */}
              {email ? (
                <div>
                  <span className="material-icons">email</span>
                  {email}
                </div>
              ) : null}
              {/* Blog */}
              {blog ? (
                <div>
                  <span className="material-icons">groups</span>
                  <a href={blog} target="_blank">
                    {blog}
                  </a>
                </div>
              ) : null}
              {/* Twitter */}

              {twitter_username ? (
                <div>
                  <span className="material-icons">share</span>
                  <a
                    href={`https://twitter.com/${twitter_username}`}
                    target="_blank"
                  >
                    {twitter_username}
                  </a>
                </div>
              ) : null}
            </div>
            <div className="backHome">
              <Link to="/">
              <Button variant="outlined">
                  Voltar
                </Button>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Profile;

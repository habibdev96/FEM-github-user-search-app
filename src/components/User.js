import React from "react";
import styled from "styled-components";

const Container = styled.div``;

const User = ({ data }) => {
  const {
    avatar_url,
    name,
    login,
    bio,
    created_at,
    public_repos,
    followers,
    following,
    location,
    twitter_username,
    company,
    blog,
  } = data;

  return (
    <article>
      <Container>
        <img src={avatar_url} alt={login} className="avatar" />
        <div className="info">
          <header className="header">
            <div className="header-title">
              <h2 className="username">{name}</h2>
              <p className="created-at">{created_at}</p>
            </div>
            <p className="login">{login}</p>
            <p className="bio">{bio}</p>
          </header>
          <div className="stats">
            <div className="stat">
              <p className="stat-title">Repos</p>
              <h5 className="stat-number">{public_repos}</h5>
            </div>
            <div className="stat">
              <p className="stat-title">Followers</p>
              <h5 className="stat-number">{followers}</h5>
            </div>
            <div className="stat">
              <p className="stat-title">Following</p>
              <h5 className="stat-number">{following}</h5>
            </div>
          </div>
          <footer className="links">
            <a href="#!" className="link">
              <p className="link-text">
                {location === null ? "Not Available" : `${location}`}
              </p>
            </a>
            <a href="#!" className="link">
              <p className="link-text">
                {twitter_username === null
                  ? "Not Available"
                  : `${twitter_username}`}
              </p>
            </a>
            <a href="#!" className="link">
              <p className="link-text">
                {blog === "" ? "Not Available" : `${blog}`}
              </p>
            </a>
            <a href="#!" className="link">
              <p className="link-text">
                {company === null ? "Not Available" : `${company}`}
              </p>
            </a>
          </footer>
        </div>
      </Container>
    </article>
  );
};

export default User;

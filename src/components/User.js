import React from "react";
import styled from "styled-components";
import { headingStyles, textStyles } from "../abstracts/Mixins";
import { MdLocationOn } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { FiLink } from "react-icons/fi";
import { BsBuilding } from "react-icons/bs";
import Responsive from "../abstracts/Responsive";

const ErrorHeading = styled.h2`
  color: ${({ theme }) => theme.mainText};
  font-size: 2rem;
`;

const Container = styled.div`
  background-color: ${({ theme }) => theme.appBg};
  display: grid;
  grid-template-columns: 1fr 2fr;
  padding: 2rem;
  border-radius: var(--mainRadius);
  box-shadow: var(--mainShadow);
  transition: var(--mainTransition);

  ${Responsive.md`
    grid-template-columns: 1fr;   
  `}

  .avatar {
    width: 20rem;
    height: 20rem;
    border-radius: 50%;

    ${Responsive.md`
      margin: 2rem auto;
    `}
  }

  .header-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 2rem;
  }

  .username {
    ${headingStyles}
    color: ${({ theme }) => theme.mainText};
    font-size: 2.6rem;
  }

  .created-at {
    ${textStyles}
    color: ${({ theme }) => theme.mainText};
    font-size: 1.5rem;
  }

  .login {
    ${textStyles}
    color: ${({ theme }) => theme.primary};
    font-size: 1.6rem;
    transition: var(--mainTransition);

    &:hover,
    &:focus {
      color: ${({ theme }) => theme.mainText};
    }
  }

  .bio {
    ${textStyles}
    color: ${({ theme }) => theme.secondaryText};
    font-size: 1.5rem;
    margin-top: 2rem;
  }

  .stats {
    background-color: ${({ theme }) => theme.mainBg};
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 2rem;
    padding: 2rem;
    margin: 2rem 0;
    border-radius: var(--mainRadius);
    transition: var(--mainTransition);
  }

  .stat-title {
    ${textStyles}
    color: ${({ theme }) => theme.mainText};
    font-size: 1.5rem;
  }

  .stat-number {
    ${headingStyles}
    color: ${({ theme }) => theme.mainText};
    font-size: 2.2rem;
  }

  .links {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: flex-start;
    gap: 2rem;

    ${Responsive.sm`
      grid-template-columns: 1fr;   
    `}
  }

  .link {
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.mainText};
    font-size: 1.5rem;
    transition: var(--mainTransition);

    &.disabled {
      pointer-events: none;
      opacity: 0.6;
    }

    &:hover,
    &:focus {
      color: ${({ theme }) => theme.primary};
    }
  }

  .link-icon {
    font-size: 2rem;
    margin-right: 2rem;
  }
`;

const User = ({ data }) => {
  const {
    avatar_url,
    name,
    html_url,
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

  if (data.message === "Not Found") {
    return <ErrorHeading>user not found...</ErrorHeading>;
  }

  if (data.message !== "Not Found") {
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
              <a
                href={html_url}
                target="_blank"
                rel="noreferrer"
                className="login"
              >
                @{login}
              </a>
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
              <a
                href="#!"
                className={`link ${location === null && "disabled"}`}
              >
                <span className="link-text">
                  <MdLocationOn className="link-icon" />
                  {location === null ? "Not Available" : `${location}`}
                </span>
              </a>
              <a
                href="#!"
                className={`link ${twitter_username === null && "disabled"}`}
              >
                <span className="link-text">
                  <FaTwitter className="link-icon" />
                  {twitter_username === null
                    ? "Not Available"
                    : `${twitter_username}`}
                </span>
              </a>
              <a href="#!" className={`link ${blog === "" && "disabled"}`}>
                <FiLink className="link-icon" />
                <span className="link-text">
                  {blog === "" ? "Not Available" : `${blog}`}
                </span>
              </a>
              <a href="#!" className={`link ${company === null && "disabled"}`}>
                <BsBuilding className="link-icon" />
                <span className="link-text">
                  {company === null ? "Not Available" : `${company}`}
                </span>
              </a>
            </footer>
          </div>
        </Container>
      </article>
    );
  }
};

export default User;

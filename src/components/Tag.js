import styled from "styled-components";
import { flexCenter, textStyles, headingStyles } from "../abstracts/Mixins";
import logo from "../assets/logo/habibdevgif.gif";

const Article = styled.article`
  ${flexCenter};
  flex-wrap: wrap;

  .tag-heading {
    ${textStyles};
    color: ${({ theme }) => theme.mainText};
    text-align: center;
    font-size: 1.3rem;
  }

  .tag-link {
    ${headingStyles};
    color: ${({ theme }) => theme.primary};

    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }

  .tag-logo {
    width: 5rem;
  }
`;

function Tag() {
  return (
    <Article>
      <h3 className="tag-heading">
        project for{" "}
        <a
          href="https://www.frontendmentor.io/challenges/github-user-search-app-Q09YOgaH6"
          target="_blank"
          rel="noreferrer"
          className="tag-link"
        >
          frontend mentor
        </a>{" "}
        coded by{" "}
        <a
          href="https://github.com/habibdev96"
          target="_blank"
          rel="noreferrer"
          className="tag-link"
        >
          habibdev{" "}
        </a>
      </h3>
      <img src={logo} alt="logo" className="tag-logo" />
    </Article>
  );
}

export default Tag;

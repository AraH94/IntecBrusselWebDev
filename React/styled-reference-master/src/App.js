import "./App.css";
import dries from "./picts/dries.jpg";
import styled from "styled-components";
import BookmanOldStyle from "./Bookman/BookmanOldStylBoldItalic.ttf";

const Roundpic = styled.img`
  background: transparent;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.7);
  margin: 0 1em;
  width: 50px;
  margin-bottom: -25px;
  z-index: 1;
`;
const Textwrapper = styled.div`
  /* background: rgba(255, 255, 255, 0.4); */
  margin: 0 1em;
  width: 90%;
  height: 40%;
  padding-top: 16%;
  text-align: center;
  color: white;
`;
const Small = styled.div`
  margin-top: 1em;
  height: 40%;
  font-size: 8px;
  font-weight: 900;
  text-align: center;
  color: rgba(255, 255, 255, 0.6);
`;
const BKman = styled.div`
  font-family: BookmanOS;
  text-shadow: 2px 1px 2px rgba(0, 0, 0, 0.52);
  @font-face {
    font-family: BookmanOS;
    font-style: italic;
    font-weight: 900;
    src: url(${BookmanOldStyle});
  }
`;
const BodyWrapper = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: rgba(191, 255, 0, 0.3);
  max-width: 1000px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
const Body = styled.body`
  width: 100%;
  height: 100vh;
  background: green;
  max-width: 1200px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

function App() {
  return (
    <Body>
      <BodyWrapper>
        <Roundpic src={dries} alt="driespict" />
        <Textwrapper>
          <BKman>
            "Benedikt is <br />a damn good
            <br />
            designer"
          </BKman>
          <Small>linkedin.com/in/driesallaert </Small>
        </Textwrapper>
      </BodyWrapper>
    </Body>
  );
} export default App;

import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterContainer>
      <LogoSection>
        <h1>GENESIS</h1>
        <div>
          <h2>dreaming and exploring the stars and the universe</h2>
          <p>Explore the zodiac calendar, games and quizzes</p>
        </div>
      </LogoSection>
      <IconSection>
        <div>
          {' '}
          <p> &copy; 2023 NBC Ilhajo All rights reserved</p>
        </div>
        <div>
          <FooterSpan>
            <span className="svgIcon">
              <a href="https://github.com/kimseulgi-creator/genesis">
                <img
                  src="https://github.com/nbc-react-1/nbc-maeily/assets/126348461/fd452924-3270-4189-84ea-f9e850705f37"
                  alt=""
                />
              </a>
            </span>
            <span className="svgIcon">
              <a href="https://www.notion.so/9265b584524d4b6fa61da63d9a6ae218">
                <img
                  src="https://github.com/nbc-react-1/nbc-maeily/assets/126348461/0245fe55-b46e-48a1-9cf0-31955a939ba6"
                  alt=""
                />
              </a>
            </span>
            <span>
              <a href="https://www.figma.com/file/7UUg5LgIrktRDTrg4wzJrr/Universe?type=design&node-id=0-1&mode=design&t=UBoVmvVhTaO6Ntn5-0">
                <img
                  src="https://github.com/nbc-react-1/nbc-maeily/assets/126348461/3e5369fc-2cf1-4e88-8f26-fa04869e1908"
                  alt=""
                />
              </a>
            </span>
          </FooterSpan>
        </div>
      </IconSection>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.div`
  width: 100vw;
  color: white;
  background-color: #121212;
  padding: 60px 60px 20px 60px;
  & > p {
    font-size: 0.8rem;
    color: #8f8f8f;
    font-weight: 500;
    margin: 3px;
  }
`;
const LogoSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
  text-align: end;

  & > h1 {
    font-size: 25px;
    font-weight: 900;
  }

  & > div > h2 {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 10px;
  }
  & > div > p {
    font-size: 15px;
    font-weight: 300;
  }
`;

const IconSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > div > p {
    font-size: 15px;
    font-weight: 300;
  }
`;
const FooterSpan = styled.div`
  margin-top: 20px;
  & > span a {
    width: 15px;
    height: 15px;
    padding: 6px;
    display: inline-flex;
    border: 1px solid white;
    border-radius: 50%;
    cursor: pointer;
    position: relative;
    line-height: 1;
    margin: 10px;
  }
  & > span a::before {
    content: '';
    width: 15px;
    height: 15px;
    padding: 8px;
    position: absolute;
    top: -1px;
    left: -1px;
    border-radius: 50%;
    background-color: #ffffff;
    transform: scale(0);
    transition: 0.3s ease-in-out;
  }
  & > span:hover a::before {
    transform: scale(1);
  }

  & > span:hover img {
    filter: brightness(0) saturate(100%) invert(0%) sepia(7%) saturate(98%) hue-rotate(346deg) brightness(95%)
      contrast(86%);
  }
`;

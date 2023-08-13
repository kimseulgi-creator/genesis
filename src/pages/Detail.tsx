import { useNavigate, useParams } from 'react-router-dom';
import { postData } from '../componants/List/Type';
import { getPosts } from '../api/Posts';
import { useQuery } from '@tanstack/react-query';
import { Card, CardWrapper, CharacterImage, CoverImage, WrapperInner } from '../componants/List/Constellation';
import { css, styled } from 'styled-components';
import { motion } from 'framer-motion';
import backgroundImg from '../images/quiz/quiz_background2.png';

const Detail = () => {
  const param = useParams();
  const number = Number(param.id);
  const navigate = useNavigate();
  const { data, isLoading, isError } = useQuery<postData[]>(['post'], getPosts);
  const postData = data?.find(item => item.id === number);
  const filterData = data?.filter(item => item.id !== number && item.id >= number - 2 && item.id <= number + 2);
  const handleCardChange = (id: number) => {
    navigate(`/detail/${id}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  if (isLoading) {
    return <h1>로딩중입니다~~</h1>;
  }
  if (isError) {
    alert('에러가 발생하였습니다. 새로고침 부탁드립니다');
  }

  return (
    <StDetail>
      <StColor>
        <StCardIntroduction>
          <StCardContent>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}>
              <StCardText>
                <ul className="RightText">
                  <StLi size="large">명칭: {postData?.title}</StLi>
                  <StLi size="medium">
                    <StTitleText>Story</StTitleText> {postData?.story}
                  </StLi>
                  <StLi size="medium">
                    <StTitleText>Additional story</StTitleText> {postData?.description}
                  </StLi>
                  <StLi size="large">시기: {postData?.period}</StLi>
                  <StLi size="large">SEASON: {postData?.season}</StLi>
                  <StLi size="large">#{postData?.season}</StLi>
                </ul>
              </StCardText>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}>
              <StImgDiv>
                <StCardContainer>
                  <CardWrapper>
                    <Card>
                      <WrapperInner>
                        <CoverImage src={`../../${postData?.starImg}`} />
                      </WrapperInner>
                      <CharacterImage src={`../../${postData?.img}`} />
                    </Card>
                  </CardWrapper>
                </StCardContainer>
              </StImgDiv>
            </motion.div>
          </StCardContent>
        </StCardIntroduction>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}>
          <StAnotherCards>다른 정보들</StAnotherCards>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}>
          <CardContainer>
            {filterData?.map((item: postData) => (
              <CardWrapper key={item.title} onClick={() => handleCardChange(item.id)}>
                <Card>
                  <WrapperInner>
                    <CoverImage src={`../../${item.starImg}`} />
                  </WrapperInner>
                  <CharacterImage src={`../../${item.img}`} />
                </Card>
              </CardWrapper>
            ))}
          </CardContainer>
        </motion.div>
      </StColor>
    </StDetail>
  );
};

export default Detail;

const StDetail = styled.div`
  background-image: url(${backgroundImg});
  height: 100vh;
`;

const StColor = styled.div`
  background-image: url(${backgroundImg});
`;

const StCardIntroduction = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px; /* 원하는 패딩을 추가하세요 */
`;

const StCardContent = styled.div`
  display: flex;
  gap: 200px;
  align-items: center;
  justify-content: space-between;
`;

const StCardText = styled.div`
  border: 4.5px solid white;
  border-radius: 12px;
  max-width: 630px;
`;
const StImgDiv = styled.div`
  padding-top: 120px;
`;

const StLi = styled.li<{ size: string }>`
  padding: 1.5rem;
  font-weight: 800;
  color: white;

  ${({ size }) =>
    size === 'small' &&
    css`
      font-size: 16px;
    `}

  ${({ size }) =>
    size === 'medium' &&
    css`
      font-size: 18px;
      line-height: 24px;
    `}


  ${({ size }) =>
    size === 'large' &&
    css`
      font-size: 24px;
    `}
`;

const StTitleText = styled.div`
  font-weight: 800;
  color: white;
  font-size: 20px;
  padding-bottom: 5px;
`;

const StAnotherCards = styled.div`
  padding: 30px;
  font-weight: 800;
  color: white;
  font-size: 24px;
`;

const StCardContainer = styled.div`
  display: grid;
  padding: 50px;
  justify-content: center;
  align-items: center;
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 50px;
  justify-content: center;
  align-items: center;
`;

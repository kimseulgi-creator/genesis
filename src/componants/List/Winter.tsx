import { Card, CardContainer, CardWrapper, CharacterImage, CoverImage, Wrapper, WrapperInner } from './Constellation';
import { postData } from './Type';
import autumn from '../../img/겨울.png';
import { Stimg } from './Spring';

const Winter = ({ id, data }: any) => {
  if (!data) {
    return null;
  }
  const response = data.filter((item: postData) => item.season === '겨울');
  return (
    <>
      <Wrapper id={id}>
        <Stimg src={autumn} />
      </Wrapper>
      <Wrapper>
        <CardContainer>
          {response.map((item: postData) => (
            <CardWrapper key={item.title}>
              <Card>
                <WrapperInner>
                  <CoverImage src={item.starImg} />
                </WrapperInner>
                <CharacterImage src={item.img} />
              </Card>
            </CardWrapper>
          ))}
        </CardContainer>
      </Wrapper>
    </>
  );
};

export default Winter;

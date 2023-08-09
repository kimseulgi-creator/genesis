import { Card, CardContainer, CardWrapper, CharacterImage, CoverImage, Wrapper, WrapperInner } from './Constellation';
import { postData } from './Type';
import summer from '../../img/여름.png';
import { Stimg } from './Spring';

const Summer = ({ id, data }: any) => {
  if (!data) {
    return null;
  }
  const response = data.filter((item: postData) => item.season === '여름');
  return (
    <>
      <Wrapper id={id}>
        <Stimg src={summer} />
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

export default Summer;

import { Card, CardContainer, CardWrapper, CharacterImage, CoverImage, Wrapper, WrapperInner } from './Constellation';
import { postData } from './Type';
import autumn from '../../img/가을.png';
import { Stimg } from './Spring';

const Autumn = ({ id, data }: any) => {
  return (
    <>
      <Wrapper>
        <Stimg src={autumn} id={id} />
      </Wrapper>
      <Wrapper>
        <CardContainer>
          {data
            .filter((item: postData) => item.season === '가을')
            .map((item: postData) => (
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

export default Autumn;

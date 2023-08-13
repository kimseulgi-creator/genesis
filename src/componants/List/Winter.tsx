import { Card, CardContainer, CardWrapper, CharacterImage, CoverImage, Wrapper, WrapperInner } from './Constellation';
import { motion } from 'framer-motion';
import winter from '../../images/list/겨울.png';
import { Stimg } from './Spring';

import type { listProps, postData } from './Type';

const Winter = ({ id, data, detailhandleClick }: listProps) => {
  if (!data) {
    return null;
  }
  const response = data.filter((item: postData) => item.season === '겨울');
  return (
    <>
      <Wrapper id={id}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}>
          <Stimg src={winter} />
        </motion.div>
      </Wrapper>
      <Wrapper>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}>
          <CardContainer>
            {response.map((item: postData) => (
              <CardWrapper key={item.title} onClick={() => detailhandleClick(item.id)}>
                <Card>
                  <WrapperInner>
                    <CoverImage src={item.starImg} />
                  </WrapperInner>
                  <CharacterImage src={item.img} />
                </Card>
              </CardWrapper>
            ))}
          </CardContainer>
        </motion.div>
      </Wrapper>
    </>
  );
};

export default Winter;

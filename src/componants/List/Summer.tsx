import { Card, CardContainer, CardWrapper, CharacterImage, CoverImage, Wrapper, WrapperInner } from './Constellation';
import summer from '../../img/여름.png';
import { motion } from 'framer-motion';
import { Stimg } from './Spring';

import type { listProps, postData } from './Type';

const Summer = ({ id, data, detailhandleClick }: listProps) => {
  if (!data) {
    return null;
  }
  const response = data.filter((item: postData) => item.season === '여름');
  return (
    <>
      <Wrapper id={id}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}>
          <Stimg src={summer} />
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

export default Summer;

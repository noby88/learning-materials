import React from 'react';
import CircleSegment from '../../basic/circle/CircleSegment';

import FullCircle from '../../basic/circle/FullCircle';

import { Container, Rotate, Stack } from './styled';

const SumUpFunny = () => {
  return (
    <Container>
      <Stack>
        <FullCircle />
      </Stack>
      <Stack>
        <Rotate>
          <CircleSegment />
        </Rotate>
      </Stack>
    </Container>
  );
};

export default SumUpFunny;

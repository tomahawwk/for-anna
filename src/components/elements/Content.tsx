import styled from 'styled-components'
import { fluidRange } from 'polished'

interface Props {
  grey?: boolean;
  bottom?: boolean;
  desktop?: boolean;
}

export default styled.div<Props>`
    width: 100%;
`;
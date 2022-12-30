import styled from 'styled-components';

import { Page, Hero } from '../components/blocks';

const StyledMain = styled(Page)`
    width: 100%;
`

const Main = () => {
    return (
        <StyledMain>
            <Hero />
        </StyledMain>
    )
}

export default Main;
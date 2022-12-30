import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import { fluidRange } from 'polished'
import { Route, Routes, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { useSelector, useDispatch } from 'react-redux';
import { setRouteAnimation, setAppearAnimation } from './redux/animation/slice';
import { getAnimationSelector } from './redux/animation/selectors';

import { Header, AsideNav, Menu } from './components/blocks';

import { RouteAnimation, Cursor } from './components/elements';

import { Main } from './pages';

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  font-size: 16px;
  padding: 0px 0px 0px 0px;
`

const App = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [menuOpened, setMenuOpened] = useState<boolean>(false);
  const {routeAnimate} = useSelector(getAnimationSelector);
  dispatch(setRouteAnimation(true))
  const timeout = {
    appear: 1000,
    enter: 2000,
    exit: 1000,
  }
  
  return (
    <AppWrapper>
      <TransitionGroup>
        <CSSTransition
          key={location.pathname}
          classNames="fade"
          timeout={timeout}
          onEnter={() => dispatch(setRouteAnimation(true))}
          onExited={() => dispatch(setAppearAnimation(true))}
          onEntered={() => {
            dispatch(setRouteAnimation(false))
            dispatch(setAppearAnimation(false))
          }}
          >
          <Routes location={location}>
            <Route path="/" element={ <Main/> } />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
      <RouteAnimation animation={routeAnimate} menuOpened={menuOpened} />
      <Cursor />
    </AppWrapper>
  );
}

export default App;
import styled from 'styled-components'

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1000;
  cursor: pointer;
`
export const Box = styled.div`
  max-width: calc(100vw);
  max-height: calc(100vh - 40px);
  cursor: auto;

  @media screen and (min-width: 696px) {
    max-width: calc(100vw - 40px);
  }
`

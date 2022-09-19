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
  position: relative;
  padding: 20px;
  background-color: #fff;
  border-radius: 5px;
  cursor: auto;
`

export const CloseButton = styled.button`
  border: none;
  border-radius: 50%;
  position: absolute;
  z-index: 1100;
  cursor: pointer;
  padding: 2px;
  line-height: 0;
  top: 0;
  right: 0;
`

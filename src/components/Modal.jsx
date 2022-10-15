import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { MdOutlineClose } from 'react-icons/md'
import styled from 'styled-components'

const CLOSE_INFO = 'Click to close'

const modalRoot = document.getElementById('modal-root')

export default function Modal({ onClose, children }) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [onClose])

  const handleClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose()
    }
  }

  return createPortal(
    <Overlay onClick={handleClick} title={CLOSE_INFO}>
      <Box title="">
        {children}
        <CloseButton onClick={onClose} type="button" title={CLOSE_INFO}>
          <MdOutlineClose size="20px" />
        </CloseButton>
      </Box>
    </Overlay>,
    modalRoot,
  )
}

const Overlay = styled.div`
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
const Box = styled.div`
  position: relative;
  padding: 20px;
  background-color: #fff;
  border-radius: 5px;
  cursor: auto;
`

const CloseButton = styled.button`
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

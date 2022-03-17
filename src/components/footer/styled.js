import styled from '@emotion/styled'

export const Container = styled.section`
  position: absolute;
  bottom: 0px;
  z-index: 100;
  background-color: green;
  border-radius: 20px 20px 0 0;
  height: 4rem;
  width: 100%;

  @media screen and (min-width: 447px) {
    width: 447px;
  }
`
export const ContainerContent = styled.div`
  display:flex;
  flex-direction:row;
  justify-content: space-around;
  padding-top: 12px;
  width: 100%;
`
export const Menu = styled.div`
  display: flex;
  flex-direction:column;
  align-items: center;
  color: white;
  width: 33%;

  @media screen and (max-width: 350px) {
    font-size: 14px;
  }
`
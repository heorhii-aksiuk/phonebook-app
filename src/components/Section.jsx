//TODO: Remove this component
import styled from 'styled-components';

export default function Section({ title, children }) {
  return (
    <Container>
      <Wrapper>
        <Title>{title}</Title>
        {children}
      </Wrapper>
    </Container>
  );
}

const Title = styled.h2`
  padding-bottom: 20px;
  font-size: 20px;
  text-align: center;
`;

const Container = styled.div`
  margin: 0 auto;
  padding: 0 20px;
  width: 320px;
`;

const Wrapper = styled.div`
  padding: 15px;
  width: 100%;
  margin-top: 20px;
  background-color: #dedede;
  border-radius: 4px;
  box-shadow: 1px 1px 4px 1px rgba(198, 198, 198, 0.3);
`;

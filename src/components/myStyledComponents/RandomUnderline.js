import styled from 'styled-components'

const RandomUnderline = (props) => {
  return (
    <Wrapper>
      <div className='underline'></div>
      <h1>{props.title}</h1>
    </Wrapper>
  );
};

const Wrapper = styled.div`
.underline {
    width: 5rem;
    height: 0.5rem;
    background: pink;
    margin: 1rem auto;
}
h1 {
    text-transform: capitalize;
    text-align: center;
}
`;

export default RandomUnderline;

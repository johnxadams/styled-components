import styled from "styled-components";
// rafce an arrow functional component

const ComplexTitle = ({ title }) => {
  return (
    <Wrapper>
      <h1>{title}</h1>
      <div className="underline"></div>
      {/* <h2 className="title">random</h2> */}
      <div className="box"></div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  //targeting the h1 in the <Wrapper>
  h1 {
    text-transform: capitalize;
    text-align: center;
  }
  div {
    width: 5rem;
    height: 0.25rem;
    background: var(--primary);
    margin: 0 auto;
  }

  // this specific .title 
  // overwrites the globally name .title
  // in the index.css
  .title {
    color: blue;
  }
  .box {
      height: 10px;
      border: var(--mainBorder);
  }
`;

export default ComplexTitle;

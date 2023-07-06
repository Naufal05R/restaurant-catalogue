import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: ${(props) => props.gap};
`;

Grid.defaultProps = {
  gap: '1rem',
};

export default Grid;
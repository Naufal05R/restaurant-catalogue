import styled from 'styled-components';

const Image = styled.img`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  object-fit: cover;
  object-position: center;
`;

Image.defaultProps = {
  width: '100%',
  height: 'auto',
};

export default Image;
import styled from 'styled-components';

const InputStyle = styled.input`
  outline-color: ${props => props.error ? 'red' : 'black'}
`;

export default InputStyle;
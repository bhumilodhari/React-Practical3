import styled from 'styled-components';

const TodoContainer = styled.ul`
    padding-inline-start: 0;
    
    height: 24rem;
    /* width: 86%; */
    text-align:left;
    padding: auto;
    overflow-y: auto;
    margin: 0 ;
  -ms-overflow-style: none;
  scrollbar-width: none;
  display: flex ;
  flex-direction: column ;
`;

export default TodoContainer;
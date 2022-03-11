import styled from 'styled-components';

const TodoAddButtonStyle = styled.button`
    border: none;
    background-color: #3adfa2;
    color: #8c8c8c;
    height: 88px;
    width: 88px;
    border-radius: 55%;
    align-items: center;
    position: absolute;
    font-size: 50px;
    /* top: 110%; */
    bottom:-40px ;
    left: 36.5%;
    /* margin-bottom: -100px; */

    &:hover {
        background-color: #46ba8a;
        color: #51e4a6;
    }
`;

export default TodoAddButtonStyle;
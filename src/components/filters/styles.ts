import styled from 'styled-components';

export const Container = styled.div`
    padding-top: 50px;

    .leftSide {
        width: 25%;
        display: inline-block;
        padding: 0 15px;
    }
    .rightSide {
        width: 75%;
        display: inline-block;
        padding: 0 15px;
    }
`;

export const FiltersTools = styled.div`
    background: #FFFFFF;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
    border-radius: 8px;
    padding: 25px;
    margin-top: 15px;

    strong {
        font-size: 18px;
    }
`;

export const MultiRange = styled.div`
    strong {
        display: block;
        margin-bottom: 15px;
    }

    hr {
        border: 1px solid #D6D6D6;
        margin: 20px 0;
    }
    .checkbox {
        position: relative;
        label {
            display: inline-block;
            margin-bottom: 15px;
            padding-left: 10px;
    
            &::before {
                content: '';
                display: block;
                width: 15px;
                height: 15px;
                border: solid 1px #979797;
                border-radius: 50%;  
                position: absolute;
                left: 0;
            }
    
        }

        input {
            opacity: 0;
            display: inline-block;
            width: 15px;
            height: 15px;
        }

        input[type=radio]:checked + label::before {
            background: #969696;
        }
    }
`;

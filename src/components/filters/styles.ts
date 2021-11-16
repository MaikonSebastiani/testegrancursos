import styled from 'styled-components';

export const Container = styled.div`
    padding-top: 50px;

    .leftSide {
        width: 30%;
        display: inline-block;
        padding: 0 15px 0 0;
        vertical-align: top;
        @media screen and (max-width: 949px){
            width: 100%;
            padding: 0;
        }
    }
    .rightSide {
        width: 70%;
        display: inline-block;
        padding: 0 0 0 15px;
        vertical-align: top;
        @media screen and (max-width: 949px){
            width: 100%;
            margin-top: 25px;
            padding: 0;
        }

        p {
            display: inline-block;
            vertical-align: middle;
            @media screen and (max-width: 499px){
                display: block;
                text-align: center;
            }
        }
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

    .starts {
        margin-top: 25px;
        .ranking {
            margin-top: 15px;
            svg {
                margin-left: 5px;
                color: #FFAB00;
            }
            .up {
                margin-left: 5px;
            }
            .resultValue {
                float: right;
                font-size: 14px;
                @media screen and (max-width: 329px){
                display: none;
            }
            }
        }
    }
`;

export const MultiRange = styled.div`
    strong {
        display: block;
        margin-bottom: 15px;
    }
`;

export const CheckBox = styled.div`
     strong {
        display: block;
        margin-bottom: 15px;
    }
    .customcheck {
        position: relative;
        .results {
            float: right;
            font-size: 14px;
            @media screen and (max-width: 329px){
                display: none;
            }
        }
    
    }
`;

export const Button = styled.button`
    padding: 15px;
    width: 100%;
    border-radius: 8px;
    border: none;
    margin-top: 25px;
    background: #6554C0;
    color: #fff;
`;

export const ControlView = styled.div`
    display: inline-flex;
    align-items: center;
    float: right;
    vertical-align: middle;
    margin-top: -18px;
    @media screen and (max-width: 949px){
        margin-top: -10px;
    }
    @media screen and (max-width: 499px){
        display: block;
        width: 100%;
        text-align: center;
        margin-top: 10px;
        margin-bottom: 25px;
    }
    select {
        padding: 10px;
        border-radius: 8px;
        border: none;
        box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
        min-width: 100px;
        height: 40px;
        color: #2C2C2C;
    }
    .grid {
        display: inline-flex;
        width: 40px;
        height: 40px;
        align-items: center;
        justify-content: center;
        box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
        border-radius: 8px;
        margin-left: 15px;
        svg {
            color: #2C2C2C;
        }
    }
`;

export const SearchBar = styled.div`
    margin-top: 25px;
    padding: 20px;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
    border-radius: 8px;
    background: #fff;
    display: flex;
    align-items: center;
    input {
        border: none;
        width: 100%;
        color: #999999;
    }
    svg {
        color: #606060;
    }
`;

import styled from 'styled-components';

export const Container = styled.div`
    padding: 20px;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
    border-radius: 8px;
`;

export const Icons = styled.div`
    @media screen and (max-width: 639px) {
        display: block;
        width: 100%;
        text-align: center;
    }
    display: inline-block;
    width: 50%;

    svg {
        font-size: 20px;
        color: #606060;
        
        & + svg {
            margin-left: 15px;
        }
        
        &.disabled {
            opacity: 0.5;
        }
    }
`;

export const User = styled.div`
    @media screen and (max-width: 639px) {
        display: block;
        width: 100%;
        text-align: center;
        margin-top: 25px;
    }
    display: inline-block;
    width: 50%;
    text-align: right;
    .language {
        display: inline-block;
        margin-right: 25px;
        font-size: 14px;
    }

    svg {
        font-size: 20px;
        color: #606060;

        & + svg {
            margin-left: 15px;
            margin-right: 25px;
            @media screen and (max-width: 639px) {
                margin-right: 0;
            }
        }
    }

    .userArea {
        display: inline-block;
        @media screen and (max-width: 639px) {
            margin-top: 15px;
            display: block;
        }
    }
    .userInfo {
        display: inline-block;
        vertical-align: middle;
        margin-right: 5px;
        span {
            display: block;
            font-size: 11px;
        }
    }
    img {
        vertical-align: middle;
    }
`;

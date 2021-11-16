import styled from 'styled-components';

export const Container = styled.div`
    padding-top: 30px;
    .pageInformation {
        display: inline-block;
        width: 90%;
        vertical-align: middle;
        h1 {
            display: inline-block;
            vertical-align: middle;
            padding-right: 15px;
        }
        .vl {
            border-left: 1px solid #2C2C2C;
            height: 32px;
            display: inline-block;
            vertical-align: middle;
            @media screen and (max-width: 629px) {
                display: none;
            }
        }
        .breadCrumbs {
            display: inline-block;
            vertical-align: middle;
            padding-left: 15px;
            @media screen and (max-width: 629px) {
                display: block;
                padding-left: 0;
                margin-top: 5px;
                font-size: 13px;
            }
    
            svg {
                margin-right: 10px;
            }
            span + svg {
                margin-left: 10px;
            }
        }
    }

    .settings {
        display: inline-block;
        width: 10%;
        text-align: right;
        vertical-align: middle;
        svg {
            font-size: 35px;
            color: #fff;
            background: #6554c0;
            border-radius: 50%;
            padding: 8px;
        }
        .textSettings {
            display: none;
        }
        @media screen and (max-width: 384px) {
            display: block;
            margin-top: 15px;
            text-align: left;
            width: 100%;

            .textSettings {
                display: inline-block;
                padding-left: 10px;
                vertical-align: middle;
            }

            svg {
                vertical-align: middle;
            }
        }
    }
`;

import styled, { css } from 'styled-components';

interface ImgProps {
    backgroundImage: string
}

export const Container = styled.div`
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
    border-radius: 8px;
    padding: 0 10px;
    margin-top: 25px;

    .productContent {
        width: 80%;
        padding: 20px 0;
        display: inline-flex;
        @media screen and (max-width: 659px){
            display: block;
            width: 100%;
            text-align: center;
        }
        .describe {
            display: inline-block;
            padding-left: 15px;
            width: 70%;
            .by {
                font-size: 12px;
                display: block;
                margin-top: 10px;
                color: #7E7E7E;
                strong {
                    color: #7E7E7E;
                }
            }
            .description {
                font-size: 14px;
                margin-top: 25px;
                padding-right: 10px;
            }
        }
    }
    .productInfo {
        width: 20%;
        padding: 20px 10px;
        display: inline-block;
        text-align: center;
        vertical-align: top;
        border-left: solid 1px #DADADA;
        min-height: 250px;

        @media screen and (max-width: 659px){
            display: block;
            width: 100%;
            border-left: 0;
            border-top: solid 1px #DADADA;
            min-height: auto;
        }

        .ranking {
            display: block;
            text-align: right;
            p {
                padding: 5px 10px;
                border-radius: 3px;
                background: #FFAB00;
                color: #fff;
                font-size: 14px;
            }
        }
        .price {
            margin-top: 20px;
        }
        .shipping {
            color: #999999;
            font-size: 14px;
            display: block;
            margin-top: 5px;
            margin-bottom: 10px;
        }
        .wish, .add {
            width: 100%;
            margin-top: 15px;
            padding: 10px;
            text-align: center;
            font-size: 13px;
            border-radius: 8px;
            border: none;
            svg {
                margin-right: 5px;
            }
        }
        .wish {
            background: #f54d54;
            color: #fff;
        }
        .add {
            background: #36B37E;
            color: #fff;
        }
    }
`;

export const Img = styled.div<ImgProps>`
    width: 213px;
    height: 210px;
    display: inline-block;
    flex: none;
     ${(props) => props.backgroundImage && css`
        background-image: url(${props.backgroundImage});
    `}
`;

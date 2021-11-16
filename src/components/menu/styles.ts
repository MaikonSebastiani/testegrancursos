import styled from 'styled-components';

export const Container = styled.div`
    background: #fff;
    width: 280px;
    height: 100%;
    position: fixed;
    z-index: 100;
    padding: 30px 25px;
    left: 0;
    top: 0;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.170509);
    transform: translate3d(-100%, 0, 0);
    transition: 0.5s;
    img {
        max-width: 162px;
    }
    .first {
        margin-top: 15px;
        .arrow {
            float: right;
        }
        ul {
            padding: 0;
            list-style: none;
            svg {
                margin-right: 5px;
                color: #606060;
            }
            .dashboard {
                background: #091e42;
                border-radius: 4px;
                padding: 10px;
                font-size: 15px;
                display: flex;
                align-items: center;
                p {
                    width: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    color: #fff;
                }
                svg {
                    color: #fff;
                }
            }
            .ecommerce {
                font-size: 12px;
                padding: 10px;
            }
        }
    }
    .list {
        margin-top: 25px;
        padding: 0 10px;
        strong {
            font-size: 14px;
            color: #999999;
        }
        ul {
            padding: 0;
            list-style: none;
            margin-top: 15px;
            li {
                display: flex;
                align-items: center;
                margin-top: 10px;
                font-size: 15px;
                margin-top: 15px;
                svg {
                    margin-right: 5px;
                    color: #606060;
                }
                p {
                    width: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }
            }
        }
    }

    &.active{
        transform: translate3d(0, 0, 0);
        @media screen and (max-width: 499px){
            overflow: scroll;
        }
    }

    .controlMenu {
    position: absolute;
    padding: 10px;
    border-radius: 8px;
    width: 45px;
    height: 45px;
    background: #091e42;
    right: -35px;
    bottom: 50%;
    font-size: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.5s;
    cursor: pointer;
    @media screen and (max-width: 499px){
        width: 35px;
        height: 35px;
        font-size: 15px;
        right: -26px;
    }
    svg {
        color: #fff;
    }
    }

    .close {
    position: absolute;
    top: 10px;
    right: 10px;
}
`;

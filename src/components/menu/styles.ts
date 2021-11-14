import styled from 'styled-components';

export const Container = styled.div`
    background: #fff;
    width: 280px;
    height: 100vh;
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
                background: #ECECEC;
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
                }
            }
            .ecommerce {
                font-size: 15px;
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
    }

    .controlMenu {
    position: absolute;
    padding: 10px;
    border-radius: 50%;
    width: 45px;
    height: 45px;
    background: #6554C0;
    right: -45px;
    bottom: 50%;
    font-size: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.5s;
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

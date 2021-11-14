import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
$Purple: #6554C0;

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    body {
        background: #F9F9F9;
        -webkit-font-smoothing: antialiased;
        padding: 30px 35px;
        position: relative;
    }

    body, input, button {
        font-family: 'Montserrat', sans-serif;
        font-size: 16px;
    } 

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
        color: #2C2C2C;
    }

    p, span, label {
        color: #2C2C2C;
    }

    hr {
        border: 1px solid #D6D6D6;
        margin: 20px 0 35px;
    }

    button {
        cursor: pointer;
    }

    .customcheck {
        position: relative;
        label {
            display: inline-block;
            margin-bottom: 15px;
            padding-left: 10px;
    
            &::before {
                
            }
    
        }

        input {
            display: inline-block;
            width: 15px;
            height: 15px;
        }

        input[type=radio] {
            -webkit-appearance: none;
            appearance: none;
            background-color: #fff;
            margin: 0;
            color: #999999;
            width: 15px;
            height: 15px;
            border: 1px solid #999999;
            border-radius: 50%;
            transform: translateY(-0.075em);
            display: inline-flex;
            align-items: center;
            justify-content: center;
            &::before {
                content: "";
                width: 9px;
                height: 9px;
                transform: scale(0);
                transition: 120ms transform ease-in-out;
                box-shadow: inset 1em 1em red;
                border-radius: 50%;
            }
            &:checked::before {
                transform: scale(1);
            }
        }

        input[type=checkbox] {
            -webkit-appearance: none;
            appearance: none;
            background-color: #fff;
            margin: 0;
            color: #999999;
            width: 15px;
            height: 15px;
            border: 1px solid #999999;
            border-radius: 3px;
            transform: translateY(-0.075em);
            display: inline-flex;
            align-items: center;
            justify-content: center;
            &::before {
                content: "";
                width: 9px;
                height: 9px;
                transform: scale(0);
                transition: 120ms transform ease-in-out;
                box-shadow: inset 1em 1em red;
                transform-origin: bottom left;
            clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
            }
            &:checked::before {
                transform: scale(1);
            }
        }
    }
`;

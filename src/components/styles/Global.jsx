import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    body {
        background-color: ${({ theme }) => theme.colors.body};
        font-family: 'Space Grotesk', sans-serif;
        font-size: 18px;
        background: #5C258D;
        background: -webkit-linear-gradient(left, #4389A2, #5C258D);
        background: linear-gradient(left, #4389A2, #5C258D);
        background-repeat: no-repeat;
    }

    img {
        max-width: 100%;
    }
`;

export default GlobalStyles;

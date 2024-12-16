import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyled = createGlobalStyle`

${reset}

*{
    box-sizing:border-box;
}

body{
    letter-spacing: 1px;
    font-family: "Noto Sans KR", serif;
}

img{
    width: 100%;
    display:block;
}

a{
    text-decoration:none;
    display:block;
    color:black;
}
`;

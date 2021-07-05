import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}
:root{
    --primary-clr:#111;
    --secondary-clr:#fff;
}
body{
    background-color: var(--primary-clr);
    color:var(--secondary-clr);
    font-family: 'Poppins', sans-serif;
}
.row__heading{
    margin:0 1em;
    padding:0.5em;
    font-weight:200;
    text-transform:uppercase;
    font-size:1.2rem;
}

`;
export default GlobalStyle;
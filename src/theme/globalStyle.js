import {injectGlobal} from 'styled-components';
import { black } from './variables'

/*es-lint disabled*/
injectGlobal`
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400&display=swap');


body {
    font-family: 'Playfair Display', serif;
    font-size: 24px;
    color: ${black};
}

h1, h2, h3 {
    font-weight: normal;
}

a {
    text-decoration: none
}
`
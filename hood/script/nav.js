/* root.css | Core style defs | 12/12/2022 | Sree */

@import url('https://fonts.googleapis.com/css2?family=family=Noto+Serif+Kannada:wght@400;500;600&family=Nunito+Sans:wght@300;400;500;600;700&Noto+Sans+Kannada:wght@400;500;600&display=swap');

:root {
/* - - - - Colors - - - - */
    --Txt_Hdng:   #202224;
    --Txt:        #283038;
    --Txt_Btn:    #485060;
    --Gray_D:     #606060;
    --Gray:       #808080;
    --Border:     #CCCCCC;
    --Gray_L:     #DADCE0;
    --BG:         #ECEFF0;
    --Hover:      #F0F4F8;
    --BG_L:       #F8F9FA;
    --W:          #FFFFFF;
    --Blue:       #1870F0;
    --Blue_L:     #E1ECF4;
    --Maroon:     #800000;
    --Orange:     #F07008;
    --Violet:     #8040C0;
    --Green:      #0D652D;
    --Green_HL:   #DDFFEE;
    --Green_BG:   #E8F8E8;

/* - - - - Typography - - - - */
    font-family: serif;
    font-display: fallback;
    font-size: 16px;
    line-height: 150%;
}
/* - - - - Global - - - - */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    letter-spacing: 0.5px; 
    line-height: 150%;
}

html { scroll-behavior: smooth; }

/* html, body {
    height: 100vh;
    overflow: hidden;
} */

a, a:hover, a:visited {
    color: var(--Blue);
    text-decoration: none;
}

::selection      { color: var(--White); background: var(--Orange); }
::-moz-selection { color: var(--White); background: var(--Orange); }
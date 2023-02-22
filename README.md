
# description

the is a minimal viable crud dont in three flavours
1) no state except for list, data read from database every change
2) state for everything, read data once, update data and UI
3) break into components and add drill down props

There is also a fake page for a UI sample area

run:
node backend/server.js
npm start

---------------------


# flexbox:

display: flex;

justify-content:
flex-start (default) flex-end center space-between space-around space-evenly

align-items:
flex-start flex-end center baseline stretch (default)

flex-direction:
row (default) row-reverse column column-reverse

order

align-self:
flex-start flex-end center baseline stretch

flex-wrap:
nowrap (default) wrap wrap-reverse

align-content:
flex-start flex-end center space-between space-around space-evenly stretch (default)

flex-flow - shortcut for flex-direction and flex-wrap
<flex-direction> <flex-wrap>


grid:
display: grid;
grid-template-columns: 20% 20% 20% 20% 20%;
grid-template-rows: 20% 20% 20% 20% 20%;
grid-template-columns: repeat(8, 12.5%)
grid-template-columns: 100px 3em 40%
grid-area: 1 / 1 / 6 / 2;

#garden {
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
grid-template-rows: repeat(4,12.5px) 1fr
}

#water {
  grid-column: 1 / 6;
  grid-row: 5 / 6;
}


grid-column-start: span 3
grid-column-end: 6;



CSS Outline Style

The outline-style property specifies the style of the outline, and can have one of the following values:

    dotted - Defines a dotted outline
    dashed - Defines a dashed outline
    solid - Defines a solid outline
    double - Defines a double outline
    groove - Defines a 3D grooved outline
    ridge - Defines a 3D ridged outline
    inset - Defines a 3D inset outline
    outset - Defines a 3D outset outline
    none - Defines no outline
    hidden - Defines a hidden outline


    outline-style
    outline-color
    outline-width
    outline-offset
    outline

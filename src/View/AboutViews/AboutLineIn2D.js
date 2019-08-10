import React from 'react';
import TeachingLink from '../TeachingLink'

const AboutView=()=>(<div><p>To create a line, you need to have the line's slope and a <TeachingLink displayName={"point"} codeName={"Point2D"}>
        </TeachingLink> it passes through, or else two points.</p>
        <p>In 2 dimensions, which is just what you have if you can vary from left to right and up and down, a point 
            is just an x coordinate (a number for how far left and right) and a y coodinate (a number for how far up and down).</p>
        <p>The slope of a line is how much it goes up divided by how much it goes sideways.  This is commonly 
        referred to as rise over run.  If x is a measurement of left and right and y is a measurement of movement 
        lower and higher, rise over run is the change that occurs in y divided by the change in x that occurs at 
        the same time.  Lines are defined as having the same slope for the entire line.</p>
        <p>If you know two points in a line, you can use them to get the slope.  Subtract the y from one point from from the 
        y from the other point to get the change in y.  Then subtract the x from the one point from the x from other popint 
        to get the change in x.  Then, divide change in y by change in x to get the slope.  Negative signs do matter.  
        You also need to have at least one point the line goes through.  This lets you know where the line passes through.</p>
        <p>"Because lines's slopes do not change, they are perfectly straight.  Because nothing stops them from continuing, they "+
        "go on forever."</p></div>);
export default AboutView;
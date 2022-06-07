function quadrant(x, y)
{
    if (x > 0 && y > 0)
    console.log("lies in First quadrant");

    else if (x < 0 && y > 0)
    console.log("lies in Second quadrant");

    else if (x < 0 && y < 0)
    console.log("lies in Third quadrant");

    else if (x > 0 && y < 0)
    console.log("lies in Fourth quadrant");

    else if (x == 0 && y > 0)
    console.log("lies at positive y axis");

    else if (x == 0 && y < 0)
    console.log("lies at negative y axis");

    else if (y == 0 && x < 0)
    console.log("lies at negative x axis");

    else if (y == 0 && x > 0)
    console.log("lies at positive x axis");

    else
        console.log("lies at origin");
}



let x = 1, y = 1;
    quadrant(x, y);
 

document.addEventListener("DOMContentLoaded", () => {
    let svg = document.getElementById("svg");
    let curve = document.getElementById("curve");
    let curveArray = [250 * screen.height / 768,
                    216 * screen.width / 1024,
                    350 * screen.height / 768,
                    512 * screen.width / 1024,
                    300 * screen.height / 768];
    let dValue = `M0 0 l0 ${curveArray[0]} Q${curveArray[1]} ${curveArray[2]} ${curveArray[3]} ${curveArray[0]} T${screen.width} ${curveArray[0]} l0 -${curveArray[4]} Z`;
    curve.setAttribute("d", dValue);
    window.addEventListener("resize", () => {
        curveArray = [250 * screen.height / 768,
            216 * screen.width / 1024,
            350 * screen.height / 768,
            512 * screen.width / 1024,
            300 * screen.height / 768];
        dValue = `M0 0 l0 ${curveArray[0]} Q${curveArray[1]} ${curveArray[2]} ${curveArray[3]} ${curveArray[0]} T${screen.width} ${curveArray[0]} l0 -${curveArray[4]} Z`;    
        curve.setAttribute("d", dValue);
    });
});
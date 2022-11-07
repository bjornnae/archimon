function test1(){
    let ss = new SVG(640, 480)
    let r1 = new Rectangle(10, 10, 220, 130)
    r1.id = "f40b6aad-1584-40b4-a46f-fe395701aaed"
    let r2 = new Rectangle(400, 10, 220, 130)
    r2.id = "6af8ccc7-469d-43a0-bc47-9a2f0c7b0633"
    let t1 = new Text(230 + (400 - 230) / 2, 200, "This is a demo of the SVG Capabilities for Rectangle")
    let t2 = new Text(230 + (400 - 230) / 2, 220, "The rectangles have hard coded ids that relates to the model")
    let svgelem = ss.svg
    svgelem.appendChild(r1.svg)
    svgelem.appendChild(r2.svg)
    svgelem.appendChild(t1.svg)
    svgelem.appendChild(t2.svg)
    let d = document.getElementById("svgscene")
    d.appendChild(svgelem)
}
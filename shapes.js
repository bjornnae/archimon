class Rectangle(){
    constructor(xpos, ypos, height, width){
        this.x = x
        this.y = y
        this.height = height
        this.width = width
        this.stroke = "#5fbf00"
        this.fill = "#aaff56"
        //this.strokeWidth = "1px"
    }

    get svg(){
        //  <rect fill="#aaff56" height="36" id="svg_1" stroke="#5fbf00" width="68" x="73" y="40"/>
        let xmlns = "http://www.w3.org/2000/svg"
        let rect = document.createElementNS(xmlns, "rect")
        rect.setAttribute("x", this.x)
        rect.setAttribute("y", this.y)
        rect.setAttribute("height", this.height)
        rect.setAttribute("width", this.width)
        rect.setAttribute("stroke", this.stroke)
        rect.setAttribute("fill", this.fill)
        return rect   
    }
}
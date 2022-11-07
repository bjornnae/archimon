/*
 * This is a library for SVG element creation.
 * Each class represents a SVG element. 
 * The constructor class defines default values for each settable property.
 * 
 * Archimon 2022
 */


class SVG {
    constructor(width, height){
        this.width = width
        this.height = height
        this.ns = "http://www.w3.org/2000/svg"
    }

    get svg(){
        let svgElem = document.createElementNS(this.ns, "svg")
        svgElem.setAttribute("width", this.width)
        svgElem.setAttribute("height", this.width)
        svgElem.setAttribute("xmlns", this.ns)
        return svgElem
    }
}

class Rectangle {
    constructor(x, y, width, height){
        this.id = self.crypto.randomUUID()
        this.x = x
        this.y = y
        this.height = height
        this.width = width
        this.stroke = "#5fbf00"
        this.strokeWidth = 1
        this.fill = "#aaff56"
    }

    get svg(){
        //  <rect fill="#aaff56" height="36" id="svg_1" stroke="#5fbf00" width="68" x="73" y="40"/>
        let xmlns = "http://www.w3.org/2000/svg"
        let rect = document.createElementNS(xmlns, "rect")
        rect.setAttribute("id", this.id)
        rect.setAttribute("x", this.x)
        rect.setAttribute("y", this.y)
        rect.setAttribute("height", this.height)
        rect.setAttribute("width", this.width)
        rect.setAttribute("stroke", this.stroke)
        rect.setAttribute("stroke-width", this.strokeWidth)
        rect.setAttribute("fill", this.fill)
        rect.setAttribute("onclick", `javascript:userClickOn("${this.id}")`)
        rect.setAttribute("onmouseup", `javascript:userMouseUpOn(simpleHandler, "${this.id}")`)
        rect.setAttribute("onmousedown", `javascript:userMouseDownOn("${this.id}")`)
        return rect   
    }
}

class Text {
    constructor(x, y, textContent){
        this.ns = "http://www.w3.org/2000/svg"
        this.x = x
        this.y = y
        this.textContent = textContent
        this.fontFamily = "Monospace"
        this.fontSize = 12
        this.fill = "#000000"
        this.stroke = "#000000"
        this.strokeWidth = 0
        this.textAnchor = "middle"
    }

    get svg(){
        //   <text fill="#000000" font-family="Serif" font-size="24" id="svg_1" stroke="#000000" stroke-width="0" text-anchor="middle" x="198" xml:space="preserve" y="197">test text</text>
        let textElem = document.createElementNS(this.ns, "text")
        textElem.setAttribute("font-family", this.fontFamily)
        textElem.setAttribute("font-size", this.fontSize)
        textElem.setAttribute("fill", this.fill)
        textElem.setAttribute("stroke", this.stroke)
        textElem.setAttribute("stroke-width", this.strokeWidth)
        textElem.setAttribute("text-anchor", "middle")
        textElem.setAttribute("x", `${this.x}`)
        textElem.setAttribute("y", `${this.y}`)
        textElem.setAttribute("y", `${this.y}`)
        textElem.innerHTML = this.textContent
        return textElem
    }
}
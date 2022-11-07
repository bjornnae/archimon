function td(content){
    let td = document.createElement("td")
    td.innerHTML = content
    return td
}

function tr(telems){
    let tr = document.createElement("tr")
    for (i in telems){
        tr.appendChild(telems[i])
    }
    return tr
} 

function tableBody(contentList){
    let tbody = document.createElement("tbody")
    for(i in contentList){
        tbody.appendChild(contentList[i])
    }
    return tbody
}


function makeTableBody(rows){
    tBody = tableBody([])
    for(r in rows){
        let tRow = tr([])
        for(c in rows[r]){
            let tData = td(rows[r][c])
            tRow.appendChild(tData)
        }
        tBody.appendChild(tRow)
    }
    return tBody
}

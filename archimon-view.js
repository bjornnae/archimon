function view_drawView(viewId){

}

function view_addAttributeRow(key, val){
    let atb = document.getElementById("attributeTBody")
    let td1 = td(key)
    td1.setAttribute("contenteditable", "true")
    let td2 = td(val)
    td2.setAttribute("contenteditable", "true")
    let tr1 = tr([td1, td2])
    atb.appendChild(tr1)
}

function view_getObjectFromForm(){
    let f = document.getElementById("objectForm")
    let o = {
        "name" : f.name.value,
        "id" : f.id.value,
        "objectType" : f.objectType.options[f.objectType.selectedIndex].value,
        "attributes": {}
    }
    // Get Attributes
    let atb = document.getElementById("attributeTBody")
    
    return o
}



function view_putObjectToForm(objValues){
    let f = document.getElementById("objectForm")
    f.name.value = objValues.name
    f.id.value = objValues.id
    let tOptions = f.objectType.options
    findSelectSuccess = false
    for (i in tOptions){
        if (tOptions[i].value == objValues.objectType){
            f.objectType.selectedIndex = i
            findSelectSuccess = true
        }
    }
    if (!findSelectSuccess){
        f.objectType.selectedIndex = 0
        console.warning(`Could not find objectType ${o.objectType} in user interface. Fallback to first option.`)
    }
    let attributeKeys = Object.keys(objValues.attributes)
    let atb = document.getElementById("attributeTBody")
    atb.innerHTML = ""
    for (i in attributeKeys){
        view_addAttributeRow(attributeKeys[i], objValues.attributes[attributeKeys[i]])
    }
}

function view_listObjects(objects){
    let odata = objects.map(function(o){return [`<a href="javascript:controller_putObjectToFormById('${o.id}')">${o.name}</a>`, o.id]})
    let listTable = document.getElementById("objectListTable")
    let tbody = makeTableBody(odata)
    listTable.tBodies[0].innerHTML = tbody.innerHTML
}
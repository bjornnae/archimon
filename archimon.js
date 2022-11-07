

/*
 *
 *  This is the CONTROLLER
 * 
 */


function userClicksRelateObjects(viewId, fromObjectId, toObjectId, associationType){}

function userClicksLoadView(viewId){

}

var objectSelectEntry = null

function userClickOn(id){
    console.info(`User clicked on ${id}`)
    controller_loadObjectOnPage(id)
}

function userMouseDownOn(id){
    objectSelectEntry = id
    console.info(`User click select on ${id}`)
}

function simpleHandler(args){
    console.info(`Handler got ${JSON.stringify(args)}`)
    switch (args[0]){
        case "SELECT" : 
            var [a, id] = args
            console.info(`Move ${id}`)
            break;
        case "LINK" : 
            var [a, from, to] = args
            console.info(`Link ${to} --> ${from}`)
            model_addRelation(from, to, "relatedTo")
            break;
        case "MOVE" :
            var [a, id] = args
            console.info(`Move ${id}`)
            break;
    }
}

function userMouseUpOn(handlerFn, id){
    console.info(`User click release on ${id}`)

    if (objectSelectEntry == id){
        console.info(`SELECT one object (${id})`)
        objectSelectEntry = null
        handlerFn(["SELECT", id])
        return ["SELECT", id]

    } else if (objectSelectEntry && objectSelectEntry !== id) {
        console.info(`LINK two objects link("${objectSelectEntry}","${id}")`)
        let from = objectSelectEntry
        let to = id
        objectSelectEntry = null
        handlerFn(["LINK", from, to])
        return ["LINK", from, to]

    } else {
        console.info(`MOVE one object ${id}`)
        objectSelectEntry = null
        handlerFn(["MOVE", id])
        return ["MOVE", id]
        
    }
}

//---- Object ----//

function controller_putObjectToFormById(id){
    o  = model_getObjectById(id)
    view_putObjectToForm(o)
}


function userClicksNewObject(viewId, x, y){ 
    let o = {"name" : "Nameless", "id" : self.crypto.randomUUID(), "type" : "generic", "attributes" : {}}
    view_putObjectToForm(o) 
    model_addObject(o)
    controller_reloadPage()
}


function userClicksUpdateObject(){ 
    o = view_getObjectFromForm()
    model_upsertObject(o)
    controller_reloadPage()
}

function userClicksCloneObject(){
    o = view_getObjectFromForm()
    o.id = self.crypto.randomUUID()
    view_putObjectToForm(o)
    model_upsertObject(o)
    controller_reloadPage()
}

function userClickDeleteObjectFromView(viewId, objectId){

}

function controller_loadObjectOnPage(id){
    let o = model_getObjectById(id)
    view_putObjectToForm(o)
}

function controller_listObjectsOnPage(){
    let objects = model_getObjectList()
    view_listObjects(objects)
}

function userClicksAddAttribute(){
    view_addAttributeRow("nkey", "nvalue")
}


//---- Relations ----//


//---- View ----//

function userClicksAddView(){
    console.info(`userClicsAddView TBD`)
}

function controller_listViewsOnPage(){

}

function controller_reloadPage(){
    controller_listObjectsOnPage()
    controller_listViewsOnPage()
}
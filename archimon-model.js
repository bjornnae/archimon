model = {
    "objects" : [
        {"type":"object", "objectType": "generic", "id":"f40b6aad-1584-40b4-a46f-fe395701aaed", "name": "someObj1", "fill": "#AAAAAA", "stroke": "#888888", "attributes" : {"tag" : "Group1", "process" : "enrollment"}},
        {"type":"object", "objectType": "generic", "id":"6af8ccc7-469d-43a0-bc47-9a2f0c7b0633", "name": "someObj2", "fill": "#AAAAAA", "stroke": "#888888", "attributes" : {}},
    ],
    "relationships" : [{"type": "relationship" ,"id" : "r123", "from" : "6af8ccc7-469d-43a0-bc47-9a2f0c7b0633", "to" : "f40b6aad-1584-40b4-a46f-fe395701aaed", "name" : "flowsTo"}],
    "views" : [{"type" : "view", "id" : "v1", "name": "BaseView", 
                "objects": [
                    {"type":"objectInView", "view":"v1", "id": "f40b6aad-1584-40b4-a46f-fe395701aaed", "x" : 100, "y" : 100, "width": 100, "height": 100},
                    {"type":"objectInView", "view":"v1", "id": "6af8ccc7-469d-43a0-bc47-9a2f0c7b0633", "x" : 300, "y" : 100, "width": 100, "height": 100}
                ],
                "relationships": [
                    {"id": "r123" }
                ]
    }]
} 

layers = ["generic", "organisation", "business", "application", "infra"]

layerColorLUT = {
    "generic" :     {"stroke-color" : "#999999", "fill-color":  "#AAAAAA", "text-color" : "#666666"}, 
    "organisation" :{"stroke-color" : "#999999", "fill-color":  "#AAAAAA", "text-color" : "#666666"},
    "business" :    {"stroke-color" : "#999999", "fill-color":  "#AAAAAA", "text-color" : "#666666"}, 
    "application" : {"stroke-color" : "#AAAA44", "fill-color":  "#FFFF99", "text-color" : "#666666"}, 
    "infra" :       {"stroke-color" : "#999999", "fill-color":  "#AAAAAA", "text-color" : "#666666"}
}


//---- Model Utilities ----//

function model_getNewId(){
    return self.crypto.randomUUID()
}

//---- Objects ----//
function model_addObject(o){
    model.objects.push(o)
}

function model_getObjectById(id){
    var ot = {}
    for (o in model.objects){
        if (model.objects[o].id == id){
            ot = model.objects[o]
            break
        } 
    }
    return ot
}

function model_upsertObject(o){
    for (i in model.objects){
        if (model.objects[i].id == o.id){
            model.objects[i] = o
            return "Update"
        }
    }
    // Object was not found. Create it in DB.
    model.objects.push(o)
    return "Insert"
}

function model_getObjectList(){
    return model.objects
}

//---- Relations ----//
function model_addRelation(from, to, relationshipType){
    let relation = {"type": "relationship" ,"id" : model_getNewId(), "from" : from, "to" : to, "name" : relationshipType}
    model.relationships.push(relation) 
}

function model_getRelationList(){
    return model.relationships
}


//---- Views ----//


function model_getViewList(){
    return model.view
}

function model_dumpModel(){
    console.info(JSON.stringify(model, null, 2))
}
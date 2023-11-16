/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("gvrk0x32l4ykbqo")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "b8nmpj3l",
    "name": "due_date",
    "type": "date",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("gvrk0x32l4ykbqo")

  // remove
  collection.schema.removeField("b8nmpj3l")

  return dao.saveCollection(collection)
})

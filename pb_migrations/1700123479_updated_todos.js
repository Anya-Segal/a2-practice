/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("gvrk0x32l4ykbqo")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "oi8ewgzk",
    "name": "full_names",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "qw3l6st3s3ax6fm",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("gvrk0x32l4ykbqo")

  // remove
  collection.schema.removeField("oi8ewgzk")

  return dao.saveCollection(collection)
})

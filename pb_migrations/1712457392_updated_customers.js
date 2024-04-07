/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("gqxi1g0arbnnwb0")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hjyt6fiq",
    "name": "products",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "psvjj8vgf4gx2gf",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("gqxi1g0arbnnwb0")

  // remove
  collection.schema.removeField("hjyt6fiq")

  return dao.saveCollection(collection)
})

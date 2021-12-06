import { openDB } from 'idb'

const IDB_NAME = 'orcas-marketplace'
const IDB_VERSION = 1

const DB_ENTRIES = {
  ORDERS: 'orders'
}

const db = openDB(IDB_NAME, IDB_VERSION, {
  upgrade(db) {
    db.createObjectStore(DB_ENTRIES.ORDERS)
  },
})

const idb = {
  orders: {
    async get(key) {
      return (await db).get(DB_ENTRIES.ORDERS, key)
    },
    async set(key, value){
      return (await db).put(DB_ENTRIES.ORDERS, value, key)
    },
    async del(key) {
      return (await db).delete(DB_ENTRIES.ORDERS, key)
    },
    async clear(){
      return (await db).clear(DB_ENTRIES.ORDERS)
    },
  },
}

export default idb

const localStorageHandler = {
  dataName: 'myData',
  setItem: function(name, value) {
    let obj = JSON.parse(window.localStorage.getItem(this.dataName))
    if(obj == null) {
      obj = {}
    }
    obj[name] = value
    window.localStorage.setItem(this.dataName, JSON.stringify(obj))
  },
  delItem: function(name) {
    let obj = JSON.parse(window.localStorage.getItem(this.dataName))
    if(obj === null) {
      console.info('myData')
      return false
    }else{
      if(obj[name] !== undefined) {
        delete obj[name]
        window.localStorage.setItem(this.dataName, JSON.stringify(obj))
      }
    }
  },
  getItem: function(name) {
    let obj = JSON.parse(window.localStorage.getItem(this.dataName))
    if(obj !== null && obj[name] !== undefined) {
      return obj[name]
    }else{
      return null
    }
  },
  die: function() {
    window.localStorage.removeItem(this.dataName)
  }
}
window.localStorageHandler = localStorageHandler

export default localStorageHandler

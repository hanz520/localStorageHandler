const localStorageHandler = {
  dataName: 'ctData',
  getDataName: function(isEternal) {
    return isEternal === true ? `${this.dataName}_eternal` : this.dataName
  },
  setItem: function(name, value, isEternal) {
    // 根据isEternal来判断是否永久
    const dataName = this.getDataName(isEternal)
    let obj = JSON.parse(window.localStorage.getItem(dataName))
    if(obj == null) {
      obj = {}
    }
    obj[name] = value
    window.localStorage.setItem(dataName, JSON.stringify(obj))
  },
  delItem: function(name, isEternal) {
    const dataName = this.getDataName(isEternal)
    let obj = JSON.parse(window.localStorage.getItem(dataName))
    if(obj === null) {
      return false
    }else{
      if(obj[name] !== undefined) {
        delete obj[name]
        window.localStorage.setItem(dataName, JSON.stringify(obj))
      }
    }
  },
  getItem: function(name, isEternal) {
    const dataName = this.getDataName(isEternal)
    let obj = JSON.parse(window.localStorage.getItem(dataName))
    if(obj !== null && obj[name] !== undefined) {
      return obj[name]
    }else{
      return null
    }
  },
  die: function(isEternal) {
    const dataName = this.getDataName(isEternal)
    window.localStorage.removeItem(dataName)
  },
  list: function() {
    console.log('非永久的', JSON.parse(window.localStorage.getItem(this.dataName)))
    console.log('永久的', JSON.parse(window.localStorage.getItem(`${this.dataName}_eternal`)))
  }
}
window.LSH = localStorageHandler

export default localStorageHandler

/**
 * localStorageHandler存储的信息分为两块：
 *    1.退出登录后需要清除的信息，如：用户信息等
 *    2.退出登录后不需要清除的信息，如皮肤，表格列显示等信息
 * 
 * 暴露的方法:
 *    @function setItem  保存数据
 *        @param {String} name 数据名  
 *        @param {*} value 保存的数据  
 *        @param {Boolean} isPermanent 是否永久  
 * 
 *    @function delItem  删除数据
 *        @param {String} name 数据名  
 *        @param {Boolean} isPermanent 是否永久  
 * 
 *    @function getItem  获取数据
 *        @param {String} name 数据名  
 *        @param {Boolean} isPermanent 是否永久 
 *        @returns {*} 有相关数据则返回数据，没有返回null
 * 
 *    @function die  清空非永久数据dataNameLogin
 * 
 *    @function list 查看所有的数据
 * 
 */

let dataNameLogin = 'dataZoneLogin' // 退出登录后需要清除的数据
let dataNamePermanent = 'dataZonePermanent' // 永久有效的数据

function getName(isPermanent) {
  return isPermanent ? dataNamePermanent : dataNameLogin
}

const localStorageHandler = {
  setItem: function(name, value, isPermanent) {
    let dataName = getName(isPermanent)
    let obj = JSON.parse(window.localStorage.getItem(dataName))
    if(obj == null) {
      obj = {}
    }
    obj[name] = value
    window.localStorage.setItem(dataName, JSON.stringify(obj))
  },
  delItem: function(name, isPermanent) {
    let dataName = getName(isPermanent)
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
  getItem: function(name, isPermanent) {
    let dataName = getName(isPermanent)
    let obj = JSON.parse(window.localStorage.getItem(dataName))
    if(obj !== null && obj[name] !== undefined) {
      return obj[name]
    }else{
      return null
    }
  },
  die: function() {
    let dataName = getName(false)
    window.localStorage.removeItem(dataName)
  },
  list: function() {
    console.log('dataZonePermanent', JSON.parse(window.localStorage.getItem(getName(true))))
    console.log('dataZoneLogin', JSON.parse(window.localStorage.getItem(getName(false))))
  }
}

module.exports = localStorageHandler

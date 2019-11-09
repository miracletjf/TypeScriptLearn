class EventHub {
  private cache;
  constructor() {
    this.cache = []
  }
  /**
   * 订阅事件
   * @param eventName 
   * @param fn 
   */
  on(eventName, fn) {
    this.cache[eventName] = this.cache[eventName] || []
    this.cache[eventName].push(fn)
  }
  /**
   * 发布事件
   * @param eventName 
   * @param arg 
   */
  emit(eventName, arg?) {
    this.cache[eventName] && this.cache[eventName].forEach(fn => {
      fn(arg)
    });
  }
  /**
   * 取消订阅
   * @param eventName 
   * @param fn
   */
  off(eventName, fn) {
    if(!this.cache[eventName]) return console.log(`${eventName}事件不存在！`)
    let fnIndex = this.cache[eventName].indexOf(fn)
    fnIndex > -1 && this.cache[eventName].splice(fnIndex, 1)
  }
}

export default EventHub
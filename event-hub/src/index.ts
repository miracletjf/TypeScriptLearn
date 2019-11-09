class EventHub {
  private cache: {[key: string]: Array<(data: unknown) => void>} = {};
  /**
   * 订阅事件
   * @param eventName 
   * @param fn 
   */
  on(eventName: string, fn: (data: unknown) => void): void {
    this.cache[eventName] = this.cache[eventName] || []
    this.cache[eventName].push(fn)
  }
  /**
   * 发布事件
   * @param eventName 
   * @param arg 
   */
  emit(eventName: string, data?: unknown): void {
    this.cache[eventName] && this.cache[eventName].forEach(fn => {
      fn(data)
    });
  }
  /**
   * 取消订阅
   * @param eventName 
   * @param fn
   */
  off(eventName: string, fn: (data: unknown) => void): void {
    if(!this.cache[eventName]) return console.log(`${eventName}事件不存在！`)
    let fnIndex = this.cache[eventName].indexOf(fn)
    fnIndex > -1 && this.cache[eventName].splice(fnIndex, 1)
  }
}

export default EventHub
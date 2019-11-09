import EventHub from '../src/index';

/**
 * 测试用例1
 * 测试是否成功订阅，发布事件
 */
function case1 () {
  let event = new EventHub()
  let isCalled = false
  const fn = () => {isCalled = true}
  event.on('xxx', fn)
  event.emit('xxx')
  console.assert(isCalled)
}

/**
 * 测试用例2
 * 测试是否可以同时订阅多个事件
 */
function case2 () {
  let event = new EventHub()
  let isCalled1 = false
  let isCalled2 = false
  const fn1 = () => {isCalled1 = true}
  const fn2 = () => {isCalled2 = true}
  event.on('xxx', fn1)
  event.on('xxx', fn2)
  event.emit('xxx')
  console.assert(isCalled1)
  console.assert(isCalled2)
}

/**
 * 测试用例3
 * 测试是否可以正确的取消订阅
 */
function case3 () {
  let event = new EventHub()
  let isCalled = false
  const fn = () => {isCalled = true}
  event.on('xxx', fn)
  event.off('xxx', fn)
  event.emit('xxx')
  console.assert(isCalled === false)
}

case1()
case2()
case3()
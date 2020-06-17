const LinkedList = require('linkedlist');

const CACHE_SIZE = 10;

// init
// it [1,2,3,4,5]
// queue []
// stack []

// next()
// queue [1]
// stack []

// next()
// queue [1, 2]
// stack []

// peek()
// queue [1, 2]
// stack [3]

// peek()
// queue [1, 2]
// stack [3, 4]

class PeekIterator {
  constructor(it, endToken = null) {
    this.it = it;
    // 需要putBack的元素
    this.stackPutBacks = new LinkedList();
    // 基于时间窗口的缓存
    this.queueCache = new LinkedList();

    this.endToken = endToken;
  }

  // 查看下一个值，指针不移动
  peek() {
    if (this.stackPutBacks.length > 0) {
      return this.stackPutBacks.tail;
    }
    const val = this.next();
    // if (val && val.length) {
    this.putBack();
    // }

    return val;
  }

  // queueCache: A -> B -> C -> D
  // stackPutBacks: D -> C -> B -> A
  putBack() {
    if (this.queueCache.length > 0) {
      this.stackPutBacks.push(this.queueCache.pop());
    }
  }
  hasNext() {
    return this.endToken || !!this.peek();
  }

  // 指针向下移动，并获取移动后的值
  next() {
    let val;

    // 处理缓存
    if (this.stackPutBacks.length > 0) {
      val = this.stackPutBacks.pop();
    } else {
      val = this.it.next().value;
      if (val === undefined) {
        const tmp = this.endToken;
        this.endToken = null;
        val = tmp;
      }
    }

    // 处理缓存
    while (this.queueCache.length > CACHE_SIZE - 1) {
      this.queueCache.shift();
    }
    this.queueCache.push(val);
    return val;
  }
}

module.exports = PeekIterator;

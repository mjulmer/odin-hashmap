"use strict";

export { LinkedList, Node };

class Node {
  key = null;
  value = null;
  nextNode = null;

  constructor(key = null, value = null, nextNode = null) {
    this.key = key;
    this.value = value;
    this.nextNode = nextNode;
  }
}

class LinkedList {
  head = null;
  tail = null;
  size = 0;

  constructor(key = null, value = null) {
    if (key !== null || value != null) {
      this.head = new Node(key, value);
      this.tail = this.head;
      this.size = 1;
    }
  }

  append(key, value = null) {
    const newNode = new Node(key, value);
    if (this.size === 0) {
      this.head = newNode;
    } else {
      this.tail.nextNode = newNode;
    }

    this.tail = newNode;
    this.size += 1;
  }

  prepend(key, value = null) {
    const newNode = new Node(key, value);
    if (this.size === 0) {
      this.tail = newNode;
    } else {
      newNode.nextNode = this.head;
    }

    this.head = newNode;
    this.size += 1;
  }

  size() {
    return this.size;
  }

  head() {
    return this.head;
  }

  tail() {
    return this.tail;
  }

  at(index) {
    let i = 0;
    let node = this.head;
    while (i < index) {
      if (node === null) {
        throw "Index out of rage.";
      }
      node = node.nextNode;
      i += 1;
    }
    if (node === null) {
      throw "Index out of rage.";
    }
    return node;
  }

  pop() {
    let prevNode = null;
    let node = this.head;

    if (this.head === null) {
      return null;
    }

    while (node.nextNode) {
      prevNode = node;
      node = node.nextNode;
    }
    prevNode.nextNode = null;
    this.tail = prevNode;
    this.size -= 1;
    return node;
  }

  contains(targetKey) {
    let node = this.head;
    while (node) {
      if (node.key === targetValue) {
        return true;
      }
      if (!node.nextNode) {
        break;
      }
      node = node.nextNode;
    }
    return false;
  }

  find(targetKey) {
    let i = 0;
    let node = this.head;
    while (node) {
      if (node.key === targetKey) {
        return i;
      }
      if (!node.nextNode) {
        break;
      }
      node = node.nextNode;
      i += 1;
    }
    return false;
  }

  insertAt(key, value = null, index) {
    let i = 0;
    let prevNode = null;
    let node = this.head;
    while (i < index) {
      if (node === null) {
        throw "Index out of rage.";
      }
      prevNode = node;
      node = node.nextNode;
      i += 1;
    }

    const newNode = new Node(key, value, node);
    this.size += 1;

    if (index === 0) {
      this.head = newNode;
      if (this.size == 1) {
        this.tail = newNode;
      }
      return;
    }
    prevNode.nextNode = newNode;
    if (newNode.nextNode === null) {
      this.tail = newNode;
    }
  }

  removeAt(index) {
    let i = 0;
    let prevNode = null;
    let node = this.head;
    while (i < index) {
      if (node === null) {
        throw "Index out of rage.";
      }
      prevNode = node;
      node = node.nextNode;
      i += 1;
    }
    if (node === null) {
      throw "Index out of rage.";
    }
    this.size -= 1;
    if (node === this.head) {
      this.head = node.nextNode;
      return node;
    }

    prevNode.nextNode = node.nextNode;
    if (node === this.tail) {
      this.tail = prevNode;
    }
    return node;
  }

  toString() {
    let strBuilder = "";
    let node = this.head;

    while (node) {
      strBuilder += "( " + node.key + " ) -> ";
      node = node.nextNode;
    }
    strBuilder += "null";
    return strBuilder;
  }
}

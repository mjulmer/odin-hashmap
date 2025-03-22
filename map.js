"use strict";

import { LinkedList, Node } from "./linkedlist.js";
export { HashMap };

class HashMap {
  static loadFactor = 0.8;
  capacity = 16;
  size = 0;
  buckets = [];

  hash(key) {
    // Implementation from Odin hashing lesson.
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
    }

    return hashCode;
  }

  set(key, value) {
    const hash = this.hash(key);
    let bucket = this.buckets[hash];
    if (!bucket) {
      bucket = new LinkedList(key, value);
      this.buckets[hash] = bucket;
    }

    const index = bucket.find(key);
    if (index === false) {
      bucket.append(new Node(key, value));
    } else {
      bucket.at(index).value = value;
    }

    this.size += 1;
    if (this.size >= this.capacity) {
      this.resizeMap();
    }
  }

  get(key) {
    let bucket = this.buckets[this.hash(key)];
    if (!bucket) {
      return undefined;
    }

    const index = bucket.find(key);
    if (index === false) {
      return undefined;
    }

    return bucket.at(index).value;
  }

  has(key) {
    let bucket = this.buckets[this.hash(key)];
    if (!bucket) {
      return false;
    }

    let node = bucket.head;
    while (node) {
      if (node.key === key) {
        return true;
      }
      node = node.nextNode;
    }

    return false;
  }

  remove(key) {
    let bucket = this.buckets[this.hash(key)];
    if (!bucket) {
      return false;
    }
    const index = bucket.find(key);
    if (index === false) {
      return false;
    }

    this.size -= 1;
    return bucket.removeAt(index);
  }

  length() {
    return this.size;
  }

  clear() {
    this.buckets = [];
    this.size = 0;
  }

  keys() {
    const keyList = [];
    for (const bucket of this.buckets) {
      if (bucket) {
        keyList.push(bucket.keys());
      }
    }
    return keyList.flat();
  }

  values() {
    const valuesList = [];
    for (const bucket of this.buckets) {
      if (bucket) {
        valuesList.push(bucket.values());
      }
    }
    return valuesList.flat();
  }

  entries() {
    const entriesList = [];
    for (const bucket of this.buckets) {
      if (bucket) {
        const keys = bucket.keys();
        const values = bucket.values();
        if (keys.length !== values.length) {
          console.error("Different number of keys and values in map.");
          return;
        }
        for (let i = 0; i < keys.length; i++) {
          entriesList.push([keys[i], values[i]]);
        }
      }
    }
    return entriesList;
  }

  resizeMap() {}
}

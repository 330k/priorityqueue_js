# priorityqueue_js
Simple JavaScript Priority Queue (Max-Heap) Implementation

* binary_heap: https://330k.github.io/priorityqueue_js/binary_heap.js
* d_ary_heap: https://330k.github.io/priorityqueue_js/d_ary_heap.js
* fibonacci_heap: https://330k.github.io/priorityqueue_js/fibonacci_heap.js
* leftist_heap: https://330k.github.io/priorityqueue_js/leftist_heap.js
* pairing_heap: https://330k.github.io/priorityqueue_js/pairing_heap.js
* skew_heap: https://330k.github.io/priorityqueue_js/skew_heap.js

# Usage
1. Load .js (e.g. binary_heap.js, pairing_heap.js)
1. create priority queue object by calling function (e.g. `binary_heap()`, `pairing_heap()`)
1. call `enqueue` method to add data with priority: 1st argument is priority, 2nd argument can be any JS object.
1. call `dequeue` method to retrieve and remove data with largest priority.
1. call `top` method to only retrieve data with largest priority.

# Example: Binary Heap
    <script type="text/javascript" src="//330k.github.io/priorityqueue_js/binary_heap.js"></script>
    <script type="text/javascript">
      var queue = binary_heap();
      //var queue = new d_ary_heap(4);
      //var queue = new pairing_heap();
      //var queue = new leftist_heap();
      //var queue = new skew_heap();
      //var queue = new fibonacci_heap();

      queue.enqueue(3, "data1");
      queue.enqueue(1, "data2");
      queue.enqueue(2, "data3");
      
      console.log(queue.dequeue());  // data1
      console.log(queue.top());      // data3
      console.log(queue.dequeue());  // data3
      console.log(queue.dequeue());  // data2
    </script>
  
# Benchmark
visit https://330k.github.io/priorityqueue_js/benchmark.html

binary heap, d-ary heap and pairing heap scores good performance stably.

# Copyright

* *_heap.js Copyright 330k MIT License
* mt.js - from http://oretoku.net/apps/mt.js

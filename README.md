# priorityqueue_js
Simple JavaScript Priority Queue (Heap) Implementation

* binary_heap: http://330k.github.io/priorityqueue_js/binary_heap.js
* d_ary_heap: http://330k.github.io/priorityqueue_js/d_ary_heap.js
* fibonacci_heap: http://330k.github.io/priorityqueue_js/fibonacci_heap.js
* leftist_heap: http://330k.github.io/priorityqueue_js/leftist_heap.js
* pairing_heap: http://330k.github.io/priorityqueue_js/pairing_heap.js
* skew_heap: http://330k.github.io/priorityqueue_js/skew_heap.js

# Usage
1. Load .js (e.g. binary_heap.js, pairing_heap.js)
2. create priority queue object by calling function (e.g. `binary_heap()`, `pairing_heap()`)
3. call `enqueue` method to add data with priority: 1st argument is priority, 2nd argument can be any JS object.
4. call `dequeue` method to retrieve data with largest priority.

# Example: Binary Heap
    <script type="text/javascript" src="//330k.github.io/priorityqueue_js/binary_heap.js"></script>
    <script type="text/javascript">
      var queue = binary_heap();
      queue.enqueue(3, "data1");
      queue.enqueue(1, "data2");
      queue.enqueue(2, "data3");
      console.log(queue.dequeue());  // data1
      console.log(queue.dequeue());  // data3
      console.log(queue.dequeue());  // data2
    </script>
  
# Benchmark
visit http://330k.github.io/priorityqueue_js/benchmark.html

binary heap, d-ary heap and pairing heap scores good performance stably.

# Copyright

* mt.js - from http://oretoku.net/apps/mt.js

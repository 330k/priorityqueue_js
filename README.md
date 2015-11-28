# priorityqueue_js
JavaScript Priority Queue (Heap) Implementation

* binary_heap
* d_ary_heap
* fibonacci_heap
* leftist_heap
* pairing_heap
* skew_heap

## Usage
1. Load .js (e.g. binary_heap.js, pairing_heap.js)
2. create priority queue object by calling function (e.g. `binary_heap()`, `pairing_heap()`)
3. call `enqueue` function to add data with priority: 1st argument is priority, 2nd argument is data (any JavaScript Object).
4. call `dequeue` function to retrieve data with largest priority.

### Example: Binary Heap
    <script type="text/javascript" src="//330k.github.io/priorityqueue_js/binary_heap.js"></script>
    <script type="text/javascript">
      var queue = binary_heap();
      queue.enqueue(3, "data1");
      queue.enqueue(1, "data2");
      queue.enqueue(2, "data3");
      console.log(queue.dequeue());
      console.log(queue.dequeue());
      console.log(queue.dequeue());  // data1, data3, data2
    </script>
  
## Benchmark
visit http://330k.github.io/priorityqueue_js/

binary heap, d-ary heap and pairing heap scores good performance stably.

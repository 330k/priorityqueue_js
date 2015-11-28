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
3. call `enqueue` function to add data with priority: 1st argument is data, 2nd argument is priority.
4. call `dequeue` function to retrieve data with largest priority.

### Example: Binary Heap
    <script type="text/javascript" src="//priorityqueue_js.github.io/binary_heap.js"></script>
    <script type="text/javascript">
      var queue = binary_heap();
      queue.enqueue("data1", 3);
      queue.enqueue("data2", 1);
      queue.enqueue("data3", 2);
      console.log(queue.dequeue());
      console.log(queue.dequeue());
      console.log(queue.dequeue());
    </script>
  
## Benchmark
visit http://330k.github.io/priorityqueue_js/

binary heap, d-ary heap and pairing heap scores good performance stably.

/* Binomial Heap
 * Copyright 2017 330k
 * https://github.com/330k/
 *
 * This software is released under the MIT License.
 * http://opensource.org/licenses/mit-license.php
 */
function binomial_heap(){
  let _root = null;
  let _size = 0;
  
  const _merge = function(i, j){
    if(i === null) return j;
    if(j === null) return i;
    
    if(i.p < j.p){
      let ret = i;
      i = j;
      j = ret;
    }
    i.right = _merge(i.right, j);
    ret = i.right;
    i.right = i.left;
    i.left = ret;
    
    return i;
  };
  
  const enqueue = function(priority, value){
    _root = _merge(_root, {
      p: priority,
      v: value,
      left: null,
      right: null
    });
    _size++;
  };
  const dequeue = function(){
    let result = _root.v;
    
    _root = _merge(_root.left, _root.right);
    _size--;
    
    return result;
  };
  const top = function(){
    return _root.v;
  };
  const size = function(){
    return _size;
  };
  
  return {
    name: 'Binamial Heap',
    enqueue: enqueue,
    dequeue: dequeue,
    top: top,
    size: size
  };
}

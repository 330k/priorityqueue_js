/* Heap for Optimization
 * Copyright 2015 330k
 * https://github.com/330k/
 *
 * This software is released under the MIT License.
 * http://opensource.org/licenses/mit-license.php
 */
function compared_heap(){
  let _top = null;
  let _size = 0;
  const _mergeList = function(i, j){
    if(i === null) return j;
    if(j === null) return i;
    
    ret = i.next;
    i.next = j.next;
    i.next.prev = i;
    j.next = ret;
    j.next.prev = j;

    return i.p > j.p ? i : j;
  };
  
  const enqueue = function(priority, value){
    const newnode = {
      p: priority,
      v: value,
      //marked: false,
      rank: 0,
      next: null,
      prev: null,
      firstchild: null
    };
    newnode.next = newnode;
    newnode.prev = newnode;
    
    _top = _mergeList(_top, newnode);
    _size = _size + 1;
  };
  const dequeue = function(){
    let top = _top;
    const result = top;
    const ranks = [];
    const roots = [];

    if(_size){
      _size = _size - 1;
      
      if(top.next === top){
        top = null;
      }else{
        top.prev.next = top.next;
        top.next.prev = top.prev;
        top = top.next;
      }
      
      top = _mergeList(top, result.firstchild);
      
      if(top === null){
        _top = top;
        return result.v;
      }

      let curr = top;
      do{
        roots.push(curr);
        curr = curr.next;
      } while(curr !== top);
      
      ranks.length = 45;
      for(let i = 0, l = roots.length; i < l; i++){
        let min = null;
        let max = null;
        
        curr = roots[i];
        while(true){
          if(ranks[curr.rank] === undefined){
            ranks[curr.rank] = curr;
            break;
          }
          let other = ranks[curr.rank];
          ranks[curr.rank] = undefined;
          
          if(curr.p < other.p){
            min = curr;
            max = other;
          }else{
            min = other;
            max = curr;
          }
          
          min.next.prev = min.prev;
          min.prev.next = min.next;
          
          min.next = min.prev = min;
          max.firstchild = _mergeList(max.firstchild, min);
          
          //min.marked = false;
          max.rank = max.rank + 1;
          
          curr = max;
        }
        if(curr.p > top.p){
          top = curr;
        }

      }
      
      _top = top;
      return result.v;
    }else{
      return (void 0);
    }
  };
  const top = function(){
    return _top.v;
  };
  const size = function(){
    return _size;
  };
  
  return {
    name: 'Compared Heap',
    enqueue: enqueue,
    dequeue: dequeue,
    top: top,
    size: size
  };
}

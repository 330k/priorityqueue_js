/* Heap for Optimization
 * Copyright 2015 330k
 * https://github.com/330k/
 *
 * This software is released under the MIT License.
 * http://opensource.org/licenses/mit-license.php
 */
function compared_heap(){
	"use strict";
	var _top = null;
	var _size = 0;
	var _mergeList = function(i, j){
		var ret = null;

		if(i === null) return j;
		if(j === null) return i;
		
		ret = i.next;
		i.next = j.next;
		i.next.prev = i;
		j.next = ret;
		j.next.prev = j;

		return i.p > j.p ? i : j;
	};
	var _ranks = [];
	var _roots = [];
	
	var enqueue = function(priority, value){
		var newnode = {
			p: priority,
			v: value,
			marked: false,
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
	var dequeue = function(){
		var top = _top;
		var result = top;
		var i = 0;
		var l = 0;
		var curr = null;
		var other = null;
		var min = null;
		var max = null;

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

			_roots.length = 0;
			curr = top;
			do{
				_roots.push(curr);
				curr = curr.next;
			} while(curr !== top);
			
			_ranks.length = 0;
			for(i = 0, l = _roots.length; i < l; i++){
				curr = _roots[i];
				while(true){
					if(_ranks[curr.rank] === undefined){
						_ranks[curr.rank] = curr;
						break;
					}
					other = _ranks[curr.rank];
					_ranks[curr.rank] = undefined;
					
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
					
					min.marked = false;
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
	var top = function(){
		return _top.v;
	};
	var size = function(){
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

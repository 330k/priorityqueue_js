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
		var ranks = [];
		var roots = [];
		var curr = null;
		var i = 0;
		var l = 0;
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
				return result.v;
			}

			curr = top;
			do{
				roots.push(curr);
				curr = curr.next;
			} while(curr !== top);
			
			for(i = 0, l = roots.length; i < l; i = i + 1){
				curr = roots[i];
				while(true){
					if(ranks[curr.rank] === undefined){
						ranks[curr.rank] = curr;
						break;
					}
					other = ranks[curr.rank];
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

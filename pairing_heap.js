/* Pairing Heap
 * Copyright 2015 330k
 * https://github.com/330k/
 *
 * This software is released under the MIT License.
 * http://opensource.org/licenses/mit-license.php
 */
function pairing_heap(){
	var _root = null;
	var _size = 0;
	var _merge = function (i, j){
		if(i === null) return j;
		if(j === null) return i;
		
		if(i.p < j.p){
			var ret = i;
			i = j;
			j = ret;
		}
		j.next = i.head;
		i.head = j;
		
		return i;
	};
	var _mergeList = function (s){
		var n = null;
		
		while(s !== null){
			var a = s;
			var b = null;
			s = s.next;
			a.next = null;
			if(s !== null){
				b = s;
				s = s.next;
				b.next = null;
			}
			a = _merge(a, b);
			a.next = n;
			n = a;
		}
		while(n !== null){
			var j = n;
			n = n.next;
			s = _merge(j, s);
		}
		return s;
	};
	
	var enqueue = function(priority, value){
		_root = _merge(_root, {
			p: priority,
			v: value,
			next: null,
			head: null
		});
		_size++;
	};
	var dequeue = function(){
		var result = _root.v;
		_root = _mergeList(_root.head);
		_size--;
		
		return result;
	};
	var top = function(){
		return _root.v;
	};
	var size = function(){
		return _size;
	};
	
	return {
		name: 'Pairing Heap',
		enqueue: enqueue,
		dequeue: dequeue,
		top: top,
		size: size
	};
}

/* Pairing Heap
 * Copyright 2015 330k
 * https://github.com/330k/
 *
 * This software is released under the MIT License.
 * http://opensource.org/licenses/mit-license.php
 */
function pairing_heap(){
	let _root = null;
	let _size = 0;
	const _merge = function (i, j){
		if(i === null) return j;
		if(j === null) return i;
		
		if(i.p < j.p){
			let ret = i;
			i = j;
			j = ret;
		}
		j.next = i.head;
		i.head = j;
		
		return i;
	};
	const _mergeList = function (s){
		let n = null;
		
		while(s !== null){
			let a = s;
			let b = null;
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
			let j = n;
			n = n.next;
			s = _merge(j, s);
		}
		return s;
	};
	
	const enqueue = function(priority, value){
		_root = _merge(_root, {
			p: priority,
			v: value,
			next: null,
			head: null
		});
		_size = _size + 1;
	};
	const dequeue = function(){
		if(_size){
			let result = _root.v;
			_root = _mergeList(_root.head);
			_size = _size - 1;
		
			return result;
		}else{
			return (void 0);
		}
	};
	const top = function(){
		return _root.v;
	};
	const size = function(){
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

/**
 * Leftist Heap
 * Copyright 2015-2022 330k
 * https://github.com/330k/
 *
 * This software is released under the MIT License.
 * http://opensource.org/licenses/mit-license.php
 */
function leftist_heap(){
  "use strcit";
	let _root = null;
	let _size = 0;
	const _merge = function(i, j){
		if(i === null) return j;
		if(j === null) return i;
		
		if(i.p < j.p){
			const ret = i;
			i = j;
			j = ret;
		}
		i.right = _merge(i.right, j);
		if((i.left === null) || (i.left.s < i.right.s)){
			ret = i.right;
			i.right = i.left;
			i.left = ret;
		}
		i.s = ((i.right === null) ? 0 : i.right.s) + 1;
		
		return i;
	};
	const enqueue = function(priority, value){
		_root = _merge(_root, {
			p: priority,
			v: value,
			left: null,
			right: null,
			s: 1
		});
		_size = _size + 1;
	};
	const dequeue = function(){
		if(_size){
			const result = _root.v;
			_root = _merge(_root.left, _root.right);
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
		name: 'Leftist Heap',
		enqueue: enqueue,
		dequeue: dequeue,
		top: top,
		size: size
	};
}

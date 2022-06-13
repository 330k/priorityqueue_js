/**
 * Skew Heap
 * Copyright 2015-2022 330k
 * https://github.com/330k/
 *
 * This software is released under the MIT License.
 * http://opensource.org/licenses/mit-license.php
 */
function skew_heap(){
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
		name: 'Skew Heap',
		enqueue: enqueue,
		dequeue: dequeue,
		top: top,
		size: size
	};
}

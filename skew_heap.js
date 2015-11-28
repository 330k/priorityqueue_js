/* Skew Heap
 * Copyright 2015 330k
 * https://github.com/330k/
 */
function skew_heap(){
	var _root = null;
	var _size = 0;
	
	var _merge = function(i, j){
		if(i === null) return j;
		if(j === null) return i;
		
		if(i.p < j.p){
			var ret = i;
			i = j;
			j = ret;
		}
		i.right = _merge(i.right, j);
		ret = i.right;
		i.right = i.left;
		i.left = ret;
		
		return i;
	};
	
	var enqueue = function(priority, value){
		_root = _merge(_root, {
			p: priority,
			v: value,
			left: null,
			right: null
		});
		_size++;
	};
	var dequeue = function(){
		var result = _root.v;
		
		_root = _merge(_root.left, _root.right);
		_size--;
		
		return result;
	};
	var size = function(){
		return _size;
	};
	
	return {
		name: 'Skew Heap',
		enqueue: enqueue,
		dequeue: dequeue,
		size: size
	};
}

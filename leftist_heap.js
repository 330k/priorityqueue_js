/* Leftist Heap
 * Copyright 2015 330k
 * https://github.com/330k/
 *
 * This software is released under the MIT License.
 * http://opensource.org/licenses/mit-license.php
 */
function leftist_heap(){
	var _root = null;
	var _size = 0;
	var _merge = function(i, j){
		var ret;
		
		if(i === null) return j;
		if(j === null) return i;
		
		if(i.p < j.p){
			ret = i;
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
	
	var enqueue = function(priority, value){
		_root = _merge(_root, {
			p: priority,
			v: value,
			left: null,
			right: null,
			s: 1
		});
		_size++;
	};
	var dequeue = function(){
		var result = _root.v;
		
		_root = _merge(_root.left, _root.right);
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
		name: 'Leftist Heap',
		enqueue: enqueue,
		dequeue: dequeue,
		top: top,
		size: size
	};
}

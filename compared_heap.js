/* Heap for Optimization
 * Copyright 2015 330k
 * https://github.com/330k/
 *
 * This software is released under the MIT License.
 * http://opensource.org/licenses/mit-license.php
 */
function compared_heap(){
	"use strict";
	var _root = null;
	var _size = 0;
	
	var _merge = function(i, j){
		var ret = null;

		if(i === null) return j;
		if(j === null) return i;
		
		if(i.p < j.p){
			ret = i;
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
		_size = _size + 1;
	};
	var dequeue = function(){
		var result = null;
		
		if(_size){
			result = _root.v;
			_root = _merge(_root.left, _root.right);
			_size = _size - 1;
			
			return result;
		}else{
			return (void 0);
		}
	};
	var top = function(){
		return _root.v;
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

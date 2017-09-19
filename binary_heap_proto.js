/* Binary Heap
 * Copyright 2015 330k
 * https://github.com/330k/
 *
 * This software is released under the MIT License.
 * http://opensource.org/licenses/mit-license.php
 */
function binary_heap_proto(){
	"use strict";

    if(!(this instanceof binary_heap_proto)){
        return new binary_heap_proto();
	}
	
	this._data = [];
	this._size = 0;

	return this;
}

binary_heap_proto.prototype.enqueue = function(priority, value){
	var data = this._data;
	var i = 0;
	var p;
	var ret = null;
	
	if(this._size){
		data.push({p: priority, v: value});
		this._size++;
		i = this._size - 1;
		p = (i - 1) >> 1;//Math.floor((i - 1) * 0.5);	// parent
		while(p >= 0){
			if(data[p].p < data[i].p){
				/*ret = data[i];
				data[i] = data[p];
				data[p] = ret;*/
				[data[p], data[i]] = [data[i], data[p]];
			
				i = p;
				p = (i - 1) >> 1;//Math.floor((i - 1) * 0.5);
			}else{
				break;
			}
		}
	}else{
		data.push({p: priority, v: value});
		this._size++;
	}
};

binary_heap_proto.prototype.dequeue = function(){
	var data = this._data;
	var size = this._size;
	var result = data[0].v;
	var i = 0;
	var c1 = 1;	// left child
	var c2 = 2;	// right child
	var p0;
	var p1;
	var p2;
	var ret = null;
	
	data[0] = data[size - 1];
	data.pop();
	size--;
	
	while(c1 < size){
		if(c2 < size){
			p0 = data[i].p;
			p1 = data[c1].p;
			p2 = data[c2].p;
		
			if((p1 < p2) && (p0 < p2)){
				/*ret = data[i];
				data[i] = data[c2];
				data[c2] = ret;*/
				[data[c2], data[i]] = [data[i], data[c2]];
				i = c2;
			}else if(p0 < p1){
				/*ret = data[i];
				data[i] = data[c1];
				data[c1] = ret;*/
				[data[c1], data[i]] = [data[i], data[c1]];
				i = c1;
			}else{
				break;
			}
			c1 = i * 2 + 1;
			c2 = i * 2 + 2;
		}else{
			p0 = data[i].p;
			p1 = data[c1].p;
			
			if(p0 < p1){
				/*ret = data[i];
				data[i] = data[c1];
				data[c1] = ret;*/
				[data[c1], data[i]] = [data[i], data[c1]];
			}
			break;
		}
	}
	
	this._size = size;
	return result;
};

binary_heap_proto.prototype.top = function(){
	return this._data[0].v;
};
binary_heap_proto.prototype.size = function(){
	return this._size;
};
binary_heap_proto.prototype.name = "Binary Heap (Prototype)";
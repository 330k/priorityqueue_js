/* d-ary Heap
 * Copyright 2015 330k
 * https://github.com/330k/
 *
 * This software is released under the MIT License.
 * http://opensource.org/licenses/mit-license.php
 */
function d_ary_heap(d){
	"use strict";
	var _d = d || 4;
	var _data = [];
	var _size = 0;
	var _dinv = 1 / _d;
	var enqueue = function(priority, value){
		var data = _data;
		var ret = null;
		var i = 0;
		var p = 0;
		
		if(_size){
			data.push({p: priority, v: value});
			i = _size;
			p = ~~((i - 1) * _dinv);
			while(p >= 0){
				if(data[p].p < data[i].p){
					ret = data[i];
					data[i] = data[p];
					data[p] = ret;
				
					i = p;
					p = ~~((i - 1) * _dinv);
				}else{
					break;
				}
			}
		}else{
			data.push({p: priority, v: value});
		}
		_size = _size + 1;
	};
	var dequeue = function(){
		var data = _data;
		var size = _size - 1;
		var result = null;
		var i = 0;
		var c = 1;
		var p0 = 0.0;
		var pmax = 0.0;
		var pret = 0.0;
		var cmax = 0;
		var j = 0;
		var jmax = 0;
		var ret = null;
		
		if(_size){
			result = data[0].v;
			data[0] = data[size];
			data.pop();
			
			while(c < size){
				p0 = data[i].p;
				pmax = data[c].p;
				cmax = c;
				
				jmax = c + _d;
				if(jmax > size){
					jmax = size;
				}
				for(j = c + 1; j < jmax; j++){
					pret = data[j].p;
					if(pmax < pret){
						pmax = pret;
						cmax = j;
					}
				}
				if(p0 < pmax){
					ret = data[i];
					data[i] = data[cmax];
					data[cmax] = ret;
				}else{
					break;
				}
				i = cmax;
				c = i * _d + 1;
			}
			
			_size = size;
			return result;
		}else{
			return (void 0);
		}
	};
	var top = function(){
		return _data[0].v;
	};
	var size = function(){
		return _size;
	};
	
	return {
		name: 'd-ary Heap (d=' + _d + ')',
		enqueue: enqueue,
		dequeue: dequeue,
		top: top,
		size: size
	};
}

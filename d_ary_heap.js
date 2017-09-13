/* d-ary Heap
 * Copyright 2015 330k
 * https://github.com/330k/
 *
 * This software is released under the MIT License.
 * http://opensource.org/licenses/mit-license.php
 */
function d_ary_heap(d){
	var _d = d || 4;
	var _data = [];
	var _size = 0;
	var enqueue = function(priority, value){
		var data = _data;
		var dinv = 1 / _d;
		
		if(_size){
			data.push({p: priority, v: value});
			_size++;
			var i = _size - 1;
			var p = ~~((i - 1) * dinv);
			while(p >= 0){
				if(data[p].p < data[i].p){
					var ret = data[i];
					data[i] = data[p];
					data[p] = ret;
				
					i = p;
					p = ~~((i - 1) * dinv);
				}else{
					break;
				}
			}
		}else{
			data.push({p: priority, v: value});
			_size++;
		}
	};
	var dequeue = function(){
		var data = _data;
		var size = _size;
		var result = data[0].v;
		
		data[0] = data[size - 1];
		data.pop();
		size--;
		
		var i = 0;
		var c = 1;
		
		while(c < size){
			var p0 = data[i].p;
			var pmax = data[c].p;
			var cmax = c;
			
			var jmax = c + _d;
			if(jmax > size){
				jmax = size;
			}
			for(var j = c + 1; j < jmax; j++){
				var pret = data[j].p;
				if(pmax < pret){
					pmax = pret;
					cmax = j;
				}
			}
			if(p0 < pmax){
				var ret = data[i];
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
	};
	var top = function(){
		return data[0].v;
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

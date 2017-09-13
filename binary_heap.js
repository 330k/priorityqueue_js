/* Binary Heap
 * Copyright 2015 330k
 * https://github.com/330k/
 *
 * This software is released under the MIT License.
 * http://opensource.org/licenses/mit-license.php
 */
function binary_heap(){
	var _data = [];
	var _size = 0;
	var enqueue = function(priority, value){
		var data = _data;
		
		if(_size){
			data.push({p: priority, v: value});
			_size++;
			var i = _size - 1;
			var p = (i - 1) >> 1;//Math.floor((i - 1) * 0.5);	// parent
			while(p >= 0){
				if(data[p].p < data[i].p){
					var ret = data[i];
					data[i] = data[p];
					data[p] = ret;
				
					i = p;
					p = (i - 1) >> 1;//Math.floor((i - 1) * 0.5);
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
		var c1 = 1;	// left child
		var c2 = 2;	// right child
		
		while(c1 < size){
			if(c2 < size){
				var p0 = data[i].p;
				var p1 = data[c1].p;
				var p2 = data[c2].p;
			
				if((p1 < p2) && (p0 < p2)){
					var ret = data[i];
					data[i] = data[c2];
					data[c2] = ret;
					i = c2;
				}else if(p0 < p1){
					var ret = data[i];
					data[i] = data[c1];
					data[c1] = ret;
					i = c1;
				}else{
					break;
				}
				c1 = i * 2 + 1;
				c2 = i * 2 + 2;
			}else{
				var p0 = data[i].p;
				var p1 = data[c1].p;
				
				if(p0 < p1){
					var ret = data[i];
					data[i] = data[c1];
					data[c1] = ret;
				}
				break;
			}
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
		name: 'Binary Heap',
		enqueue: enqueue,
		dequeue: dequeue,
		top: top,
		size: size
	};
}

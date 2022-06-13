/**
 * d-ary Heap
 * Copyright 2015-2022 330k
 * https://github.com/330k/
 *
 * This software is released under the MIT License.
 * http://opensource.org/licenses/mit-license.php
 */
function d_ary_heap(d){
  "use strict";
	const _d = d || 4;
	const _data = [];
	let _size = 0;
	const _dinv = 1 / _d;
	const enqueue = function(priority, value){
		const data = _data;
		
		if(_size){
			data.push({p: priority, v: value});
			let i = _size;
			let p = ~~((i - 1) * _dinv);
			while(p >= 0){
				if(data[p].p < data[i].p){
					const ret = data[i];
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
	const dequeue = function(){
		const data = _data;
		const size = _size - 1;
		let i = 0;
		let c = 1;
		
		if(_size){
			const result = data[0].v;
			data[0] = data[size];
			data.pop();
			
			while(c < size){
				const p0 = data[i].p;
				let pmax = data[c].p;
				let cmax = c;
				
				let jmax = c + _d;
				if(jmax > size){
					jmax = size;
				}
				for(let j = c + 1; j < jmax; j++){
					let pret = data[j].p;
					if(pmax < pret){
						pmax = pret;
						cmax = j;
					}
				}
				if(p0 < pmax){
					let ret = data[i];
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
	const top = function(){
		return _data[0].v;
	};
	const size = function(){
		return _size;
	};
	
	return {
		name: "d-ary Heap (d=" + _d + ")",
		enqueue: enqueue,
		dequeue: dequeue,
		top: top,
		size: size
	};
}

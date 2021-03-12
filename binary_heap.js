/* Binary Heap
 * Copyright 2015 330k
 * https://github.com/330k/
 *
 * This software is released under the MIT License.
 * http://opensource.org/licenses/mit-license.php
 */
function binary_heap(){
	const _data = [];
	let _size = 0;
	const enqueue = function(priority, value){
		const data = _data;
		
		if(_size){
			data.push({p: priority, v: value});
			let i = _size;
			let p = (i - 1) >> 1;//Math.floor((i - 1) * 0.5);	// parent
			while(p >= 0){
				if(data[p].p < data[i].p){
					let ret = data[i];
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
		}
		_size = _size + 1;
	};
	const dequeue = function(){
		const data = _data;
		let size = _size - 1;
		
		if(_size){
			let result = data[0].v;
			data[0] = data[size];
			data.pop();
			let i = 0;
			let c1 = 1;	// left child
			let c2 = 2;	// right child
			
			while(c1 < size){
				if(c2 < size){
					let p0 = data[i].p;
					let p1 = data[c1].p;
					let p2 = data[c2].p;
				
					if((p1 < p2) && (p0 < p2)){
						let ret = data[i];
						data[i] = data[c2];
						data[c2] = ret;
						i = c2;
					}else if(p0 < p1){
						let ret = data[i];
						data[i] = data[c1];
						data[c1] = ret;
						i = c1;
					}else{
						break;
					}
					c1 = (i << 1) + 1;
					c2 = (i << 1) + 2;
				}else{
					let p0 = data[i].p;
					let p1 = data[c1].p;
					
					if(p0 < p1){
						let ret = data[i];
						data[i] = data[c1];
						data[c1] = ret;
					}
					break;
				}
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
		name: 'Binary Heap',
		enqueue: enqueue,
		dequeue: dequeue,
		top: top,
		size: size
	};
}

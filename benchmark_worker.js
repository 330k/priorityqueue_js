'use strict';

function timingQueuePerformance(queue, data){
	var sorted = [];
	var time = [];
	var n = data.length;

	// 連続追加、削除のテスト
	time.push((new Date()).getTime());
	var q = new queue();
	for(var i = 0; i < n; i++){
		q.enqueue(data[i].p, data[i].v);
	}
	time.push((new Date()).getTime());
	while(q.size() > 0){
		sorted.push(q.dequeue());
	}
	time.push((new Date()).getTime());
	
	// Douglas-Peuckerを想定したテスト(2個追加して1個削除の繰り返し)
	for(var i = 0; i < n; i += 2){
		q.enqueue(data[i].p, data[i].v);
		q.enqueue(data[i + 1].p, data[i + 1].v);
		sorted.push(q.dequeue());
	}
	while(q.size() > 0){
		sorted.push(q.dequeue());
	}
	time.push((new Date()).getTime());
	
	console.log(crc32(sorted).toString(16));	// 結果の確認
	
	var queuename = q.name;
	q = null;
	
	return {
		n: n,
		name: queuename,
		sequential_enqueue: time[1] - time[0],
		sequential_dequeue: time[2] - time[1],
		sequential_total: time[2] - time[0],
		pseudodp: time[3] - time[2]
	};
}

var crc32 = (function(){
	var poly = 0xEDB88320;  
	var table = [];
	//create table
	for(var i = 0; i < 256; i++) {  
		var u = i;  
		for(var j = 0; j < 8; j++) {  
			if(u & 0x1) u = (u >>> 1) ^ poly;  
			else        u >>>= 1;  
		}  
		table.push(u>>>0);
	}

	return (function(array){
		var result = 0xFFFFFFFF;
		var l = array.length;

		//calculate
		for(var i = 0; i < l; i++)
			result = ((result >>> 8) ^ table[(array[i] & 0xFF) ^ (result & 0xFF)])>>>0;
		return (~result)>>>0;
	});
})();

onmessage = function(e) {
	// ダミーデータ生成
	var i = 0;
	var data = [];
	
  for(i = 0; i < e.data.n; i++){
    data.push({p: mt.next(), v: i});
  }
  
  // 測定
  for(i = 0; i < e.data.target.length; i++){
    postMessage(timingQueuePerformance(self[e.data.target[i]], data));
  }
};
importScripts('mt.js');
importScripts('binary_heap.js');
importScripts('d_ary_heap.js');
importScripts('fibonacci_heap.js');
importScripts('leftist_heap.js');
importScripts('pairing_heap.js');
importScripts('skew_heap.js');

var mt = new MersenneTwister(0x9876543210);

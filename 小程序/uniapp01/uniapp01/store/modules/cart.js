import Vue  from 'vue'
const state = {
	cartList:[
		{"id":"1","img":"../../static/logo.png","desc":"床品","price":"1221","isSelected":false,"buyCount":1},
		{"id":"2","img":"../../static/logo.png","desc":"服饰鞋包","price":"131","isSelected":true,"buyCount":3},
		{"id":"3","img":"../../static/logo.png","desc":"乳饮酒水","price":"11","isSelected":true,"buyCount":2}
	]
	
}
const mutations = {
	addGoodsMutations(state,goods){
		const item = state.cartList.find(item=>item.id === goods.id);
		if(item){
			item.buyCount = item.buyCount+ 1
			console.log(item.buyCount)
		 
		}else{
			Vue.set(goods,"isSelected",true)
			Vue.set(goods,"buyCount",1)
			state.cartList.push(goods);
		}
		
	},
	changeCountMutations(state,{isAdd,index}){
		console.log(isAdd+","+index)
		if(isAdd){
			state.cartList[index].buyCount+=1;
		}else{
			
			if(state.cartList[index].buyCount>1){
				state.cartList[index].buyCount-=1;
			}else{
				// state.cartList[index].buyCount=0;
				
				wx.showModal({
					title:"提示",
					content:"您确定删除该上商品吗？",
					success(res) {
		
							if(res.confirm){
								state.cartList.splice(index,1);
							}
						 
					}
				
				});
				
			}
		}
		
	},
	changeSelectedMutations(state,{isSelected,index}){
		console.log(isSelected+" changeSelectedMutations ,"+index)
		state.cartList[index].isSelected =!isSelected;
		
	},
	changeAllSelectedMutations(state,allSelected){
		state.cartList.forEach(item=>item.isSelected=!allSelected);
	}
	
}
const action = {
	
}
const getters = {
	isAllSelected(state){
		 
		console.log(state.cartList.every(item=>item.isSelected))
		return state.cartList.every(item=>item.isSelected)
	},
	totalCount(state){
		return state.cartList.reduce((pre,item)=>{
			// if(!item.isSelected){
			// 	return pre += 0;
			// }
			return pre += item.isSelected? item.buyCount:0;
		},0);
	},
	
	totalPrice(state){
		return state.cartList.reduce((pre,item)=>{
			// if(!item.isSelected){
			// 	return pre += 0;
			// }
			return pre += item.isSelected? item.price * item.buyCount:0;
		},0);
	},
	
}

export default{
	namespaced:true,
	state,
	mutations,
	action,
	getters,
}
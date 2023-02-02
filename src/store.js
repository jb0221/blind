import { configureStore, createSlice } from '@reduxjs/toolkit';


let detailInfo = createSlice({
    name : "detailInfo",
    initialState : {},
    reducers : {
        MakeDetailInfo (state,a){
            state.title = a.payload.title;
        }
    }
})

let allPost = createSlice({
    name : "allPost",
    initialState : [],
    reducers : {
        saveAllPost (state,a){
        
            return state = a.payload;
        },
        increaseLike (state,a){
            
            // 좋아요 수 플러스 1 
            let right = 0;
            let false2 = 0;
            let idx = 0;
            state.filter((post,idx)=>{ 

                if(post.postId==a.payload){
                     idx = idx;
                } 
            })
           
                state[idx].like =Number(state[idx].like)+1;
          
                
        }       
    }
})


// 1. state 생성
let user = createSlice({
    name : "userInfo",
    initialState : {'name':"kim", "age":"30"},
    reducers :{ 
        ChangeName (state){
            state.name = 'john ' +state.name 
        },
        ChangeAge(state,a){
           state.age++;     // 파라미터 쓰려면 a.payload
        }
    }

})

export let {ChangeName ,ChangeAge} = user.actions; // 다른 곳에서 사용할 수 있도록
export let {MakeDetailInfo} = detailInfo.actions;
export let {saveAllPost, increaseLike} = allPost.actions;
// redux의 state를 변경하려면 변경함수를 미리 만들어놓고 
// 사용해야 하는 컴포넌트에서  호출해줘


let userInfo = createSlice({
    name : 'userInfo',
    initialState : {

    }
})



// 2. 만든 state를 reducer에 등록
export default configureStore({
  reducer: {
    user :user.reducer,
    detailInfo : detailInfo.reducer,
    allPost : allPost.reducer
   }
}) 
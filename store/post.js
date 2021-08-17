const posts = [
  {title:'Post 1', date: new Date(), views: 22, comments:[1,2], _id: 'id1'},
  {title:'Post 2', date: new Date(), views: 22, comments:[1,2], _id: 'id2'},
  {title:'Post 3', date: new Date(), views: 22, comments:[1,2], _id: 'id3'},
  {title:'Post 4', date: new Date(), views: 22, comments:[1,2], _id: 'id4'},

]

export const actions = {
  async FETCH_ADMIN_POSTS({}){
    return await new Promise(resolve =>{
      setTimeout(()=>{
        resolve(posts)
      },1000)
    })
  },
  async REMOVE({commit}, id){

  },
  async UPDATE({commit}, {id, text}){

  },
  async FETCH_ADMIN_BY_ID({}, id){
    return await new Promise(resolve =>{
      setTimeout(()=>{
        resolve(posts.find(p => p._id === id))
      },1000)
    })
  }

}

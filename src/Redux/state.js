let renderPage = () => {

}
export const subscribe = (observer) =>{
  renderPage = observer;
}

let state = {
  profilePage: {
    ReviewInfo: [
      { id:1 , src: "https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg", text: "Hi, its my first post"},
      { id:2 , src: "https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg", text: "Hi"}
    ],
    InputText: "" 
  },
  dialogsPage: {
    MessageData:[
      {id: 1, message: "Hi"},
      {id: 2, message: "Hello"},
      {id: 3, message: "How are you"},
      {id: 4, message: "Im ok"},
      {id: 5, message: "What about you"},
      {id: 6, message: "Im also ok"} 
    ], 
    DialogsData: [
      {id: 1 , name: "Myron"},
      {id: 2 , name: "Oleg"},
      {id: 3 , name: "Andrew"},
      {id: 4 , name: "Dimych"},
      {id: 5 , name: "Igor"},
      {id: 6 , name: "Svetlana"},
    ],
  },
  sitebar: {
    SitebarFriends:[
      {image: 'https://i.pinimg.com/originals/3f/3d/d9/3f3dd9219f7bb1c9617cf4f154b70383.jpg', name: 'Jorik'},
      {image: 'https://i.pinimg.com/originals/3f/3d/d9/3f3dd9219f7bb1c9617cf4f154b70383.jpg', name: 'Jorik'},
      {image: 'https://i.pinimg.com/originals/3f/3d/d9/3f3dd9219f7bb1c9617cf4f154b70383.jpg', name: 'Jorik'},
    ]
  }
}
window.state = state;
export let Post = () => {
  let newPost = { id:3 , src: "https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg", text: state.profilePage.InputText,};
  state.profilePage.ReviewInfo.push(newPost);
  state.profilePage.InputText = '';
  renderPage();
}

export let inputChange = (text) => {
  state.profilePage.InputText = text;
  renderPage();
}

export default state;
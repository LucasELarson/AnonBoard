import React from 'react';
import {getDatabase, ref, set, onValue} from "firebase/database"
import {signInWithGoogle} from "../firebase"



const startComment = () => {
  document.getElementById('comment-container').style.display = "grid"
}


export const fetchComments = () => {
  document.getElementById('comment-container').style.display = "none"
    const topicName = String(document.getElementById('current-topic').getAttribute('value'))
    const db = getDatabase();

    const infoRef = ref(db, topicName);
    onValue(infoRef, (snapshot) => {
            const messageContainer = document.getElementById('message-container')
            messageContainer.innerHTML = ''
            const data = snapshot.val();  
            let keys = Object.keys(data);
            const updated = keys.map( key => {
              return{
                key, ...data[key]
              }
            })          
            for( let i = 0; i < updated.length; i++){
              const newMessage = document.createElement('p')
              newMessage.setAttribute('id', 'message')
              newMessage.innerHTML = updated[i].comment.text
              console.log(updated.parent)
              messageContainer.prepend(newMessage)
            } 
    })
    document.getElementById("text-input").value = ""
}


const makeComment = () => {
    document.getElementById('comment-container').style.display = "none"
    let text = document.getElementById('text-input').value
    const topicName = String(document.getElementById('current-topic').getAttribute('value'))
    const db = getDatabase();
    const reference = ref(db, `${topicName}/` + new Date())


    set(reference, {
      comment: {text: text,
                }
    })

    const infoRef = ref(db, topicName);
    onValue(infoRef, (snapshot) => {
            const messageContainer = document.getElementById('message-container')
            messageContainer.innerHTML = ''
            const data = snapshot.val();  
            let keys = Object.keys(data);
            const updated = keys.map( key => {
              return{
                key, ...data[key]
              }
            })
            
            for( let i = 0; i < updated.length; i++){
              const newMessage = document.createElement('p')
              newMessage.setAttribute('id', 'message')
              newMessage.innerHTML = updated[i].comment.text
              console.log(updated.parent)
              messageContainer.prepend(newMessage)
            }   
            
    })
    document.getElementById("text-input").value = ""
}

const Header = () => {
  return (
    <div id='header'>
      <h1  onClick={signInWithGoogle} id='topic-maker'>Post Topic</h1>
      <h1 id='header-title'>ANON BOARD</h1>
      <h1 onClick={startComment} id='comment-maker'>Comment</h1>
      <div id='comment-container'>
        <input type="text"id='text-input' placeholder='enter message here'></input>
        <button type="sumbit" onClick={makeComment}>Send</button>
      </div>
    </div>
  );
}

export default Header;

import React from 'react';
import {getDatabase, ref, set} from "firebase/database"
import {signInWithGoogle} from "../firebase"


const startComment = () => {
  document.getElementById('comment-container').style.display = "grid"
}


const makeComment = () => {
    document.getElementById('comment-container').style.display = "none"
    let text = document.getElementById('text-input').value
    const time = new Date();
    console.log(time)
    const db = getDatabase();
    const reference = ref(db, "What do you think about dogs?/" + new Date())

    set(reference, {
      comment: {text: text,
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

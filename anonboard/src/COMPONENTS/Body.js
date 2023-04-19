import { getDatabase, onValue, ref } from "firebase/database";
import { fetchComments } from "./Header";

const Body = () => {

  const db = getDatabase();

    // WHEN THE PAGE IS UPDATED IT GET A NEW COMMENT COUNT PER TOPIC TILE //
    const infoRef = ref(db);
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
            const topicPicker = document.getElementById('topic-picker')

            // ALLOWS COMMENTS TO BE ITERATED THROUGH TO GET A COMMENT COUNT //
            for(let i = 0; i <updated.length; i++){
              let keychain = Object.keys(updated[i]);
              const updatedcomments = keychain.map( key => {
              return{
                key, ...updated[i][key].comment
              }
              
              })
              // ITERATES THROUGH EACH TOPIC TILE AND ADJUSTS COMMENT COUNT //
              for( let x = 0; x<topicPicker.children.length; x++){
                if(topicPicker.children[x].children[0].innerHTML === updated[i].key){
                  topicPicker.children[x].children[1].innerHTML = updatedcomments.length - 1
                }
              }
            }             
    })
  
  return (
    <div id="body">
      <div id="current-topic"></div>
      <div id="topic-picker">
        <div id="topic-tile" onClick={() => {document.getElementById('current-topic').setAttribute('value', 'Thoughts on Dogs?'); document.getElementById('topic-prompt').innerHTML = 'Thoughts on Dogs?'; fetchComments()}}>
          <div id="topic-title" >Thoughts on Dogs?</div>
          <div id="comment-count">75</div>
        </div>
        <div id="topic-tile" onClick={() => {document.getElementById('current-topic').setAttribute('value', 'Thoughts on Cats?'); document.getElementById('topic-prompt').innerHTML = 'Thoughts on Cats?'; fetchComments()}}>
          <div id="topic-title" >Thoughts on Cats?</div>
          <div id="comment-count">712</div>
        </div>
        <div id="topic-tile" onClick={() => {document.getElementById('current-topic').setAttribute('value', 'Thoughts on Corn?'); document.getElementById('topic-prompt').innerHTML = 'Thoughts on Corn?'; fetchComments()}}>
          <div id="topic-title" >Thoughts on Corn?</div>
          <div id="comment-count">712</div>
        </div>
        <div id="topic-tile" onClick={() => {document.getElementById('current-topic').setAttribute('value', 'Thoughts on Fish?'); document.getElementById('topic-prompt').innerHTML = 'Thoughts on Fish?'; fetchComments()}}>
          <div id="topic-title" >Thoughts on Fish?</div>
          <div id="comment-count">5</div>
        </div>
        <div id="topic-tile" onClick={() => {document.getElementById('current-topic').setAttribute('value', 'Thoughts on Whales?'); document.getElementById('topic-prompt').innerHTML = 'Thoughts on Whales?'; fetchComments()}}>
          <div id="topic-title" >Thoughts on Whales?</div>
          <div id="comment-count">92</div>
        </div>
        <div id="topic-tile" onClick={() => {document.getElementById('current-topic').setAttribute('value', 'Thoughts on Deer?'); document.getElementById('topic-prompt').innerHTML = 'Thoughts on Deer?'; fetchComments()}}>
          <div id="topic-title" >Thoughts on Deer?</div>
          <div id="comment-count">1</div>
        </div>
        <div id="topic-tile" onClick={() => {document.getElementById('current-topic').setAttribute('value', 'Thoughts on Bears?'); document.getElementById('topic-prompt').innerHTML = 'Thoughts on Bears?'; fetchComments()}}>
          <div id="topic-title" >Thoughts on Bears?</div>
          <div id="comment-count">1</div>
        </div>
        <div id="topic-tile"onClick={() => {document.getElementById('current-topic').setAttribute('value', 'Thoughts on Eagles?'); document.getElementById('topic-prompt').innerHTML = 'Thoughts on Eagles?'; fetchComments()}}>
          <div id="topic-title" >Thoughts on Eagles?</div>
          <div id="comment-count">1</div>
        </div>
        <div id="topic-tile" onClick={() => {document.getElementById('current-topic').setAttribute('value', 'Thoughts on Coal?'); document.getElementById('topic-prompt').innerHTML = 'Thoughts on Coal?'; fetchComments()}}>
          <div id="topic-title" >Thoughts on Coal?</div>
          <div id="comment-count">1</div>
        </div>
        <div id="topic-tile" onClick={() => {document.getElementById('current-topic').setAttribute('value', 'Thoughts on Cell Phones?'); document.getElementById('topic-prompt').innerHTML = 'Thoughts on Cell Phones?'; fetchComments()}}>
          <div id="topic-title">Thoughts on Cell Phones?</div>
          <div id="comment-count">1</div>
        </div>
        <div id="topic-tile" onClick={() => {document.getElementById('current-topic').setAttribute('value', 'Thoughts on Speaker Wire?'); document.getElementById('topic-prompt').innerHTML = 'Thoughts on Speaker Wire?'; fetchComments()}}>
          <div id="topic-title" >Thoughts on Speaker Wire?</div>
          <div id="comment-count">1</div>
        </div>
        <div id="topic-tile" onClick={() => {document.getElementById('current-topic').setAttribute('value', 'Thoughts on Dead Bugs?'); document.getElementById('topic-prompt').innerHTML = 'Thoughts on Dead Bugs?'; fetchComments()}}>
          <div id="topic-title" >Thoughts on Dead Bugs?</div>
          <div id="comment-count">1</div>
        </div>
        

      </div>
      <div id="topic">
        <div id="topic-prompt"></div>
        <div id="message-container">
        
        <p id="message">15</p>
        </div>
      </div>
    </div>
  );
 }

export default Body
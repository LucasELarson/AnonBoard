import { fetchComments } from "./Header";

const Body = () => {

  
  return (
    <div id="body">
      <div id="current-topic"></div>
      <div id="topic-picker">
        <div id="topic-tile">
          <div id="topic-title" onClick={() => {document.getElementById('current-topic').setAttribute('value', 'Thoughts on Dogs?'); document.getElementById('topic-prompt').innerHTML = 'Thoughts on Dogs?'; fetchComments()}}>Thoughts on Dogs?</div>
          <div id="comment-count">75</div>
        </div>
        <div id="topic-tile">
          <div id="topic-title" onClick={() => {document.getElementById('current-topic').setAttribute('value', 'Thoughts on Cats?'); document.getElementById('topic-prompt').innerHTML = 'Thoughts on Cats?'; fetchComments()}}>Thoughts on Cats?</div>
          <div id="comment-count">712</div>
        </div>
        <div id="topic-tile">
          <div id="topic-title" onClick={() => {document.getElementById('current-topic').setAttribute('value', 'Thoughts on Corn?'); document.getElementById('topic-prompt').innerHTML = 'Thoughts on Corn?'; fetchComments()}}>Thoughts on Corn?</div>
          <div id="comment-count">712</div>
        </div>
        <div id="topic-tile">
          <div id="topic-title" onClick={() => {document.getElementById('current-topic').setAttribute('value', 'Thoughts on Fish?'); document.getElementById('topic-prompt').innerHTML = 'Thoughts on Fish?'; fetchComments()}}>Thoughts on Fish?</div>
          <div id="comment-count">5</div>
        </div>
        <div id="topic-tile">
          <div id="topic-title" onClick={() => {document.getElementById('current-topic').setAttribute('value', 'Thoughts on Whales?'); document.getElementById('topic-prompt').innerHTML = 'Thoughts on Whales?'; fetchComments()}}>Thoughts on Whales?</div>
          <div id="comment-count">92</div>
        </div>
        <div id="topic-tile">
          <div id="topic-title" onClick={() => {document.getElementById('current-topic').setAttribute('value', 'Thoughts on Deer?'); document.getElementById('topic-prompt').innerHTML = 'Thoughts on Deer?'; fetchComments()}}>Thoughts on Deer?</div>
          <div id="comment-count">1</div>
        </div>
        <div id="topic-tile">
          <div id="topic-title" onClick={() => {document.getElementById('current-topic').setAttribute('value', 'Thoughts on Bears?'); document.getElementById('topic-prompt').innerHTML = 'Thoughts on Bears?'; fetchComments()}}>Thoughts on Bears?</div>
          <div id="comment-count">1</div>
        </div>
        <div id="topic-tile">
          <div id="topic-title" onClick={() => {document.getElementById('current-topic').setAttribute('value', 'Thoughts on Eagles?'); document.getElementById('topic-prompt').innerHTML = 'Thoughts on Eagles?'; fetchComments()}}>Thoughts on Eagles?</div>
          <div id="comment-count">1</div>
        </div>
        <div id="topic-tile">
          <div id="topic-title" onClick={() => {document.getElementById('current-topic').setAttribute('value', 'Thoughts on Coal?'); document.getElementById('topic-prompt').innerHTML = 'Thoughts on Coal?'; fetchComments()}}>Thoughts on Coal?</div>
          <div id="comment-count">1</div>
        </div>
        <div id="topic-tile">
          <div id="topic-title"onClick={() => {document.getElementById('current-topic').setAttribute('value', 'Thoughts on Cell Phones?'); document.getElementById('topic-prompt').innerHTML = 'Thoughts on Cell Phones?'; fetchComments()}}>Thoughts on Cell Phones?</div>
          <div id="comment-count">1</div>
        </div>
        <div id="topic-tile">
          <div id="topic-title" onClick={() => {document.getElementById('current-topic').setAttribute('value', 'Thoughts on Speaker Wire?'); document.getElementById('topic-prompt').innerHTML = 'Thoughts on Speaker Wire?'; fetchComments()}}>Thoughts on Speaker Wire?</div>
          <div id="comment-count">1</div>
        </div>
        <div id="topic-tile">
          <div id="topic-title" onClick={() => {document.getElementById('current-topic').setAttribute('value', 'Thoughts on Dead Bugs?'); document.getElementById('topic-prompt').innerHTML = 'Thoughts on Dead Bugs?'; fetchComments()}}>Thoughts on Dead Bugs?</div>
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
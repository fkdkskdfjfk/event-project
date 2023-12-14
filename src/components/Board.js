import { useState } from "react";
import axios from 'axios';
// import ReactHtmlParser from 'html-react-parser';
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import '../Board.css';

function Board () {

  const [boardContent, setBoardContent] = useState({
    title: '',
    content: '',
    date: '',
    view: '',
    writer: '',
  });
  
  // const [viewContent, setViewContent] = useState([]);
  
  // useEffect(() => {
  // axios.get(`http://localhost:8088/board`)
  //   .then((response) => {
  //     setViewContent(response.data);
  //   })
  // }, [viewContent])

  const submitReview = async (e) => {
    try {
      e.preventDefault();
      const result = await axios.post(`http://localhost:8088/board`, {
        title: boardContent.title,
        content: boardContent.content,
        date: boardContent.date,
        view: boardContent.view,
        writer: boardContent.writer
      })
      if (result.data.flag) {
        alert('등록 완료!');
      }
    } catch (err) {
      console.error(err);
    }
    window.location.href = 'http://localhost:3000/board'
  };

  const getValue = e => {
    const { name, value } = e.target;
    setBoardContent({
      ...boardContent,
      [name]: value
    })
  };

  return (
  <div id="board-form">
    <div className="board">
      <h1>게시판</h1>
      <div className='board-container'>
        {/* {viewContent.map(element =>
          <div className="title">
            <h2>{element.title}</h2>
            <div className="cont">
              {ReactHtmlParser(element.content)}
            </div>
          </div>
        )} */}
      </div>
      <div className='form-wrapper'>
        <input className="title-input"
          type='text'
          placeholder='제목'
          onChange={getValue}
          name='title'
          />
          <input className="title-input1"
          type='text'
          placeholder='작성일'
          onChange={getValue}
          name='date'
          />
          <input className="title-input1"
          type='text'
          placeholder='작성자'
          onChange={getValue}
          name='writer'
          />
        <CKEditor
          editor={ClassicEditor}
          data=''
          onReady={editor => {
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            console.log({ event, editor, data });
            setBoardContent({
              ...boardContent,
              content: data
            })
          }}
          onBlur={(event, editor) => {
            console.log('Blur.', editor);
          }}
          onFocus={(event, editor) => {
            console.log('Focus.', editor);
          }}
          />
      </div>
      <button className="submit-button" onClick={submitReview}>입력</button>
    </div>
  </div>
  );
};

export default Board;
React Blog Editor using TinyMCE

This project implements a Rich Text Blog Editor in React using TinyMCE, allowing users to write and format blog content with a modern text editor.

TinyMCE is loaded using a valid API key so the editor works without popup warnings.

📦 Installation

Install TinyMCE React package:
npm install @tinymce/tinymce-react


🔑 API Key Setup

Get a free API key from:

https://www.tiny.cloud/

Copy your key.

🧩 Usage

Create:

CreateBlog.jsx

Paste this:

import React , {useState} from "react";
import { Editor } from '@tinymce/tinymce-react';

const CreateBlog = () => {

  const [title, SetTitle] = useState("");
  const [body, SetBody] = useState("");

  const submit = (e) => {
    e.preventDefault();
    console.log(title);
    console.log(body);
  };

  return (
    <form onSubmit={submit}>    

      <input 
        type="text"
        placeholder="Title"
        onChange={(e)=> SetTitle(e.target.value)}
        required
      />

      <Editor
        apiKey="YOUR_API_KEY"
        tinymceScriptSrc="https://cdn.tiny.cloud/1/YOUR_API_KEY/tinymce/6/tinymce.min.js"
        init={{
          height: 500,
          menubar: true,

          plugins: [
            'advlist autolink lists link image charmap preview anchor',
            'searchreplace visualblocks code fullscreen',
            'insertdatetime media table paste code help wordcount'
          ],

          toolbar:
            'undo redo | blocks fontfamily fontsize | ' +
            'bold italic underline strikethrough forecolor backcolor | ' +
            'alignleft aligncenter alignright alignjustify | ' +
            'bullist numlist outdent indent | ' +
            'link image media table | ' +
            'removeformat preview fullscreen help'
        }}

        onEditorChange={(content) => SetBody(content)}
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default CreateBlog;

▶ Run App
npm start

⚠ Troubleshooting
Popup: “Get API Key”

Means editor loaded in no-api-key mode.


apiKey="YOUR_KEY"
tinymceScriptSrc="https://cdn.tiny.cloud/1/YOUR_KEY/tinymce/6/tinymce.min.js"



Then:

Restart dev server

Hard refresh browser

Remove TinyMCE scripts from index.html

🧠 Tech Stack

React

TinyMCE 6

JavaScript

📜 License

MIT License — free to use & modify
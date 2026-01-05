import React , {useState} from "react";
import { Editor } from '@tinymce/tinymce-react';
import axios from 'axios';
const CreateBlog = () => {

    const[title, SetTitle] = useState("");
    const[body, SetBody] = useState("");

    const submit = async (e) => {
        e.preventDefault();
        console.log("Title:", title);
        console.log("HTML Template:", body);
        
        try {
            const response = await axios.post("http://localhost:5000/api/blog", {
                title: title,
                htmlTemplate: body
            });
            
            console.log("API Response:", response.data);
            alert("Blog published successfully!");
            SetTitle("");
            SetBody("");
        } catch (error) {
            console.error("Request Error:", error);
            alert("Error sending data to backend");
        }
    }
    return(
        <div>
            <form onSubmit={(event) => {submit(event)}}>    
                <input type="text" placeholder="Title" 
                    value={title}
                    onChange={(e)=>{SetTitle(e.target.value)}}  />

                <Editor
        apiKey="yzaxxwcuafhitmh9atqgod0kledn6xlii0y9f6o11h0in7d7"
  tinymceScriptSrc="https://cdn.tiny.cloud/1/yzaxxwcuafhitmh9atqgod0kledn6xlii0y9f6o11h0in7d7/tinymce/6/tinymce.min.js"
        initialValue="<p>This is the initial content of the editor.</p>"
        init={{
  height: 500,
  menubar: true,

 plugins: [
  'advlist', 'autolink', 'lists', 'link', 'image',
  'charmap', 'preview', 'anchor', 'searchreplace',
  'visualblocks', 'code', 'fullscreen', 'insertdatetime',
  'media', 'table', 'paste', 'help', 'wordcount'
],

 


    toolbar:
  'undo redo | blocks fontfamily fontsize | ' +
  'bold italic underline strikethrough forecolor backcolor | ' +
  'alignleft aligncenter alignright alignjustify | ' +
  'bullist numlist outdent indent | ' +
  'link image media table | ' +   // <-- ensure image + media are here
  'removeformat preview fullscreen help',

  content_style:
    'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
}}

        onEditorChange={(newText) => {
            SetBody(newText);
            console.log("Editor HTML Content:", newText);
        }}
    />

    <button type="submit">Submit</button>
</form>
        </div>
    );
};

export default CreateBlog;

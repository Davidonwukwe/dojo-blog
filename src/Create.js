import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import useFetch from "./useFetch";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();
    const blogsUrl = 'http://localhost:8000/blogs';
    const handleSubmit = (event) => {
        event.preventDefault();
        const blog = {title, body, author};
        setIsLoading(true);
        fetch(blogsUrl, {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then((response) => {
            setIsLoading(false);
            history.push('/');


        })
        
    }
    return ( 
        <div className="create">
            <h2>Add a new blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title</label>
                <input 
                  type="text"
                  required 
                  value={title}
                  onChange={($event)=> setTitle($event.target.value)}
                  />
                <label>Blog Body</label>
                <textarea 
                  type="text"
                  required
                  value={body}
                  onChange={($event)=> setBody($event.target.value)}
                  ></textarea>
                <label>Blog Author</label>
                <select
                    value={author}
                    onChange={($event)=> setAuthor($event.target.value)}
                    
                > 
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>

                </select>
                {!isLoading && <button>Add Blog</button>}
                {isLoading && <button disabled>Loading... </button>}
            </form>
        </div>
     );
}
 
export default Create;
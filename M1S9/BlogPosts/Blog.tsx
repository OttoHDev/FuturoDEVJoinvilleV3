import { useEffect, useState } from "react";
import './Blog.css'

type Post = {
    id: number;
    title: string;
    body: string;
    userId: number;
}

type FetchState<T> = {
    data: T | null;
    loading: boolean;
    error: string | null;
}

function Blog(){
    
    const [state, setState] = useState<FetchState<Post[]>>({
        data: null,
        loading: true,
        error: null
    })
    
    useEffect(() => 
        {
            const fetchPosts = async () =>{
                try{

                    const response = await fetch(
                        'https://jsonplaceholder.typicode.com/posts');

                    if(!response.ok){
                        throw new Error('HTTP Error');
                    }

                    const data: Post[] = await response.json();
                    setState({
                        data: data,
                        loading: false,
                        error: null 
                    });

                }catch(err){
                    setState({
                        data: null,
                        loading: false,
                        error: 'Erro!!! (' + err + ")" 
                    });
                }
            }

            fetchPosts();
        }
    , []);
    
    if (state.loading) {
    return <div className="loading">Carregando posts...</div>;
  }

    if (state.error) {
    return <div className="error">Erro: {state.error}</div>;
  }
    
    return(
        <div className="blog-container">
            <h1>Últimas Postagens</h1>
            
            <div className="posts-grid">
                {state.data?.map((post) => (
                <article key={post.id} className="post-card">
                    <h2>{post.title}</h2>
                    <p>{post.body.substring(0, 100)}...</p>
                    <button 
                    onClick={() => alert(`Post ID: ${post.id}`)}
                    className="read-more"
                    >
                    Ler mais
                    </button>
                </article>
                ))}
            </div>
        </div>
    );
}

export default Blog;
import axios from "axios"
import { Component, useEffect, useState } from "react"

export default function Api(){
    const[posts, setPosts]=useState([])

        const getPosts = async()=>{

            try{
                const response = await axios.get("https://json-server-md3.onrender.com/Filmes")

                const data = response.data

                setPosts(data);

                console.log(data)
            }catch(erro){
                console.log(erro)
            }

        }

        useEffect(()=>{
            getPosts()
        }, [])

        return(

            <div>
                <h1>Últimos posts</h1>
                {posts.length === 0 ? (<p>Carregando...</p>): (
                    posts.map((post)=>{
                        <div className="post" key={post.id}>
                            <h2>{post.title}</h2>
                        </div>
                    })
                )}
            </div>
        )

    }
import { useState ,useEffect , useRef } from "react";
import {getDocs , collection} from "firebase/firestore";
import {useTitle} from "../hooks/useTitle";
import { db } from "../firebase/config";
import { PostCard } from "../components";
import {SkeletonCard} from "../components/SkeletonCard";
export const Home = () => {

  const [posts, setPosts] = useState([false, false, false]);
  const [toggle, setToggle] = useState(false);
  useTitle("Home");
  const postsRef = useRef(collection(db, "posts"));

  useEffect(()=>{
    async function getPosts(){
      const data = await getDocs(postsRef.current);
      setPosts(data.docs.map((document) => (
        {...document.data(), id: document.id}
        )
      ));
    }
    getPosts();
    
  },[postsRef,toggle,posts]);

  return (
    <section>
        {
        posts.map((post,index) => (
            post ? (
              <PostCard key={post.id} post={post} toggle={toggle} setToggle={setToggle} />
            ) : (
              <SkeletonCard key={index}/>
            )   
        ))}
    </section>
  )
}

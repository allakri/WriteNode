import { useEffect, useState, useRef } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase/config";
import { PostCard, SkeletonCard } from "../components";
import { useTitle } from "../hooks/useTitle";

export const HomePage = () => {
  useTitle("HomePage");
  const [posts, setPosts] = useState([false, false, false]);
  const [toggle, setToggel] = useState(false);
  const postsRef = useRef(collection(db, "posts"));

  useEffect(() => {
    async function getPosts() {
      const data = await getDocs(postsRef.current);
      // console.log(data.docs);
      setPosts(
        data.docs.map((document) => ({ ...document.data(), id: document.id }))
      );
    }
    // console.log("---");
    getPosts();
  }, [postsRef, toggle]);

  return (
    <section>
      {posts.map((post,index) =>
        post ? (
          <PostCard
            key={post.id}
            post={post}
            toggle={toggle}
            setToggel={setToggel}
          />
        ) : (
          <SkeletonCard key={index} />
        )
      )}
    </section>
  );
};

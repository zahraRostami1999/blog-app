import styled from './post.module.css'
import cover1 from './../../assets/image/post1.png';

function Post(){
    return(
        <div className={styled.postWrapper}>
            <div className={styled.postImg}></div>
            <div className={styled.postTitle}>Post</div>
        </div>
    );
}

export default Post;
import styled from './postPage.module.css';
import Header from '../../Components/header/Header';

function PostPage(){
    return(
        <div className={styled.postPage}>
            <Header blogTitle="XanimQiz(Jeyran Qulu)'s Blog" />
            <h1>Post Page</h1>
        </div>
    );
}

export default PostPage;
import { useSelector } from "react-redux";
import { selectPostIds, getPostsStatus, getPostsError } from "./postsSlice";
import PostsExcerpt from "./PostsExcerpt";
import CircleLoader from "../../components/CircleLoader"

import React, {useState} from "react";
import ReactPaginate from "react-paginate"

const PER_PAGE = 3;

const PostsList = () => {

    const[currentPage, setCurrentPage] = useState(0)

    const orderedPostIds = useSelector(selectPostIds);
    const postStatus = useSelector(getPostsStatus);
    const error = useSelector(getPostsError);

    const handlePageClick = ({selected: selectedPage})=>{
        console.log("selected", selectedPage);
        setCurrentPage(selectedPage);
    }

   
    
    const offset = currentPage * PER_PAGE;
   

    let content;
    if (postStatus === 'loading') {
        content = <div className="loading"><CircleLoader/></div>;
    } else if (postStatus === 'succeeded') {
        content = orderedPostIds.slice(offset, offset + PER_PAGE).map(postId => <PostsExcerpt key={postId} postId={postId} />)
    } else if (postStatus === 'failed') {
        content = <p>{error}</p>;
    }


    const pageCount = Math.ceil(orderedPostIds.length / PER_PAGE);

   

    return (
        <section>
            {content}

            <ReactPaginate
              previousLabel={"<- Previous"}
              nextLabel={"Next ->"}
              pageCount={pageCount}
              onPageChange={handlePageClick}
              containerClassName={"pagination"}
              previousLinkClassName={"pagination__link"}
              nextLinkClassName={"pagination__link"}
              disabledClassName={"pagination__link--disabled"}
              activeClassName={"pagination__link--active"}
            />
        </section>
    )
}
export default PostsList
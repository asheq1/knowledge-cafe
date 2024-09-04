import PropTypes from 'prop-types'; 
import { FaBookmark } from 'react-icons/fa';

const Blog = ({blog, handleBookmark}) => {
    const {cover_title, cover_img, author, 
        author_img, reading_time, posted_date, hashtags} = blog;
    return (
        <div className='mb-20'>
            <img className='w-full mb-6' src={cover_img} alt={`Cover picture of the title ${cover_title}`} />
            <div className='flex mb-4 justify-between items-center'>
                <div className='flex'>
                    <img className='w-14 rounded-full' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-2xl'>{author}</h3>
                        <p className=''>{posted_date}</p>
                    </div>
                </div>
                <div >
                    <span>{reading_time} min read</span>
                    <button 
                        className='ml-2 text-2xl text-red-600'
                        onClick={()=>handleBookmark(blog)}
                    ><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h2 className='text-4xl '>{cover_title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href="">{hash}</a></span>)
                }
            </p>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleBookmark: PropTypes.func.isRequired
}

export default Blog;
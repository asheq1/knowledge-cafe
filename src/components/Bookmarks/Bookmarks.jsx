import Bookmark from "../Bookmark/Bookmark";
import PropTypes from 'prop-types'; 

const Bookmarks = ({bookmarks, readingTime}) => {

    return (
        <div className="md:w-1/3 bg-gray-300 ml-4 mt-2 pt-4">
            <div className="text-2xl">
                <h2>Reading Time: {readingTime}</h2>
            </div>
            <h2 className="text-2xl text-center ">Blogs {bookmarks.length}</h2>
            {
                bookmarks.map((bookmark, idx) => <Bookmark
                    key={idx}
                    bookmark={bookmark}
                ></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.object.isRequired,
    readingTime: PropTypes.object.isRequired
}

export default Bookmarks;
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'


function App() {
  const [bookmarks, setBookmark] = useState([]);
  const [readingTime, setReading] = useState(0);

  const handleBookmark = (blog) =>{
      const newBookmarks = [...bookmarks, blog];
      setBookmark(newBookmarks)
  }

  const handleMarkAsRead = (time, id) =>{
      setReading(readingTime + time)
      // remove the read blog from the bookmark
      const remainingMarks = bookmarks.filter(bookmark => bookmark.id !== id);
      setBookmark(remainingMarks)
    }

  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
        <Blogs 
          handleBookmark={handleBookmark}
          handleMarkAsRead = {handleMarkAsRead}
          ></Blogs>
        <Bookmarks 
          bookmarks={bookmarks}
          readingTime={readingTime}
          ></Bookmarks>
      </div>
    </>
  )
}



export default App

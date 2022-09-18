
import {Link} from "react-router-dom"
import React,{useState} from "react"
import * as API from "./BooksAPI"
function SearchPage(){

    const [listOfSearch,setListOfSearch] = useState(()=>[])
    

    const ApiCall = async (search)=>{
        try {
            const response = await API.search(search,5)
            setListOfSearch(response)
            
            
            
        } catch (error) {
            console.error(error)
        }

        
      }

      const onChange = (e)=>{
        ApiCall(e.target.value)
      }


   
    return(

        <div className="search-books">
          <div className="search-books-bar">
            <Link className="close-search" to = "/">Close</Link>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title, author, or ISBN"
                onChange = {(e)=>onChange(e)}
              />
            </div>
          </div>
          <div className="search-books-results">
            {
            (listOfSearch !== undefined && listOfSearch.length !== 0) && <ol className="books-grid">

                {
                    listOfSearch.map((book,index)=>{
                        return <li key = {index}>
                        <div className = 'book'>
                            <div className= 'book-top'>
                                <div className='book-cover'
                                style = {{width:128,height:193,backgroundImage:`url(${book.imageLinks.smallThumbnail})`}}
                                ></div>
                                <div className="book-shelf-changer">
                                    <select value= 'none'>
                                    <option value="none" disabled>
                                        Move to...
                                    </option>
                                    <option value="currentlyReading">
                                        Currently Reading
                                    </option>
                                    <option value="wantToRead">Want to Read</option>
                                    <option value="read">Read</option>
                                    <option value="none">None</option>
                                    </select>
                                </div>
                            </div>
                            <div className="book-title">{book.title}</div>
                            <div className="book-authors">{book.authors}</div>
                        </div>
                    </li>
                    })
                }


            </ol>
            }
          </div>
        </div>

    )

}
export default SearchPage
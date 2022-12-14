import React,{useState} from "react"
import Books from "./Books"
import {Link} from "react-router-dom"
function List(){

    const [currentRead,setCurrentRead] = useState([

        {
            title: "To Kill a Mockingbird",
            authors: "Harper Lee",
            Image: 'url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")'
        },
        {
            title: "Ender's Game",
            authors: "Orson Scott Card",
            Image:'url("http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api")',
            
        }

    ])
    const [want,setWant] = useState([
      {
        title: "Harry Potter and the Sorcerer's Stone",
        authors: "J.K. Rowling",
        Image:'url("http://books.google.com/books/content?id=wrOQLV6xB-wC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72G3gA5A-Ka8XjOZGDFLAoUeMQBqZ9y-LCspZ2dzJTugcOcJ4C7FP0tDA8s1h9f480ISXuvYhA_ZpdvRArUL-mZyD4WW7CHyEqHYq9D3kGnrZCNiqxSRhry8TiFDCMWP61ujflB&source=gbs_api")',

    },
    {
        title: "1776",
        authors: "David McCullough",
        Image:'url("http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api")',

    }
    ])
    const [Read,setRead] = useState([

      {
        title: "The Hobbit",
        authors: "J.R.R. Tolkien",
        Image:'url("http://books.google.com/books/content?id=pD6arNyKyi8C&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70Rw0CCwNZh0SsYpQTkMbvz23npqWeUoJvVbi_gXla2m2ie_ReMWPl0xoU8Quy9fk0Zhb3szmwe8cTe4k7DAbfQ45FEzr9T7Lk0XhVpEPBvwUAztOBJ6Y0QPZylo4VbB7K5iRSk&source=gbs_api")',

    },
    {
        title: "Oh, the Places You'll Go!",
        authors: "Seuss",
        Image:'url("http://books.google.com/books/content?id=1q_xAwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE712CA0cBYP8VKbEcIVEuFJRdX1k30rjLM29Y-dw_qU1urEZ2cQ42La3Jkw6KmzMmXIoLTr50SWTpw6VOGq1leINsnTdLc_S5a5sn9Hao2t5YT7Ax1RqtQDiPNHIyXP46Rrw3aL8&source=gbs_api")',
    },
    {
      title: "The Adventures of Tom Sawyer",
      authors: "Mark Twain",
      Image:'url("http://books.google.com/books/content?id=32haAAAAMAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72yckZ5f5bDFVIf7BGPbjA0KYYtlQ__nWB-hI_YZmZ-fScYwFy4O_fWOcPwf-pgv3pPQNJP_sT5J_xOUciD8WaKmevh1rUR-1jk7g1aCD_KeJaOpjVu0cm_11BBIUXdxbFkVMdi&source=gbs_api")',

    }

    ])

    const remove = (setBook,books,book)=>{
      setBook(books.filter(bookInList=>{
        return bookInList.title !== book.title
      }))

    }
  
    const handleMove = (e,Category,book,setBook,books)=>{
      const option = e.target.value
      if(option === Category) return

      if(option === 'currentlyReading')
      {

        remove(setBook,books,book)
        setCurrentRead([...currentRead, book])


      }
      else if(option === 'wantToRead')
      {
        remove(setBook,books,book)
        setWant([...want,book])
      }
      else if(option === 'read')
      {
        remove(setBook,books,book)
        setRead([...Read,book])

      }
      else{
        setBook(books.filter(bookInList=>{
          return bookInList.title !== book.title
        }))

      }
    }

    return(
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
                <div className="bookshelf-books">
                  <Books books = {currentRead} Category = {'currentlyReading'} handleMove = {handleMove} setBook= {setCurrentRead}/>
                </div>
              </div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Want to Read</h2>
                <div className="bookshelf-books">
                  <Books books = {want} Category={'wantToRead'} handleMove = {handleMove} setBook= {setWant}/>
                </div>
              </div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Read</h2>
                <div className="bookshelf-books">
                  <Books books = {Read} Category={'read'}  handleMove = {handleMove} setBook = {setRead}/>
                </div>
              </div>
            </div>
          </div>
          <div className="open-search">
            <Link to = "/Search">Add a book</Link>
          </div>
        </div>
    )

}
export default List
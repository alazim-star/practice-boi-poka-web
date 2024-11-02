import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredReadList } from "../../utility/addToDb";


const BookDetails = () => {
    const data =useLoaderData()
    const {bookId} = useParams()
    const id= parseInt(bookId)
   
    
   const book =data.find(book=>book.bookId===id)
    console.log(book);

    const {bookId:currentBookId,bookName,author,image,review,rating,tags,totalPages,yearOfPublishing,publisher}=book


    // mark as read 
    const handleMarkAsRead=(id)=>{


addToStoredReadList(id)


    }





    return (
        <div className="flex">
        
        <div className="w-full">
        <img src={image} alt="" />
        </div>
        <div>
            <h2>{bookName}</h2>
            <p>{author}</p>
            <div className="divider"></div>
            <p>{tags}</p>
            <div className="divider"></div>
            <p>Review:{review}</p>

            <div className="flex"> <p>Tag:</p>
            <button className="badge bg-[#f4fcf3] text-[#23be0a] "># Young Adult</button>
            <button className="badge bg-[#f4fcf3] text-[#23be0a] "># Identity</button>
            </div>
            <div className="divider"></div>
            <p>Name of Pages:{totalPages}</p>
            <p>Publisher:{publisher}</p>
            <p>Year of Publishing:{yearOfPublishing}</p>
            <p>Rating :{rating}</p>


           <div className="flex justify-center gap-10">
            
        <button onClick={()=>handleMarkAsRead(bookId)} className="btn btn-outline btn-primary">Make As Read</button>
        <button className="btn btn-accent">Add to Wish list</button>
           </div>

           

        </div>

         
        </div>
    );
};

export default BookDetails;
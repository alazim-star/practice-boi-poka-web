import { Link } from "react-router-dom";


const Book = ({book}) => {
    const {bookId,bookName,author,image,review,rating,tags,totalPages}=book
    return (
       

 <Link to={`/books/${bookId}`} >
            <div className=" card bg-base-100 w-96 h-full shadow-xl p-6 ">
  <figure className='bg-red-50 py-8 rounded-2xl '>
    <img className='h-[166px]'
      src={image}
      alt={bookName} />
  </figure>
  <div className="card-body">
   
      <div className='flex gap-20'>
      <div className="badge bg-[#f4fcf3] text-[#23be0a] ">Young Adult</div>
      <div className="badge bg-[#f4fcf3] text-[#23be0a] ">Identity</div>
      </div>
 <div>
    
 <h2 className="card-title">{bookName}</h2>
 <p className='card-title text-lg'>By : {author}</p>
 <p className="card-title text-sm ">Total Page :   {totalPages}</p>
 
 <div className="border mt-5 border-dashed "></div>
 <div className='flex mt-10 justify-between'>
    <p>{tags}</p>
    <p>{rating} <div className="rating ml-2">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input
    type="radio"
    name="rating-2"
    className="mask mask-star-2 bg-orange-400"
   
    defaultChecked />
 
</div></p>
 </div>

 </div>

  
  </div>
</div></Link>

          
    );
};

export default Book;
import MyImage from '../../assets/books.jpg'


const Banner = () => {
    return (
        <div>
           <div className=" bg-red-50 p-20">
  <div className="flex justify-center items-center ">
  <div>
      <h1 className="text-5xl text-balance font-bold mb-10">Books to freshen up  your bookshelf</h1>
      <button className="btn  text-white bg-[#23be0a]">View The List</button>
    </div>
    
    <img
      src={MyImage}
      className=" rounded-lg shadow-2xl" />
   
  </div>
  
</div>

        </div>
    );
};

export default Banner;
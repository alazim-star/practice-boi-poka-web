import { toast } from "react-toastify"


const getStoredReadList=()=>{

// read-list 
const storedReadListStr=localStorage.getItem('read-list')

if(storedReadListStr){
    const storedReadList=JSON.parse(storedReadListStr)
    return storedReadList

}else{
    return []
}

}



const addToStoredReadList=(id)=>{
    const storedList=getStoredReadList()

      if (storedList.includes(id)){
        console.log(id,'already exists in the read list');
      }else{
        storedList.push(id)
        const storedListStr=JSON.stringify(storedList)
        localStorage.setItem('read-list',storedListStr)

        toast('The is add to read list')



      }

}

const getStoredWishList=()=>{
const storedWishListStr=localStorage.getItem('wish-list')

if(storedWishListStr){
    const storedWishList=JSON.parse(storedWishListStr)
    return storedWishList

}else{
    return []
}

}

const addToStoredWishList=(id)=>{
    const storedWishList=getStoredWishList()

      if (storedWishList.includes(id)){
        console.log(id,'already exists in the Wish list');
      }else{
        storedWishList.push(id)
        const storedWishListStr=JSON.stringify(storedWishList)
        localStorage.setItem('Wish-list',storedWishListStr)
      }

}





export {addToStoredReadList, getStoredReadList,addToStoredWishList}
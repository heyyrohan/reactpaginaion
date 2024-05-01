import React , {useState,useEffect}from 'react'

function Reactpagination() {
    const [userData,setUserData] =useState([]);
    const [currentPage, setCurrentPage]= useState(1);
    const [totalPage, setTotalPage] =useState(0);

const API = 'https://jsonplaceholder.typicode.com/posts';

useEffect(()=>{
    fetch(API)
    .then((res)=>res.json())
    .then((data)=>{
        setUserData(data);
        setTotalPage(Math.ceil(data.length/10));
    })
},[])

const handelPageChange = (newPage)=>{
setCurrentPage(newPage)
}

const handelNextChange = ()=>{
    if(currentPage < totalPage){
        setCurrentPage(currentPage+1)
    }
    }

    const handelPrevChange = ()=>{
        if(currentPage > 1){
            setCurrentPage(currentPage - 1)
        }
        }

        const predisabled =currentPage === 1;
        const nextDisabled = currentPage === totalPage 



        const itemsPerPage =10;
        const startIndex =(currentPage-1)*itemsPerPage;
        const endIndex =startIndex + itemsPerPage;

        const itemsDisplay = userData.slice(startIndex,endIndex)




  return (
   <>
   
   {
    itemsDisplay  && itemsDisplay .length >0 ? itemsDisplay .map((item)=>{
        return(
            <h3 key={item.id}>{item.id+1} {item.title}</h3>
        )
    }) : ''
   }
     <button onClick={ handelNextChange}
    disabled={predisabled}
    >
        Next
    </button>

   {
    Array.from({length:totalPage},(_,i)=>{
        return(
            <button 
            onClick={()=>handelPageChange(i+1)} 
            key={i}
            disabled={i+1 === currentPage}

            >
                   {i+1}
            </button>
        )
    })
   }

   {
    <button onClick={handelPrevChange}
    disabled={predisabled}
    >
        previous
    </button>


   }
   </>
  )
}

export default Reactpagination
import React from 'react'


//function Card(props) {
function Card({name, btnText="visit"}) {
console.log(name);

  return (
    <>
     <div className="max-w-xs p-6 rounded-md shadow-md bg-black">
        <img
          src="https://images.pexels.com/photos/29492618/pexels-photo-29492618/free-photo-of-elegant-woman-in-red-dress-in-hoi-an-s-lantern-street.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
          className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
        />
        <div className="mt-6 mb-2">
          <h2 className="text-xl font-semibold tracking-wide">{name}</h2>
          <button>{btnText}</button>
         {/* <button>{btnText || "visit"}</button>*/}
        </div>
        <p className="text-gray-300">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio tempora ipsum soluta
          amet
        </p>
      </div>
    

    </>
  )
}

export default Card

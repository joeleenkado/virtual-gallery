import React, { useEffect, useState } from 'react'
import './Gallery.css'
import Edit from './Edit'
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";

function Art(props) {
    const {artwork, history} = props
    const {artist, title, statement, size, medium, url, id} = artwork
    const encodedUrl = encodeURIComponent(url)
 console.log('artwork', artwork)
//     console.log('Object.values(artwork)', Object.values(artwork))
//  const values = Object.values(artwork)
//  values.forEach(value => {
//    if (value === '') {value = "N/A"}
Object.filter = (obj, predicate) => 
    Object.keys(obj)
          .filter( key => predicate(obj[key]) )
          .reduce( (res, key) => Object.assign(res, { [key]: obj[key] }), {} );

// Example use:
// var scores = {
//     John: 2, Sarah: 3, Janet: 1
// };
var filtered = Object.filter(artwork, item => item === ''); 
// console.log('filtered:', filtered);  

// console.log('fffffdccc', Object.keys(filtered))



// var superSecret = function(spy){
  Object.keys(filtered).forEach(function(key){ filtered[key] = "NA" });


// Object.keys(filtered).forEach(key => {
//   filtered[key] = 99;
// });
console.log('newvalues:', Object.values(filtered))
console.log('key', Object.keys(filtered))
// const target = artwork
// const source = 
const filteredArtwork = Object.assign(artwork, filtered)
console.log('filteredArtwork:', filteredArtwork)
// Object.values(filtered).forEach()
//   })
// let blankValues = []
//  console.log('kkkkk', Object.values(artwork).forEach(value => {if (value === ''){
//    console.log('hooray')
//    blankValues.push(value)
//   }}))
//   console.log('blankValues', blankValues)
// // Example use:
// var scores = {
//   John: 2, Sarah: 3, Janet: 1
// };
// var filtered = Object.filter(scores, score => score > 1); 
// console.log(filtered);


    const [loaded, setLoaded] = useState(false)
    let flipCardInner
    // let otherFlip
      //  const url = `${props.art.url}/resize=300`
// console.log('url:', url
// const url = `${props.art.url}`
// const resizedUrl = props.art.url.splice(32, 0, '/resize=300')
// function processFlipCardInner(e) {
//   flipCardInner = document.querySelector('.flip-card-inner');
// //  otherFlip = document.getElementsByClassName('flip-card-inner')
//   console.log('flipCardInner:', flipCardInner)
// // console.log('otherFlip:', otherFlip)
// }
// useEffect(() => {
//   processFlipCardInner() 
// setLoaded(true)
// },[])

// function toggleAccordion(e) {
//   const content = e.target.nextElementSibling;
//   if (content.style.maxHeight) {
//     content.style.maxHeight = null;
//   } else {
//     content.style.maxHeight = content.scrollHeight + "px";
//   }
//   // if (content.style.tranform) {
    
// console.log('target:', e.target)
// // console.log('parentELement:', e.target.parentElement.nextElementSibling )
 
// // console.log('flipCardInner:', flipCardInner)

// let nextSibling = flipCardInner.nextElementSibling;
// console.log('nextElementSibling:', nextSibling);


// console.log('content:', content)
// let element = document.getElementsByClassName('flip-card-inner')
//   // }
//   console.log('element:', element)
// }

console.log('1st half of url:', url.slice(0, 32));

console.log('2nd half of url:', url.slice(32));
// const resize = '/resize=width:300,height:200'
// expected output: "the lazy dog."
// const url300 = url.slice(0, 32) + resize + url.slice(32)
// console.log('url300:', url300)
// https://cdn.filestackcontent.com/2yclMtrSuiWobS11HHtw/resize=300)   
const encodedURL = encodeURIComponent(url)   

console.log('encodedURL:', encodedUrl)
console.log('filteredArtwork.size:', filteredArtwork.size)

return (
     <>
     <div className='container'>
<div class="flip-card">
  <div className="flip-card-inner">
    <div class="flip-card-front">
      {/* <img src="img_avatar.png" alt="Avatar" style="width:300px;height:300px;"> */}
    
      <table>
    <tbody>
      {/* front */}
    <tr>
        <td><img src={url} alt='artwork'/></td>
      </tr>
      {/* <tr>
        <td>{title}</td>
      </tr> */}
      </tbody></table>
    
  
    
    
    
    </div>
   
   
   <div className="flip-card-back">
          <table><tbody>
          <tr>
        <td>Medium: {medium}</td>
      </tr>
      <tr>
        <td>Size: {size}</td>
      </tr>
      <tr>
        <td>Statement: {statement}</td>
      </tr>
      {/* <tr><td><Edit/></td> */}
      {/* </tr> */}
      <tr><td><button 
        onClick={() => history.push(`edit/${filteredArtwork.title}/${filteredArtwork.medium}/${filteredArtwork.size}/${filteredArtwork.statement}/${encodedUrl}/${id}`)}
      >EDIT</button></td></tr>
      </tbody>
      </table>
    
 
 
 </div>
 <br/>
</div>
{title}



{/* function toggleAccordion(e) { */}
  {/* // const content = e.target.nextElementSibling;
  if (content.style.transform) {

    content.style.maxHeight = null;
   } 
   {/* // } else { */}
  {/* //   content.style.maxHeight = content.scrollHeight + "px"; */}
  {/* // } */}
{/* } */} 

{/* {loaded ? (() => {
  if (!flipCardInner.style.transform) {
      return title
  } else { */}
{/* return(  */}
  {/* <div className="accordian-container"> */}



    {/* <button className="accordion" onClick={(e) => toggleAccordion(e)}> */}
               
               
                 {/* Edit */}
               {/* </button>  */}
             {/* <div className="accordion-content"> */}
                 {/* <br /> */}
                  {/* <Edit */}
                  {/* //  art={art} */}
                 {/* />  */}
                 {/* <br /> */}
               {/* </div> */}
               {/* </div> */}
   


    {/* )  */}
{/* ) */}
 {/* : (
 
  null          

 ) */}
{/* <>
 
           </>  */}







 </div>
 {/* {title} */}


    </div> 
     </> 
   )
}
// export default Art
export default connect(mapStoreToProps)(Art);

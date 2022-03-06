import React from "react"
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import './Gallery.css'

const Caption = (props) => {
    const {history, artwork, store} = props;
const {title, size, medium, id, statement, url, like} = artwork
const {friendly} = store;

const encodedUrl = encodeURIComponent(url)

Object.filter = (obj, predicate) => 
    Object.keys(obj)
          .filter( key => predicate(obj[key]) )
          .reduce( (res, key) => Object.assign(res, { [key]: obj[key] }), {} );

// Example use:
// var scores = {
//     John: 2, Sarah: 3, Janet: 1
// };
const filtered = Object.filter(artwork, item => item === ''); 
// console.log('filtered:', filtered);  

// console.log('fffffdccc', Object.keys(filtered))



// var superSecret = function(spy){
  function filter(obj) {
    Object.keys(obj).forEach(function(key){ obj[key] = "NA" });
return Object.assign(artwork, filtered)
  }

  // Object.keys(filtered).forEach(function(key){ filtered[key] = "NA" });

// Object.keys(filtered).forEach(key => {
//   filtered[key] = 99;
// });
// console.log('newvalues:', Object.values(filtered))
// console.log('key', Object.keys(filtered))
// const target = artwork
// const source = 
// const filteredArtwork = Object.assign(artwork, filtered)


// console.log('filteredArtwork:', filteredArtwork)
// Object.values(filtered).forEach()

const filteredArtwork = filter(filtered)
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


console.log('1st half of url:', url.slice(0, 32));

console.log('2nd half of url:', url.slice(32));
// const resize = '/resize=width:300,height:200'
// expected output: "the lazy dog."
// const url300 = url.slice(0, 32) + resize + url.slice(32)
// console.log('url300:', url300)
// https://cdn.filestackcontent.com/2yclMtrSuiWobS11HHtw/resize=300)   
// f
console.log('encodedURL:', encodedUrl)
console.log('filteredArtwork.size:', filteredArtwork.size)




function likeFunction(e) {
    e.preventDefault()
    props.dispatch({type: 'LIKE', payload: id})
}


function toggleAccordion(e) {
        const content = e.target.nextElementSibling;
        if (content.style.maxHeight) {
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
        }
        // if (content.style.tranform) {
          
      console.log('target:', e.target)
    
      console.log('content:', content)
      let element = document.getElementsByClassName('flip-card-inner')
        // }
        console.log('element:', element)
      }
      

return (
<>

  <div className="stone" >  
<label id='text-plate' className='accordion' onClick={(e) => toggleAccordion(e)}>
{title}
</label> 

             <div className="accordion-content">
              
             <article>
        {friendly ? null :
        <>
                {like} Like(s)!
                <br/>

</>
        }
             {medium}
             <br/>

            {/* </td> */}
      {/* </tr> */}
      {/* <tr> */}
        {/* <td> */}
             {size}
             <br/>
            {/* </td> */}
      {/* </tr> */}
      {/* <tr> */}
        {/* <td>Statement:  */}
           <p>{statement}</p> 
            {/* </td> */}
      {/* </tr> */}
      {/* <tr><td><Edit/></td> */}
      {/* </tr> */}
      {/* <tr><td> */}
      {/* <br/> */}
     { props.store.friendly  ? <button onClick={(e) =>  likeFunction(e)}>Like</button> :
          (<button 
            // className="gradient-teal"
        onClick={() => history.push(`edit/${filteredArtwork.title}/${filteredArtwork.medium}/${filteredArtwork.size}/${filteredArtwork.statement}/${encodedUrl}/${id}`)}
      >EDIT</button>)
     }
      {/* </td></tr> */}
      {/* </tbody> */}
      {/* </table> */}
              </article>
               </div>
               </div> 

</>

)//END return
}//END Caption
export default connect(mapStoreToProps)(Caption);



 
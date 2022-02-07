import { useState, FunctionComponent } from "react";
// import LicenseDataService from "./services/license.service";
import React from 'react'
import mapStoreToProps from "../../redux/mapStoreToProps";
import { connect } from "react-redux";
import * as filestack from 'filestack-js';

function Edit(props) {
  const {art} = props.store
   const { title, statement, size, medium, url, id } = props.match.params;
//i have an image variable that needs to be updated
const decodedUrl = decodeURIComponent(props.match.params.url)

//if we have .lengthn then we display that with a ternary
  const key = process.env.REACT_APP_FILESTACK_API_KEY
  const client = filestack.init(key);
  //  console.log('props.art:', props.history.params)




   

  const options = {
  onFileUploadFinished(file) {
    return new Promise((resolve, reject) => {
      // Do something async
      resolve(
        console.log('resolved', file), 

       props.dispatch({type: 'SET_ART', payload: file.url}),
      setUrlEdit(file.url)
      );

     
      
      reject((reason) => console.log('Rejected:', reason))
      // Or reject the selection with reject()
    });
  }}

  const resize = '/resize=width:300,height:200'


  const [urlEdit, setUrlEdit] = useState(decodedUrl)
  const [titleEdit, setTitleEdit] = useState(title);
    const [sizeEdit, setDimensionsEdit] = useState(size);
    const [mediumEdit, setMediumEdit] = useState(medium);
    const [statementEdit, setStatementEdit] = useState(statement);
  
    // if (urlEdit !== decodedUrl)
    const url300 = art.slice(0, 32) + resize + art.slice(32)
    // }

  
  
  

  // const art = {
  //   title: titleEdit,
  //   statement: statementEdit,
  //   medium: mediumEdit,
  //   size: sizeEdit,
  //   url: urlEdit,
  //   id: id
  // };

  function update (property, edit) {
    // switch (property) {
    // case 'title':
    //  console.log('property:', property)
     return props.dispatch({type: "UPDATE_ART", payload: {[property]: edit,
    id: id}})

      // case 'statement':
      // return props.dispatch({type: "UPDATE_ART", payload: {statement: statementEdit}})
      // case 'medium':
      // return props.dispatch({type: "UPDATE_ART", payload: {medium: mediumEdit}})
      // case 'size':
      // return props.dispatch({type: "UPDATE_ART", payload: {size: sizeEdit}})

      // case property === 'medium'
      // return props.dispatch({type: "UPDATE_ART", payload: {medium: mediumEdit}})

// default: return null
//      }
    }

  //   [property]
  //   LicenseDataService.edit(art)
  //   .then(() => {
  //     console.log("in submit().then()");
  //     setTypeEdit("");
  //     setNameEdit("");
  //     setEmailEdit("");
  //     return setRefresh(!refresh);
  //   });
  // }




  return (
    <>
    {JSON.stringify(props)}
    <form
      className="form"
      
    >
      
      <label htmlFor="title">Title
      <input
       
       placeholder={title}
         value={titleEdit}

        // value={titleEdit}
         onChange={(e) => setTitleEdit(e.target.value)}
         onBlur={(e) => setTitleEdit(e.target.value)}
      ></input>
<button 
 onClick={(e) => update('title', titleEdit)}
>update Title</button>
</label>
      <label htmlFor="statement">Statement
      
       <input
        
        placeholder={statement}
        value={statementEdit}
        onChange={(e) => setStatementEdit(e.target.value)}
        onBlur={(e) => setStatementEdit(e.target.value)}
      ></input> 
      <button onClick={(e) => update('statement', statementEdit)}>update</button> 

      </label>
      <br />
      <br />
      <label htmlFor="medium">
        Medium
        {/* {typeEdit === "" ? type : typeEdit} Name */}
         <input
          placeholder={medium}
          value={mediumEdit}
          onChange={(e) => setMediumEdit(e.target.value)}
          onBlur={(e) => setMediumEdit(e.target.value)}

          value={mediumEdit}
        /> 
        <button onClick={(e) => {
          e.preventDefault()
          update('medium', mediumEdit)
          }}>
            update
            </button>

      </label>
      <label htmlFor="size">
 Dimensions        <input
        //   placeholder={email}
          onChange={(e) => setDimensionsEdit(e.target.value)}
          onBlur={(e) => setDimensionsEdit(e.target.value)}
          value={sizeEdit}
          placeholder={size}
          // placeholder={size}
        /> 
         <button onClick={(e) => update('size', sizeEdit)}>UPDATE DIMENSIONS</button> */}

      </label>
      <br />

       <label htmlFor="image">
        url

        <img src={urlEdit === decodedUrl ?
          (
            decodedUrl
            // decodeURIComponent(props.match.params.url)
            )
        
          :   (url300)
        }/>  


      

      <button 
onClick={(e) => {
                  e.preventDefault()
                  client.picker(options).open()}}>
                    UPLOAD IMAGE
                  </button>

       <button onClick={(e) => {
         e.preventDefault()
        update('url', urlEdit)} }
     >update IMAGE</button> 
    
</label>
      {console.log('dfd', decodeURI(props.match.params.url))}
      
      
       {/* <button onClick={(e) => props.dispatch({type: 'DELETE_ART', payload: id})}>DELETE</button> */} */}
      <br />
    </form>
    </>
  ); //END return ()
}; //END Edit
export default connect(mapStoreToProps)(Edit);


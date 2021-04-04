// import React,{ useState, useEffect, Fragment} from 'react'
// import {getMathes} from '../api/Api';
// import { Grid } from '@material-ui/core';
// import MyCard from './MyCard'



// function Search( {searchdata, setsearchdata} ) {

//     const [filteredProducts,setFilter] = useState()

//     const [matches, setMatches] = useState([]);

//     useEffect (() => {
//         getMathes()
//           .then((data) => {
//            setMatches(data.matches)
//            console.log("my data in serach", data.matches)
//           })
//           .catch((error) => alert("could not load data"));       
        
//     },[]);

//   useEffect(()=>{  const filteredProducts1 = matches && matches.filter((product) => {
    
//     if ( product["team-1"].toLowerCase().includes(searchdata) ) 
//       {
//          console.log('search field ')
         
//       return product;
//     }
//   });
// setFilter(filteredProducts1,console.log("filter fun", filteredProducts))

// },[searchdata])


//     return (

//         <div>
        
//          { console.log("search") }

//             <Grid container>
//           <Grid sm="2"></Grid>
//           <Grid sm="8">

//           { filteredProducts && filteredProducts.map((match) => (

//             <Fragment key={match.unique_id}>

//             {
//                 (match.type==="ODI"? <MyCard key={match.unique_id} match= {match} /> : ("") )   // show only ODI
//             }
//             </Fragment>
//           ))}
//           </Grid>
//           </Grid>  

//         </div>
//     )
// }

// export default Search

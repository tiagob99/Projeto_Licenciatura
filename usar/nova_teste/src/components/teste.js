// import React, { Component, Fragment } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import firebase from 'firebase';






// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       z1FVkRNAO2cLgrNOTPjHOxsV4Bj1: [],
      
//       users: [],
//     }
//   }

//   componentDidMount() {
//     const accountRef =  firebase.database().ref('z1FVkRNAO2cLgrNOTPjHOxsV4Bj1' + '/' + 'Mikros'  );
//     accountRef.on('value', (snapshot) => {
//       let z1FVkRNAO2cLgrNOTPjHOxsV4Bj1 = snapshot.val();
//       let newState = [];
//       for (let account in z1FVkRNAO2cLgrNOTPjHOxsV4Bj1) {
//         newState.push({
//           id:account,
          
          
//         })
//       }
//       this.setState({
//         z1FVkRNAO2cLgrNOTPjHOxsV4Bj1:newState,
//       })
//     })
// }
  

//   render() {
//     return (
//       <Fragment >
//       <section>
        
//         <div>
//           <h2>User Apps</h2>
//             {this.state.z1FVkRNAO2cLgrNOTPjHOxsV4Bj1.map( z1FVkRNAO2cLgrNOTPjHOxsV4Bj1 =>
//             <div key={z1FVkRNAO2cLgrNOTPjHOxsV4Bj1.id}>
//               {/* {console.log(z1FVkRNAO2cLgrNOTPjHOxsV4Bj1.title)} */}
//               <h4 >{z1FVkRNAO2cLgrNOTPjHOxsV4Bj1.id}</h4>
//               <h4>{z1FVkRNAO2cLgrNOTPjHOxsV4Bj1.value}</h4>
//                 </div>
              
//             )}
//         </div>
//       </section>
      
        
//       </Fragment>
//     );
//   }
// }
// export default App;
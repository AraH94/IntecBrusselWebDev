import React, { useState } from 'react';
import { connect } from 'react-redux';
 
function Header(props) {
 const [inputValue, setInputValue] = useState('');
 
 const handleInputChange = (e) => {
 setInputValue(e.target.value);
 };
 
 const handleUpdateUser = () => {
 if (inputValue) {
 props.updateUser(inputValue);
 setInputValue('');
 }
 };
 
 return (
 <header>
 <h1>Hello, {props.user}!</h1>
 <div>
 <input type="text" value={inputValue} onChange={handleInputChange} />
 <button onClick={handleUpdateUser}>Update user</button>
 </div>
 </header>
 );
}
 
function mapStateToProps(state) {
 return {
 user: state.user
 };
}
 
function mapDispatchToProps(dispatch) {
 return {
 updateUser: (newUser) => dispatch({ type: 'UPDATE_USER', payload: newUser })
 };
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Header);



// import Branding from "./Branding";
// import Menu from "./Menu";

// const Header = () => {
//   return (
//     <div className="container">
//       <header className='d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom"'>
//         <Branding />
//         <Menu />
//       </header>
//     </div>
//   );
// };

// export default Header;

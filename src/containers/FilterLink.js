// import Link from '../components/Link'
// import { connect } from 'react-redux'
// import { setVisibilityFilter } from '../actions'

// const mapStateToProps = (state , ownProps) => {
//     return {
//         active : ownProps.filter === state.visibilityFilter
//     };
// };

// const mapDispatchToProps = (dispatch , ownProps) => {
//     return {
//         onClick : () => {
//             dispatch(setVisibilityFilter(ownProps.filter))
//         }
//     };
// };

// console.log(connect(mapStateToProps , mapDispatchToProps)) ;
// export default connect(mapStateToProps , mapDispatchToProps)(Link) ;

import { NavLink } from 'react-router-dom'
import React from 'react'

const FilterLink = ({ filter , children }) => {
    return (
        <NavLink
            to = {filter === 'SHOW_ALL' ? '/' : `/${ filter }`}
            activeStyle = {
                {
                    color : 'black'
                }
            }>
            <button className="btn">
                {children}
            </button>
        </NavLink>
    );
};

export default FilterLink
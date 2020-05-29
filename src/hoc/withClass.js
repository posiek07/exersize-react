import React from 'react'

const withClass = (WrappedComponent, className) => {
return props => ( 
    <div className={className}>
        <WrappedComponent {...props}/>
        {/* Higher order component, passing props */}
    </div>
); 
}

export default withClass
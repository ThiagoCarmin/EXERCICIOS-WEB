import './Main.css'
import React from 'react'
import Header from './Header'

export default props =>
    <React.Fragment>
        <Header {...props}/>
        {/* classe do bootstrap 'container-fluid' */}
        {/* mt-3 == Margem Top 3 */}
        <main className='content container-fluid'>
            <div className="p-3 mt-3">
                {props.children}
            </div>
        </main>
    </React.Fragment>

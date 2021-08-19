import React from 'react';
import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import StreamShow from './streams/StreamShow';
import StreamList from './streams/StreamList';
import Header from './Header';

// importing routing
import { BrowserRouter, Route } from 'react-router-dom';



//this was just for learning purpose

//Link converts to <a> in html if you inspect the element
// const pageone = () => {
//     return (<div>My life is over
//         <Link to='/pagetwo'>This is teleport to page 1</Link>
//     </div>);
// };
// const pagetwo = () => {
//     return (<div>My life is not over yet!
//         <Link to='/' >This is magic teleportation to page 1</Link>
//     </div>);
// };


//If i  put something in browserRouter but not in route, it will
// be visible on all pages

const app = () =>{
    return <div>
        <BrowserRouter>
            <div>
                <Header />
                <Route path='/' exact component={StreamList} />
                <Route path="/streams/new" exact component={StreamCreate} />
                <Route path="/streams/edit" exact component={StreamEdit} />
                <Route path="/streams/delete" exact component={StreamDelete} />
                <Route path="streams/show" exact component={StreamShow} />
            </div>
        </BrowserRouter>
    </div>
};

export default app;
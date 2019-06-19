import React from 'react'
import { observer } from 'mobx-react';

const Counter = observer(props => (
    
        <div>
            {props.appState.count}
            <div>
                <button onClick={props.appState.incCount}>Inc</button>
                <button onClick={props.appState.decCount}>Dec</button>
            </div>
            <p>Gelen Data surda</p>
            {
                props.appState.data.map(movie =>
                   <ul>
                       <li key={movie.title}>{movie.title}-{movie.description}</li>
                   </ul>

                )
            }
        </div>
));


export default Counter

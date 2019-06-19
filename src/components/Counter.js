import React from 'react'
import { observable } from 'mobx';
import { observer } from 'mobx-react';

const Counter = observer(props => (
    
        <div>
            {props.appState.count}
            <div>
                <button onClick={props.appState.incCount}>Inc</button>
                <button onClick={props.appState.decCount}>Dec</button>
            </div>
        </div>
));


export default Counter

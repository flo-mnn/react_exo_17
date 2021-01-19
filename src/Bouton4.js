import React, {Fragment} from 'react';

const Bouton4 = props => {
    
    return(
        <Fragment>
            <input type="submit" value="+4" onClick={()=> props.increaseNumber(4)}/>
        </Fragment>
    )
}

export default Bouton4
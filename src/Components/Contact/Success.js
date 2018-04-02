import React from 'react';
import {Alert} from 'reactstrap';

const success = (alert)=> {

    if(alert === true){
        return <div>
            {console.log(alert,"inside success if")}
            <Alert color="info">
                Your message has been sent successfully
            </Alert>
        </div>
    }
    else{
        return <div>
            {console.log(alert,"inside success else")}

            <Alert color="danger">
                Sorry, there was an error while trying to send your message
            </Alert>
        </div>
    }

}

export default success;
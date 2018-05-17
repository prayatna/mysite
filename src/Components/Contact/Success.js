import React from 'react';
import {Alert} from 'reactstrap';

const success = ({alert}) => {
    if(alert.showSuccess){
        return <div>
            <Alert color="info">
                Your message has been sent successfully
            </Alert>
        </div>
    }
    else if (alert.showFailed){
        return <div>
            <Alert color="danger">
                Sorry, there was an error while trying to send your message
            </Alert>
        </div>
    }
    else{
        return <div>
        </div>
    }

};

export default success;
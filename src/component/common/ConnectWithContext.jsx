import React from 'react';
import { AppContext } from './Context';

export const ConnectWithContext = (Component) => {
    return (props) => {
        return (
            <AppContext.Consumer>
                {(appContext) => <Component 
                    {...appContext}
                    {...props}
                />}
            </AppContext.Consumer>
        )
    }
}
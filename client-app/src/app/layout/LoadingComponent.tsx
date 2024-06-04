import React from 'react';

// how to use Material UI to implement a loading page

interface Props
{
    inverted: boolean;
    content: string;
}

export default function LoadingComponent({ inverted = true, content = 'Loading... ' }: Props)
{
    return (
        // <Dimmer active={true} inverted={inverted} >
        //     <Loader content={content} />
        // </Dimmer >
        <LoadingComponent inverted={false} content={''}></LoadingComponent>
    )
}
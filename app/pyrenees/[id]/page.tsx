import React, { FC } from 'react';

interface Props {
    params: { id: number}
}

const PyreneesDetailPhoto:FC<Props> = ({params: {id}}) => {
    return (
        <div>FullPage: {id}</div>
    )
}

export default PyreneesDetailPhoto;
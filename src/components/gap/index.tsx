import React from 'react';
import './styles.css';

interface ContainerProps {
    height?: number,
    width?: number
}

const Gap: React.FC<ContainerProps> = ({ height, width }) => {
    if (height) {
        return (<div style={{ height }} />)
    } else if (width) {
        return (<div style={{ width }} />)
    }

    return (
        <div />
    )
};

export default Gap;

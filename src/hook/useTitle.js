import React, { useEffect } from 'react';

const useTitle = (title) => {
    useEffect(() => {
        document.title = `${title} - TheArtsyLens`;
    }, [title])
};

export default useTitle;
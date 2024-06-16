import React from 'react';

export default class ErrorBoundary extends React.Component {
    state = {
        hasError: false
    };

    static getDerivedStateFromError(error) {
        return {
            hasError: true
        }
    }

    componentDidCatch(err){ 
        console.log('cdc', err);
    }

    render() {
        if(this.state.hasError) {
            return this.props.fallback;
        } else {
            return this.props.children;
        }
    }
};

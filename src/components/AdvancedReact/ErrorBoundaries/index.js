import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import Parent from './Parent';

export default function() {
    const errorFallback = (
        <h1>Something went wrong!!</h1>
    );
    return (
        <ErrorBoundary fallback={errorFallback}>
            <Parent />
        </ErrorBoundary>
    )
}
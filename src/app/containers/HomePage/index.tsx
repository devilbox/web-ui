import React from 'react';
import { Helmet } from 'react-helmet-async';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="Devilbox homepage" />
      </Helmet>
      <span>HomePage container</span>
    </>
  );
}

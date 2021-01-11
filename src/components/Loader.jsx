import React from 'react'
import ContentLoader from 'react-content-loader'

const Loader = () => (
  <ContentLoader
    speed={2}
    width={280}
    height={460}
    viewBox="0 0 280 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="130" cy="132" r="120"/>
    <rect x="11" y="267" rx="6" ry="6" width="244" height="25"/>
    <rect x="165" y="283" rx="0" ry="0" width="3" height="0"/>
    <rect x="13" y="299" rx="6" ry="6" width="242" height="51"/>
    <rect x="12" y="369" rx="6" ry="6" width="93" height="25"/>
    <rect x="148" y="359" rx="6" ry="6" width="106" height="46"/>
  </ContentLoader>
);

export default Loader;

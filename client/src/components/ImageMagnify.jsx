import React from 'react';
import ReactImageMagnify from 'react-image-magnify';
import { AutoScaling } from 'aws-sdk';

var ImageMagnify = (props) => {
  return (
    <div className="bigcontainer">
    <div className = "KL-zoom-container">
      <ReactImageMagnify {...{
          smallImage: {
              isFluidWidth: true,
              src: props.picture,
          },
          
          imageStyle: {
              maxHeight: 520,
              width: "auto"
          },

          largeImage: {
              src: props.picture,
              width: 1905,
              height: 1500,
          },

          enlargedImageContainerStyle: {
            zIndex: "2"
          },
         
          
          enlargedImageContainerDimensions: {
            width: 350,
            height: 500
          }

      }} />
    </div>
    </div>
  );
}

export default ImageMagnify
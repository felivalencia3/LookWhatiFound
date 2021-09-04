import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';

const ImageView = ({url, height, left, top, width, name, removeImage}) => {

    return (
        <div style={{display: (url && "block")}} className="file-upload-content">
            <img className="file-upload-image" src={url} alt="Display"/>
            {height && <div style={{
                position: "absolute",
                top: (`${top * 100}%`),
                height: (`${height * 100}%`),
                left: (`${left * 100}%`),
                width: (`${width * 100}%`),
                border: "3px solid lightsteelblue"
            }}/>}
            <div className="image-title-wrap">
                <button type="button" onClick={removeImage} className="remove-image">Remove {name}</button>
            </div>
        </div>

    );
};
ImageView.propTypes = {
    image: PropTypes.string,
    height: PropTypes.number,
    left: PropTypes.number,
    top: PropTypes.number,
    width: PropTypes.number,
};

export default ImageView;

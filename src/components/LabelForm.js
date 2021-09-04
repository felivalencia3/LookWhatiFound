import {useState} from "react";
import ImageView from "./ImageView";

const LabelForm = () => {
    const [showingField, setShowingField] = useState(true);
    const [imageURL, setImageURL] = useState('')
    const [imageName, setImageName] = useState('')

    const removeImage = () => {
        setImageURL('')
        setImageName('')
        setShowingField(true)
    }

    const onChange = (event) => {
        const {target: {files}} = event;
        const [file,] = files || [];

        if (!file) {
            return;
        }

        setShowingField(false);
        setImageName(file.name)
        setImageURL(URL.createObjectURL(file))
        // predictImage(file);
    }
    /*
    const predictImage = (file) => {
        Predictions.identify({
            labels: {
                source: {
                    file,
                },
                type: "ALL" // "LABELS" will detect objects , "UNSAFE" will detect if content is not safe, "ALL" will do both default on aws-exports.js
            }
        }).then(result => {
            // TODO: Send results up to parent through onResponse()
        })
            .catch(err => setResponse(JSON.stringify(err, null, 2)))
    }*/

    return (
        <>
            {showingField ? <div className="image-upload-wrap">
                <input className="file-upload-input" type='file' onChange={onChange} />
                <div className="drag-text">
                    <h3>Drag and drop a file or select add Image</h3>
                </div>
            </div> : <div><ImageView url={imageURL} name={imageName} removeImage={removeImage} /></div>}
        </>
    );
}

export default LabelForm;
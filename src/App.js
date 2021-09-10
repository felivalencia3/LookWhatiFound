import './App.css';
import ImageView from "./components/ImageView";
import ResponseView from "./components/ResponseView";
import {useState} from "react";
/*
Amplify.configure(awsconfig);
Amplify.addPluggable(new AmazonAIPredictionsProvider());

 */
const App = () => {
    const [showingField, setShowingField] = useState(true);
    const [imageURL, setImageURL] = useState('')
    const [imageName, setImageName] = useState('')
    const [response, setResponse] = useState([])

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
        //predictImage(file);
    }

    /*const predictImage = (file) => {
        Predictions.identify({
            labels: {
                source: {
                    file,
                },
                type: "LABELS"
            }
        }).then(result => {
            setResponse(result.labels)
        })
            .catch(err => console.error(err))
    }

     */

    return (
        <>
        <div className="row">
            <div className="column middle">
                <div className="file-upload">
                    <h1 style={{textAlign: "center"}} className="header">Upload your image here</h1>
                    {showingField ? <div className="image-upload-wrap">
                        <input className="file-upload-input" type='file' onChange={onChange}/>
                        <div className="drag-text">
                            <h3>Drag and drop a file or select add Image</h3>
                        </div>
                    </div> : <div><ImageView url={imageURL} name={imageName} removeImage={removeImage}/></div>}
                </div>
            </div>
            <div className="column side"><ResponseView response={"Hi"}/></div>
        </div>
        </>

    );
}

export default App;

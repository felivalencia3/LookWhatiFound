import './App.css';
import LabelForm from "./components/LabelForm";

/*
Amplify.configure(awsconfig);
Amplify.addPluggable(new AmazonAIPredictionsProvider());
*/

const App = () => {
    return (
        <div className="file-upload">
            <h1 style={{textAlign: "center"}} className="header">Upload your image here</h1>
            <LabelForm/>
        </div>
    );
}

export default App;

import React, {useState} from "react";
import BasicFigures from "./BasicFigures";
import "../FigureList.css"; 


function FigureList () {
    
    const[figures, setFigures] = useState([

        {id: 1, imageUrl: "https://cricketaddictor.com/wp-content/uploads/2023/11/Virat-Kohli-shares-details-about-his-first-tattoo.webp",
            caption: "image 1"},
        {id: 2, imageUrl: "https://cricketaddictor.com/wp-content/uploads/2023/11/Virat-Kohli-shares-details-about-his-first-tattoo.webp",
            caption: "image 2"},
        ]);
    
    const[newImageUrl, setNewImageUrl] = useState("");
    const[newCaption, setNewCaption] = useState("");

    const addFigure = () => {
        if(newImageUrl && newCaption) {
            setFigures([...figures, {id: Date.now(), imageUrl:newImageUrl, caption: newCaption}]);
            setNewCaption("");
            setNewImageUrl("");
        }
    };

    const removeFigure = (id) => {

        setFigures(figures.filter((figure) => figure.id !== id));
    };

    return(
        <div className="figure-list-container">
            <h2>Image Gallery</h2>
            <div className="input-container">
                <input 
                type="text" 
                value={newImageUrl}
                placeholder="Image URL"
                class="input"
                onChange={(e) => setNewImageUrl(e.target.value)}
                />

                <input 
                type="text" 
                value={newCaption}
                placeholder="Caption"
                class="input"
                onChange={(e) => setNewCaption(e.target.value)}
                />
                <button onClick={addFigure}>Add Image</button>

            </div>

            <div className="figure-grid">
                {figures.map((figure) => (
                    <BasicFigures
                    key={figure.id}
                    imageUrl = {figure.imageUrl}
                    caption={figure.caption}
                    onDelete={() => removeFigure(figure.id)}
                    />
                ))}
            </div>
        </div>
    );
}
export default FigureList;

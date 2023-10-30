import React, {useEffect, useState} from "react";

function App (){
    const [imgs, setImgs] = useState("");
    const [loading , setLoading] = useState(false);

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((res) => res.json())
        .then((data) => {
            setImgs(data.message);
            setLoading(true);
        });
    }, []);

    
    if(!loading) {return <p>loading...</p>}


    return (
        <div>
            <img src={imgs} alt="A Random Dog" />
        </div>
    )
}

export default App;

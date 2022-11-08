import React, { useState, useEffect } from "react";

const VideoComponent = ({data}) => {

    const [isTablet, setIsTablet] = useState(false);

    useEffect(() => {
        window.screen.width < 1024 ? setIsTablet(true) : setIsTablet(false);
    }, []);

    const getTrailers = () => {
        let trailers = [];
        data.films.map(item => {
            trailers.push(item.results.length > 0 ? item.results[item.results.length - 1].key : null);
        })
        return trailers;
    }

    const adaptScreenSize = () => {
            if (!isTablet) {
                const newArr = getTrailers();
                if(newArr.length < 3) {
                    console.log("loading")
                } else {
                    return newArr.map(film => {
                        return (
                            <div key={film} className="video">
                                <iframe title="video" className="video-frame" src={`https://youtube.com/embed/${film}`} ></iframe>
                            </div>
                        )
                    })
                }
        } else {
            const newArr = getTrailers();
                if(newArr.length < 3) {
                    console.log("loading")
                } else {
                    return newArr.slice(0, 2).map(film => {
                        return (
                            <div key={film} className="video">
                                <iframe title="video" className="video-frame" src={`https://youtube.com/embed/${film}`} ></iframe>
                            </div>
                        )
                    })
                }

        }
    }
    
    return (
        <>
        {/* {trailersComponent()} */}
        {adaptScreenSize()}
        </>
    )
}

export default VideoComponent;
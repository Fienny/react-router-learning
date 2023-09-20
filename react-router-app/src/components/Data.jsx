import React from 'react';
import {useLoaderData, useNavigation} from "react-router-dom";
import '../spinner.css';

export function Data(props) {
    const dogUrl = useLoaderData();
    const navigation = useNavigation();

    if (navigation.state === 'loading') {
        return (
            <>
                <h1>
                    Data is loading...
                </h1>
                <div className="lds-dual-ring"></div>
            </>
        )
    }

    return (
        <div>
            <img src={dogUrl} alt="Dog photo" />
        </div>
    );
}

// get data from API
export const dataLoader = async () => {
    const res = await fetch("https://random.dog/woof.json");
    const dog = await res.json();

    return dog.url; // return the image only
}

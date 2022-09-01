import { useState } from 'react';

function MoreInfo() {
    const [first, setFirst] = useState(true)
    const handleState = () => {
        setFirst(!first)
    }
    return (
        <div>
            <button className="more-info" onClick={handleState}>{first ? "More info" : "Close tab"}</button>
            <br></br>
            {!first
                &&
                 <p>
                    
                    I couldn't stop it coming from afar
                    And lost the keys to the getaway car
                    And every now and then I'm in this place
                    It's hell living when I need your face
                    Don't hide, don't hide, don't hide from me
                    I believe it was a sin
                    Oh, to do you in the way I did
                    I took out more than I put in
                    I got fat while you stayed thin
                    But I came here tonight if you want to start a fight
                    We can get loaded on the things that I can't change
                    Yeah, I'm out here all night, so if you want to start a fight
                    We can get loaded on the things that I can't change
                </p>}
        </div>
    );
}
export default MoreInfo;
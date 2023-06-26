import React from 'react';
import './Card.css';
function Card() {
    return (
        <div
            id="project-card"
            className="flex items-center text-center flex-col overflow-hidden "
        >
            <div id="project-card-content">
                <h2 className="text-xl font-bold ">Heading</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Enim consequuntur magni qui voluptatem, porro velit sit
                    consequatur modi illo nostrum.
                </p>
                <button>View</button>
            </div>
        </div>
    );
}

export default Card;

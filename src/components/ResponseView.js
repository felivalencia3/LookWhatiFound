import React from 'react';
import {ListGroup} from "react-bootstrap";

const ResponseView = ({response}) => {
    const sample = {
        labels: [
            {
                name: "Costume",
                metadata: {
                    confidence: 99.05
                }
            },
            {
                name: "Shoe",
                boundingBoxes: [
                    {
                        height: 0.099891297519207,
                        left: 0.6409918069839478,
                        top: 0.892121434211731,
                        width: 0.13976840674877167
                    },
                    {
                        height: 0.09026873856782913,
                        left: 0.3963904082775116,
                        top: 0.8886075615882874,
                        width: 0.06735958904027939
                    }
                ],
                metadata: {
                    confidence: 99.03694915771484,
                    parents: [
                        {
                            name: "Footwear"
                        },
                        {
                            name: "Clothing"
                        }
                    ]
                }
            }
        ]
    }
    return (
        <div>
            <ListGroup as={"ul"}>
                {sample.labels.map((objects) => (
                    <ListGroup.Item as={"li"}>
                        {objects.name}
                    </ListGroup.Item>
                ))}

            </ListGroup>

        </div>
    );
};

export default ResponseView;
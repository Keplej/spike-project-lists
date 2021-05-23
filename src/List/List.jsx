import React, {useState} from "react";
import './List.css';
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';
import { TextField } from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';
// import {Card} from '@material-ui/core';
// import ListData from '../ListData/ListData';

const listData = [
    {
        id: 'test-1',
        name: 'Study React',
    },
    {
        id: 'test-2',
        name: 'Work on list items',
    },
    {
        id: 'test-3',
        name: 'Make functions for solo project',
    },
    {
        id: 'test-4',
        name: 'Re-do documentation for solo project',
    },
    {
        id: 'test-5',
        name: 'Have some fun with learning new documentation',
    },
]


function List() {
    const [testdata, updateTestdata] = useState(listData);

    const submitHandler = () => {
        updateTestdata([...testdata, {
            name: ''
        }])
    }

    function handleOnDragEnd(result) {
        if (!result.destination) return; 
        const items = Array.from(testdata);
        const [reorderedItems] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItems);
        
        updateTestdata(items);
    }

    return (
        <div onSubmit={submitHandler}>
            <h1>Spike Presentation</h1>
            {/* <TextField id="outlined-basic" label="New Subject" variant="outlined"></TextField> */}
            {/* <input type="text" placeholder="Add new Subject" */}
            {/* // value={testdata}
            // onChange={(event) => updateTestdata(event.target.value)}
            /> */}
            {/* <button type="submit">Add New</button> */}
            <DragDropContext onDragEnd={handleOnDragEnd}>
                <Droppable droppableId="testdata">
                    {(provided) => (
                    <ul className="testdata" {...provided.droppableProps} ref = {provided.innerRef}>
                        {testdata.map(({id, name}, index) => {
                            return (
                                <Draggable key={id} draggableId={id} index={index}>
                                    {(provided) => (
                                    <li {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                                        <p>{name}</p>
                                    </li>
                                    )}
                                </Draggable>
                            );
                        })}
                        {provided.placeholder}
                    </ul>
                    )}
                </Droppable>
            </DragDropContext>
        </div>
    )

}

export default List;
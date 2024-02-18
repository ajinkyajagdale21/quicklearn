import { Link, useParams } from "react-router-dom";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { useEffect, useState } from "react";

export const PlaylistDetail = ({playListData,items,setItems}) => {

    const {id} = useParams()
    const [currentplaylistName,setCurrentplaylistName]=useState("")

    const reorder = (list, startIndex, endIndex) => {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);

        return result;
    };

    useEffect(() => {
        const storedItems = localStorage.getItem('reorderedItems');
        if (storedItems) {
          setItems(JSON.parse(storedItems));
        }
        else{
        const playListVideos= playListData?.find((item) => item.id == id);
        setItems(playListVideos.playListItems);
        setCurrentplaylistName(playListVideos.playlistName)
        }
    }, []);

    const onDragEnd = (result) => {
        if (!result.destination) {
            return;
        }

        const reorderedItems = reorder(
            items,
            result.source.index,
            result.destination.index
        );

        setItems(reorderedItems);
        localStorage.setItem('reorderedItems', JSON.stringify(reorderedItems));
    };
    return (
        <div className="px-2 md:px-20">
            <h1 className="text-center text-3xl font-semibold mt-5 my-12">{currentplaylistName}</h1>
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="droppable">
                    {(provided) => (
                        <div {...provided.droppableProps} ref={provided.innerRef} >
                            {items?.map((el, index) => (
                                <Draggable
                                    key={el.id}
                                    draggableId={el.id}
                                    index={index}
                                >
                                    {(provided) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                        >
                                            <div key={el.id} className="flex items-center my-5"
                                            >
                                                <img src={el.thumbnail} className="w-100 h-24"/>
                                                <h2 className="font-semibold text-sm md:text-lg mx-2">{el.videoName}</h2>
                                                <Link to={`/video/${el.id}`}>
                                                    <button className="bg-gray-800 text-white px-3 py-1 md:m-2 rounded-xl">Play</button>
                                                </Link>
                                            </div>
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                              {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        </div>
    );
};

import React from "react";
import Players from "./Players";
import Player from " ./Player";

const PlayerList = () =>{
    return (
        <>
        {Players.map((p) =>(
            <Player {...p} />
        ))}
        </>
    );
}

export default PlayerList;

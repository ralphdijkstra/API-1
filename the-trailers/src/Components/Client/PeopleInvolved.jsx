import React from "react";
import Director from "./PeopleInvolved/Director";
import Writer from "./PeopleInvolved/Writer";
import Actor from "./PeopleInvolved/Actor";

export default function PeopleInvolved({id}) {
    return (
        <>
        <Director id={id}/>
        <Writer id={id}/>
        <Actor id={id}/>
        </>
    );
};
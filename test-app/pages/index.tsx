import React from "react";
import { Htag, Rating } from "../components";
import { withLayout } from "../layout/Layout";

function Home(): JSX.Element {
    return (
        <>
            <Htag tag="h1">Rating</Htag>
            <Rating rating={4} isEditable={true} />
        </>
    );
}

export default withLayout(Home);

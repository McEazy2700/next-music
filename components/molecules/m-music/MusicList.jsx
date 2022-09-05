import React from "react";
import { gql } from "@apollo/client";
import client from "../../../appolo-client";


export const getServerSideProps = async ()=>{
    const { data } = await client.query({
        query: gql`
            query {
                allSongs {
                edges {
                    node {
                    id
                    title
                    music
                    }
                }
                }
            }
        `,
    })
    return {
        props: {
            data
        }
    }
}


const MusicList = (props)=>{
    console.log(props)

    return (
        <section>Music</section>
    )
}

export default MusicList;
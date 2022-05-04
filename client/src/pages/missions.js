import React from 'react';
import { gql, useQuery } from '@apollo/client';
import Layout from '../components/layout';

/** MISSIONS query to retrieve all missions */
export const MISSIONS = gql`
    query getMissions {
        missions {
            id
            name
        }
    }
`;

/**
 * Tracks Page is the SpaseX home page.
 * We display a grid of missions fetched with useQuery with the MISSIONS query
 */
const Missions = () => {
    const { loading, error, data } = useQuery(MISSIONS);
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    console.log(data);
    return (
        <Layout grid>
            {data?.missions?.map(mission => (
                <div key={mission.id} > {mission.id} {mission.name} </div>
            ))}
        </Layout>
    );
};

export default Missions;

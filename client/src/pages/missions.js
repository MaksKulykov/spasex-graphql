import React from 'react';
import { gql, useQuery } from '@apollo/client';
import Layout from '../components/layout';
import QueryResult from '../components/query-result';
import MissionCard from '../components/mission-card';

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
    return (
        <Layout grid>
            <QueryResult error={error} loading={loading} data={data}>
                {data?.missions?.map(mission => (
                    <MissionCard key={mission.id} mission={mission} />
                ))}
            </QueryResult>
        </Layout>
    );
};

export default Missions;

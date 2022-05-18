import React from 'react';
import { gql, useQuery } from '@apollo/client';
import combineQuery from 'graphql-combine-query';
import Layout from '../components/layout';
import QueryResult from '../components/query-result';
import InfoPage from '../components/info';

/** COMPANY query to retrieve company info */
const COMPANY = gql`
    query getCompany {
        company {
            ceo,
            coo,
            cto
        }
    }
`;

/** SHIP query to retrieve info about the ship */
const SHIP = gql`
    query getShip($shipId: ID!) {
        ship(id: $shipId) {
            id,
            name,
            image
        }
    }
`;

/**
 * Company Info is the SpaseX home page.
 * We display a company info fetched with useQuery with the COMPANY and SHIPS queries
 */
const CompanyInfo = () => {
    const shipId = 'OCISLY';
    const { document } = combineQuery('CompanyShipQuery')
        .add(COMPANY)
        .add(SHIP);

    console.log(document);
    const { loading, error, data } = useQuery(document, {
        variables: { shipId }
    });
    if (data) {
        return (
            <Layout grid>
                <QueryResult error={error} loading={loading} data={data}>
                    <InfoPage key={'companyInfo'} company={data.company} ship={data.ship} />
                </QueryResult>
            </Layout>
        );
    }
};

export default CompanyInfo;

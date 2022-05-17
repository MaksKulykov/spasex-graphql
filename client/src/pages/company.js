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

/** SHIPS query to retrieve info about the ships */
const SHIPS = gql`
    query getShips {
        ships {
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
    const { document } = combineQuery('CompanyLaunchLatestQuery')
        .add(COMPANY)
        .add(SHIPS);

    console.log(document);
    const { loading, error, data } = useQuery(document);
    if (data) {
        return (
            <Layout grid>
                <QueryResult error={error} loading={loading} data={data}>
                    <InfoPage key={'companyInfo'} company={data.company} ships={data.ships} />
                </QueryResult>
            </Layout>
        );
    }
};

export default CompanyInfo;

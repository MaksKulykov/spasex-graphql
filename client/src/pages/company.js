import React from 'react';
import { gql, useQuery } from '@apollo/client';
import combineQuery from 'graphql-combine-query';
import styled from 'styled-components';

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

/** LAUNCH_LATEST query to retrieve info about the latest launch */
const LAUNCH_LATEST = gql`
    query getLaunchLatest {
        launchLatest {
            launch_year
        }
    }
`;

/**
 * Company Info is the SpaseX home page.
 * We display a company info fetched with useQuery with the COMPANY query
 */
const CompanyInfo = () => {
    const { document } = combineQuery('CompanyLaunchLatestQuery')
        .add(COMPANY)
        .add(LAUNCH_LATEST);

    console.log(document);
    const { loading, error, data } = useQuery(document);
    if (error) {
        return <p>ERROR: {error.message}</p>;
    }
    console.log(data);
    if (data) {
        return (
            <Info key={'111'}>{data.company.ceo}{data.launchLatest.launch_year}</Info>
        );
    }
};

export default CompanyInfo;

const Info = styled.div`
    width: 100%;
    height: 100%;
`;

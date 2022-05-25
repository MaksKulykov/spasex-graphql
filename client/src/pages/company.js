import React from 'react';
import { useQuery } from '@apollo/client';
import combineQuery from 'graphql-combine-query';
import Layout from '../components/layout';
import InfoPage from '../components/info';
import { COMPANY, SHIP } from '../queries/queries';
import Loader from '../components/loader';
import styled from "styled-components";

/**
 * Company Info is the SpaseX home page.
 * We display a company info fetched with useQuery with the COMPANY and SHIPS queries
 */
const CompanyInfo = () => {
    const shipId = 'OCISLY';
    const { document } = combineQuery('CompanyShipQuery')
        .add(COMPANY)
        .add(SHIP);

    const { loading, error, data } = useQuery(document, {
        variables: { shipId }
    });

    if (error) {
        return <p>ERROR: {error.message}</p>;
    }

    if (loading) {
        return (
            <SpinnerContainer>
                <Loader />
            </SpinnerContainer>
        );
    }

    if (!data) {
        return <p>Nothing to show...</p>;
    }

    if (data) {
        return (
            <Layout grid>
                <InfoPage key={'companyInfo'} company={data.company} ship={data.ship} />
            </Layout>
        );
    }
};

export default CompanyInfo;

/** CompanyInfo styled components */
const SpinnerContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
`;

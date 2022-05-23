import { gql } from '@apollo/client';

/** COMPANY query to retrieve company info */
export const COMPANY = gql`
    query getCompany {
        company {
            employees
            founder
            name
            summary
        }
    }
`;

/** SHIP query to retrieve info about the ship */
export const SHIP = gql`
    query getShip($shipId: ID!) {
        ship(id: $shipId) {
            id
            image
        }
    }
`;

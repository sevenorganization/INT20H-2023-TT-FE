import { css } from '@emotion/react';
import type { Theme } from '@emotion/react';

export const wrapper = ({fontSizes}: Theme) => css`
    display: flex;
    justify-content: center;
    width: 100%;
    max-width: 300px;
    gap: 10px;
    margin: 0 20px;

    & > * {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 40px;
        font-weight: 600;
        font-family: 'Mohave';
        font-size: ${fontSizes.icons};
    }
`;

export const name = ({ colors, radiuses }: Theme) => css`
    height: 50px;
    flex-grow: 1;
    max-width: 200px;
    border: 1px solid ${colors.black};
    padding: 25px;
    border-radius: ${radiuses.lg};
    color: ${colors.light};
    -webkit-text-stroke: .25px ${colors.text};
`;

export const number = ({ colors, radiuses }: Theme) => css`
    height: 50px;
    width: 50px;
    border-radius: ${radiuses.circle};
    color: ${colors.light};
    background-color: ${colors.black};
`;

export const flag = ({radiuses, colors}: Theme) => css`
    cursor: pointer;
    border-radius: ${radiuses.circle};
    width: 50px;
    height: 50px;
    background-color: ${colors.green};
    color: ${colors.light};
    &[added-item='true'] {
        background-color: ${colors.accent};
    }
`;
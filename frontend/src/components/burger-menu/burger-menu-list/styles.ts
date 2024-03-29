import { css } from '@emotion/react';
import type { Theme } from '@emotion/react';

export const wrapper = ({ colors }: Theme) => css`
    width: 120%;
    
    & ul {
        list-style: none;
        margin: 0;
        padding: 0;
        transform: translateX(-20%);
    }

    & li {
        cursor: pointer;
        transition: all .2s;
        background-color: ${colors.text};
        color: ${colors.light};
        border-radius: 100px;
        font-size: 20px;
        padding: 20px 50px 20px 100px;
        margin: 10px;
    }

    & li:hover {
        transform: scale(1.1);
    }
`;
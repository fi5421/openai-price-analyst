// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { IconMenu, IconBoxMultiple, IconCircleOff, IconCircle, IconBrandGravatar, IconShape } from '@tabler/icons-react';

// constant
const icons = {
    IconMenu,
    IconBoxMultiple,
    IconCircleOff,
    IconCircle,
    IconBrandGravatar,
    IconShape
};

// ==============================|| SUPPORT MENU ITEMS ||============================== //

const support = {
    id: 'support',
    title: <FormattedMessage id="others" />,
    icon: icons.IconMenu,
    type: 'group',
    children: [
        {
            id: 'menu-level',
            title: <FormattedMessage id="menu-level" />,
            type: 'collapse',
            icon: icons.IconMenu,
            children: [
                {
                    id: 'menu-level-1.1',
                    title: (
                        <>
                            <FormattedMessage id="level" /> 1
                        </>
                    ),
                    type: 'item',
                    url: '#'
                },
                {
                    id: 'menu-level-1.2',
                    title: (
                        <>
                            <FormattedMessage id="level" /> 1
                        </>
                    ),
                    type: 'collapse',
                    children: [
                        {
                            id: 'menu-level-2.1',
                            title: (
                                <>
                                    <FormattedMessage id="level" /> 2
                                </>
                            ),
                            type: 'item',
                            url: '#'
                        },
                        {
                            id: 'menu-level-2.2',
                            title: (
                                <>
                                    <FormattedMessage id="level" /> 2
                                </>
                            ),
                            type: 'collapse',
                            children: [
                                {
                                    id: 'menu-level-3.1',
                                    title: (
                                        <>
                                            <FormattedMessage id="level" /> 3
                                        </>
                                    ),
                                    type: 'item',
                                    url: '#'
                                },
                                {
                                    id: 'menu-level-3.2',
                                    title: (
                                        <>
                                            <FormattedMessage id="level" /> 3
                                        </>
                                    ),
                                    type: 'item',
                                    url: '#'
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: 'disabled-menu',
            title: <FormattedMessage id="disabled-menu" />,
            type: 'item',
            url: '#',
            icon: icons.IconCircleOff,
            disabled: true
        },
        {
            id: 'oval-chip-menu',
            title: <FormattedMessage id="oval-chip-menu" />,
            type: 'item',
            url: '#',
            icon: icons.IconCircle,
            chip: {
                label: '9',
                color: 'primary'
            }
        },
        
    ]
};

export default support;

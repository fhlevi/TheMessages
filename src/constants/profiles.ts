import { ISettingsCard } from "@src/utils/interfaces/Profile";

export const arrSetting: Array<ISettingsCard> = [
    {
        cardName: 'Settings',
        items: [
            {
                title: 'Notification',
                imgSource: {
                    icon: require('@src/assets/images/settings/notification.png'),
                    alt: 'notification',
                },
            },
            {
                title: 'Privacy and security',
                imgSource: {
                    icon: require('@src/assets/images/settings/lock1.png'),
                    alt: 'privacy-scurity',
                },
            },
            {
                title: 'Chats',
                imgSource: {
                    icon: require('@src/assets/images/settings/messagetext.png'),
                    alt: 'chats',
                },
            },
            {
                title: 'Storage and date',
                imgSource: {
                    icon: require('@src/assets/images/settings/chartcircle.png'),
                    alt: 'storage-date',
                },
            },
        ],
    }, {
        cardName: 'Help',
        items: [
            {
                title: 'What’s up FAQ',
                imgSource: {
                    icon: require('@src/assets/images/settings/messagequestion.png'),
                    alt: 'faq',
                },
            },
            {
                title: 'Privacy policy',
                imgSource: {
                    icon: require('@src/assets/images/settings/shieldtick.png'),
                    alt: 'privacy-scurity',
                },
            },
            {
                title: 'Ask a question',
                imgSource: {
                    icon: require('@src/assets/images/settings/messagetime.png'),
                    alt: 'question',
                },
            },
        ],
    },
];

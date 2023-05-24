import discord from 'discord.js';

import deleteProperty from '../utils/deleteProperty.js';

export default class {

    name = undefined;

    type = discord.ApplicationCommandType.ChatInput;

    intents  = [];
    partials = [];

    display = {
        
        name:        { default: undefined },
        description: { default: undefined },

        options: [],

        permissions: {

            dm: false, nsfw: false,

            member: null
        },

        data: {

            name: undefined, description: undefined,

            name_localizations: {}, description_localizations: {},

            options: [],

            default_member_permissions: null,

            dm_permission: false, nsfw: false
        }
    };

    events = undefined;

    constructor (data) {

        this.name = data.name;

        this.intents  = data.intents  ?? this.intents;
        this.partials = data.partials ?? this.partials;

        this.display = {

            name:        data.display.name,
            description: data.display.description,

            options: data.display.options ?? this.display.options,

            permissions: {

                member: data.display.permissions?.member ?? this.display.permissions.member,
                dm:     data.display.permissions?.dm     ?? this.display.permissions.dm,
                nsfw:   data.display.permissions?.nsfw   ?? this.display.permissions.nsfw
            },

            data: {

                name:        data.display.name.default,
                description: data.display.description.default,

                name_localizations:        deleteProperty(data.display.name, 'default'),
                description_localizations: deleteProperty(data.display.description, 'default'),

                options: data.display.options ?? this.display.data.options,

                default_member_permissions: data.display.permissions?.member ?? this.display.data.default_member_permissions,
                dm_permission:              data.display.permissions?.dm     ?? this.display.data.dm_permission,
                nsfw:                       data.display.permissions?.nsfw   ?? this.display.data.nsfw
            }
        };

        this.events = data.events;
    };
};

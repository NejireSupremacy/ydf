export interface ConfigOptions {

    session ({

        laodedEvents,
        laodedServices,
        laodedChatInputCommands,
        loadedMessageContextMenuCommands,
        loadedUserContextMenuCommands,

        usedEvents,
        usedIntents
    }): Promise<void> | void;

    include?: string[];

    exclude?: string[];
}

export class ConfigBuilder {

    session;

    include: string[] = [

        'src/**/*.event.*',
        'src/**/*.service.*',
        'src/**/*.command.chat.*',
        'src/**/*.command.user.*',
        'src/**/*.command.message.*',
    ];

    exclude: string[] = [];

    constructor (data: ConfigOptions) {

        this.session = data.session;

        this.include = data.include ?? this.include;
        this.exclude = data.exclude ?? this.exclude;
    }
}

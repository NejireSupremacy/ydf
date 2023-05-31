export default class {

    name = undefined;

    level = 0;

    // https://discord.com/developers/docs/topics/gateway#gateway-intents
    intents = 0;

    execute = undefined;

    constructor (data) {

        this.name = data.name;

        this.level   = data.level   ?? this.level;
        this.intents = data.intents ?? this.intents;

        this.execute = data.execute;
    };
};

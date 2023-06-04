export default function (

    loadedEvents,
    loadedServices,
    loadedChatInputCommands,
    loadedUserContextMenuCommands,
    loadedMessageContextMenuCommands
) {

    const events = {};

    for (const loadedEvent of loadedEvents) {

        const byServices = loadedServices.filter((data) => data.events[loadedEvent.name]);

        const byCommands = loadedChatInputCommands
            .concat(loadedUserContextMenuCommands)
            .concat(loadedMessageContextMenuCommands)
            .filter((data) => data.events[loadedEvent.name]);

        const byAll = byServices.concat(byCommands);

        if (!byAll.length) continue;

        events[loadedEvent.name] = {

            services: byServices,
            commands: byCommands,
            all:      byAll
        };
    }

    return events;
}

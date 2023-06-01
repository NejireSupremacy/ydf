export default function (loadedEvents, usedEvents) {

    let used = 0;

    for (const loadedEvent of loadedEvents) {

        if (!usedEvents[loadedEvent.name]) continue;

        used |= loadedEvent.intents;

        for (const loadedFile of usedEvents[loadedEvent.name].all) {

            used |= loadedFile.intents;
        }
    }

    return used;
}
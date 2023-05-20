import fs from 'node:fs/promises';
import path from 'node:path';

import EventBuilder from '../builders/EventBuilder.js';

export default async function (directory) {

    const directoryFolders = (await fs.readdir(directory)).filter((name) => !name.startsWith('.'));

    const loadedEvents = [];

    for (const folder of directoryFolders) {

        loadedEvents.push(

            new EventBuilder({

                ... (await import(`file:///${ path.resolve(directory, folder, 'main.js') }`)).default,

                name: folder
            })
        );
    };

    return loadedEvents;
};

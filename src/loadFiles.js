import fs from 'node:fs/promises';
import path from 'node:path';

const loader = async (directory, Builder) => {

    const items = (await fs.readdir(directory, 'utf-8')).filter((name) => !name.startsWith('.'));

    let loadedFiles = [];

    for (const item of items) {

        const itemStat = await fs.stat(path.join(directory, item));

        if (itemStat.isDirectory()) loadedFiles = loadedFiles.concat(await loader(path.join(directory, item), Builder));

        if (itemStat.isFile()) {

            if (!item.startsWith('main')) continue;

            const loadedFile = await import(`file:///${ path.join(directory, item) }`);

            loadedFiles.push(new Builder({ ...loadedFile.default, name: directory.split(path.sep).at(-1) }));

            break;
        };
    };

    return loadedFiles;
};

export default loader;

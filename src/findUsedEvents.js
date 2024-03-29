export default function (
	loadedEvents,
	loadedServices,
	loadedChatInputCommands,
	loadedMessageContextMenuCommands,
	loadedUserContextMenuCommands,
) {
	const usedEvents = {};

	for (const loadedEvent of loadedEvents) {
		const byServices = loadedServices.filter(
			(data) => data.events[loadedEvent.metadata.name],
		);

		const byCommands = loadedChatInputCommands
			.concat(loadedUserContextMenuCommands)
			.concat(loadedMessageContextMenuCommands)
			.filter((data) => data.events[loadedEvent.metadata.name]);

		const byAll = byServices.concat(byCommands);

		if (!byAll.length) continue;

		usedEvents[loadedEvent.metadata.name] = {
			services: byServices,
			commands: byCommands,
			all: byAll,
		};
	}

	return usedEvents;
}

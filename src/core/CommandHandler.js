export class CommandHandler {
    constructor() {
        this.commands = new Map();
    }

    register(command) {
        this.commands.set(command.name, command);
    }

    async execute(commandName, args) {
        const command = this.commands.get(commandName);
        if (!command) throw new Error(`Command not found: ${commandName}`);
        await command.execute(args);
    }
}

class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    const messageInLowercase = message.toLowerCase();

    if (messageInLowercase) {
      this.actionProvider.handleRecipe();
    }
  }
}

export default MessageParser;

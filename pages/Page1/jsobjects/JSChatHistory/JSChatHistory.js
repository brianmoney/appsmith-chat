export default {
	chatMessages: [
		// Example initial message
		{ id:1, type: "ai", text: "Hello, how can I help you?" },
	],
	userInput: "",
	counter: 1,
	async sendMessage() {
		this.counter++;
		this.chatMessages.push({ id: this.counter, type: "user", text: userInput.text });
		this.counter++;
		this.updateChatWindow();
		console.log('Added user message');
		await myChat.run().then(
			(response) => {
				this.chatMessages.push({ id: this.counter, type: "ai", text: response.choices[0].message.content });
			}
		);
		this.updateChatWindow();
		userInput.setValue("");
		console.log('Added ai message');
	},
	updateChatWindow() {
		let content = "";
		for(const item of this.chatMessages) {
			content += "<div class='msg_" + item.type + "'>" + item.text + "</div><hr/>";
		}
		chatText.setText(content);
	}

}

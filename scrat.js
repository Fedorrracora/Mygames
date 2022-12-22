class Audio {
  getInfo() {
    return {
      id: 'stepen', // change this if you make an actual extension!
      name: 'Stepen',
      blocks: [
        {
          opcode: 'step',
          blockType: Scratch.BlockType.REPORTER,
          text: '[COUNT] steren [STEPEN]',
	  arguments: {
		COUNT: {
			type: Scratch.ArgumentType.NUMBER,
			defaultValue: 0
		}
		STEPEN: {
			type: Scratch.ArgumentType.NUMBER,
			defaultValue: 0
		}
	  }
        }
      ]
    };
  }
  step(args) {
    return Number(args.COUNT)**Number(args.STEPEN);
  }
}
Scratch.extensions.register(new Audio());

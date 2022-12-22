class Audio {
  getInfo() {
    return {
      id: 'stepen', // change this if you make an actual extension!
      name: 'Stepen',
      blocks: [
        {
          opcode: 'step',
          blockType: Scratch.BlockType.REPORTER,
          text: '[COUNT] stepen [STEPEN]',
	  arguments: {
		COUNT: {
			type: Scratch.ArgumentType.NUMBER,
			defaultValue: 0
		},
		STEPEN: {
			type: Scratch.ArgumentType.NUMBER,
			defaultValue: 0
		}
	  }
        },
	{
          opcode: 'doun',
          blockType: Scratch.BlockType.REPORTER,
          text: 'button [DOWN] [STR]',
	  arguments: {
		DOWN: {
			type: Scratch.ArgumentType.NUMBER,
			defaultValue: 0
		},
		STR: {
			type: Scratch.ArgumentType.STRING,
			defaultValue: ''
		}
	  }
        }
      ]
    };
  }
  step(args) {
    return Number(args.COUNT)**Number(args.STEPEN);
  }
  doun(args) {
	var aboba = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'a', 'b', 'Enter'];
	if (args.STR === aboba[args.DOWN]) {
		return args.DOWN + 1;
	}
	else {
		return 0;
	}
	return -1;
  }
}
Scratch.extensions.register(new Audio());

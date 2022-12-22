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
        },
        {
        opcode: 'tob',
        blockType: Scratch.BlockType.REPORTER,
        text: 'button check [NOM]',
			arguments: {
				NOM: {
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
  doun(args) {
	var aboba = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'a', 'b', 'Enter'];
	if (args.STR === aboba[args.DOWN]) {
		return args.DOWN + 1;
	}
	else if (args.STR === aboba[0]) {
		if (args.DOWN !== 0) {
			if (aboba[args.DOWN-1] === aboba[0]) {
				return 2;
			}
			else {
				return 1;
			}
		}
		else {
			return 1;
		}
	}
	else {
		return 0;
	}
	return -1;
  }
  tob(args) {
  	var allbuttons = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Enter', ' ', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'g', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 'f', 't', 'u', 'v', 'w', 'x', 'y', 'z', '/', '.', ',', ';', "'", ']', '[', '<', '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '-', '='];
  	return allbuttons[Number(args.NOM)];
  }
}
Scratch.extensions.register(new Audio());

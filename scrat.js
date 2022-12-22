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
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'stepen [DOWN]',
	  arguments: {
		DOWN: {
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
	var a = false;
	document.addEventListener('keydown', test);
	function test(e) {
		a = true;
	}
	return a;
  }
}
Scratch.extensions.register(new Audio());

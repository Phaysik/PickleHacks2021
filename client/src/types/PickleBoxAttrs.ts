export interface PickleData {
	id: number;
	name: string;
	facts: Object;
	filePath: string;
	description: string;
	split?: 6 | 7;
}

export interface PickleBoxAttrs {
	id: number | 'Atomic';
	name: string;
	legend?: boolean;
	split?: 6 | 7;
  currentPickle?: React.Dispatch<React.SetStateAction<string | undefined>>
}

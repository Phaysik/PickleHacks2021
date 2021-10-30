export interface PickleData {
	id: number;
	name: string;
	facts: {[key: string]: any} & {radioactivity: number, lethalDosage: number};
	filePath: string;
	description: string;
	split?: 6 | 7;
}

export interface PickleBoxAttrs {
	id: number | 'Atomic';
	name: string;
	legend?: boolean;
  abbr?: string;
	split?: 6 | 7;
  radio?: number | 'Radioactivity';
  currentPickle?: React.Dispatch<React.SetStateAction<string | undefined>>
}

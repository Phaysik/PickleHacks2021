export interface PickleBoxAttrs {
	id: number | 'Atomic';
	abbr: string;
	name: string;
	weight: number | 'Weight';
	legend?: boolean;
	split?: 6 | 7;
}

export interface PickleData {
	id: number;
	name: string;
	facts: Object;
	filePath: string;
	description: string;
	split?: 6 | 7;
}

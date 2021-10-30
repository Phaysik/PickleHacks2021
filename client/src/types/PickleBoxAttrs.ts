export default interface PickleBoxAttrs {
  id: number | 'Atomic';
  abbr: string;
  name: string;
  weight: number | 'Weight';
  legend?: boolean;
  split?: 6 | 7;
}

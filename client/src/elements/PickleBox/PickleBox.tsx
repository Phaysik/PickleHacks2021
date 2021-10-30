import { PickleBoxAttrs } from '../../types/PickleBoxAttrs';
import './PickleBox.scss';
import classNames from 'classnames';

export default function PickleBox(props: PickleBoxAttrs) {
    const classes = classNames({
        PickleBox: true,
        Legend: props.legend ?? false,
        Split6: props.split === 6,
        Split7: props.split === 7
    });
    const changePickle = () => { if (props.currentPickle) props.currentPickle(props.name); };
    const capFirstLetter = (word: string) => {
        if (word.length === 0) return '';
        const lowerFirst: string[] = ['a', 'an', 'the', 'and', 'but', 'or', 'nor', 'for', 'so', 'yet', 'the', 'of', 'in'];
        let char: string = word[0].toUpperCase();
        if (lowerFirst.includes(word)) return char.toLowerCase();
        ['\'', '-'].forEach(lowerSplitChar => {
            if (word.includes(lowerSplitChar)) char += word.split(lowerSplitChar)[1][0].toLowerCase();
        });
        return char;
    };
    const ignoreNonSymbolChars = (name: string) => name.replace(/[^a-zA-Z\-\'\s]/, ' ');
    const getSymbol = (name?: string) => name ? ignoreNonSymbolChars(name).split(' ').map(capFirstLetter) : '??';
    const backgroundImage = `url(/images/pickle-${props.id}.jpg)`;

    return (
        <div className={classes} onMouseOver={changePickle} style={{ backgroundImage }}>
            <span className="number">{props.id}</span>
            <span className="abbr">{props.abbr ?? getSymbol(props.name)}</span>
            <span className="name">{props.name}</span>
            <span className="radio">{props.radio ?? 0}</span>
        </div>
    );
}

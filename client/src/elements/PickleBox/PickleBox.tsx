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
    const getSymbol = (name?: string) => name ? name.split(' ').slice(0, 1).map(e => e[0].toUpperCase()) : '??';

    return (
        <div className={classes} onMouseOver={changePickle}>
            <span className="number">{props.id}</span>
            <span className="abbr">{props.abbr ?? getSymbol(props.name)}</span>
            <span className="name">{props.name}</span>
            <span className="radio">{props.radio ?? 0}</span>
        </div>
    );
}

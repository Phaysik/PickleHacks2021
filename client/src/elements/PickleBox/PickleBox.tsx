import PickleBoxAttrs from '../../types/PickleBoxAttrs';
import './PickleBox.scss';
import classNames from 'classnames';

export default function PickleBox(props: PickleBoxAttrs) {
    const classes = classNames({
        'PickleBox': true,
        'Legend': props.legend ?? false,
        'Split6': props.split === 6,
        'Split7': props.split === 7
    });
    return (
        <div className={classes}>
            <span className="number">{props.id}</span>
            <span className="abbr">{props.abbr}</span>
            <span className="name">{props.name}</span>
            <span className="weight">{props.weight}</span>
        </div>
    );
}

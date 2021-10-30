import PickleBoxAttrs from '../../types/PickleBoxAttrs';
import PickleBox from '../PickleBox/PickleBox';
import logo from './pickle.png';
import './PickleTable.scss';

const els: PickleBoxAttrs[] = Array(108).fill({ abbr: 'H', name: 'Hydrogen', weight: 1.008 }).map((el, i) => ({ ...el, id: i + 1 }));
const splitSections = {
    6: [56, 71],
    7: [88, 103]
};

export default function PickleTable() {
    const renderPickle = (props: PickleBoxAttrs) => <PickleBox key={props.id} {...props} />;
    const renderPickleRange = (start: number, stop: number) => els.slice(start, stop).map(renderPickle);
    const renderPickleSplit = (split: 6 | 7) => els.slice(...splitSections[split]).map(el => renderPickle({ ...el, split }));

    return (
        <div id="PickleTable">
            <div className="Group"></div>
            {Array(18).fill(1).map((i, n) => <div className="Group">{i + n}</div>)}

            <div className="Key"></div>
            <div className="NullSpace"></div>
            <div className="LogoSpace">
                <img src={logo} alt="PickleHacks 2021" />
            </div>
            <div className="Note">For elements with no stable isotopes, the mass number of the isotope with the longest half-life is in parentheses.</div>
            <PickleBox legend id="Atomic" abbr="Symbol" name="Name" weight="Weight" />

            <div className="Period">1</div>
            {renderPickleRange(0, 2)}

            <div className="Period">2</div>
            {renderPickleRange(2, 10)}

            <div className="Period">3</div>
            {renderPickleRange(10, 18)}

            <div className="Period">4</div>
            {renderPickleRange(18, 36)}

            <div className="Period">5</div>
            {renderPickleRange(36, 54)}

            <div className="Period">6</div>
            {renderPickleRange(54, 56)}

            <div className="SplitPipe"></div>
            <div className="Pipe5771">57-71</div>
            <div className="Period Pipe6">6</div>
            {renderPickleSplit(6)}
            {renderPickleRange(71, 86)}

            <div className="Period">7</div>
            {renderPickleRange(86, 89)}

            <div className="Pipe89103">89-103</div>
            <div className="Period Pipe7">7</div>
            {renderPickleSplit(7)}
            {renderPickleRange(103, 108)}
        </div>
    );
}

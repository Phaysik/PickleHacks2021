import React from 'react';
import PickleTable from '../PickleTable/PickleTable';
import Detail_pop from '../../Pickle_Detail_PopUp/Detail_pop';
import axios from 'axios';
import { PickleData } from '../../types/PickleBoxAttrs';
import './PicklePeriodic.scss';

const PicklePeriodic = () => {
	const [pickles, setPickles] = React.useState<PickleData[]>([]);
  const [current_pickle, setCurrentPickle] = React.useState<string>();

	React.useEffect(() => {
		axios
			.get('http://localhost:5000/pickle/get')
			.then((res) => {
				setPickles(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<div className="PicklePeriodic">
			<PickleTable pickles={pickles} currentPickle={setCurrentPickle}/>
			<Detail_pop name={current_pickle!} pickles={pickles}/>
		</div>
	);
};


export default PicklePeriodic;

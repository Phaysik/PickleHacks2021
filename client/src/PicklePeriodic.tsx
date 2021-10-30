import React from 'react';
import PickleTable from './elements/PickleTable/PickleTable';
import Detail_pop from './Pickle_Detail_PopUp/Detail_pop';
import axios from 'axios';
import { PickleData } from './types/PickleBoxAttrs';

const PicklePeriodic = () => {
	const [pickles, setPickles] = React.useState<PickleData[]>([]);

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
		<div>
			<PickleTable pickles={pickles} />
			{/* <Detail_pop pickle_id={current_pickle} /> */}
		</div>
	);
};

export default PicklePeriodic;

// export default class PicklePeriodic extends React.Component<
// 	PickleProps,
// 	PickleStates
// > {
// 	constructor(props: PickleProps) {
// 		super(props);

// 		this.state = {
// 			pickles: [
// 				{
// 					id: -1,
// 					name: '',
// 					facts: {
// 						radioactivity: 0.5,
// 						lethalDosage: 100,
// 					},
// 					filePath: '',
// 					description: 'Lorem Ipsum',
// 				},
// 			],
// 			current_pickle: '',
// 		};

// 		this.updateCurrentPickle = this.updateCurrentPickle.bind(this);
// 	}

// 	componentDidMount() {
// 		// this.get_information()
// 	}

// 	updateCurrentPickle(pickle: string) {
// 		this.setState({ current_pickle: pickle });
// 	}

// 	private get_information() {
// 		fetch(
// 			'https://bb80c60f-cb82-481f-90e4-65d1c1ffef51.mock.pstmn.io/pickletester'
// 		)
// 			.then((resp) => resp.json())
// 			.then((data) =>
// 				this.setState({
// 					pickles: data,
// 				})
// 			);
// 	}

//     axios.delete(`http://localhost:5000/pickle/delete/${id}`).catch(console.log);

// 	render() {
// 		return (
// 			<div>
// 				<PickleTable />
// 				<Detail_pop
// 					name={this.state.current_pickle}
// 					pickles={this.state.pickles}
// 				/>
// 			</div>
// 		);
// 	}
// }

import './DetailPopUp.css';
import { PickleData } from '../types/PickleBoxAttrs';

const DetailPopUp = ({
	name,
	pickles,
}: {
	name: string;
	pickles: PickleData[];
}) => {
	const currPickle: PickleData | undefined = pickles.find(
		(val: PickleData) => val.name === name
	);

	return (
		<div className="Popup">
			<div className="imge_text_container">
				<div className="leftimage">
					<img
						className="pickleimage"
						src={`/images/pickle-${currPickle?.id}.jpg`}
						alt={'An image of ' + currPickle?.name}
						title={'An image of ' + currPickle?.name}
					/>
				</div>
				<div className="righttext">
					<h4> Pickle Name: {currPickle?.name} </h4>
					<h4> Pickle ID: {currPickle?.id} </h4>
				</div>
			</div>
			<div>
				<div className="facts">
					<table className="fact_table">
						<thead>
							<tr className="fact_header">
								<th align="left">Facts</th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							<tr className="fact_data">
								<td>Radioactivity</td>
								<td align="right" className="fact_value">
									{currPickle?.facts['radioactivity']}
								</td>
							</tr>
							<tr className="fact_data">
								<td>Lethal Dosage</td>
								<td align="right" className="fact_value">
									{currPickle?.facts['lethalDosage']}
								</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div className="pickleDesc">
					<h4>Description: </h4>
					<p>{currPickle?.description} </p>
				</div>
			</div>
		</div>
	);
};

export default DetailPopUp;

import './Detail_pop.css';
import { PickleData } from '../types/PickleBoxAttrs';
import React, { useEffect } from 'react';

type DetailProps = {
    name: string;
    pickles: PickleData[];
};

type DetailState = {
    pickle_name: string;
    pickle_id: number;
    facts: any;
    pickle_desc: string;
    pickle_image_url: string;
};

export default class Detail_pop extends React.Component<
    DetailProps,
    DetailState
> {
    constructor(props: DetailProps) {
        super(props);

        console.log(this.props.pickles);

        this.state = {
            pickle_name: "",
            pickle_id: 0,
            pickle_desc: '',
            pickle_image_url: '/pickle_test_image.jpg',
            facts: null,
        };
    }

    componentDidUpdate() {
        try {
            this.update();
        }
        catch (err) {
            console.log("ERROR----------");
            console.log(this.props.name);
            console.log(err);
            console.log("-----------ERROR");
        }
    }

    private update() {
        let data =
            this.props.pickles[
            this.props.pickles
                .map(function (e) {
                    return e.name;
                })
                .indexOf(this.props.name)
            ];
        console.log(data);

        let fact_key = Object.keys(data.facts);
        let fact_values = Object.values(data.facts);

        this.setState({
            pickle_name: data.name,
            pickle_id: data.id,
            pickle_image_url: data.filePath,
            pickle_desc: data.description,
            facts: (
                <div className="facts">
                    <table className="fact_table">
                        <thead>
                            <tr className="fact_header">
                                <th align="left">Facts</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {fact_key.map((_key, index) => (
                                <tr className="fact_data">
                                    <td>{fact_key[index]}</td>
                                    <td align="right" className="fact_value">
                                        {fact_values[index]}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ),
        });

        console.log(this.state.pickle_id);
    }

    render() {
        return (
            <div className="Popup">
                <div className="imge_text_container">
                    <div className="leftimage">
                        <img
                            src={this.state.pickle_image_url}
                            alt={'An image of ' + this.state.pickle_name}
                            title={'An image of ' + this.state.pickle_name}
                        />
                    </div>
                    <div className="righttext">
                        <h4> Pickle Name: {this.state.pickle_name} </h4>
                        <h4> Pickle ID: {this.state.pickle_id} </h4>
                    </div>
                </div>
                <div>
                    {this.state.facts}
                    <div className="pickleDesc">
                        <h4>Description: </h4>
                        <p>{this.state.pickle_desc} </p>
                    </div>
                </div>
            </div>
        );
    }
}

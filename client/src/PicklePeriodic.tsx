import React from 'react';
import PickleTable from './elements/PickleTable/PickleTable';
import Detail_pop from './Pickle_Detail_PopUp/Detail_pop';

export type PickleData =
    {
        id: number,
        name: string,
        facts: Object,
        filePath: string,
        description: string;
    };

type PickleProps =
    {
    };

type PickleStates =
    {
        pickles: PickleData[];
        current_pickle: string;
    };

export default class PicklePeriodic extends React.Component<PickleProps, PickleStates>
{
    constructor(props: PickleProps) {
        super(props);

        this.state =
        {
            pickles: [
                {
                    id: -1,
                    name: "",
                    facts: {
                        radioactivity: 0.5,
                        lethalDosage: 100,
                    },
                    filePath: "",
                    description: "Lorem Ipsum"
                }
            ],
            current_pickle: ""
        };

        this.updateCurrentPickle = this.updateCurrentPickle.bind(this);
    }

    componentDidMount() {
        // this.get_information()
    }

    updateCurrentPickle(pickle: string) {
        this.setState({ current_pickle: pickle });
    }

    private get_information() {
        fetch('https://bb80c60f-cb82-481f-90e4-65d1c1ffef51.mock.pstmn.io/pickletester')
            .then(resp => resp.json())
            .then(data => this.setState({
                pickles: data
            }));
    }

    render() {
        return (
            <div>
                <PickleTable />
                <Detail_pop name={this.state.current_pickle} pickles={this.state.pickles} />
            </div>
        );
    }
}

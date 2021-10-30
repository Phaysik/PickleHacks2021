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
        this.get_information()
    }

    updateCurrentPickle(pickle: string) {
        this.setState({ current_pickle: pickle });
    }

    private get_information() {
      fetch('http://localhost:5000/pickle/get', {method: 'GET'})
        .then(resp => resp.json())
        .then(((data: []) => () => 
          {
            console.log(data)
            this.state = { 
              pickles: data.map(
                (item: PickleData) =>
                ({
                  id: item.id,
                  name: item.name,
                  facts: item.facts,
                  filePath: item.filePath,
                  description: item.description,
                })
              ),
              current_pickle: this.state.current_pickle 
            }
            console.log(this.state.pickles)
          }
        ))
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

import './admin.css';
import { useState } from 'react';
import axios from 'axios';

const add = (
    id: number,
    name: string,
    radioactivity: number,
    lethalDosage: number,
    description: string
) => {
    axios
        .post('http://localhost:5000/pickle/add', {
            id: id,
            name: name,
            facts: {
                radioactivity: radioactivity,
                lethalDosage: lethalDosage,
            },
            description: description,
            filePath: '/images/pickle-',
        })
        .catch(console.log);
};

const update = (
    id: number,
    name: string,
    radioactivity: number,
    lethalDosage: number,
    description: string
) => {
    axios
        .post(`http://localhost:5000/pickle/update/${id}`, {
            name: name,
            facts: {
                radioactivity: radioactivity,
                lethalDosage: lethalDosage,
            },
            description: description,
            filePath: '/images/pickle-',
        })
        .catch(console.log);
};

const del = (id: number) => {
    axios.delete(`http://localhost:5000/pickle/delete/${id}`).catch(console.log);
};

export const Admin = () => {
    let [id, setId] = useState(0);
    let [name, setName] = useState('');
    let [radioactivity, setRadioActivity] = useState(0);
    let [lethalDosage, setLethalDosage] = useState(0);
    let [description, setDescription] = useState('');
    return (
        <div className="card">
            <h2>Admin Panel</h2>
            <div className="row">
                <div className="col">
                    <div className="form-group">
                        <label>ID</label>
                        <input
                            type="text"
                            placeholder="Pickle Id"
                            onChange={(e) => setId(Number(e.target.value))}
                        />
                    </div>
                </div>

                <div className="col">
                    <div className="form-group">
                        <label>Name</label>
                        <input
                            type="text"
                            placeholder="Pickle Name"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                </div>

                <div className="col">
                    <div className="form-group">
                        <label>Radioactivity</label>
                        <input
                            type="text"
                            placeholder="Radioactivity"
                            onChange={(e) => setRadioActivity(Number(e.target.value))}
                        />
                    </div>
                </div>

                <div className="col">
                    <div className="form-group">
                        <label>Lethal Dosage</label>
                        <input
                            type="text"
                            placeholder="Lethal dosage"
                            onChange={(e) => setLethalDosage(Number(e.target.value))}
                        />
                    </div>
                </div>

                <div className="col">
                    <div className="form-group">
                        <label>Description</label>
                        <input
                            type="text"
                            placeholder="Description"
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                </div>
                <div className="col">
                    <input
                        type="submit"
                        value="Add"
                        onClick={(e) =>
                            add(id, name, radioactivity, lethalDosage, description)
                        }
                    />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <input
                        type="submit"
                        value="Update"
                        onClick={(e) =>
                            update(id, name, radioactivity, lethalDosage, description)
                        }
                    />
                </div>
                <div className="col">
                    <input type="submit" value="Delete" onClick={(e) => del(id)} />
                </div>
            </div>
        </div>
    );
};

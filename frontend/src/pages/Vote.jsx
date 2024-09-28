import React, { useState } from 'react';
import "./vote.css"
import Navbar from '../components/Navbar';


const Vote = ({ walletAddress }) => {
    const candidates = [
        { name: 'Satyam', party: 'CONG', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/63/Indian_National_Congress_hand_logo.png', id: 1 },
        { name: 'Sameer', party: 'BJP', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp3CB2n6kTQqRE40UrQBYdxS18gnajNXqbWA&s', id: 2 },
        { name: 'Ranjan', party: 'AAP', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUh3KQTo1PclIREWC6vA270usJBFVUS23btw&s', id: 3 },
        { name: 'Tanya', party: 'RJD', logo: 'https://i.pinimg.com/originals/dc/6f/1b/dc6f1bcdf86ef27232b4a6f4a15f7d89.jpg', id: 4 },
    ];

    const handleVote = (candidateId) => {
       
        console.log(`Voted for candidate with ID: ${candidateId}`);
    };

    const [balance, setBalance] = useState(0);

    const fetchDiamBalance = async () => {
        try {
            const response = await server.loadAccount(
                localStorage.getItem('public_address')
            );
            setBalance(response.balances[0].balance);
        } catch (error) {
            console.error('Failed to fetch balance:', error);
        }
    };

    return (
        <div>
            <Navbar />
            <div className="vote-container">
                <h2>Voting Panel</h2>
                <p>Your Wallet Address: {walletAddress}</p>

                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Party</th>
                            <th>Logo</th>
                            <th>Vote</th>
                        </tr>
                    </thead>
                    <tbody>
                        {candidates.map((candidate) => (
                            <tr key={candidate.id}>
                                <td>{candidate.name}</td>
                                <td>{candidate.party}</td>
                                <td>
                                    <img src={candidate.logo} alt={`${candidate.name} logo`} width="50" />
                                </td>
                                <td>
                                    <button onClick={() => handleVote(candidate.id)}>Vote</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};


export default Vote;
'use client';

import React, { useState, useEffect } from 'react';

function AssignmentDetails({ assignmentId }) {
    const [assignment, setAssignment] = useState(null);

    useEffect(() => {
        async function fetchAssignmentById() {
            const url = 'https://jgsbshesm5advigzznyid7juny.appsync-api.eu-north-1.amazonaws.com/graphql';
            const authToken = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlhTVVAwa3ZaUHl3S296bkU1SkNGMW1KbnJnT29CdTRjVHBTMDViQWc4RXMifQ.eyJzdWIiOiIyNjQyMSIsImlkIjoyNjQyMSwiZiI6IjlhOTJmNjMxYzNmNjNkZDgzOGNiNzZjZTcwNDZiNmM5IiwibWF4QWxsb3dlZERldmljZXMiOjEsImdyb3VwcyI6WyJQVUJMSUMiXSwiYXVkIjoiaW50ZXJuYWwiLCJleHAiOjE3MTcxMDE0MDgsImlhdCI6MTcxNDUwOTQwOCwiaXNzIjoiaHR0cHM6Ly9hcGkudG50b3Iuc2Uvb2lkYyJ9.QmNBGduFAihbzKd2ETRQ1DukxHta8_G-CRK8RHtLhAqFDcD9pcK6mbdZCRYx-TKG2Ovyi1LS7MpcG-mYNsq8kNrMOHWVgJtDNyJEjgdYQMFZwsfGikKu5KRNHHf1j8g8tYqEcT7Yw_Azv9uMeiGU1CcL1jGRBhbaqVo3G1pXCxVupHbHsKQn237DC7n2fbaiVVM2S2J1bOFSATbfj35yDJmgZzLOQWqGebl4UkfFZcgWImWcj1IwVRogrCWRK5HZbeElgIu02mlcD8XrFpOV1oFgEnMiMmHjdbgPvm_RX4-FkJTJXUXflVRQYhBFVtOH9bf-t1FTY8FM7kV19uRhHw'; 

            const headers = {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authToken}`
            };
            const requestBody = {
                method: 'POST',
                headers: headers,
                body: JSON.stringify({
                    query: `
                        query GetAssignment($id: ID!) {
                            getAssignment(id: $id) {
                                id
                                difficultyScore
                                questionText
                                solutionText
                                hints
                                answerOptions {
                                    id
                                    text
                                    correct
                                }
                                createdAt
                                updatedAt
                            }
                        }
                    `,
                    variables: { id: assignmentId }
                })
            };

            try {
                const response = await fetch(url, requestBody);
                if (!response.ok) {
                    throw new Error('Failed to fetch assignment data from GraphQL API');
                }
                const responseData = await response.json();
                setAssignment(responseData.data.getAssignment);
            } catch (error) {
                console.error('An error occurred:', error);
            }
        }

        fetchAssignmentById();
    }, [assignmentId]);

    return (
        <div>
            {assignment ? (
                <div>
                    <h2 className='pt-4 text-xl'>Assignment Details ({assignment.id})</h2>
                    <p><b>ID: </b> {assignment.id}</p>
                    <p><b>Difficulty Score: </b>{assignment.difficultyScore}</p>
                    <p><b>Question Text: </b>{assignment.questionText}</p>
                    <p><b>Solution Text: </b>{assignment.solutionText}</p>
                    <p><b>Hints: </b>{assignment.hints}</p>
                    <p><b>Created At: </b>{assignment.createdAt}</p>
                    <p><b>Updated At: </b>{assignment.updatedAt}</p>
                    <hr className='mt-2' />
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default AssignmentDetails;

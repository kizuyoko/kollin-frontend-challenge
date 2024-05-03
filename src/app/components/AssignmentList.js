import React from 'react';
import AssignmentDetails from './AssignmentDetails'; // Adjust the path as needed

function AssignmentList({ assignmentIds }) {
    return (
        <div className='text-white'>
            {assignmentIds.map(assignmentId => (
                <AssignmentDetails key={assignmentId} assignmentId={assignmentId} />
            ))}
        </div>
    );
}

export default AssignmentList;

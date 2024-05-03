'use client';
import React, { useState, useEffect } from 'react';
import AssignmentList from "./components/AssignmentList";
import exercises from '../../exercises.json';

import Question from './components/Question';

export default function Home() {
    const array = exercises;

    return (
        <div className="flex flex-col font-serif items-center justify-center p-8 pb-0 bg-[#586FB5]">
            <h1 className='text-[#FDFDFC] text-5xl pt-5 pb-10'>Trigonometriska funktioner & identiteter</h1>
            <AssignmentList assignmentIds={array} />       
        </div>
    );
}

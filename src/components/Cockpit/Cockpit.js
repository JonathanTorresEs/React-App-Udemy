import React from 'react';

import styles from './Cockpit.css';

const cockpit = (props) =>
{
    let buttonStyle = "";
    if (props.showPersons)
    {
        buttonStyle = styles.Red;
    }

    const assignedClasses = [];
    if ( props.persons.length <= 2 ) {
        assignedClasses.push(styles.red); // classes = ['red']
    }
    if ( props.persons.length <= 1 ) {
        assignedClasses.push(styles.bold); // classes = ['red', 'bold']
    }

    return (
        <div className={styles.Cockpit}>
            <h1>Hi, I'm a React App</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button className={buttonStyle}
                    onClick={props.clicked}>Toggle Persons</button>
        </div>
    );
}

export default cockpit;
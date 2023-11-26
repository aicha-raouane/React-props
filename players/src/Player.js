import React from 'react';
import Card from 'react bootstrap/Card';

const Player = ({name, team, nationality, jerseyNumber, age, }) 
    return (
              <Card style={{ width: '18rem', marginBottom: '20px' }}>
                <Card.Img variant= "top" src= {image} />
                <Card.Body>
                <title>{name} </title>  
                <Card.text>
                  <strong>Team:</strong> {team}<br/>
                  <strong>Nationality:</strong> {nationality} <br/>
                  <strong>Jersey Number:</strong> {jerseyNumber} <br/>
                  <strong>Age:</strong> {age}
                  <strong></strong>
                </Card.text>
                </Card.Body>
              </Card>
            );
          
        
export default Player;

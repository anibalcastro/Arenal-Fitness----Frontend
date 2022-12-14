import React, { useEffect, useState, useCallback } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export default function Rutinas() {


    return (
        <React.Fragment>
            <div className='container'>
                <div className='jumbotron d-flex align-items-center justify-content-center'>
                    <h1>Mis rutinas</h1>
                </div>

            </div>
            <div className='container d-flex justify-content-center align-items-center flex-row flex-wrap'>
                <Card className='mx-2 my-2' style={{ width: '18rem' }}>
                    <Card.Img id='imgThumbnail' variant="top" className='img-thumbnail' src="https://t4.ftcdn.net/jpg/02/28/14/71/360_F_228147163_obAYUq4iyyKClS1hDyK358QTrRaNKdcy.jpg" />
                    <Card.Body>
                        <Card.Title>Piernas - Diciembre</Card.Title>
                        <Card.Text>
                            Hecha por Gloriana Mendez Espinoza.
                            Fecha: 12/12/2022 11:39:00pm
                        </Card.Text>
                        <Button className='btn btn-dark' variant="primary">Ver mi rutina</Button>
                    </Card.Body>
                </Card>
                <Card className='mx-2 my-2' style={{ width: '18rem' }}>
                    <Card.Img id='imgThumbnail' variant="top" className='img-thumbnail' src="https://static1.bigstockphoto.com/9/1/3/large1500/319313779.jpg" />
                    <Card.Body>
                        <Card.Title>Espalda - Diciembre</Card.Title>
                        <Card.Text>
                            Hecha por Gloriana Mendez Espinoza.
                            Fecha: 12/12/2022 11:39:00pm
                        </Card.Text>
                        <Button className='btn btn-dark' variant="primary">Ver mi rutina</Button>
                    </Card.Body>
                </Card>
                <Card className='mx-2 my-2' style={{ width: '18rem' }}>
                    <Card.Img id='imgThumbnail' variant="top" className='img-thumbnail' src="http://cdn.shopify.com/s/files/1/0330/6521/articles/10_Best_Chest_Workout_Exercises_for_Building_Muscle_640x.jpg?v=1622640151" />
                    <Card.Body>
                        <Card.Title>Cardio Diciembre</Card.Title>
                        <Card.Text>
                            Hecha por Gloriana Mendez Espinoza.
                            Fecha: 12/12/2022 11:39:00pm
                        </Card.Text>
                        <Button className='btn btn-dark' variant="primary">Ver mi rutina</Button>
                    </Card.Body>
                </Card>
                <Card className='mx-2 my-2' style={{ width: '18rem' }}>
                    <Card.Img id='imgThumbnail' variant="top" className='img-thumbnail' src="https://i.blogs.es/a82e3b/istock-1134717663-1-/840_560.jpeg" />
                    <Card.Body>
                        <Card.Title>Pecho Diciembre</Card.Title>
                        <Card.Text>
                            Hecha por Gloriana Mendez Espinoza.
                            Fecha: 12/12/2022 11:39:00pm
                        </Card.Text>
                        <Button className='btn btn-dark' variant="primary">Ver mi rutina</Button>
                    </Card.Body>
                </Card>
            </div>
        </React.Fragment>
    )
}
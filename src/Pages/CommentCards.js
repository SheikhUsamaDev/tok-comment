import { Download, GridView, ViewList } from '@mui/icons-material'
import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'

export default function CommentCards() {
    return (
        <div className='commentcards'>
            <div className='MainCard'>
                <Card className='mcrd'>
                    <div className='cardTop'>
                        <div className='CTBTN'>
                            <button id='CTBTN'> Download Comment as CSV <Download/> </button>
                        </div>
                        <div className='CTicon'>
                            <span> <ViewList /> </span>
                            <span> <GridView /> </span>
                        </div>
                    </div>
                    <hr/>
                    <div className='scndCard'>
                        <Container>
                            <Row>
                                <Col lg='4'>
                                    <Card className='innercard'>
                                        <div className='profilesection'>
                                            <div className='profileName'>
                                                <div className='pfl'>
                                                    <img src='/Images/profile.jpg' alt='' className='profile' />
                                                    <h5>Husler neat</h5>
                                                </div>
                                                <div className='profiledate'>
                                                    <p>25/10/2020</p>
                                                </div>
                                            </div>
                                            <div className='comment'>
                                                <p>lorem ispmy hsah sahdfgs sdgfsdaj</p>
                                                <span>Like 0 <a href='#'>View On TikTok</a> </span>
                                            </div>
                                        </div>
                                        <h5 id='rply'>Replies:</h5>
                                        <div className='replysection'>
                                            <div className='profileName'>
                                                <div className='pfl'>
                                                    <img src='/Images/profile.jpg' alt='' className='profile' />
                                                    <h5>melter neat</h5>
                                                </div>
                                                <div className='profiledate'>
                                                    <p>30/10/2020</p>
                                                </div>
                                            </div>
                                            <div className='comment'>
                                                <p>lorem ispmy hsah sahdfgs sdgfsdaj</p>
                                            </div>
                                        </div>

                                    </Card>
                                </Col>
                                <Col lg='4'>
                                    <Card className='innercard'>
                                        <div className='profilesection'>
                                            <div className='profileName'>
                                                <div className='pfl'>
                                                    <img src='/Images/profile.jpg' alt='' className='profile' />
                                                    <h5>Husler neat</h5>
                                                </div>
                                                <div className='profiledate'>
                                                    <p>25/10/2020</p>
                                                </div>
                                            </div>
                                            <div className='comment'>
                                                <p>lorem ispmy hsah sahdfgs sdgfsdaj</p>
                                                <span>Like 0 <a href='#'>View On TikTok</a> </span>
                                            </div>
                                        </div>
                                        <h5 id='rply'>Replies:</h5>
                                        <div className='replysection'>
                                            <div className='profileName'>
                                                <div className='pfl'>
                                                    <img src='/Images/profile.jpg' alt='' className='profile' />
                                                    <h5>melter neat</h5>
                                                </div>
                                                <div className='profiledate'>
                                                    <p>30/10/2020</p>
                                                </div>
                                            </div>
                                            <div className='comment'>
                                                <p>lorem ispmy hsah sahdfgs sdgfsdaj</p>
                                            </div>
                                        </div>

                                    </Card>
                                </Col>
                                <Col lg='4'>
                                    <Card className='innercard'>
                                        <div className='profilesection'>
                                            <div className='profileName'>
                                                <div className='pfl'>
                                                    <img src='/Images/profile.jpg' alt='' className='profile' />
                                                    <h5>Husler neat</h5>
                                                </div>
                                                <div className='profiledate'>
                                                    <p>25/10/2020</p>
                                                </div>
                                            </div>
                                            <div className='comment'>
                                                <p>lorem ispmy hsah sahdfgs sdgfsdaj</p>
                                                <span>Like 0 <a href='#'>View On TikTok</a> </span>
                                            </div>
                                        </div>
                                        <h5 id='rply'>Replies:</h5>
                                        <div className='replysection'>
                                            <div className='profileName'>
                                                <div className='pfl'>
                                                    <img src='/Images/profile.jpg' alt='' className='profile' />
                                                    <h5>melter neat</h5>
                                                </div>
                                                <div className='profiledate'>
                                                    <p>30/10/2020</p>
                                                </div>
                                            </div>
                                            <div className='comment'>
                                                <p>lorem ispmy hsah sahdfgs sdgfsdaj</p>
                                            </div>
                                        </div>

                                    </Card>
                                </Col>
                            </Row>
                        </Container>

                    </div>
                </Card>
            </div>
        </div>
    )
}

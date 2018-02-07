import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux'

import { setBitbucketToken } from '../actions/bitbucket';

const RepositoryCreatorPage = (props) => {
    return (
        <Grid>
            <Row className="content-container">
                <Col xs={12}>
                    <h1>Repository Creator</h1>
                    <p>{props.token}</p>
                    <hr />
                </Col>
            </Row>
        </Grid>
    )
}

const mapStateToProps = (state) => {
    return {
        token: state.token
    }
}

export default connect(mapStateToProps)(RepositoryCreatorPage)
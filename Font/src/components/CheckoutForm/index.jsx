import React from 'react'
import PropTypes from 'prop-types'
import {PaymentMethod, Receiver} from './part'

function index(props) {
    return (
        <>
            <Receiver />
            <PaymentMethod />
        </>
    )
}

index.propTypes = {

}

export default index


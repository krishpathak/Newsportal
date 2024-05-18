import PropTypes from 'prop-types'
import React, { Component } from 'react'
import NewItem from './NewItem'
const Navbar=(props)=>{
    return (
      <div><nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary color-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href= '/general'>News Application</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href='/sports'>Sports</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href='/india'>India</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link " role="button" href='/world'>
                world
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " aria-disabled="true" href="/usa">USA</a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav></div>
    )
  }


export default Navbar
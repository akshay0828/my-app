import React, { useState } from "react";
import { render } from "react-dom";
import axios from "axios";
import { Store } from './Store';
import { Container } from './components/Container.jsx';
import { QuoteBox } from './components/QuoteBox.jsx';
import { CreditBox } from './components/CreditBox.jsx';


const Contact = () => {
    
        return (
            <Store>
            <Container>
              <QuoteBox />
              <CreditBox />
            </Container>
          </Store>
          );
    }

export default Contact
import React from 'react';
import Container from '@material-ui/core/Container';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetail from '@material-ui/core/AccordionDetails';
import Button from '@material-ui/core/Button';

import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Review = ({ formData, navigation }) => {

  const { go } = navigation;

  const {
    firstName,
    lastName,
    nickName,
    address,
    city,
    state,
    zip,
    phone,
    email
  } = formData;

  return (
    <Container maxWidth="sm">
      <h3 style={{ marginBottom: '1rem' }}>Review</h3>
      <RenderAccordion summary="Name" go={go} details={[
        { 'First Name': firstName },
        { 'Last Name': lastName },
        { 'Nick Name': nickName }
      ]} />

      <RenderAccordion summary="Address" go={go} details={[
        { 'Address': address },
        { 'City': city },
        { 'State': state },
        { 'Zip': zip }
      ]} />

      <RenderAccordion summary="Contact" go={go} details={[
        { 'Phone': phone },
        { 'Email': email },
      ]} />

      <div style={{ marginTop: '1rem' }}>
        <Button
          color="primary"
          variant="contained"
          onClick={() => go('submit')}
        >Submit</Button>
      </div>
    </Container>
  )
}

export default Review

export const RenderAccordion = ({ summary, details, go }) => {
  return (
    <>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
        >{summary}</AccordionSummary>
        <AccordionDetail>
          <div>
            {
              details.map((data, index) => {
                const objKey = Object.keys(data)[0];
                const objValue = data[Object.keys(data)[0]];

                return <ListItemText key={index}>{`${objKey}: ${objValue}`}</ListItemText>
              })
            }
            <IconButton
              color="primary"
              component="span"
              onClick={() => go(`${summary.toLowerCase()}`)}
            >
              <EditIcon></EditIcon>
            </IconButton>
          </div>
        </AccordionDetail>
      </Accordion>
    </>
  )
}



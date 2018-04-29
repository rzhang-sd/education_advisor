import React, {Component} from 'react'
import { Container, Grid, Button, Form } from 'semantic-ui-react'
import HeadNav from './head_nav';

class SignOnForm extends Component {

  handleSubmit = () => {
    var link = "mailto:raymond.z.zhang@gmail.com"+
             "?cc=info@ahhanetwork.com"+
             "&subject=" + escape("This is subject")+
             "&body=" + escape("This is body");
    window.location.href = link;
  }

  render() {
      return (
        <div>
        <HeadNav/>
        <Container>
        <Grid padded>
        <Grid.Row centered columns={1}>
          <Grid.Column width={16}>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group>
                <Form.Input label='First name' placeholder='First name' />
                <Form.Input label='Last name' placeholder='Last name' />
                <Form.Input label='Email Address' placeholder='Email Address' />
                <Form.Input label='Phone' placeholder='Phone' />
              </Form.Group>
              <Form.Checkbox label='I agree to the Terms and Conditions: I verify all information provided is true and understand that Ahha! Network will not share my information with any third party services.' />
              <Button type='submit'>Submit</Button>
            </Form>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        </Container>
        </div>
      )
  }
}

export default SignOnForm
